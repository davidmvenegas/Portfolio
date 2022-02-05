import './modal.css'
import { useEffect } from 'react'
import { ImCross } from 'react-icons/im'

function Modal({open, setOpenModal, data}) {
    useEffect(() => {open ?  document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [open])
    return (
        <div className='modal-container' style={open ? null : {display: "none"}}>
            <ImCross id="leave-modal" onClick={() => setOpenModal(false)}/>
            <div className="modal-wrapper">
                <div className="modal-video-wrapper">
                    <h1 className="modal-video-title">2 Minute Video Demonstration <br /><span>of</span><br /> <span>Grocery Magix<span id='modal-trade'>&trade;</span></span></h1>
                    <div className="iframe-wrapper">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/05RJu6q-kU0" 
                            title="Grocery Magix" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
                            allowfullscreen="allowfullscreen"
                        ></iframe>
                    </div>
                </div>
                <div className="modal-text-wrapper">
                    <div className="modal-header">
                        <div className="modal-title-wrapper">
                            <img src={data[0].logo} alt="Logo" />
                            <h1 className="modal-title">Grocery Magix</h1>
                        </div>
                        <a className="modal-link" href="https://www.grocerymagix.com/" target="_blank" rel="noreferrer">www.grocerymagix.com</a>
                        <div className="modal-tools-wrapper">
                            {data[0].tools.map(Tool => 
                                <Tool className="modal-tool"/>
                            )}
                        </div>
                    </div>
                    <div className="modal-body">
                        <p className="modal-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, beatae itaque. Fuga harum obcaecati architecto quasi recusandae facere minus inventore?</p>
                        <p className="modal-features-header">Features include:</p>
                        <ul className="modal-features">
                            <li className="modal-feature">Full Register/Login system</li>
                            <li className="modal-feature">Mobile Responsive</li>
                            <li className="modal-feature">Lorem, ipsum dolor.</li>
                            <li className="modal-feature">Lorem, ipsum dolor.</li>
                        </ul>
                        <p className="modal-finisher">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, voluptates.</p>
                    </div>
                    <div className="modal-visit-site">
                        <div className='modal-visit-wrap'>
                            <div className="front">VISIT WEBSITE</div>
                            <div className="back">VISIT WEBSITE</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
