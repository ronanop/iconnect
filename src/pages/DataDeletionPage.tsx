const MAILTO =
  "mailto:erp@iconnectplus.in" +
  "?subject=" +
  encodeURIComponent("ESS account / data deletion request") +
  "&body=" +
  encodeURIComponent(
    [
      "Hello HR / iConnect Plus support,",
      "",
      "I request deletion of my Employee App login and eligible associated personal data.",
      "",
      "Full name:",
      "Work email:",
      "Employee code:",
      "Company / organization:",
      "App platform (Android / iOS / both):",
      "Reason (optional):",
      "",
      "I understand that employment or payroll records may be retained where required by law or my employer.",
      "",
      "Thank you.",
    ].join("\n"),
  );

export function DataDeletionPage() {
  return (
    <article className="legal-wrap">
      <h1>Request account / data deletion</h1>
      <p className="meta">
        Required web path for Google Play &amp; Apple App Store · Also available
        in the Employee App under Profile.
      </p>

      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <p style={{ marginTop: 0 }}>
          We do <strong>not</strong> collect deletion requests through a web
          form right now. To request deletion, send an email to{" "}
          <a href="mailto:erp@iconnectplus.in">erp@iconnectplus.in</a> using the
          button below. Your mail app opens with a ready-made template — fill in
          your details and send.
        </p>
        <ul>
          <li>
            Employee App accounts are created by your employer (HR / IT), not by
            public self-registration.
          </li>
          <li>
            Deleting the mobile login and eligible personal app data may require
            employer approval.
          </li>
          <li>
            Statutory employment / payroll records may be retained where the law
            or your employer requires it.
          </li>
          <li>
            Package: <code>com.cache.employeeportal</code> · Domain:{" "}
            <code>iconnectplus.in</code>
          </li>
        </ul>
      </div>

      <div className="cta-row">
        <a className="btn btn-primary" href={MAILTO}>
          Email deletion request
        </a>
        <a className="btn btn-secondary" href="mailto:erp@iconnectplus.in">
          Or email erp@iconnectplus.in
        </a>
      </div>

      <p className="muted" style={{ marginTop: "1.5rem" }}>
        If the button does not open your mail app, copy this address:{" "}
        <a href="mailto:erp@iconnectplus.in">erp@iconnectplus.in</a> and include
        your employee code, company name, and work email.
      </p>
    </article>
  );
}
