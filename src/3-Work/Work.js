import './work.css'
import './otheritem.css'
import OtherItem from './OtherItem'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsArrowRight, BsBoxArrowUpRight } from 'react-icons/bs'
import Modal from './Modal/Modal'
import { useInView } from 'react-intersection-observer'
// Main Logos
import MySimpleWardrobeGif from '../Media/Gifs/MySimpleWardrobeGif.gif'
import GroceryMagixGif from '../Media/Gifs/GroceryMagixGif.gif'
import TheFinancialTrackerGif from '../Media/Gifs/TheFinanceTrackerGif.gif'
import MyCryptomaticGif from '../Media/Gifs/MyCryptomaticGif.gif'
import MySimpleWardrobeLogo from '../Media/Images/portfolio-logos/MySimpleWardrobeLogo.png'
import GroceryMagixLogo from '../Media/Images/portfolio-logos/GroceryMagixLogo.png'
import TheFinancialTrackerLogo from '../Media/Images/portfolio-logos/TheFinancialTrackerLogo.png'
import MyCryptomaticLogo from '../Media/Images/portfolio-logos/MyCryptomaticLogo.png'
// Other Logos
import WeatherLogo from '../Media/Images/other-work-icons/WeatherAppLogo.png'
import BooklistLogo from '../Media/Images/other-work-icons/MyBooklistLogo.png'
import QuizLogo from '../Media/Images/other-work-icons/MiniQuizLogo.png'
import TicTacToeLogo from '../Media/Images/other-work-icons/TicTacToeLogo.png'
import CalculatorLogo from '../Media/Images/other-work-icons/CalculatorLogo.png'
import RockPaperScissorsLogo from '../Media/Images/other-work-icons/RockPaperScissorsLogo.png'
import CoinFlipLogo from '../Media/Images/other-work-icons/CoinFlipLogo.png'
import RestaurantLogo from '../Media/Images/other-work-icons/RestaurantPageLogo.png'
import StarbucksLogo from '../Media/Images/other-work-icons/StarbucksLogo.png'
import NotesLogo from '../Media/Images/other-work-icons/NotesAppLogo.png'
import PasswordLogo from '../Media/Images/other-work-icons/PasswordGeneratorLogo.png'
import NewYearsLogo from '../Media/Images/other-work-icons/NewYearsTimerLogo.png'

