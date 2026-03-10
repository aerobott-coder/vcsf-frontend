const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

// ── Generic request helper ────────────────────────────────────────────────────
async function post<T>(endpoint: string, body: object): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `Request failed: ${endpoint}`);
  return data as T;
}

// ── Types ─────────────────────────────────────────────────────────────────────
export interface RegisterMemberResponse {
  success:        boolean;
  message:        string;
  memberId:       string;
  memberLabel:    string;
  certificateB64: string;
}

export interface ContactResponse {
  success:   boolean;
  message:   string;
  contactId: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
  id:      string;
}

// ── Member ────────────────────────────────────────────────────────────────────
export const memberApi = {
  register: (payload: object) =>
    post<RegisterMemberResponse>("/api/member/register", payload),
};

// ── Contact ───────────────────────────────────────────────────────────────────
export const contactApi = {
  submit: (payload: { name: string; email: string; message: string }) =>
    post<ContactResponse>("/api/contact/submit", payload),
};

// ── Newsletter ────────────────────────────────────────────────────────────────
export const newsletterApi = {
  subscribe: (email: string) =>
    post<NewsletterResponse>("/api/newsletter/subscribe", { email }),
};