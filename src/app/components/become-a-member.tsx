import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Loader2, Download, ChevronRight, ChevronLeft, User, MapPin, Phone, Paperclip } from "lucide-react";
import { memberApi } from "@/services/api";

interface BecomeMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MEMBER_TYPES = [
  { id: "chief-patron", label: "Chief Patron Member", amount: "1,00,000" },
  { id: "patron",       label: "Patron Member",        amount: "51,000"   },
  { id: "promoter",     label: "Promoter Member",      amount: "71,000"   },
  { id: "co-promoter",  label: "Co Promoter Member",   amount: "21,000"   },
  { id: "executive",    label: "Executive Member",      amount: "11,000"   },
  { id: "general",      label: "General Member",        amount: "1,100"    },
];

const QUALIFICATIONS = [
  "Below 10th", "10th Pass", "12th Pass", "Graduate", "Post Graduate",
  "Doctorate", "Professional Degree", "Other",
];

const WORK_CATEGORIES = [
  "Business", "Service", "Professional", "Agriculture", "Industry",
  "Trade", "Self Employed", "Other",
];

const VAISH_GHATAK = [
  "Agarwal", "Gupta", "Bansal", "Garg", "Goyal", "Jindal",
  "Khandelwal", "Maheshwari", "Mittal", "Singhal", "Other",
];

const STEPS = [
  { id: 1, label: "Membership"  },
  { id: 2, label: "Personal"    },
  { id: 3, label: "Address"     },
  { id: 4, label: "Attachments" },
];

type SubmitStatus = "idle" | "loading" | "success" | "error";

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

function downloadCertificate(b64: string, name: string) {
  const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  const blob  = new Blob([bytes], { type: "application/pdf" });
  const url   = URL.createObjectURL(blob);
  const a     = document.createElement("a");
  a.href = url;
  a.download = `VCSF_Certificate_${name.replace(/\s+/g, "_")}.pdf`;
  a.click();
  URL.revokeObjectURL(url);
}

const initialForm = {
  name: "", fathersName: "", qualification: "", workCategory: "",
  designation: "", firmName: "", spouseName: "", vaishGhatak: "",
  gotra: "", dob: "", dateOfMarriage: "", spouseDob: "",
  panCard: "", pinCode: "", place: "", district: "", state: "",
  houseNumber: "", buildingArea: "", mobileNo: "", phoneStd: "",
  email: "", 
  photo:  null as File | null,
  aadhar: null as File | null,
};

// Required fields per step
const REQUIRED_BY_STEP: Record<number, Array<{ field: keyof typeof initialForm; label: string }>> = {
  2: [
    { field: "name",        label: "Name"         },
    { field: "fathersName", label: "Father's Name" },
    { field: "dob",         label: "Date of Birth" },
  ],
  3: [
    { field: "houseNumber",  label: "House Number"   },
    { field: "buildingArea", label: "Building / Area" },
    { field: "pinCode",      label: "Pin Code"       },
    { field: "place",        label: "Place"          },
    { field: "district",     label: "District"       },
    { field: "state",        label: "State"          },
    { field: "mobileNo",     label: "Mobile No"      },
  ],
  4: [
    { field: "photo",  label: "Your Photo"   },
    { field: "aadhar", label: "Aadhar Card"  },
  ],
};

