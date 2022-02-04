import './otheritem.css'
import { useState } from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FaGithub } from "react-icons/fa"

function OtherItem({data}) {
    const [open, setOpen] = useState(false)
    return (
        <div className={open ? "other-item active" : "other-item"}>
            <div className='other-item-top' onClick={open ? () => setOpen(false) : () => setOpen(true)}>
                <div className="other-item-img-wrap">
                    <img src={data.image} alt='Find My Lunch'/>
                </div>
                <h1 id={data.largeTitle ? "smaller-other-title" : undefined}>{data.title}</h1>
            </div>
            <div className="other-item-bottom">
                <a className='other-item-link' href={data.link} target="_blank" rel="noreferrer">Check it out &nbsp;<BsBoxArrowUpRight id='other-link-icon'/></a>
                <a className='other-item-github' href={data.github} target="_blank" rel="noreferrer"><FaGithub id='other-item-github'/></a>
            </div>
        </div>
    )
}

export default OtherItem;