function Work() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    const navigate = useNavigate()
    const [port1, setPort1] = useState(false)
    const [port2, setPort2] = useState(false)
    const [port3, setPort3] = useState(false)
    const [port4, setPort4] = useState(false)
    const [modalID, setModalID] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [otherSepRef, otherSepInView] = useInView({threshold: 0, triggerOnce: true})
    const [otherTitleRef, otherTitleInView] = useInView({threshold: 0, triggerOnce: true})
    const [otherDescRef, otherDescInView] = useInView({threshold: 0, triggerOnce: true})
    const otherData = [
        {id: 1, title: 'Weather App', image: WeatherLogo, github: "https://github.com/davidmvenegas/weather_app", link: "https://davidmvenegas.github.io/weather_app", largeTitle: false},
        {id: 2, title: 'Favorite Books', image: BooklistLogo, github: "https://github.com/davidmvenegas/booklist", link: "https://davyvegasbooklist.com", largeTitle: false},
        {id: 3, title: 'Coin Flip', image: CoinFlipLogo, github: "https://github.com/davidmvenegas/coin-flip", link: "https://davidmvenegas.github.io/coin-flip", largeTitle: false},
        {id: 4, title: 'Tic-Tac-Toe', image: TicTacToeLogo, github: "https://github.com/davidmvenegas/ticTacToe-Game", link: "https://davidmvenegas.github.io/ticTacToe-Game", largeTitle: false},
        {id: 5, title: 'Calculator', image: CalculatorLogo, github: "https://github.com/davidmvenegas/calculator", link: "https://davidmvenegas.github.io/calculator", largeTitle: false},
        {id: 6, title: 'Rock Paper Scissors', image: RockPaperScissorsLogo, github: "https://github.com/davidmvenegas/rock-paper-scissors", link: "https://davidmvenegas.github.io/rock-paper-scissors", largeTitle: true},
        {id: 7, title: 'Mini Quiz', image: QuizLogo, github: "https://github.com/davidmvenegas/JS-Quiz", link: "https://davidmvenegas.github.io/JS-Quiz", largeTitle: false},
        {id: 8, title: 'Starbucks Page', image: StarbucksLogo, github: "https://github.com/davidmvenegas/starbucks-home-page-clone", link: "https://davidmvenegas.github.io/starbucks-home-page-clone/", largeTitle: false},
        {id: 9, title: 'Restaurant Page', image: RestaurantLogo, github: "https://github.com/davidmvenegas/burgerhouse", link: "https://davidmvenegas.github.io/burgerhouse", largeTitle: false},
        {id: 10, title: 'Notes App', image: NotesLogo, github: "https://github.com/davidmvenegas/notes-app", link: "https://davidmvenegas.github.io/notes-app", largeTitle: false},
        {id: 11, title: 'Password Generator', image: PasswordLogo, github: "https://github.com/davidmvenegas/PasswordGenerator", link: "https://davidmvenegas.github.io/PasswordGenerator", largeTitle: true},
        {id: 12, title: 'New Years Timer', image: NewYearsLogo, github: "https://github.com/davidmvenegas/JS-CountdownTimer", link: "https://davidmvenegas.github.io/JS-CountdownTimer", largeTitle: false},
    ]
    function handleOpenModal(id) {
        setModalID(id)
        setPort1(false)
        setPort2(false)
        setPort3(false)
        setPort4(false)
        setOpenModal(true)
    }
    return (
        <div className='work-container'>
            <Modal open={openModal} setOpenModal={setOpenModal} modalID={modalID}/>
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
                    <span>A&nbsp;</span>
                    <span>gallery&nbsp;</span>
                    <span>of&nbsp;</span>
                    <span>recent&nbsp;</span>
                    <span>projects&nbsp;</span>
                    <span>I've&nbsp;</span>
                    <span>built.&nbsp;</span>
                    <span onClick={() => navigate('/contact')}>Contact me</span>
                    <span>&nbsp;for&nbsp;</span>
                    <span>a&nbsp;</span>
                    <span>complete&nbsp;</span>
                    <span>code&nbsp;</span>
                    <span>walkthrough.&nbsp;</span>
                </p>
                <div className="port-items">
                    <div className="port-item" id='portItem1' onMouseEnter={() => setPort1(true)} onMouseLeave={() => setPort1(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif' src={MySimpleWardrobeGif} alt="My Simple Wardrobe Gif" style={port1 ? {opacity: "1"} : {opacity: "0"}}/>
                                <img className='port-gif port-gif-logo' src={MySimpleWardrobeLogo} alt="My Simple Wardrobe Logo" style={port1 ? {opacity: "0"} : {opacity: "1"}}/>
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
                                <div className='port-btn-more' onClick={() => handleOpenModal(1)}>
                                    <span id='port-more-text'>More Details</span>
                                    <BsArrowRight id='port-more-arrow'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="port-item" id='portItem2' onMouseEnter={() => setPort2(true)} onMouseLeave={() => setPort2(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif' src={GroceryMagixGif} alt="Grocery Magix Gif" style={port2 ? {opacity: "1"} : {opacity: "0"}}/>
                                <img className='port-gif port-gif-logo' src={GroceryMagixLogo} alt="Grocery Magix Logo" style={port2 ? {opacity: "0"} : {opacity: "1"}}/>
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
                                <div className='port-btn-more' onClick={() => handleOpenModal(2)}>
                                    <span id='port-more-text'>More Details</span>
                                    <BsArrowRight id='port-more-arrow'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="port-item" id='portItem3' onMouseEnter={() => setPort3(true)} onMouseLeave={() => setPort3(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif' src={TheFinancialTrackerGif} alt="The Financial Tracker Gif" style={port3 ? {opacity: "1"} : {opacity: "0"}}/>
                                <img className='port-gif port-gif-logo' src={TheFinancialTrackerLogo} alt="The Financial Tracker Logo" style={port3 ? {opacity: "0"} : {opacity: "1"}}/>
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
                                <div className='port-btn-more' onClick={() => handleOpenModal(3)}>
                                    <span id='port-more-text'>More Details</span>
                                    <BsArrowRight id='port-more-arrow'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="port-item" id='portItem4' onMouseEnter={() => setPort4(true)} onMouseLeave={() => setPort4(false)}>
                        <div className="port-gif-box">
                            <div className="port-gif-wrapper">
                                <img className='port-gif' src={MyCryptomaticGif} alt="Grocery Magix Gif" style={port4 ? {opacity: "1"} : {opacity: "0"}}/>
                                <img className='port-gif port-gif-logo' src={MyCryptomaticLogo} alt="Grocery Magix Logo" style={port4 ? {opacity: "0"} : {opacity: "1"}}/>
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
                                <div className='port-btn-more' onClick={() => handleOpenModal(4)}>
                                    <span id='port-more-text'>More Details</span>
                                    <BsArrowRight id='port-more-arrow'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="other-separator" ref={otherSepRef} id={otherSepInView ? "education-separator-active" : undefined}></div>
            <div className="other-wrapper">
                <h1 className="other-header" ref={otherTitleRef} id={otherTitleInView ? "certTitle-active" : undefined}>
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
                <p className="other-description" ref={otherDescRef} id={otherDescInView ? "otherDesc-active" : undefined}>
                    A collection of a few other things I've built. <span>Everything is fully mobile responsive.</span>
                </p>
                <div className="other-items">
                    {otherData.map((data) => (
                        <OtherItem key={data.id} data={data} />
                    ))}
                </div>
            </div>
            <div className="ending-work-this-wrapper">
                <p className="ending-work-this"><span>*</span>I also built this website (www.davidmvenegas.com) from the ground up. You can follow it's progress <span><a href='https://github.com/davidmvenegas/Portfolio' target="_blank" rel="noreferrer">here</a></span>.</p>
            </div>
        </div>
    )
}

export default Work
