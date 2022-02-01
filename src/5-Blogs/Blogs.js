import './blogs.css'
import NavRef from '../Navbar/Functions/NavRef'

function Blogs() {
    const blogsRef = NavRef('Blogs')

    return (
        <div ref={blogsRef} id='blogsContainer' className='blogsContainer'>
            BLOGS
        </div>
    )
}

export default Blogs