export function BecomeMemberModal({ isOpen, onClose }: BecomeMemberModalProps) {
  const [currentStep,   setCurrentStep]   = useState(1);
  const [memberType,    setMemberType]    = useState("promoter");
  const [gender,        setGender]        = useState("male");
  const [maritalStatus, setMaritalStatus] = useState("married");
  const [agreed,        setAgreed]        = useState(false);
  const [submitStatus,  setSubmitStatus]  = useState<SubmitStatus>("idle");
  const [certB64,       setCertB64]       = useState("");
  const [memberLabel,   setMemberLabel]   = useState("");
  const [form, setForm] = useState(initialForm);

  const [showErrors,  setShowErrors]  = useState(false);
  const [shakeNext,   setShakeNext]   = useState(false);

  const contribution  = MEMBER_TYPES.find((m) => m.id === memberType)?.amount || "";
  const selectedLabel = MEMBER_TYPES.find((m) => m.id === memberType)?.label  || "";

  const getMissingFields = (step: number): string[] => {
    const required = REQUIRED_BY_STEP[step];
    if (!required) return [];
    return required
      .filter(({ field }) => {
        const val = form[field];
        return val === null || val === undefined || (typeof val === "string" && val.trim() === "");
      })
      .map(({ label }) => label);
  };

  const isFieldInvalid = (field: keyof typeof initialForm): boolean => {
    if (!showErrors) return false;
    const required = REQUIRED_BY_STEP[currentStep];
    if (!required) return false;
    const isRequired = required.some((r) => r.field === field);
    if (!isRequired) return false;
    const val = form[field];
    return val === null || val === undefined || (typeof val === "string" && val.trim() === "");
  };

  const triggerShake = () => {
    setShakeNext(true);
    setTimeout(() => setShakeNext(false), 500);
  };

  const handleNext = () => {
    const missing = getMissingFields(currentStep);
    if (missing.length > 0) {
      setShowErrors(true);
      triggerShake();
      return;
    }
    setShowErrors(false);
    setCurrentStep((s) => Math.min(STEPS.length, s + 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: "photo" | "aadhar") =>
    setForm({ ...form, [field]: e.target.files?.[0] || null });

  const handleClose = () => {
    setCurrentStep(1);
    setMemberType("promoter");
    setGender("male");
    setMaritalStatus("married");
    setAgreed(false);
    setSubmitStatus("idle");
    setCertB64("");
    setMemberLabel("");
    setForm(initialForm);
    setShowErrors(false);
    onClose();
  };

  const handleSubmit = async () => {
    const missing = getMissingFields(4);
    if (missing.length > 0) {
      setShowErrors(true);
      triggerShake();
      return;
    }
    if (!agreed) return alert("Please agree to the terms.");
    setSubmitStatus("loading");

    try {
      const [photoBase64, aadharBase64] = await Promise.all([
        form.photo  ? fileToBase64(form.photo)  : Promise.resolve(""),
        form.aadhar ? fileToBase64(form.aadhar) : Promise.resolve(""),
      ]);

      const flaskData = await memberApi.register({
        memberType,
        memberLabel:        selectedLabel,
        contributionAmount: contribution,
        gender,
        maritalStatus,
        name:           form.name,
        fathersName:    form.fathersName,
        qualification:  form.qualification,
        workCategory:   form.workCategory,
        designation:    form.designation,
        firmName:       form.firmName,
        spouseName:     form.spouseName,
        vaishGhatak:    form.vaishGhatak,
        gotra:          form.gotra,
        dob:            form.dob,
        dateOfMarriage: form.dateOfMarriage,
        spouseDob:      form.spouseDob,
        panCard:        form.panCard,
        pinCode:        form.pinCode,
        place:          form.place,
        district:       form.district,
        state:          form.state,
        houseNumber:    form.houseNumber,
        buildingArea:   form.buildingArea,
        mobileNo:       form.mobileNo,
        phoneStd:       form.phoneStd,
        email:          form.email,
        photoBase64,
        photoFileName:  form.photo?.name  || "",
        photoMimeType:  form.photo?.type  || "",
        aadharBase64,
        aadharFileName: form.aadhar?.name || "",
        aadharMimeType: form.aadhar?.type || "",
      });

      setCertB64(flaskData.certificateB64 ?? "");
      setMemberLabel(flaskData.memberLabel ?? selectedLabel);

      if (flaskData.certificateB64) {
        downloadCertificate(flaskData.certificateB64, form.name);
      }

      setSubmitStatus("success");
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  // ── Styles ──────────────────────────────────────────────────────────────────
  const inputCls = (field?: keyof typeof initialForm) => {
    const invalid = field ? isFieldInvalid(field) : false;
    return `w-full px-3 sm:px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 text-sm transition-all bg-white placeholder:text-gray-400 ${
      invalid
        ? "border-red-400 focus:ring-red-300/50 focus:border-red-400 bg-red-50"
        : "border-gray-200 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37]"
    }`;
  };

  const labelCls = "block text-[#0F2C59] text-xs mb-1.5 font-semibold uppercase tracking-wide";
  const sectionCls = "text-[#0F2C59] text-sm font-bold mb-3 mt-5 flex items-center gap-2";

  const fileUploadCls = (field: "photo" | "aadhar") => {
    const invalid = isFieldInvalid(field);
    const hasFile = !!form[field];
    if (hasFile) return "border-green-400 bg-green-50";
    if (invalid) return "border-red-400 bg-red-50";
    return "border-gray-200 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5";
  };

  const missingFields = showErrors ? getMissingFields(currentStep) : [];

  // ── Render steps ─────────────────────────────────────────────────────────────
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <p className="text-gray-500 text-sm mb-4 sm:mb-5">Choose the membership tier that best suits you.</p>
            {/* 2-col grid on mobile too, tighter cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {MEMBER_TYPES.map((m) => (
                <button key={m.id} type="button" onClick={() => setMemberType(m.id)}
                  className={`relative text-left p-3 sm:p-4 rounded-xl border-2 transition-all ${memberType === m.id ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-sm" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`}>
                  {memberType === m.id && (
                    <span className="absolute top-2 right-2 sm:top-3 sm:right-3 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-[#D4AF37] flex items-center justify-center">
                      <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-white" />
                    </span>
                  )}
                  <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-wide mb-1 leading-tight ${memberType === m.id ? "text-[#0F2C59]" : "text-gray-600"}`}>{m.label}</p>
                  <p className={`text-sm sm:text-lg font-bold ${memberType === m.id ? "text-[#D4AF37]" : "text-gray-400"}`}>₹ {m.amount}</p>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            {/* On mobile: single column; sm+ 2-column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className={labelCls}>Name <span className="text-red-500">*</span></label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full name" className={inputCls("name")} />
                {isFieldInvalid("name") && <p className="text-red-500 text-xs mt-1">Name is required</p>}
              </div>
              <div>
                <label className={labelCls}>Father's Name <span className="text-red-500">*</span></label>
                <input type="text" name="fathersName" value={form.fathersName} onChange={handleChange} placeholder="Father's name" className={inputCls("fathersName")} />
                {isFieldInvalid("fathersName") && <p className="text-red-500 text-xs mt-1">Father's name is required</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div>
                <label className={labelCls}>Gender <span className="text-red-500">*</span></label>
                <div className="flex gap-2 mt-1">
                  {["male", "female"].map((g) => (
                    <label key={g} className={`flex items-center gap-1.5 cursor-pointer px-3 py-2 rounded-lg border-2 text-sm flex-1 justify-center transition-all ${gender === g ? "border-[#D4AF37] bg-[#D4AF37]/5 text-[#0F2C59] font-semibold" : "border-gray-200 text-gray-500"}`}>
                      <input type="radio" name="gender" value={g} checked={gender === g} onChange={() => setGender(g)} className="hidden" />
                      <span className="capitalize">{g}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelCls}>Marital Status <span className="text-red-500">*</span></label>
                <div className="flex gap-1.5 mt-1 flex-wrap">
                  {["married", "unmarried", "prefer not to say"].map((s) => (
                    <label key={s} className={`flex items-center gap-1 cursor-pointer px-2 py-1.5 rounded-lg border-2 text-[10px] sm:text-xs flex-1 justify-center transition-all min-w-0 ${maritalStatus === s ? "border-[#D4AF37] bg-[#D4AF37]/5 text-[#0F2C59] font-semibold" : "border-gray-200 text-gray-500"}`}>
                      <input type="radio" name="maritalStatus" value={s} checked={maritalStatus === s} onChange={() => setMaritalStatus(s)} className="hidden" />
                      <span className="capitalize truncate">{s}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div>
                <label className={labelCls}>Date of Birth <span className="text-red-500">*</span></label>
                <input type="text" name="dob" value={form.dob} onChange={handleChange} placeholder="DD/MM/YYYY" className={inputCls("dob")} />
                {isFieldInvalid("dob") && <p className="text-red-500 text-xs mt-1">Date of birth is required</p>}
              </div>
              <div>
                <label className={labelCls}>Spouse Name</label>
                <input type="text" name="spouseName" value={form.spouseName} onChange={handleChange} placeholder="Husband / Wife name" className={inputCls()} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div>
                <label className={labelCls}>Date of Marriage</label>
                <input type="text" name="dateOfMarriage" value={form.dateOfMarriage} onChange={handleChange} placeholder="DD/MM/YYYY" className={inputCls()} />
              </div>
              <div>
                <label className={labelCls}>Spouse Date of Birth</label>
                <input type="text" name="spouseDob" value={form.spouseDob} onChange={handleChange} placeholder="DD/MM/YYYY" className={inputCls()} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div>
                <label className={labelCls}>Qualification</label>
                <select name="qualification" value={form.qualification} onChange={handleChange} className={inputCls()}>
                  <option value="">Select qualification</option>
                  {QUALIFICATIONS.map((q) => <option key={q}>{q}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Work Category</label>
                <select name="workCategory" value={form.workCategory} onChange={handleChange} className={inputCls()}>
                  <option value="">Select work category</option>
                  {WORK_CATEGORIES.map((w) => <option key={w}>{w}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div>
                <label className={labelCls}>Designation</label>
                <input type="text" name="designation" value={form.designation} onChange={handleChange} placeholder="Your designation" className={inputCls()} />
              </div>
              <div>
                <label className={labelCls}>Firm / Company</label>
                <input type="text" name="firmName" value={form.firmName} onChange={handleChange} placeholder="Firm or company name" className={inputCls()} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div>
                <label className={labelCls}>Vaish Ghatak</label>
                <select name="vaishGhatak" value={form.vaishGhatak} onChange={handleChange} className={inputCls()}>
                  <option value="">Select Vaish Ghatak</option>
                  {VAISH_GHATAK.map((v) => <option key={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Gotra</label>
                <input type="text" name="gotra" value={form.gotra} onChange={handleChange} placeholder="Your gotra" className={inputCls()} />
              </div>
            </div>

            <div className="mt-3 sm:mt-4">
              <label className={labelCls}>PAN Card</label>
              <input type="text" name="panCard" value={form.panCard} onChange={handleChange} placeholder="Enter PAN to get 80G certificate" className={inputCls()} />
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <p className={sectionCls}><MapPin className="w-4 h-4 text-[#D4AF37]" /> Address</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className={labelCls}>House Number <span className="text-red-500">*</span></label>
                <input type="text" name="houseNumber" value={form.houseNumber} onChange={handleChange} placeholder="House / Flat number" className={inputCls("houseNumber")} />
                {isFieldInvalid("houseNumber") && <p className="text-red-500 text-xs mt-1">House number is required</p>}
              </div>
              <div>
                <label className={labelCls}>Building / Area <span className="text-red-500">*</span></label>
                <input type="text" name="buildingArea" value={form.buildingArea} onChange={handleChange} placeholder="Building, lane, road, area" className={inputCls("buildingArea")} />
                {isFieldInvalid("buildingArea") && <p className="text-red-500 text-xs mt-1">Building / Area is required</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div>
                <label className={labelCls}>Pin Code <span className="text-red-500">*</span></label>
                <input type="text" name="pinCode" value={form.pinCode} onChange={handleChange} placeholder="Pin code" className={inputCls("pinCode")} />
                {isFieldInvalid("pinCode") && <p className="text-red-500 text-xs mt-1">Required</p>}
              </div>
              <div>
                <label className={labelCls}>Place <span className="text-red-500">*</span></label>
                <input type="text" name="place" value={form.place} onChange={handleChange} placeholder="City / Town" className={inputCls("place")} />
                {isFieldInvalid("place") && <p className="text-red-500 text-xs mt-1">Required</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div>
                <label className={labelCls}>District <span className="text-red-500">*</span></label>
                <input type="text" name="district" value={form.district} onChange={handleChange} placeholder="District" className={inputCls("district")} />
                {isFieldInvalid("district") && <p className="text-red-500 text-xs mt-1">Required</p>}
              </div>
              <div>
                <label className={labelCls}>State <span className="text-red-500">*</span></label>
                <input type="text" name="state" value={form.state} onChange={handleChange} placeholder="State" className={inputCls("state")} />
                {isFieldInvalid("state") && <p className="text-red-500 text-xs mt-1">Required</p>}
              </div>
            </div>

            <p className={sectionCls}><Phone className="w-4 h-4 text-[#D4AF37]" /> Contact Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className={labelCls}>Mobile No <span className="text-red-500">*</span></label>
                <input type="tel" name="mobileNo" value={form.mobileNo} onChange={handleChange} placeholder="10-digit mobile number" className={inputCls("mobileNo")} />
                {isFieldInvalid("mobileNo") && <p className="text-red-500 text-xs mt-1">Mobile number is required</p>}
              </div>
              <div>
                <label className={labelCls}>Phone with STD Code</label>
                <input type="tel" name="phoneStd" value={form.phoneStd} onChange={handleChange} placeholder="e.g. 011-XXXXXXXX" className={inputCls()} />
              </div>
            </div>
            <div className="mt-3 sm:mt-4">
              <label className={labelCls}>Email ID</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls()} />
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <p className={sectionCls}><Paperclip className="w-4 h-4 text-[#D4AF37]" /> Upload Documents</p>

            <div className="mb-3 sm:mb-4">
              <label className={labelCls}>Your Photo <span className="text-red-500">*</span></label>
              <label className={`flex items-center gap-3 p-3 sm:p-4 border-2 border-dashed rounded-xl cursor-pointer transition-all ${fileUploadCls("photo")}`}>
                <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "photo")} className="hidden" />
                <div className={`w-9 sm:w-10 h-9 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${form.photo ? "bg-green-100" : isFieldInvalid("photo") ? "bg-red-100" : "bg-gray-100"}`}>
                  {form.photo ? <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" /> : <User className={`w-4 sm:w-5 h-4 sm:h-5 ${isFieldInvalid("photo") ? "text-red-400" : "text-gray-400"}`} />}
                </div>
                <div className="min-w-0">
                  <p className={`text-xs sm:text-sm font-semibold truncate ${form.photo ? "text-green-700" : isFieldInvalid("photo") ? "text-red-500" : "text-gray-600"}`}>
                    {form.photo ? form.photo.name : "Click to upload your photo"}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">JPG, PNG, WEBP supported</p>
                </div>
              </label>
              {isFieldInvalid("photo") && <p className="text-red-500 text-xs mt-1">Photo is required</p>}
            </div>

            <div className="mb-4 sm:mb-6">
              <label className={labelCls}>Aadhar Card <span className="text-red-500">*</span></label>
              <label className={`flex items-center gap-3 p-3 sm:p-4 border-2 border-dashed rounded-xl cursor-pointer transition-all ${fileUploadCls("aadhar")}`}>
                <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileChange(e, "aadhar")} className="hidden" />
                <div className={`w-9 sm:w-10 h-9 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${form.aadhar ? "bg-green-100" : isFieldInvalid("aadhar") ? "bg-red-100" : "bg-gray-100"}`}>
                  {form.aadhar ? <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" /> : <Paperclip className={`w-4 sm:w-5 h-4 sm:h-5 ${isFieldInvalid("aadhar") ? "text-red-400" : "text-gray-400"}`} />}
                </div>
                <div className="min-w-0">
                  <p className={`text-xs sm:text-sm font-semibold truncate ${form.aadhar ? "text-green-700" : isFieldInvalid("aadhar") ? "text-red-500" : "text-gray-600"}`}>
                    {form.aadhar ? form.aadhar.name : "Click to upload Aadhar card"}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">JPG, PNG, PDF supported</p>
                </div>
              </label>
              {isFieldInvalid("aadhar") && <p className="text-red-500 text-xs mt-1">Aadhar card is required</p>}
            </div>

            {/* Summary — compact 2-col on mobile */}
            <div className="bg-[#0F2C59]/5 rounded-xl p-3 sm:p-4 mb-4 sm:mb-5 border border-[#0F2C59]/10">
              <p className="text-xs font-bold uppercase tracking-wide text-[#0F2C59] mb-2 sm:mb-3">Registration Summary</p>
              <div className="grid grid-cols-2 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm">
                <span className="text-gray-500">Membership</span>
                <span className="font-semibold text-[#0F2C59] text-right truncate">{selectedLabel}</span>
                <span className="text-gray-500">Contribution</span>
                <span className="font-semibold text-[#D4AF37] text-right">₹ {contribution}</span>
                <span className="text-gray-500">Name</span>
                <span className="font-semibold text-[#0F2C59] text-right truncate">{form.name || "—"}</span>
                <span className="text-gray-500">Mobile</span>
                <span className="font-semibold text-[#0F2C59] text-right">{form.mobileNo || "—"}</span>
              </div>
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer group">
              <div
                onClick={() => setAgreed(!agreed)}
                className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 border-2 flex items-center justify-center transition-all ${agreed ? "bg-[#0F2C59] border-[#0F2C59]" : "border-gray-300 group-hover:border-[#0F2C59]"}`}
              >
                {agreed && <span className="text-white text-xs font-bold">✓</span>}
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                I agree to abide by the rules and objects of the mahasammelan and assure my full
                and sincere co-operation in achieving the goals set out by the Federation.
              </p>
            </label>

            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-sm text-red-500 text-center bg-red-50 py-2 px-4 rounded-lg"
              >
                Submission failed. Please check your connection and try again.
              </motion.p>
            )}
          </motion.div>
        );
    }
  };

  // ── Success screen ───────────────────────────────────────────────────────────
  if (submitStatus === "success") {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-md p-6 sm:p-8 text-center"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* drag handle */}
              <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-5 sm:hidden" />
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
                className="w-16 sm:w-20 h-16 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5"
              >
                <CheckCircle className="w-8 sm:w-10 h-8 sm:h-10 text-green-500" />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F2C59] mb-2">Registration Successful!</h3>
                <p className="text-gray-500 text-sm mb-1">
                  Welcome as a <span className="font-semibold text-[#0F2C59]">{memberLabel}</span>
                </p>
                <p className="text-gray-400 text-xs mb-5 sm:mb-6">
                  {certB64 ? "Your membership certificate has been downloaded." : "Your registration has been submitted for review."}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {certB64 && (
                    <button
                      onClick={() => downloadCertificate(certB64, form.name)}
                      className="flex items-center justify-center gap-2 px-5 py-3 bg-[#0F2C59] text-white rounded-xl font-semibold text-sm hover:bg-[#082040] transition-colors"
                    >
                      <Download className="w-4 h-4" /> Download Certificate
                    </button>
                  )}
                  <button
                    onClick={handleClose}
                    className="px-5 py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // ── Main modal ───────────────────────────────────────────────────────────────
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-2xl flex flex-col"
            style={{ maxHeight: "92dvh" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile drag handle */}
            <div className="flex justify-center pt-3 sm:hidden flex-shrink-0">
              <div className="w-10 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="bg-[#0F2C59] text-white px-4 sm:px-6 py-3 sm:py-4 sm:rounded-t-2xl flex items-start justify-between flex-shrink-0">
              <div>
                <h2 className="text-base sm:text-lg font-bold">JOIN US — Online Membership</h2>
                <p className="text-white/60 text-[10px] sm:text-xs mt-0.5">Membership Benefits &nbsp;|&nbsp; IVF Membership / Donation</p>
              </div>
              <button onClick={handleClose} className="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0 ml-3">
                <X className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </button>
            </div>

            {/* Step indicator */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-1 sm:gap-2">
                {STEPS.map((step, i) => (
                  <div key={step.id} className="flex items-center gap-1 sm:gap-2 flex-1">
                    <div className="flex items-center gap-1 sm:gap-2 flex-1">
                      <div className={`w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold flex-shrink-0 transition-all ${currentStep > step.id ? "bg-green-500 text-white" : currentStep === step.id ? "bg-[#0F2C59] text-white" : "bg-gray-100 text-gray-400"}`}>
                        {currentStep > step.id ? "✓" : step.id}
                      </div>
                      <span className={`text-[10px] sm:text-xs font-semibold hidden xs:block sm:block transition-colors ${currentStep === step.id ? "text-[#0F2C59]" : currentStep > step.id ? "text-green-500" : "text-gray-400"}`}>
                        {step.label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`h-0.5 flex-1 mx-0.5 sm:mx-1 rounded transition-all ${currentStep > step.id ? "bg-green-400" : "bg-gray-200"}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Validation error banner */}
            <AnimatePresence>
              {missingFields.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden flex-shrink-0"
                >
                  <div className="mx-4 sm:mx-6 mt-2 sm:mt-3 px-3 sm:px-4 py-2 sm:py-2.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2">
                    <span className="text-red-500 text-sm mt-0.5 flex-shrink-0">⚠</span>
                    <p className="text-red-600 text-xs leading-relaxed">
                      <span className="font-semibold">Please fill in required fields: </span>
                      {missingFields.join(", ")}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-5 min-h-0">
              <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-100 flex items-center justify-between flex-shrink-0 bg-gray-50 rounded-b-2xl">
              <button
                type="button"
                onClick={() => { setShowErrors(false); setCurrentStep((s) => Math.max(1, s - 1)); }}
                disabled={currentStep === 1}
                className="flex items-center gap-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-gray-500 hover:text-[#0F2C59] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> Back
              </button>
              <span className="text-xs text-gray-400 font-medium">{currentStep} / {STEPS.length}</span>
              {currentStep < STEPS.length ? (
                <motion.button
                  type="button"
                  onClick={handleNext}
                  animate={shakeNext ? { x: [0, -6, 6, -6, 6, -4, 4, 0] } : { x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-1 sm:gap-1.5 px-4 sm:px-5 py-2 bg-[#0F2C59] text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#082040] transition-colors"
                >
                  Next <ChevronRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </motion.button>
              ) : (
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitStatus === "loading" || !agreed}
                  animate={shakeNext ? { x: [0, -6, 6, -6, 6, -4, 4, 0] } : { x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-1.5 px-4 sm:px-5 py-2 bg-[#D4AF37] text-[#0F2C59] rounded-xl text-xs sm:text-sm font-bold hover:bg-[#E5C158] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  {submitStatus === "loading"
                    ? <><Loader2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 animate-spin" /> Submitting…</>
                    : <>Submit <ChevronRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" /></>
                  }
                </motion.button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}