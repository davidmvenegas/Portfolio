import './work.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import MySimpleWardrobeGif from '../Media/Gifs/MySimpleWardrobeGif.gif'
import GroceryMagixGif from '../Media/Gifs/GroceryMagixGif.gif'
import TheFinancialTrackerGif from '../Media/Gifs/TheFinanceTrackerGif.gif'
import MyCryptomaticGif from '../Media/Gifs/MyCryptomaticGif.gif'
import MySimpleWardrobeLogo from '../Media/Images/portfolio-logos/MySimpleWardrobeLogo.png'
import GroceryMagixLogo from '../Media/Images/portfolio-logos/GroceryMagixLogo.png'
import TheFinancialTrackerLogo from '../Media/Images/portfolio-logos/TheFinancialTrackerLogo.png'
import MyCryptomaticLogo from '../Media/Images/portfolio-logos/MyCryptomaticLogo.png'
import { BsBoxArrowUpRight } from "react-icons/bs"
import FindMyLunchLogo from '../Media/Images/other-work-icons/findMyLunch.png'

function Work() {
    // useEffect(() => {window.scrollTo(0, 0)}, [])
    const navigate = useNavigate()
    const [port1, setPort1] = useState(false)
    const [port2, setPort2] = useState(false)
    const [port3, setPort3] = useState(false)
    const [port4, setPort4] = useState(false)
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
                    <div className="port-item" onMouseEnter={() => setPort1(true)} onMouseLeave={() => setPort1(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif' src={MySimpleWardrobeGif} alt="My Simple Wardrobe Gif" style={port1 ? {opacity: "1"} : {opacity: "0"}}/>
                                <img className='port-gif' src={MySimpleWardrobeLogo} alt="My Simple Wardrobe Logo" style={port1 ? {opacity: "0"} : {opacity: "1"}}/>
                            </div>
                            <a href='https://www.mysimplewardrobe.com/' target="_blank" rel="noreferrer">
                                <div className="portGifPopup">
                                    <p>Go to site</p>
                                    <BsBoxArrowUpRight id='goToSitePort'/>
                                </div>
                            </a>
                        </div>
                        <div className="port-text-box">
                            <h1 className="port-title">My Simple Wardrobe<span>&trade;</span></h1>
                            <a className="port-title-site" href='https://www.mysimplewardrobe.com/' target="_blank" rel="noreferrer">www.mysimplewardrobe.com</a>
                            <p className="port-headline">A fully functional eCommerce clothing store with Stripe&trade; checkout and an Admin panel.</p>
                            <div className="port-btn-box">
                                <div className='port-btn-more'>
                                    <span id='port-more-text'>More Details</span>
                                    <BsArrowRight id='port-more-arrow'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="port-item" onMouseEnter={() => setPort2(true)} onMouseLeave={() => setPort2(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif' src={GroceryMagixGif} alt="Grocery Magix Gif" style={port2 ? {opacity: "1"} : {opacity: "0"}}/>
                                <img className='port-gif' src={GroceryMagixLogo} alt="Grocery Magix Logo" style={port2 ? {opacity: "0"} : {opacity: "1"}}/>
                            </div>
                            <a href='https://www.grocerymagix.com/' target="_blank" rel="noreferrer">
                                <div className="portGifPopup">
                                    <p>Go to site</p>
                                    <BsBoxArrowUpRight id='goToSitePort'/>
                                </div>
                            </a>
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
                    <div className="port-item" onMouseEnter={() => setPort3(true)} onMouseLeave={() => setPort3(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif' src={TheFinancialTrackerGif} alt="The Financial Tracker Gif" style={port3 ? {opacity: "1"} : {opacity: "0"}}/>
                                <img className='port-gif' src={TheFinancialTrackerLogo} alt="The Financial Tracker Logo" style={port3 ? {opacity: "0"} : {opacity: "1"}}/>
                            </div>
                            <a href='https://www.thefinancialtracker.com/' target="_blank" rel="noreferrer">
                                <div className="portGifPopup">
                                    <p>Go to site</p>
                                    <BsBoxArrowUpRight id='goToSitePort'/>
                                </div>
                            </a>
                        </div>
                        <div className="port-text-box">
                            <h1 className="port-title">The Financial Tracker<span>&trade;</span></h1>
                            <a className="port-title-site" href='https://www.thefinancialtracker.com/' target="_blank" rel="noreferrer">www.thefinancialtracker.com</a>
                            <p className="port-headline">Track your income, set a budget and visualize your saving goals with this personal finance tracker.</p>
                            <div className="port-btn-box">
                                <div className='port-btn-more'>
                                    <span id='port-more-text'>More Details</span>
                                    <BsArrowRight id='port-more-arrow'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="port-item" onMouseEnter={() => setPort4(true)} onMouseLeave={() => setPort4(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif' src={MyCryptomaticGif} alt="Grocery Magix Gif" style={port4 ? {opacity: "1"} : {opacity: "0"}}/>
                                <img className='port-gif' src={MyCryptomaticLogo} alt="Grocery Magix Logo" style={port4 ? {opacity: "0"} : {opacity: "1"}}/>
                            </div>
                            <a href='https://www.mycryptomatic.com/' target="_blank" rel="noreferrer">
                                <div className="portGifPopup">
                                    <p>Go to site</p>
                                    <BsBoxArrowUpRight id='goToSitePort'/>
                                </div>
                            </a>
                        </div>
                        <div className="port-text-box">
                            <h1 className="port-title">My Cryptomatic<span>&trade;</span></h1>
                            <a className="port-title-site" href='https://www.mycryptomatic.com/' target="_blank" rel="noreferrer">www.mycryptomatic.com</a>
                            <p className="port-headline">A cryptocurrency tracker with a view of the markets, watchlist, portfolio calculator and news.</p>
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
            <div className="other-separator"></div>
            <div className="other-wrapper">
                <h1 className="other-header">
                        <span>O</span>
                        <span>t</span>
                        <span>h</span>
                        <span>e</span>
                        <span>r</span>&nbsp;
                        <span>W</span>
                        <span>o</span>
                        <span>r</span>
                        <span>k</span>
                </h1>
                <p className="other-description">
                    A collection of some other work I've done. Everything is fully mobile responsive.
                </p>
                <div className="other-items">
                    <a href="https://findmylunch.com" target="_blank" rel="noreferrer" className='other-item-link'>
                        <div className="other-item">
                            <div className='other-item-top'>
                                <div className="other-item-img-wrap">
                                    <img src={FindMyLunchLogo} alt='Find My Lunch'/>
                                </div>
                                <h1>Find My Lunch</h1>
                            </div>
                            <div className="other-item-bottom">
                                <p>A restaraunt finder using Yelp's fusion API. <br /> <span id='other-link-andrew'>(Made with Andrew Bussi)</span></p>
                                <button>Check it out &nbsp;<BsBoxArrowUpRight id='other-link-icon'/></button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Work
