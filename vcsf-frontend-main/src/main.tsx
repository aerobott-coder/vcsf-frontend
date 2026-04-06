import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogStartBusiness from "./app/blog-start-business";
import BlogFundingGuide from "./app/blog-funding-guide";
import App from "./app/App";
import Blog from "./app/blog";

import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/start-business" element={<BlogStartBusiness />} />
      <Route path="/blog/funding-guide" element={<BlogFundingGuide />} />
    </Routes>
  </BrowserRouter>
);