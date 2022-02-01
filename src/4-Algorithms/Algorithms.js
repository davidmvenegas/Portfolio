import './algorithms.css'
import NavRef from '../Navbar/Functions/NavRef'

function Algorithms() {
    const algorithmsRef = NavRef('Algorithms')

    return (
        <div ref={algorithmsRef} id='algorithmsContainer' className='algorithmsContainer'>
            ALGORITHMS
        </div>
    )
}

export default Algorithms
