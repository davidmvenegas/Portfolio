import './blogs.css'
import { useEffect, useState } from 'react'
import ReactBanner from '../Media/Images/blog-banners/react-banner.jpg'
import JavascriptBanner from '../Media/Images/blog-banners/javascript-banner.jpg'
import RubyBanner from '../Media/Images/blog-banners/ruby-banner.png'
import MediumClap from '../Media/Images/medium-clap.png'

function Blogs() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    const [blog1, setBlog1] = useState(true)
    const [blog2, setBlog2] = useState(false)
    const [blog3, setBlog3] = useState(false)
    function handleBlog1() {
        setBlog1(true)
        setBlog2(false)
        setBlog3(false)
    }
    function handleBlog2() {
        setBlog1(false)
        setBlog2(true)
        setBlog3(false)
    }
    function handleBlog3() {
        setBlog1(false)
        setBlog2(false)
        setBlog3(true)
    }
    return (
        <div className='blogs-container'>
            <h1 className="blog-header">
                <span>B</span>
                <span>l</span>
                <span>o</span>
                <span>g</span>
                <span>s</span>
            </h1>
            <p className="blog-description">I enjoy keeping myself informed. Here's a few things I've written.</p>
            <div className="blog-wrapper">
                <input type="radio" name="slider" id="blog-item-1" defaultChecked/>
                <input type="radio" name="slider" id="blog-item-2"/>
                <input type="radio" name="slider" id="blog-item-3"/>
                <div className="blog-cards">
                    <label style={blog1 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-1" id="blog-slide-1" onClick={() => handleBlog1()}>
                        <div className="blog-content">
                            <img className='blog-image' src={ReactBanner} alt="React Banner" />
                            <div className="blog-text-content">
                                <h1 className='blog-title'><a style={blog1 ? null : {pointerEvents: "none"}} href='https://medium.com/@venegasdavidm/the-origin-of-react-db39d84c8503' target="_blank" rel="noreferrer">The Origin of React</a></h1>
                                <div className="blog-start-wrap">
                                    <p className='blog-start'>Learn the history behind one of the world’s most popular programming libraries. React, (also known as ReactJS or React.js) is a popular free and open-source front-end Javascript library that is used for building UI components and user interfaces. It was created by Facebook and is still maintained by them along with an ever growing<span id='blogStartResponsive'> community of companies and individual developers. It is currently listed at or near the top of many industry rankings for popularity, developer</span>...&nbsp; <a style={blog1 ? null : {pointerEvents: "none"}} href='https://medium.com/@venegasdavidm/the-origin-of-react-db39d84c8503' target="_blank" rel="noreferrer">Read More</a></p>
                                </div>
                            </div>
                            <div className="blog-facts">
                                <h4 className="blog-date">Nov 17, 2021</h4>
                                <h2 className="blog-read">3 Minute Read</h2>
                                <div className="blog-likes">
                                    <img src={MediumClap} alt="Claps" />
                                    <p>104</p>
                                </div>
                            </div>
                        </div>
                    </label>
                    <label style={blog2 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-2" id="blog-slide-2" onClick={() => handleBlog2()}>
                        <div className="blog-content">
                            <img className='blog-image' src={JavascriptBanner} alt="Javascript Banner" />
                            <div className="blog-text-content">
                                <h1 className='blog-title'><a style={blog2 ? null : {pointerEvents: "none"}} href='https://medium.com/@venegasdavidm/the-origin-of-javascript-288154b923e' target="_blank" rel="noreferrer">The Origin Of JavaScript</a></h1>
                                <div className="blog-start-wrap">
                                    <p className='blog-start'>In 1995 Brendan Eich, a Netscape Communications Corporation programmer, took 10 days to develop a scripting language he called Mocha. Back than internet connectivity used dial-up connections with telephone lines and modems, so when you filled out a form on a website — which was usually coded using a language like<span id='blogStartResponsive'> Perl — the validation of the input fields of any form had to make a full round trip to the server. This was not only very, very slow, but even could cause</span>...&nbsp; <a style={blog2 ? null : {pointerEvents: "none"}} href='https://medium.com/@venegasdavidm/the-origin-of-javascript-288154b923e' target="_blank" rel="noreferrer">Read More</a></p>
                                </div>
                            </div>
                            <div className="blog-facts">
                                <h4 className="blog-date">Oct 19, 2021</h4>
                                <h2 className="blog-read">2 Minute Read</h2>
                                <div className="blog-likes">
                                    <img src={MediumClap} alt="Claps" />
                                    <p>57</p>
                                </div>
                            </div>
                        </div>
                    </label>
                    <label style={blog3 ? {cursor: 'inherit'} : {cursor: "pointer"}} className="blog-card" htmlFor="blog-item-3" id="blog-slide-3" onClick={() => handleBlog3()}>
                        <div className="blog-content">
                            <img className='blog-image' src={RubyBanner} alt="Ruby Banner" />
                            <div className="blog-text-content">
                                <h1 className='blog-title'><a style={blog3 ? null : {pointerEvents: "none"}} href='https://medium.com/@venegasdavidm/the-best-ruby-enumerables-6d71fa5f933e' target="_blank" rel="noreferrer">The Best Ruby Enumerables</a></h1>
                                <div className="blog-start-wrap">
                                    <p className='blog-start'><i>Here are a few of the best ruby enumerables and methods:</i> <br /> <b>all?</b> <br /> Return true when all elements passed into the block are true. <br /> <b>any?</b> <br /> Return true when all at least one element<span id='blogStartResponsive'> results in true when</span>...&nbsp; <a style={blog3 ? null : {pointerEvents: "none"}} href='https://medium.com/@venegasdavidm/the-best-ruby-enumerables-6d71fa5f933e' target="_blank" rel="noreferrer">Read More</a></p>
                                </div>
                            </div>
                            <div className="blog-facts">
                                <h4 className="blog-date">Nov 23, 2021</h4>
                                <h2 className="blog-read">2 Minute Read</h2>
                                <div className="blog-likes">
                                    <img src={MediumClap} alt="Claps" />
                                    <p>64</p>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Blogs
