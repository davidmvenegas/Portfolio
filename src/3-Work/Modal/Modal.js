import './modal.css'
import { useEffect } from 'react'
import { ImCross } from 'react-icons/im'

function Modal({open, setOpenModal}) {
    useEffect(() => {open ?  document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [open])
    return (
        <div className='modal-container' style={open ? null : {display: "none"}}>
            <ImCross id="leave-modal" onClick={() => setOpenModal(false)}/>
            <div className="modal-video-wrapper">
                <h1 className="modal-video-title">2 Minute Video Demonstration</h1>
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
            <div className="modal-text-wrapper">
                <div className="modal-title-wrapper">
                    <img src="" alt="Logo" />
                    <h1 className="modal-title">Grocery Magix</h1>
                </div>
                <div className="modal-tools-wrapper">
                    <img src="" alt="Tool" />
                    <img src="" alt="Tool" />
                    <img src="" alt="Tool" />
                </div>
                <h6 className="modal-link">www.grocerymagix.com</h6>
                <p className="modal-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, beatae itaque. Fuga harum obcaecati architecto quasi recusandae facere minus inventore?</p>
                <ul className="modal-features">
                    <li className="modal-feature">Full Register/Login system</li>
                    <li className="modal-feature">Mobile Responsive</li>
                    <li className="modal-feature">Lorem, ipsum dolor.</li>
                    <li className="modal-feature">Lorem, ipsum dolor.</li>
                </ul>
                <p className="modal-finisher">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, voluptates.</p>
                <button className="modal-visit-site">Visit Site</button>
            </div>
        </div>
    )
}

export default Modal;
