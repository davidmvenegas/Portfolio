import './algorithms.css'

function Algorithms() {
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
                    <div className="algo-item">
                        <p>Javascript</p>
                    </div>
                </div>
        </div>
    )
}

export default Algorithms
