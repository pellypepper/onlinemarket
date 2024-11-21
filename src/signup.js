import Header from "./header";
import Footer from "./footer";
import "./signup.css";

export default function Signup() {
  return (
    <div className="signup_layout_container">
      <Header />

      <main className="signup_container">
        <div className="signup_wrapper">
          {/* Left Section: Benefits/Details */}
          <section className="signup_left">
            <h6>STEP 1 OF #</h6>
            <h1>Let's start your free trial</h1>

            <div className="signup_left_box">
              {[
                "Get full access to Stark's Business Plan for 14 days free",
                "Add as many team members as you need.",
                "We won’t charge your credit card, you can cancel anytime.",
              ].map((text, index) => (
                <div key={index} className="signup_benefit">
                  <div className="check_icon">✓</div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Right Section: Account Creation */}
          <section className="signup_right">
            <h1 className="header_logo">
              Online <span style={{ color: "purple" }}>Market</span>
            </h1>
            <h2>Create a free Online Market account or sign in with your credentials</h2>

            {/* Social Signup Buttons */}
            <div className="middle_btn-wrapper">
              <button className="btn_google">Continue with Google</button>
              <button className="btn_sso">Continue with SSO</button>
            </div>

            {/* Email Signup */}
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
