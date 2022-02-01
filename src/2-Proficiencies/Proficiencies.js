import './proficiencies.css'
import NavRef from '../Navbar/Functions/NavRef'

function Proficiencies() {
    const proficienciesRef = NavRef('Proficiencies')

    return (
        <div ref={proficienciesRef} id='proficienciesContainer' className='proficienciesContainer'>
            Proficiencies
        </div>
    )
}

export default Proficiencies
