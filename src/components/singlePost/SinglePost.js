import "./SinglePost.css"

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img 
                    className="singlePostImg"
                    src="img/post-image.jpg" 
                    alt="single-post-image" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singePostAuthor">Author: <strong>Sujeong Ji</strong></span>
                    <span className="singePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quia? Neque laborum perspiciatis, ad provident sequi deleniti ducimus, voluptas accusamus, alias eveniet quibusdam! Assumenda quam odit velit magnam vitae eaque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quia? Neque laborum perspiciatis, ad provident sequi deleniti ducimus, voluptas accusamus, alias eveniet quibusdam! Assumenda quam odit velit magnam vitae eaque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quia? Neque laborum perspiciatis, ad provident sequi deleniti ducimus, voluptas accusamus, alias eveniet quibusdam! Assumenda quam odit velit magnam vitae eaque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quia? Neque laborum perspiciatis, ad provident sequi deleniti ducimus, voluptas accusamus, alias eveniet quibusdam! Assumenda quam odit velit magnam vitae eaque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quia? Neque laborum perspiciatis, ad provident sequi deleniti ducimus, voluptas accusamus, alias eveniet quibusdam! Assumenda quam odit velit magnam vitae eaque!
                </p>
            </div>
        </div>
    );
}

export default SinglePost;
