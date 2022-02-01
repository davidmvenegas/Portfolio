import './mywork.css'
import NavRef from '../Navbar/Functions/NavRef'


function MyWork() {
    const myWorkRef = NavRef('My Work')

    return (
        <div ref={myWorkRef} id='myWorkContainer' className='myWorkContainer'>
            My Work
        </div>
    )
}

export default MyWork
