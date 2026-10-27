import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Privacy policy page (for MoyennesED Sans Pubs)
export function PrivacyPolicyNoAds() {
  return (
    <div className="app">
      <h1>Privacy Policy for MoyennesED Sans Pubs</h1>
      <p>Last updated : <code>27/10/2026</code></p>
      <p>
        This privacy policy governs your use of the software application MoyennesED Sans Pubs (“Application”) for mobile devices. The Application does not collect any user data.
      </p>

      {/* MoyennesED */}
      <h2>MoyennesED Bug Reports</h2>
      <p>
        The Application lets users willingly submit bug reports that are stored on Google Firebase. These reports contain logs of the
        data that was transmitted between the Application and ÉcoleDirecte, including account information, marks, and homeworks.
      </p>
      <p>
        All of this data is anonimized before transit, no personal information is sent. All the information related to the user is replaced
        by generic information, so that the bug report cannot be traced back to the user.
      </p>
      <p>
        These bug reports are used to replicate the scenario experienced by the user, to determine the cause of the bug and help fixing it.
      </p>

      {/* Contact */}
      <h2>Contact us</h2>
      <p>
        If you have any questions about this Privacy Policy, you can contact us by email at <code>moyennesed@gmail.com</code>.
      </p>
    </div>
  );
}


const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <PrivacyPolicyNoAds />
  </StrictMode>
);
// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
(import.meta.hot.data.root ??= createRoot(elem)).render(app);
