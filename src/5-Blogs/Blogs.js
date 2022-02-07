import './blogs.css'
import ReactBanner from '../Media/Images/blog-banners/react-banner.jpg'
import JavascriptBanner from '../Media/Images/blog-banners/javascript-banner.jpg'
import RubyBanner from '../Media/Images/blog-banners/ruby-banner.png'

function Blogs() {
    return (
        <div className='blogs-container'>
            <h1 className="blog-header">
                <span>B</span>
                <span>l</span>
                <span>o</span>
                <span>g</span>
                <span>s</span>
            </h1>
            <p className="blog-description">A few things I've written.</p>
            <div className="blog-wrapper">
                <input type="radio" name="slider" id="blog-item-1" defaultChecked/>
                <input type="radio" name="slider" id="blog-item-2"/>
                <input type="radio" name="slider" id="blog-item-3"/>
                <div className="blog-cards">
                    <label className="blog-card" htmlFor="blog-item-1" id="blog-slide-1">
                        <div className="blog-content">
                            <img className='blog-image' src={ReactBanner} alt="React Banner" />
                            <div className="blog-text-content">
                                <h1 className='blog-title'>Title</h1>
                                <p className='blog-start'>Lorem ipsum dolor sit amet. <span>Read more...</span></p>
                            </div>
                            <div className="blog-facts">
                                <h4 className="blog-date">Aug 23rd, 2021</h4>
                                <h2 className="blog-read">3 min read</h2>
                                <div className="blog-likes">14</div>
                            </div>
                        </div>
                    </label>
                    <label className="blog-card" htmlFor="blog-item-2" id="blog-slide-2">
                        <div className="blog-content">
                            <img className='blog-image' src={JavascriptBanner} alt="Javascript Banner" />
                            <div className="blog-text-content">
                                <h1 className='blog-title'>Title</h1>
                                <p className='blog-start'>Lorem ipsum dolor sit amet. <span>Read more...</span></p>
                            </div>
                            <div className="blog-facts">
                                <h4 className="blog-date">Aug 23rd, 2021</h4>
                                <h2 className="blog-read">3 min read</h2>
                                <div className="blog-likes">14</div>
                            </div>
                        </div>
                    </label>
                    <label className="blog-card" htmlFor="blog-item-3" id="blog-slide-3">
                        <div className="blog-content">
                            <img className='blog-image' src={RubyBanner} alt="Ruby Banner" />
                            <div className="blog-text-content">
                                <h1 className='blog-title'>Title</h1>
                                <p className='blog-start'>Lorem ipsum dolor sit amet. <span>Read more...</span></p>
                            </div>
                            <div className="blog-facts">
                                <h4 className="blog-date">Aug 23rd, 2021</h4>
                                <h2 className="blog-read">3 min read</h2>
                                <div className="blog-likes">14</div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Blogs
