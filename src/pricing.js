import Header from "./header";
import Footer from "./footer";
import './pricing.css'; // Assuming you have a separate CSS file for styling

const plans = [
  {
    title: "Starter",
    description: "For individuals getting started with accessibility.",
    price: "Free",
    duration: "Forever",
    buttonText: "Create a free account",
    features: [
      "Access to all of Stark's non-automated tooling",
      "Smart Suggestions",
      "WCAG Scans in browser",
      "Accessibility Checklist widget in FigJam",
      "Access to Slack Community"
    ]
  },
  {
    title: "Premium",
    description: "For individuals looking to automate and accelerate accessibility.",
    price: "$21",
    duration: "per month (or $210 paid annually)",
    buttonText: "Purchase Premium",
    features: [
      "Everything in Starter, plus...",
      "Sidekick to auto-remediate design issues with AI suggestions",
      "1 Project with assets",
      "Real-time reports and insights",
      "Automatic WCAG scans and reports in browser",
      "Live code highlighting in browser web dev console"
    ]
  },
  {
    title: "Business",
    description: "For smaller teams needing to comply with confidence.",
    price: "$198",
    duration: "per user / year (starting at 3 seats)",
    buttonText: "Start a free 14-day trial",
    features: [
      "Everything in Premium, plus...",
      "Unlimited Projects for collaboration across design, code, PM, and QA",
      "Shared real-time accessibility reports and insights for Figma files, code repos and live URLs",
      "Centralized team management and admin",
      "Consolidated billing"
    ]
  },
  {
    title: "Enterprise",
    description: "Scaling organizations with custom workflows and security",
    price: "Contact Sales",
    buttonText: "Talk to Sales",
    features: [
      "Everything in Business, plus...",
      "Dedicated enterprise account manager and priority support.",
      "Enterprise-grade security, SOC2 and GDPR certified",
      "Compliance Center to manage accessibility posture",
      "Customizable terms and security reviews"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="pricing-layout">
      <Header />

      <main className="pricing-container">
        <section className="pricing-intro">
          <h1>Pricing Plans</h1>
          <p>
            Whether you're a small but mighty team, or 100,000 strong, we've got a plan to support what you need. Sign up and get started today.
          </p>
        </section>

        <section className="pricing-plans">
          {plans.map((plan, index) => (
            <div key={index} className="pricing-plan">
              <h6>{plan.title}</h6>
              <p>{plan.description}</p>
              <h3>{plan.price}</h3>
              {plan.duration && <span>{plan.duration}</span>}
              <button>{plan.buttonText}</button>
              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="pricing-comparison">
          <h1>Compare Plans</h1>
          <p>Check out all the features by plan to determine what fits your needs of you or your team.</p>
          {/* Comparison table could be implemented here */}
        </section>
      </main>

      <Footer />
    </div>
  );
}