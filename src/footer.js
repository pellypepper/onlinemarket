import { FaSearch, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube, FaPinterest, FaMicrophone } from 'react-icons/fa';

export default function Footer() {
    return (
        <section className='footer_container'>
            <main>
                <div className='footer_logo'>
                    <h1>Online <span style={{ color: "purple" }}>Market</span></h1>
                </div>

                <div className='footer_grid'>
                    <artice className="container">
                        <h3>SELL ONLINE</h3>

                        <div className="wrapper">
                            <p>Sell Everywhere</p>
                            <p>Sell on Social</p>
                            <p>Sell on Instagram</p>
                            <p>Sell on Tikok</p>
                            <p>Sell on Facebook</p>
                            <p>Sell on Google</p>
                            <p>Sell on Amazon</p>
                            <p>Sell on Whatsapp</p>
                            <p>SellApp</p>
                        </div>
                    </artice>

                    <artice className="container">
                        <h3>PRODUCT</h3>

                        <div className="wrapper">
                            <p>Features</p>
                            <p>Pricing</p>
                            <p>Watch Demo</p>
                            <p>Ecommerce Hosting</p>
                            <p>Subcriptions</p>
                            <p>Point of Sale</p>
                            <p>Buy new solution</p>

                        </div>
                    </artice>

                    <artice className="container">
                        <h3>FOR YOUR BUSINESS</h3>

                        <div className="wrapper">
                            <p>Ecommerce Website</p>
                            <p>WorldPress Ecommerce</p>
                            <p>Wix Ecommerce</p>
                            <p>Weebly Ecommerce</p>
                            <p>Ebay Ecommerce</p>
                            <p>Add Online Store</p>
                            <p>Jumia Ecommerce</p>

                        </div>
                    </artice>

                    <artice className="container">
                        <h3>PARTNERS</h3>

                        <div className="wrapper">
                            <p>Recuiter Program</p>
                            <p>Affliate Program</p>
                            <p>White Label Solutions</p>
                            <p>Referral Program</p>
                            <p>Developers</p>
                            <p>API documentation</p>
                            <p>Jumia Ecommerce</p>

                        </div>
                    </artice>

                    <artice className="container">
                        <h3>COMPANY</h3>

                        <div className="wrapper">
                            <p>About US</p>
                            <p>Press</p>
                            <p>OnlineMarket Blog</p>
                            <p>Referral Program</p>
                            <p>Settings</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>

                        </div>
                    </artice>

                    <artice className="container">
                        <h3>SUPPORT</h3>

                        <div className="wrapper">
                            <p>Help Center</p>
                            <p>Product Updates</p>
                            <p>Free Guide</p>
                            <p>Contact Support</p>
                            <p>Developers</p>
                            <p>OnlineMarket Academy</p>


                        </div>
                    </artice>

                </div>
                <aside className='footer_aside'>
                    <div className="search">
                        <input type="text" placeholder="Search...." />
                        <FaSearch size={15} color="white" />
                    </div>

                    <div className="icon">
                        <FaFacebook className='icon_logo' size={17} color="#4267B2" style={{ marginRight: '10px' }} />
                        <FaInstagram className='icon_logo' size={17} color="#E4405F" style={{ marginRight: '10px' }} /> {/* Instagram */}
                        <FaTiktok className='icon_logo' size={17} color="white" style={{ marginRight: '10px' }} /> {/* TikTok */}
                        <FaTwitter className='icon_logo' size={17} color="#1DA1F2" style={{ marginRight: '10px' }} /> {/* Twitter */}
                        <FaYoutube className='icon_logo' size={17} color="#FF0000" style={{ marginRight: '10px' }} /> {/* YouTube */}
                        <FaPinterest className='icon_logo' size={17} color="#E60023" style={{ marginRight: '10px' }} /> {/* Pinterest */}
                        <FaMicrophone className='icon_logo' size={17} color="#FF9800" style={{ marginRight: '10px' }} /> {/* VoiceNote/Microphone */}

                    </div>
                </aside>
            </main>
        </section>
    )
}