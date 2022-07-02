import './Post.css'

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="img/post-image.jpg" alt="post-image" />
        <div className="postInfo">
            <div className="postCategory">
                <span className="postCat">Front-end Development</span>
            </div>
            <span className="postTitle">React and Node</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ex tempora est exercitationem, molestiae, repudiandae nostrum cumque odio eius, eveniet quasi minus alias harum beatae veniam deserunt ipsam ducimus facere!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ex tempora est exercitationem, molestiae, repudiandae nostrum cumque odio eius, eveniet quasi minus alias harum beatae veniam deserunt ipsam ducimus facere!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ex tempora est exercitationem, molestiae, repudiandae nostrum cumque odio eius, eveniet quasi minus alias harum beatae veniam deserunt ipsam ducimus facere!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ex tempora est exercitationem, molestiae, repudiandae nostrum cumque odio eius, eveniet quasi minus alias harum beatae veniam deserunt ipsam ducimus facere!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ex tempora est exercitationem, molestiae, repudiandae nostrum cumque odio eius, eveniet quasi minus alias harum beatae veniam deserunt ipsam ducimus facere!
        </p>
    </div>
  )
}