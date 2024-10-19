import Header from "./header"
import { FaArrowRight, FaStar, FaUsers, FaHeadset, FaMobileAlt, FaTh } from 'react-icons/fa';
import { MdOutlineNavigation } from 'react-icons/md';
import Footer from "./footer"



export default function Home() {


  return (
    <div className="home_layout_container">
      <Header />

      <main className="home_body">
        <section className="logo_container">
          {/* Insert multiple logos as needed */}
          <div className="logo_wrapper">
            <img src={require('./assets/bmw.png')} alt="BMW Logo" className="logo" />
            <img src={require('./assets/skoda.png')} alt="Audi Logo" className="logo" />
            <img src={require('./assets/mazda.png')} alt="Tesla Logo" className="logo" />
            <img src={require('./assets/benz.png')} alt="Mercedes Logo" className="logo" />
            <img src={require('./assets/ford.png')} alt="Ford Logo" className="logo" />
            <img src={require('./assets/porsche.png')} alt="Toyota Logo" className="logo" />
            <img src={require('./assets/land.png')} alt="Tesla Logo" className="logo" />
            <img src={require('./assets/fiat.png')} alt="Mercedes Logo" className="logo" />
            <img src={require('./assets/honda.png')} alt="Ford Logo" className="logo" />
            <img src={require('./assets/chevrolet.png')} alt="Toyota Logo" className="logo" />

          </div>

        </section>
        <section className="started_section">
          <div className="started_wrapper">
            <h1>Start selling online for free</h1>
            <span>We're putting free trials on trial. With onlinemarket, you get free forever. Set up yput free account once, and keep it as long as you ;like. Seriously</span>
            <button>Get started for free <FaArrowRight /></button>
            <blockquote>No credit card required</blockquote>
            <img src={require('./assets/started.png')} alt="sell Logo" className="started_logo" />
            <div className="started_miniwrapper">
              <div className="mini_container">
                <h6> <MdOutlineNavigation size={30} style={{ transform: 'rotate(45deg)', color: 'black' }} />Capterra</h6>
                <span> Best ease of use</span>

              </div>

              <div className="mini_container">
                <h6>       <FaStar color="gold" size={30} /> Trustpilot</h6>
                <span> 4.7 average rating</span>

              </div>

              <div className="mini_container">
                <h6>       <FaStar color="gold" size={30} /> Crowd</h6>
                <span> Easiest Setup Summer 2021</span>

              </div>

              <div className="mini_container">
                <h6>     <FaUsers size={30} color="black" />Crowd</h6>
                <span> Best Usability Summer 2021</span>

              </div>

            </div>
          </div>
        </section>

        <section className="sell_container">
          <main>
            <article className="sell_1">
              <div>
                <h1>Sell anywhere</h1>
                <span>Set up OnlineMarket store once to easily sync and sell across a website,. social media, marketplaces like Amazon, and live in-person. get started with one, or try them all</span>
                <button>Learn more  <FaArrowRight /></button>
              </div>
            </article>
            <article className="sell_2">
              <img src={require('./assets/sell2.png')} alt="sell Logo" className="sell_logo" />
            </article>
            <article className="sell_3">
              <div>
                <aside>
                  <h6>facebook</h6>
                  <span>Set up and manage a Facebook Store right from your online market dashboard.You're ready for social selling</span>
                </aside>
                <aside>
                  <h6>Instagram</h6>
                  <span>Turn your Instagram posts into purchasable products. Let shoppers buy from your posts</span>
                </aside>
              </div>
            </article>
            <article className="sell_4">
              <div className="sell_4_div">
                <p>This is the perfect place to get your online business up and running. You literally dont have to anywhere else. They have everything you need plus add on widgets web syncing to social media and more</p>
                <div className="sell_4_mini">
                  <div className="sell_4_img">
                    <img src={require('./assets/sell.jpg')} alt="sell Logo" className="logo" />
                    <span>Michelle Pierce</span>
                  </div>

                  <div className="star_bar">
                    <FaStar color="gold" size={15} />
                    <span>Trustpilot</span>
                    <FaStar color="gold" size={15} />
                    <FaStar color="gold" size={15} />
                    <FaStar color="gold" size={15} />
                    <FaStar color="gold" size={15} />

                  </div>
                </div>

              </div>
            </article>
          </main>

        </section>
        <section className="grow_container">
          <main>
            <article className="grow_1">
              <div>
                <h1>Grow Faster</h1>
                <span>Set up OnlineMarket store once to easily sync and sell across a website,. social media, marketplaces like Amazon, and live in-person. get started with one, or try them all</span>
                <button>Learn more  <FaArrowRight /></button>
              </div>
            </article>
            <article className="grow_2">
              <img src={require('./assets/grow.png')} alt="sell Logo" className="grow_logo" />
            </article>
            <article className="grow_3">
              <div>
                <aside>
                  <h6>Google advertising</h6>
                  <span>Set up and manage a Facebook Store right from your online market dashboard.You're ready for social selling</span>
                </aside>
                <aside>
                  <h6>Facebook advertising</h6>
                  <span>Turn your Instagram posts into purchasable products. Let shoppers buy from your posts</span>
                </aside>
              </div>
            </article>
            <article className="grow_4">
              <div className="grow_4_div">
                <p>This is the perfect place to get your online business up and running. You literally dont have to anywhere else. They have everything you need plus add on widgets web syncing to social media and more</p>
                <div className="grow_4_mini">
                  <div >

                    <div className="grow_4_img">
                      <img src={require('./assets/sell.jpg')} alt="sell Logo" className="logo" />
                      <span>Pamela Spencer</span>
                    </div>


                    <div className="star_bar">
                      <FaStar color="gold" size={15} />
                      <span>Trustpilot</span>
                      <FaStar color="gold" size={15} />
                      <FaStar color="gold" size={15} />
                      <FaStar color="gold" size={15} />
                      <FaStar color="gold" size={15} />

                    </div>
                  </div>
                </div>

              </div>
            </article>
          </main>

        </section>
        <section className="boxstyle_container">

          <article className="style_top_wrapper">
            <div className="style_top_box_1">
              <h1>Sell around the world</h1>
              <span>Take your small business global with built-in international payment tools and translation support for 50 languages- and counting</span>

            </div>
            <div className="style_top_box_2">
              <div>
                <h1>50+</h1>
                <span>Payment gateways</span>
              </div>
              <div>
                <h1>170+</h1>
                <span>Countries</span>
              </div>
              <div>
                <h1>30+</h1>
                <span>Languages</span>
              </div>
            </div>
          </article>

          <article className="style_middle_wrapper">
            <div className="style_middle_header">
              <div className="style_middle_box">
                <div className="box_logo"><FaHeadset size={30} color="black" /> </div>
                <div className="box">
                  <h6>Live Support</h6>
                  <span>Expert support, whenever you need it</span>
                </div>
                <p>Learn more  <FaArrowRight /></p>
              </div>

              <div className="style_middle_box">
                <div className="box_logo"><FaTh size={30} color="black" /></div>
                <div className="box">
                  <h6>OnlineMarket App Market</h6>
                  <span>TAke your store to the next level with new tools and apps from the online market partners</span>
                </div>
                <p>Learn more  <FaArrowRight /></p>

              </div>

              <div className="style_middle_box">
                <div className="box_logo"> <FaMobileAlt size={30} color="black" /> </div>
                <div className="box">
                  <h6>Manage on Mobile</h6>
                  <span>Manage business on the go with the Online Mobile App</span>
                </div>
                <p>Learn more  <FaArrowRight /></p>

              </div>

            </div>

          </article>

          <article className="style_bottom_wrapper">
            <div className="style_bottom_header">
              <h1>Your free online store is just a few clicks away</h1>
              <div>
                <button>Get started for free</button>
                <span> No credit card required</span>
              </div>
            </div>
          </article>


        </section>

      </main>

      <Footer />



    </div>
  )
}