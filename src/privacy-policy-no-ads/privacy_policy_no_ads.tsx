import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Privacy policy page (for MoyennesED Sans Pubs)
export function PrivacyPolicyNoAds() {
  return (
    <div className="app">
      <h1>Privacy Policy for MoyennesED Sans Pubs</h1>
      <p>Last updated : <code>05/11/2026</code></p>

      <p>
        MoyennesED Sans Pubs is a mobile application that lets you connect to your existing
        ÉcoleDirecte account to display your grades, averages and homework. This
        policy explains what data the app uses, why it uses it, where it goes, and
        how you can control it.
      </p>

      <p>
        <strong>Data controller:</strong> Diego Finocchiaro, individual developer,
        France. Contact : <code>moyennesed@gmail.com</code>.
      </p>

      <p>
        <strong>MoyennesED Sans Pubs is not affiliated with ÉcoleDirecte.</strong> ÉcoleDirecte
        is an independent service. When the app connects to your account,
        ÉcoleDirecte processes your data under its own privacy policy. MoyennesED Sans Pubs
        only acts as a client that displays the data you already have access to.
      </p>

      <h2>1. Summary</h2>
      <ul>
        <li>
          Your ÉcoleDirecte username and password are sent only to ÉcoleDirecte,
          over HTTPS. They are not sent to us.
        </li>
        <li>
          Your grades, homework, profile information and attachments are downloaded
          from ÉcoleDirecte and cached locally on your device. We do not receive
          them unless you choose to send a bug report.
        </li>
        <li>
          Bug reports are optional. They contain technical logs that may include
          your grades and homework. Names, contact details, school identifiers and
          school comments are blanked before sending, and account numbers are
          replaced with random numbers. Despite that, a report can still contain
          personal data and free text can identify you. Please do not put personal
          data in the description.
        </li>
        <li>
          Usage analytics are optional and disabled by default. You can enable or disable them at any time in
          <strong> Settings → Advanced settings → Privacy</strong>.
        </li>
        <li>
          We use Firebase App Check and Google Play Integrity / Apple App Attest
          for security and anti-abuse.
        </li>
        <li>We do not sell or rent your data.</li>
      </ul>

      <h2>2. Data used to connect to ÉcoleDirecte</h2>
      <p>
        To use the app, you enter the username and password of an ÉcoleDirecte
        account you already have. The app sends those credentials to the official
        ÉcoleDirecte API (<code>api.ecoledirecte.com</code>) over HTTPS. We do not
        operate a server that receives your ÉcoleDirecte password. If you use the
        built-in demo account, the app uses a separate demo API and no real
        ÉcoleDirecte account is involved.
      </p>
      <p>
        Your username and password are stored on your device in the iOS Keychain or
        the Android Keystore through <code>expo-secure-store</code>. Your
        two-factor authentication secrets are stored the same way. Your session
        token, account number, first and last name, gender, school, class, photo URL
        and, for parent accounts, your children's account details are stored in the
        app's private local storage so that you do not have to log in again. Cached
        grades, homework, attachments and profile photos are also stored locally.
      </p>
      <p>
        This local data is used only to run the app. It is not sent to us. It is
        deleted when you log out, clear the cache, or uninstall the app. On iOS,
        some Keychain items can survive an uninstall; the app deletes orphaned
        secure data the next time it starts without an account.
      </p>

      <h2>3. Local data and debug logs</h2>
      <p>The app stores the following data on your device:</p>
      <ul>
        <li>Your ÉcoleDirecte credentials and two-factor secrets (secure store).</li>
        <li>
          Your session token, account and profile information, cached grades,
          averages, subjects, homework, downloaded attachments, profile photo
          cache, preferences, theme and analytics choice.
        </li>
        <li>
          Local logs of the responses returned by the ÉcoleDirecte API. These logs
          are stripped of passwords and session tokens, but they can contain grades,
          homework and account information.
        </li>
      </ul>
      <p>
        These logs stay on your device and are used only to diagnose problems. They
        are sent to us only if you explicitly submit a bug report. You can delete
        them by logging out, using <strong>Settings → Advanced settings → Clear
        cache</strong>, or uninstalling the app.
      </p>

      <h2>4. Bug reports (optional)</h2>
      <p>
        The app lets you send a bug report. This is optional and is limited to one
        report per week. When you press <strong>Send</strong>, the app sends the
        following data to a Google Cloud Firestore database controlled by the
        developer:
      </p>
      <ul>
        <li>The date, the type of bug you selected, and the description you typed (up to 250 characters).</li>
        <li>
          Logs of the ÉcoleDirecte login, marks and homework responses. These logs
          can include your grades, averages, subjects, homework, class level and
          technical identifiers.
        </li>
      </ul>
      <p>
        Before sending, the app removes or blanks passwords, session tokens, names,
        email addresses, phone numbers, photos, gender, birth date, school names and
        identifiers, teacher names, and school comments. ÉcoleDirecte account
        numbers are replaced with random numbers that are consistent within a single
        report. These protections reduce the risk of identification, but they do not
        make the report anonymous: grades, homework, dates and the free-text
        description can still be personal data and may be re-identifiable in some
        circumstances. The description is not automatically anonymized, so please do
        not include names, contact details or other personal data in it.
      </p>
      <p>
        Bug reports are used only to reproduce the problem, understand its cause and
        fix it. They are not used for advertising, profiling or analytics, and they
        are not shared with advertisers. Access is restricted to the developer.
        Reports are kept for a maximum of 12 months and are deleted earlier on
        request. To request deletion, email <code>moyennesed@gmail.com</code> with
        the approximate date and subject of your report.
      </p>
      <p>
        The legal basis for bug reports is your consent when you press
        <strong> Send</strong>, and our legitimate interest in fixing bugs and
        keeping the app secure.
      </p>

      <h2>5. Usage analytics (optional, off by default)</h2>
      <p>
        The app uses Firebase Analytics (Google Analytics for Firebase). Analytics
        are disabled by default. They are enabled only if you explicitly accept the
        in-app analytics banner or turn on
        <strong> Settings → Advanced settings → Privacy → Usage statistics</strong>.
        This choice applies to the whole app installation,
        not to a specific ÉcoleDirecte account.
      </p>
      <p>If you enable analytics, Firebase may collect:</p>
      <ul>
        <li>
          A random Firebase installation identifier (also called app-instance ID),
          used to count installations and sessions.
        </li>
        <li>
          Technical information such as device model, operating system and version,
          app version, language, and country or approximate location derived from a
          masked IP address.
        </li>
        <li>
          App lifecycle events such as first open, session start and user engagement.
        </li>
      </ul>
      <p>
        We have disabled Google Analytics advertising-identifier collection and
        Android SSAID collection. We do not set a Firebase user ID, we do not log
        custom events, and we do not send your grades, homework, account identifier,
        school, screen names or advertising identifier to Firebase Analytics.
        Automatic screen reporting is disabled.
      </p>
      <p>
        Analytics are used only to understand how the app is used, measure stability
        and prioritise improvements. They are not used to build
        advertising profiles or make automated decisions about you. Google processes
        the data on our behalf as a service provider.
      </p>
      <p>
        The legal basis is your consent. You can withdraw it at any time with the
        same switch. Withdrawal disables analytics collection and calls
        <code>resetAnalyticsData()</code>, which deletes local analytics data and
        resets the app-instance ID. Data already sent to Google may remain in
        aggregated reports until the retention period expires; you can contact us to
        request deletion.
      </p>
      <p>
        Firebase Analytics keeps user-level and event-level data for at most 14
        months; the retention period configured in our Firebase project may be
        shorter. Aggregated reports may be kept longer.
      </p>
      <p>
        If you are under 15, you must have permission from a parent or guardian
        before enabling analytics. If you believe a child has enabled analytics
        without that permission, contact us so that we can disable it and delete the
        data.
      </p>

      <h2>6. Security and anti-abuse (Firebase App Check)</h2>
      <p>
        The app uses Firebase App Check with Apple App Attest / DeviceCheck on iOS
        and Google Play Integrity on Android. This protects our Firebase backend
        from abuse and helps ensure that requests come from an authentic, untampered
        version of the app.
      </p>
      <p>
        App Check may process the app bundle identifier, app version, signing
        certificate, a Firebase installation ID, and device or app attestation
        tokens. On Android, Play Integrity may also process the app's Google Play
        license status and device integrity information. App Check does not receive
        your grades, homework or ÉcoleDirecte account identifier. The data is
        processed by Google as a service provider for security purposes. The legal
        basis is our legitimate interest in protecting the app and its backend.
      </p>

      <h2>7. Notifications</h2>
      <p>
        The app may ask for permission to send notifications. If you allow it,
        Firebase Cloud Messaging may process an APNs or FCM device token and
        technical information such as device model, language, time zone, operating
        system version, app identifier and app version, so that notifications can be
        delivered. The current version does not send marketing notifications. You can
        disable notifications at any time in your device settings.
      </p>

      <h2>8. What we do not collect</h2>
      <ul>
        <li>Your age or date of birth.</li>
        <li>Your precise location (we only receive approximate location derived from IP addresses through Google's SDKs).</li>
        <li>Your contacts, calendar, SMS or call logs.</li>
        <li>Your photos or videos from your device library, microphone or camera.</li>
        <li>Health, fitness or biometric data.</li>
        <li>Your web browsing history or in-app search history.</li>
        <li>Your payment card or bank details, or your purchase history.</li>
        <li>Your ÉcoleDirecte password on our servers.</li>
      </ul>
      <p>
        We do not sell, rent or trade your data. We do not use your data for
        automated decision-making or profiling, and we do not use analytics data for
        advertising.
      </p>

      <h2>9. Legal bases</h2>
      <ul>
        <li>
          <strong>ÉcoleDirecte login and school data:</strong> performance of the
          service you request, and our legitimate interest in providing the app.
          ÉcoleDirecte remains responsible for its own processing.
        </li>
        <li>
          <strong>Local cache and app preferences:</strong> performance of the
          service and app functionality.
        </li>
        <li>
          <strong>Bug reports:</strong> your consent when you press Send, and our
          legitimate interest in fixing bugs and keeping the app secure.
        </li>
        <li><strong>Usage analytics:</strong> your consent.</li>
        <li>
          <strong>App Check and security:</strong> our legitimate interest in
          protecting the app and its backend.
        </li>
        <li>
          <strong>Legal obligations and claims:</strong> compliance with applicable
          law and the establishment, exercise or defence of legal claims.
        </li>
      </ul>

      <h2>10. Recipients and international transfers</h2>
      <p>
        Your data may be processed by Google (Google Ireland Limited and Google LLC)
        as a service provider for Firebase Analytics, Cloud Firestore, App Check and
        Cloud Messaging. Google may process data outside the EEA,
        including in the United States, under appropriate safeguards such as the
        EU-US Data Privacy Framework and/or Standard Contractual Clauses.
      </p>
      <p>
        ÉcoleDirecte is an independent data controller for the school data you
        access through your account. We do not control ÉcoleDirecte's processing.
        Please read ÉcoleDirecte's privacy policy for more information.
      </p>
      <p>
        We may also disclose data if required by law, a court order or a competent
        authority, or to protect our rights and the security of the app. We do not
        share bug reports with advertisers.
      </p>

      <h2>11. Retention</h2>
      <ul>
        <li>
          <strong>Local app data:</strong> kept until you log out, clear the cache or
          uninstall the app. On iOS, some Keychain items may survive an uninstall and
          are deleted by the app on the next launch without an account.
        </li>
        <li>
          <strong>Bug reports:</strong> kept for a maximum of 12 months, then
          deleted. You can request earlier deletion by email.
        </li>
        <li>
          <strong>Analytics:</strong> user-level and event-level data are kept for
          at most 14 months, or less if a shorter retention period is configured in
          Firebase Analytics. Aggregated reports may be kept longer.
        </li>
        <li>
          <strong>App Check:</strong> attestation tokens are short-lived; related
          logs are retained by Google according to its policies.
        </li>
        <li>
          <strong>Your analytics choice:</strong> kept on your device until you
          change it or uninstall the app. It is not deleted when you log out.
        </li>
      </ul>

      <h2>12. Your rights</h2>
      <p>
        If you are in the EEA, the UK or another jurisdiction with similar laws, you
        have the right to:
      </p>
      <ul>
        <li>access the personal data we hold about you;</li>
        <li>ask us to rectify inaccurate data;</li>
        <li>ask us to erase your data;</li>
        <li>ask us to restrict or object to certain processing;</li>
        <li>receive your data in a portable format;</li>
        <li>withdraw your consent at any time, without affecting processing that already took place;</li>
        <li>lodge a complaint with your local supervisory authority.</li>
      </ul>
      <p>
        To exercise these rights, email <code>moyennesed@gmail.com</code>. We will
        respond within one month. We may ask for information to verify your request.
        Parents and guardians can exercise these rights on behalf of their child.
      </p>
      <p>
        For data held by ÉcoleDirecte, please contact ÉcoleDirecte directly. For data
        processed by Google, you can also use Google's privacy controls; we will
        assist where we can.
      </p>
      <p>
        In France, the supervisory authority is the CNIL:
        <a href="https://www.cnil.fr"> www.cnil.fr</a>, 3 Place de Fontenoy, TSA
        80715, 75334 Paris Cedex 07.
      </p>

      <h2>13. Children and parental consent</h2>
      <p>
        MoyennesED Sans Pubs is intended for secondary school students from 6e to Terminale
        (approximately 11 to 18 years old) and their parents or guardians. It is not
        directed to children under 11. We do not knowingly collect data from children
        under 11; if you believe we have, contact us and we will delete it.
      </p>
      <p>
        Usage analytics require consent. In France, a child under 15 needs the
        consent of a parent or guardian for processing based on consent. We ask users
        under 15 to obtain that permission before enabling analytics. If we learn
        that analytics was enabled by a child under 15 without parental consent, we
        will disable it and delete the data. We do not collect your age.
      </p>

      <h2>14. Security</h2>
      <p>
        We use HTTPS/TLS for network requests. Your ÉcoleDirecte credentials and
        two-factor secrets are stored in the iOS Keychain or Android Keystore. Other
        local app data is stored in the app's private sandbox. Firestore access is
        restricted, and App Check helps protect the backend. Bug reports are
        accessible only to the developer.
      </p>
      <p>
        No method of transmission or storage is completely secure. Please keep your
        ÉcoleDirecte password confidential and do not enter it outside the
        ÉcoleDirecte login screen.
      </p>

      <h2>15. Changes to this policy</h2>
      <p>
        We may update this policy to reflect changes in the app or applicable law.
        We will change the date at the top of this page. For material changes, we
        will notify you in the app or on this page and, where required, ask for your
        consent again.
      </p>

      <h2>16. Contact</h2>
      <p>
        For any question or request about this policy or your data, contact:
        <br />
        <strong>Diego Finocchiaro</strong>
        <br />
        Email : <code>moyennesed@gmail.com</code>
      </p>
      <p>
        MoyennesED Sans Pubs is not affiliated with ÉcoleDirecte. For questions about your
        ÉcoleDirecte account or the data stored by ÉcoleDirecte, please contact
        ÉcoleDirecte.
      </p>

      <p>
        This policy is governed by French law, without prejudice to mandatory rights
        you may have under your local law.
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
