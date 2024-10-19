import Header from "./header"
import Footer from "./footer"


export default function Signup() {
    return (
        <div className="signup_layout_container">
        <Header />

        <main className="signup_container">
            <div className="signup_wrapper">
                <section className="signup_left">
                    <h6> STEP 1 OF #</h6>

                    <h1>Let's start your free trial</h1>


                    <div className="signup_left_box">
                        <div>
                        <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Get full access to Stark's Business Plan for 14days free</p>
                        </div>

                        <div>
                        <div style={{ fontSize: '24px', color: 'green' }}>✓</div>     
                    <p>Add as many team members as you need.</p>
                        </div>

                        <div>
                        <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>We won’t charge your credit card, you can cancel any time.</p>
                        </div>
     

                    </div>

                    
                    



                </section>

            
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
              

            </div>
        </main>

      

        
  
  
        <Footer />
  
  
  
      </div>
    )
}