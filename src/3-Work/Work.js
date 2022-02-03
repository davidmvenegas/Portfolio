import './work.css'
import { useNavigate } from 'react-router-dom'

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
                        <div className="port-items-t">
                            <div className="port-item-t">
                                <div className="port-gif-box-t">
                                    <img className='port-gif-t' src="" alt="Grocery Magix Gif" />
                                    <div className="portGifPopup-t">
                                        <p>Visit the site</p>
                                    </div>
                                </div>
                                <div className="port-text-box-t">
                                    <h1 className="port-title-t">Grocery Magix<span>&trade;</span></h1>
                                    <a className="port-title-site-t" href='https://www.grocerymagix.com/' target="_blank" rel="noreferrer">www.grocerymagix.com</a>
                                    <p className="port-headline-t">Search through millions of recipes, pick your favorites and instantly generate a shopping list.</p>
                                    <div className="port-btn-box-t">
                                        <button className="port-btn-visit-t">Visit Site</button>
                                        <button className="port-btn-more-t">More Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="port-item-t">
                                <div className="port-gif-box-t">
                                    <img className='port-gif-t' src="" alt="Grocery Magix Gif" />
                                    <div className="portGifPopup-t">
                                        <p>Visit the site</p>
                                    </div>
                                </div>
                                <div className="port-text-box-t">
                                    <h1 className="port-title-t">Grocery Magix<span>&trade;</span></h1>
                                    <a className="port-title-site-t" href='https://www.grocerymagix.com/' target="_blank" rel="noreferrer">www.grocerymagix.com</a>
                                    <p className="port-headline-t">Search through millions of recipes, pick your favorites and instantly generate a shopping list.</p>
                                    <div className="port-btn-box-t">
                                        <button className="port-btn-visit-t">Visit Site</button>
                                        <button className="port-btn-more-t">More Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div className="port-items-b">
                            <div className="port-item-b">
                                <div className="port-gif-box-b">
                                    <img className='port-gif-b' src="" alt="Grocery Magix Gif" />
                                    <div className="portGifPopup-b">
                                        <p>Visit the site</p>
                                    </div>
                                </div>
                                <div className="port-text-box-b">
                                    <h1 className="port-title-b">Grocery Magix<span>&trade;</span></h1>
                                    <a className="port-title-site-b" href='https://www.grocerymagix.com/' target="_blank" rel="noreferrer">www.grocerymagix.com</a>
                                    <p className="port-headline-b">Search through millions of recipes, pick your favorites and instantly generate a shopping list.</p>
                                    <div className="port-btn-box-b">
                                        <button className="port-btn-visit-b">Visit Site</button>
                                        <button className="port-btn-more-b">More Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="port-item-b">
                                <div className="port-gif-box-b">
                                    <img className='port-gif-b' src="" alt="Grocery Magix Gif" />
                                    <div className="portGifPopup-b">
                                        <p>Visit the site</p>
                                    </div>
                                </div>
                                <div className="port-text-box-b">
                                    <h1 className="port-title-b">Grocery Magix<span>&trade;</span></h1>
                                    <a className="port-title-site-b" href='https://www.grocerymagix.com/' target="_blank" rel="noreferrer">www.grocerymagix.com</a>
                                    <p className="port-headline-b">Search through millions of recipes, pick your favorites and instantly generate a shopping list.</p>
                                    <div className="port-btn-box-b">
                                        <button className="port-btn-visit-b">Visit Site</button>
                                        <button className="port-btn-more-b">More Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="port-item-b">
                                <div className="port-gif-box-b">
                                    <img className='port-gif-b' src="" alt="Grocery Magix Gif" />
                                    <div className="portGifPopup-b">
                                        <p>Visit the site</p>
                                    </div>
                                </div>
                                <div className="port-text-box-b">
                                    <h1 className="port-title-b">Grocery Magix<span>&trade;</span></h1>
                                    <a className="port-title-site-b" href='https://www.grocerymagix.com/' target="_blank" rel="noreferrer">www.grocerymagix.com</a>
                                    <p className="port-headline-b">Search through millions of recipes, pick your favorites and instantly generate a shopping list.</p>
                                    <div className="port-btn-box-b">
                                        <button className="port-btn-visit-b">Visit Site</button>
                                        <button className="port-btn-more-b">More Details</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                    </div>
                </div>
            <div className="other-work-wrapper"></div>
        </div>
    )
}

export default Work
