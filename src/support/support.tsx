import "../app.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Support page
export function Support() {
  return (
    <div className="app">
      <h1>Contact us</h1>
      <p>Last updated : <code>27/10/2026</code></p>
      <p>
        This page explains how you sould contact support if you have any trouble while using our services.
      </p>
      <h2>Contact information</h2>
      <p>
        Please contact us by e-mail at <code>moyennesed@gmail.com</code> for any requests or issues while using our services.
      </p>
    </div>
  );
}


const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <Support />
  </StrictMode>
);
// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
(import.meta.hot.data.root ??= createRoot(elem)).render(app);
