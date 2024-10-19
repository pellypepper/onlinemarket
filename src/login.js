import Header from "./header"
import Footer from "./footer"


export default function Login() {
    return (
        <div className="login_layout_container">
        <Header />

        <main className="login_container">
            <section className="login_wrapper">
            <h1 className="header_logo">Online <span style={{ color: "purple" }}>Market</span></h1>
                <h1 className="h1">Create a free Online Market account or sign in with your credentials</h1>

                <div className="middle_btn-wrapper">
                    <button>Continue with Google</button>
                    <button className="btn_purple">Continue with SSO</button>
                </div>

                <div className="bottom_btn-wrapper">
                    <p>Business Email</p>
                    <input type="text" placeholder="Enter your work email..."></input>
                    <button>Continue</button>
                </div>

                <p className="login_bottom"> <span >Terms of Service</span> and <span >Privacy Policy</span></p>
            </section>
        </main>

        
  
  
        <Footer />
  
  
  
      </div>
    )
}