import Header from "./header";
import Footer from "./footer";
import "./login.css";


export default function Login() {
  return (
    <div className="login_layout_container">
      <Header />

      <main className="login_container">
        <section className="login_wrapper">
          <h1 className="header_logo">
            Online <span style={{ color: "purple" }}>Market</span>
          </h1>
          <h2 className="login_title">
            Sign in to your Online Market account or create a new one
          </h2>

          {/* Social Login Buttons */}
          <div className="social_buttons">
            <button className="btn_google">Continue with Google</button>
            <button className="btn_sso">Continue with SSO</button>
          </div>

          {/* Email Login Section */}
          <div className="email_input_wrapper">
            <p>Business Email</p>
            <input
              type="email"
              placeholder="Enter your work email..."
              className="email_input"
            />
            <button className="btn_continue">Continue</button>
          </div>

          {/* Legal Links */}
          <p className="legal_links">
            <span>Terms of Service</span> and <span>Privacy Policy</span>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
