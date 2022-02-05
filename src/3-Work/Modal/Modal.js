import './modal.css'
import { useEffect } from 'react'
import { ImCross } from 'react-icons/im'

function Modal({open, setOpenModal}) {
    useEffect(() => {open ?  document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'}, [open])
    return (
        <div className='modal-container' style={open ? null : {display: "none"}}>
            <ImCross id="leave-modal" onClick={() => setOpenModal(false)}/>
            <p>THIS IS A MODAL</p>
        </div>
    )
}

export default Modal;
