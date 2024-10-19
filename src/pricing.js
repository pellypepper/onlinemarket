import Header from "./header"
import Footer from "./footer"


export default function Pricing() {
  return (
    <div className="pricing_layout_container">
      <Header />


      <main className="pricing_container">
        <div className="pricing_wrapper">
          <section className="pricing_top_wrapper">
            <h1>Pricing Plans</h1>
            <span>Whether you're a small but mighty team, or 100,000 strong, we've got a plan to support what you need. Sign up and get started today.</span>

          </section>


          <section className="pricing_middle_wrapper">
            <div className="pricing_grid_wrapper">
              <div className="grid_box_1">
                <h6>Starter</h6>
                <span>For individuals getting started with accessibility.</span>

                <h3>Free</h3>
                <span>Forever</span>

                <button>Create a free account</button>

                <div className="tick_box_wrapper">
                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Access to all of Stark's non-automated tooling</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Smart Suggestions</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>WCAG Scans in browser</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Accessibility Checklist widget in FigJam</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Access to Slack Community</p>
                  </div>

                </div>

              </div>
              <div className="grid_box_2">
                <h6>Premium</h6>
                <span>For individuals looking to automate and accelerate accessibility.</span>

                <h3>$21</h3>
                <span>per month (or $210 paid annually)</span>

                <button>Purchase Premium</button>

                <div className="tick_box_wrapper">
                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Everything in Starter, plus...</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Sidekick to auto-remediate design issues with AI suggestions</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>1 Project with assets</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Real-time reports and insights</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Automatic WCAG scans and reports in browser</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Live code highlighting in browser web dev console</p>
                  </div>

                </div>

              </div>
              <div className="grid_box_3">
                <h6>Business</h6>
                <span>For smaller teams needing to comply with confidence.</span>

                <h3>$198</h3>
                <span>per user / year (starting at 3 seats)</span>

                <button>Start a free 14-day trial</button>

                <div className="tick_box_wrapper">
                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Everything in Premium, plus...</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Unlimited Projects for collaboration across design, code, PM, and QA

                    </p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Shared real-time accessibility reports and insights for Figma files, code repos and live URLs</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Centralized team management and admin</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Consolidated billing</p>
                  </div>


                </div>

              </div>
              <div className="grid_box_4">
                <div className="box_4-top">
                  <div>
                    <h6>Enterprise</h6>
                    <span>Scaling organizations with custom workflows and security</span>
                  </div>

                  <button>Talk to Sales</button>
                </div>

                <div className="box_4_bottom">
                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Everything in Business, plus...</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Dedicated enterprise account manager and priority support.</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Enterprise-grade security, SOC2 and GDPR certified</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Compliance Center to manage accessibility posture</p>
                  </div>

                  <div className="tick_box">
                    <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                    <p>Customizable terms and security reviews</p>
                  </div>


                </div>

              </div>

            </div>

          </section>

          <section className="pricing_top_wrapper pricing_ex">
            <h1>Compare Plans</h1>
            <span>Check out all the features by plan to determine what fits your needs of you or your team.</span>

          </section>


          <section className="pricing_bottom_wrapper">
            <div className="pricing_flex_wrapper">
              <div className="flex_box_1">
                <div className="flex_left">
                  <h3>Plan</h3>

                </div>

                <div className="flex_right">

                  <div className="flex_right_box">
                    <h3>Starter</h3>
                    <button>Create free account</button>
                  </div>

                  <div className="flex_right_box">
                    <h3>Premium</h3>
                    <button>Select</button>
                  </div>

                  <div className="flex_right_box">
                    <h3>Business</h3>
                    <button>Select</button>
                  </div>


                  <div className="flex_right_box">
                    <h3>Enterprise</h3>
                    <button>Talk to Sales</button>
                  </div>

                </div>

              </div>

              <div className="flex_text">
                <h3>Design</h3>
                <span>Use Stark in Figma, Sketch and Adobe XD to fix over 90% of accessibility issues in the design phase.</span>

              </div>

              <div className="flex_box_2">
                <div className="flex_left">
                  <p>Sidekick AI Assistant: 10x faster accessibility workflow</p>

                </div>

                <div className="flex_right">
                  <div style={{ fontSize: '24px', color: 'green' }}>-</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                </div>

              </div>
              <div className="flex_box_2 box_2_color">
                <div className="flex_left">
                  <p>Sidekick AI Assistant: 10x faster accessibility workflow</p>

                </div>

                <div className="flex_right">
                  <div style={{ fontSize: '24px', color: 'green' }}>-</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                </div>

              </div>
              <div className="flex_box_2">
                <div className="flex_left">
                  <p>Sidekick AI Assistant: 10x faster accessibility workflow</p>

                </div>

                <div className="flex_right">
                  <div style={{ fontSize: '24px', color: 'green' }}>-</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                </div>

              </div>

              <div className="flex_box_2 box_2_color">
                <div className="flex_left">
                  <p>Sidekick AI Assistant: 10x faster accessibility workflow</p>

                </div>

                <div className="flex_right">
                  <div style={{ fontSize: '24px', color: 'green' }}>-</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                </div>

              </div>

              <div className="flex_box_2">
                <div className="flex_left">
                  <p>Sidekick AI Assistant: 10x faster accessibility workflow</p>

                </div>

                <div className="flex_right">
                  <div style={{ fontSize: '24px', color: 'green' }}>-</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                </div>

              </div>
              <div className="flex_box_2 box_2_color">
                <div className="flex_left">
                  <p>Sidekick AI Assistant: 10x faster accessibility workflow</p>

                </div>

                <div className="flex_right">
                  <div style={{ fontSize: '24px', color: 'green' }}>-</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                </div>

              </div>

              <div className="flex_box_2">
                <div className="flex_left">
                  <p>Sidekick AI Assistant: 10x faster accessibility workflow</p>

                </div>

                <div className="flex_right">
                <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                </div>

              </div>
              <div className="flex_box_2 box_2_color">
                <div className="flex_left">
                  <p>Sidekick AI Assistant: 10x faster accessibility workflow</p>

                </div>

                <div className="flex_right">
                <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                </div>

              </div>
              <div className="flex_box_2">
                <div className="flex_left">
                  <p>Sidekick AI Assistant: 10x faster accessibility workflow</p>

                </div>

                <div className="flex_right">
                <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                </div>

              </div>
              <div className="flex_box_2 box_2_color">
                <div className="flex_left">
                  <p>Sidekick AI Assistant: 10x faster accessibility workflow</p>

                </div>

                <div className="flex_right">
                <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                </div>

              </div>
              <div className="flex_box_2">
                <div className="flex_left">
                  <p>Sidekick AI Assistant: 10x faster accessibility workflow</p>

                </div>

                <div className="flex_right">
                <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                </div>

              </div>
              <div className="flex_box_2 box_2_color">
                <div className="flex_left">
                  <p>Sidekick AI Assistant: 10x faster accessibility workflow</p>

                </div>

                <div className="flex_right">
                <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>
                  <div style={{ fontSize: '24px', color: 'green' }}>✓</div>

                </div>

              </div>
            </div>

          </section>

        </div>

      </main>


      <Footer />



    </div>
  )
}