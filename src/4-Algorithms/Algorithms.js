import './algorithms.css'
import { useEffect } from 'react'

function Algorithms() {
    useEffect(() => {window.scrollTo(0, 0)}, [])
    return (
        <div className='algo-container'>
            <h1 className="algo-header">
                        <span>A</span>
                        <span>l</span>
                        <span>g</span>
                        <span>o</span>
                        <span>r</span>
                        <span>i</span>
                        <span>t</span>
                        <span>h</span>
                        <span>m</span>
                        <span>s</span>
                </h1>
                <p className="algo-description">
                    <div id='algo-slide1'>Algorithms improve my ability to solve problems.&nbsp;&nbsp;</div> 
                    <div id='algo-slide2'> 
                        <span id='algo-child-slide'>Here are a few of my favorites.</span>
                    </div>
                </p>
                <div className="algo-wrapper">
                    <div id='algoJavascript' className="algo-item algo-item1">
                        <div className="algo-title-box">
                            <p>Javascript</p>
                            <p>3 Min</p>
                        </div>
                        <div className="algo-iframe-wrapper">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/9bAy8m7AqtI"
                                title="Two Sum"
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
                                allowFullScreen="allowfullscreen"
                            ></iframe>
                        </div>
                    </div>
                    <div id='algoRuby' className="algo-item algo-item2">
                        <div className="algo-title-box">
                            <p>Ruby</p>
                            <p>1 Min</p>
                        </div>
                        <div className="algo-iframe-wrapper">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/H-li91AOe-0"
                                title="Fibonnaci"
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
                                allowFullScreen="allowfullscreen"
                            ></iframe>
                        </div>
                    </div>
                    <div id='algoJavascriptRuby' className="algo-item algo-item3">
                        <div className="algo-title-box">
                            <p>Javascript <span>&</span> <span>Ruby</span></p>
                            <p>2 Min</p>
                        </div>
                        <div className="algo-iframe-wrapper">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/uy5zOUKYgyo"
                                title="Palindrome"
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
                                allowFullScreen="allowfullscreen"
                            ></iframe>
                        </div>
                    </div>
                    <div id='algoJavascript' className="algo-item algo-item4">
                        <div className="algo-title-box">
                            <p>Javascript</p>
                            <p>1 Min</p>
                        </div>
                        <div className="algo-iframe-wrapper">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/kD7N_JpoV8A"
                                title="Caesar Cipher"
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
                                allowFullScreen="allowfullscreen"
                            ></iframe>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Algorithms
