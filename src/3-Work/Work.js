import './work.css'
import { useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import MySimpleWardrobeGif from '../Media/Gifs/MySimpleWardrobeGif.gif'
import GroceryMagixGif from '../Media/Gifs/GroceryMagixGif.gif'
import TheFinancialTrackerGif from '../Media/Gifs/TheFinanceTrackerGif.gif'
import MyCryptomaticGif from '../Media/Gifs/MyCryptomaticGif.gif'

function Work() {
    const navigate = useNavigate()
    return (
        <div className='work-container'>
            <div className="port-wrapper">
                <h1 className="port-header">
                        <span>M</span>
                        <span>y</span>&nbsp;
                        <span>P</span>
                        <span>o</span>
                        <span>r</span>
                        <span>t</span>
                        <span>f</span>
                        <span>o</span>
                        <span>l</span>
                        <span>i</span>
                        <span>o</span>
                    </h1>
                    <p className="port-description">
                        <div id='port-slide1'>A gallery of recent projects I've built.&nbsp;&nbsp;</div> 
                        <div id='port-slide2'> 
                            <span id='port-contact-slide'><span onClick={() => navigate('/contact')}>Contact me</span> for a complete code walkthrough.</span>
                        </div>
                    </p>
                    <div className="port-items">
                        <div className="port-item">
                            <div className="port-gif-box">
                                <img className='port-gif' src={MySimpleWardrobeGif} alt="My Simple Wardrobe Gif" />
                                <div className="portGifPopup">
                                    <p>Visit the site</p>
                                </div>
                            </div>
                            <div className="port-text-box">
                                <h1 className="port-title">My Simple Wardrobe<span>&trade;</span></h1>
                                <a className="port-title-site" href='https://www.mysimplewardrobe.com/' target="_blank" rel="noreferrer">www.mysimplewardrobe.com</a>
                                <p className="port-headline">A fully functional eCommerce clothing store with Stripe&trade; checkout and an Admin panel</p>
                                <div className="port-btn-box">
                                    <div className='port-btn-more'>
                                        <span id='port-more-text'>More Details</span>
                                        <BsArrowRight id='port-more-arrow'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="port-item">
                            <div className="port-gif-box">
                                <img className='port-gif' src={GroceryMagixGif} alt="Grocery Magix Gif" />
                                <div className="portGifPopup">
                                    <p>Visit the site</p>
                                </div>
                            </div>
                            <div className="port-text-box">
                                <h1 className="port-title">Grocery Magix<span>&trade;</span></h1>
                                <a className="port-title-site" href='https://www.grocerymagix.com/' target="_blank" rel="noreferrer">www.grocerymagix.com</a>
                                <p className="port-headline">Search through millions of recipes, pick your favorites and instantly generate a shopping list.</p>
                                <div className="port-btn-box">
                                    <div className='port-btn-more'>
                                        <span id='port-more-text'>More Details</span>
                                        <BsArrowRight id='port-more-arrow'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="port-item">
                            <div className="port-gif-box">
                                <img className='port-gif' src={TheFinancialTrackerGif} alt="The Financial Tracker Gif" />
                                <div className="portGifPopup">
                                    <p>Visit the site</p>
                                </div>
                            </div>
                            <div className="port-text-box">
                                <h1 className="port-title">The Financial Tracker<span>&trade;</span></h1>
                                <a className="port-title-site" href='https://www.thefinancialtracker.com/' target="_blank" rel="noreferrer">www.thefinancialtracker.com</a>
                                <p className="port-headline">Track your income, set a budget and visualize your saving goals with this personal finance tracker</p>
                                <div className="port-btn-box">
                                    <div className='port-btn-more'>
                                        <span id='port-more-text'>More Details</span>
                                        <BsArrowRight id='port-more-arrow'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="port-item">
                            <div className="port-gif-box">
                                <img className='port-gif' src={MyCryptomaticGif} alt="Grocery Magix Gif" />
                                <div className="portGifPopup">
                                    <p>Visit the site</p>
                                </div>
                            </div>
                            <div className="port-text-box">
                                <h1 className="port-title">Cryptomatic<span>&trade;</span></h1>
                                <a className="port-title-site" href='https://www.mycryptomatic.com/' target="_blank" rel="noreferrer">www.mycryptomatic.com</a>
                                <p className="port-headline">A cryptocurrency tracker with a view of the markets, watchlist, portfolio calculator and news</p>
                                <div className="port-btn-box">
                                    <div className='port-btn-more'>
                                        <span id='port-more-text'>More Details</span>
                                        <BsArrowRight id='port-more-arrow'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="other-work-wrapper"></div>
        </div>
    )
}

export default Work
