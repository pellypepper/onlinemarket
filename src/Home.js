import Header from "./header";
import "./home.css"
import Footer from "./footer";
import {
  FaArrowRight,
  FaStar,
  FaUsers,
  FaHeadset,
  FaMobileAlt,
  FaTh,
} from "react-icons/fa";
import { MdOutlineNavigation } from "react-icons/md";

const logos = [
  "bmw.png",
  "skoda.png",
  "mazda.png",
  "benz.png",
  "ford.png",
  "porsche.png",
  "land.png",
  "fiat.png",
  "honda.png",
  "chevrolet.png",
];

const miniContainers = [
  { icon: MdOutlineNavigation, label: "Capterra", desc: "Best ease of use" },
  { icon: FaStar, label: "Trustpilot", desc: "4.7 average rating" },
  { icon: FaStar, label: "Crowd", desc: "Easiest Setup Summer 2021" },
  { icon: FaUsers, label: "Crowd", desc: "Best Usability Summer 2021" },
];

const growSections = [
  { label: "Google advertising", desc: "Promote products with Google Ads" },
  { label: "Facebook advertising", desc: "Manage Facebook campaigns" },
];

const globalFeatures = [
  { count: "50+", label: "Payment gateways" },
  { count: "170+", label: "Countries" },
  { count: "30+", label: "Languages" },
];

const styleMiddleBoxes = [
  {
    icon: FaHeadset,
    title: "Live Support",
    desc: "Expert support, whenever you need it",
  },
  {
    icon: FaTh,
    title: "OnlineMarket App Market",
    desc: "Enhance your store with apps and tools",
  },
  {
    icon: FaMobileAlt,
    title: "Manage on Mobile",
    desc: "Run your business on the go",
  },
];

const LogoWrapper = () => (
  <section className="logo_container">
    <div className="logo_wrapper">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={require(`./assets/${logo}`)}
          alt={`${logo.split(".")[0]} Logo`}
          className="logo"
        />
      ))}
    </div>
  </section>
);

const MiniContainer = () => (
  <div className="started_miniwrapper">
    {miniContainers.map(({ icon: Icon, label, desc }, index) => (
      <div className="mini_container" key={index}>
        <h6>
          <Icon size={30} style={{ transform: "rotate(45deg)", color: "black" }} />
          {label}
        </h6>
        <span>{desc}</span>
      </div>
    ))}
  </div>
);

const FeatureBox = ({ count, label }) => (
  <div>
    <h1>{count}</h1>
    <span>{label}</span>
  </div>
);

const GrowArticle = ({ label, desc }) => (
  <aside>
    <h6>{label}</h6>
    <span>{desc}</span>
  </aside>
);

const StyleMiddleBox = ({ icon: Icon, title, desc }) => (
  <div className="style_middle_box">
    <div className="box_logo">
      <Icon size={30} color="black" />
    </div>
    <div className="box">
      <h6>{title}</h6>
      <span>{desc}</span>
    </div>
    <p>
      Learn more <FaArrowRight />
    </p>
  </div>
);

export default function Home() {
  return (
    <div className="home_layout_container">
      <Header />

      <main className="home_body">
        {/* Logo Section */}
        <section className="logo-container">
           <div className="logo-wrapper">
           <LogoWrapper />
           </div>
        </section>

        {/* Started Section */}
        <section className="started_section">
          <div className="started_wrapper">
            <h1>Start selling online for free</h1>
            <span>
              We're putting free trials on trial. With OnlineMarket, you get
              free forever. Set up your free account once, and keep it as long
              as you like. Seriously.
            </span>
            <button>
              Get started for free <FaArrowRight />
            </button>
            <blockquote>No credit card required</blockquote>
            <img
              src={require("./assets/started.png")}
              alt="sell Logo"
              className="started_logo"
            />
            <MiniContainer />
          </div>
        </section>

        {/* Sell Section */}
        <section className="sell_container">
          <main>
            <article className="sell_1">
              <div>
                <h1>Sell anywhere</h1>
                <span>
                  Set up OnlineMarket once to easily sync and sell across a
                  website, social media, marketplaces like Amazon, and live
                  in-person. Get started with one, or try them all.
                </span>
                <button>
                  Learn more <FaArrowRight />
                </button>
              </div>
            </article>
            <article className="sell_2">
              <img
                src={require("./assets/sell2.png")}
                alt="sell Logo"
                className="sell_logo"
              />
            </article>
            <article className="sell_3">
              <div>
                <GrowArticle
                  label="Facebook"
                  desc="Set up and manage a Facebook Store right from your OnlineMarket dashboard."
                  className='growarticle' />
                <GrowArticle
                  label="Instagram"
                  className='growarticle' 
                  desc="Turn your Instagram posts into purchasable products."
                />
              </div>
            </article>
          </main>
        </section>

        {/* Grow Section */}
        <section className="grow_container">
          <main>
           
            <article className="grow_2">
              <img
                src={require("./assets/grow.png")}
                alt="grow Logo"
                className="grow_logo"
              />
            </article>
             <article className="grow_1">
              <div>
                <h1>Grow Faster</h1>
                <span>
                  Expand your reach with marketing tools and integrations for
                  platforms like Google and Facebook.
                </span>
                <button>
                  Learn more <FaArrowRight />
                </button>
              </div>
            </article>
          </main>
        </section>

        {/* Boxstyle Section */}
        <section className="boxstyle_container">
          <article className="style_top_wrapper">
            <div className="style_top_box_1">
              <h1>Sell around the world</h1>
              <span>
                Take your small business global with built-in international
                tools.
              </span>
            </div>
            <div className="style_top_box_2">
              {globalFeatures.map((feature, index) => (
                <FeatureBox key={index} {...feature} />
              ))}
            </div>
          </article>
          <article className="style_middle_wrapper">
            <div className="style_middle_header">
              {styleMiddleBoxes.map((box, index) => (
                <StyleMiddleBox key={index} {...box} />
              ))}
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
