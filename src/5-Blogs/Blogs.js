import './blogs.css'

function Blogs() {
    return (
        <div className='blogs-container'>
            <h1 className="blog-header">
                <span>B</span>
                <span>l</span>
                <span>o</span>
                <span>g</span>
                <span>s</span>
            </h1>
            <p className="blog-description">Lorem ipsum dolor sit amet.</p>
            <div className="blog-wrapper">
                <input onChange={() => console.log("asd")} type="radio" name="slider" id="blog-item-1" defaultChecked/>
                <input onChange={() => console.log("asd")} type="radio" name="slider" id="blog-item-2"/>
                <input onChange={() => console.log("asd")} type="radio" name="slider" id="blog-item-3"/>
                <div className="blog-cards">
                    <label className="blog-card" htmlFor="blog-item-1" id="blog-slide-1">
                        <img src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song"/>
                    </label>
                    <label className="blog-card" htmlFor="blog-item-2" id="blog-slide-2">
                        <img src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song"/>
                    </label>
                    <label className="blog-card" htmlFor="blog-item-3" id="blog-slide-3">
                        <img src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song"/>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Blogs
