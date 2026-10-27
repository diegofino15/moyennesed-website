import "../app.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Privacy policy page (for MoyennesED)
export function PrivacyPolicy() {
  return (
    <div className="app">
      <h1>Privacy Policy for MoyennesED</h1>
      <p>Last updated : <code>27/10/2026</code></p>
      <p>
        This privacy policy governs your use of the software application MoyennesED (“Application”) for mobile devices. The Application does not collect any user data. However, it does use third-party services that may collect information used to identify you.
      </p>

      {/* Admob */}
      <h2>Google AdMob</h2>
      <p>The Application uses Google AdMob for advertising. Google AdMob is an advertising service provided by Google Inc. You can read Google AdMob’s privacy policy here : <a href="https://developers.google.com/admob/android/privacy/play-data-disclosure">Google AdMob's privacy policy</a></p>
      <h3>Data collected by Google AdMob</h3>
      <ul>
        <li>
          <p>
            <strong>IP address</strong>: The SDK collects the device’s IP address, which may be
            used to estimate the general location of a device.
          </p>
        </li>
        <li>
          <p>
            <strong>User product interactions</strong>: The SDK collects user product interactions
            and interaction information, including app launch, taps, and video views.
          </p>
        </li>
        <li>
          <p>
            <strong>Diagnostic information</strong>: The SDK collects information related to
            the performance of your app and the SDK, including crash logs, app launch time,
            hang rate, and energy usage.
          </p>
        </li>
        <li>
          <p>
            <strong>Device and Account identifiers</strong>: The SDK collects Android advertising
            (ad) ID, app set ID, and, if applicable, other identifiers related to
            signed-in accounts on the device.
          </p>
        </li>
      </ul>
      <p>
        All of the user data collected by Google Mobile Ads SDK is encrypted
        in transit using the Transport Layer Security (TLS) protocol.
      </p>
      <h3>Data handling</h3>
      <p>
        Android ad ID collection is optional. The ad ID can be reset or deleted by
        users using ad ID controls in the Android settings menu.
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
    <PrivacyPolicy />
  </StrictMode>
);
// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
(import.meta.hot.data.root ??= createRoot(elem)).render(app);
