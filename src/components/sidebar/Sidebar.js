import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="img/top-image.jpg" alt="sidebar-image" />
                <p>My name is Sujeong Ji and I am currently studying front-end development. I will post a daily log to record what I study everyday and share the progress of my projects.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <div className="sidebarList">
                    <ul className="sidebarColumnOne">
                        <li className="sidebarListItem">HTML</li>
                        <li className="sidebarListItem">CSS</li>
                        <li className="sidebarListItem">JavaScript</li>
                    </ul>
                    <ul className="sidebarColumnTwo">
                        <li className="sidebarListItem">React</li>
                        <li className="sidebarListItem">Node</li>
                        <li className="sidebarListItem">Project</li>
                    </ul>
                </div>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Me</span>
                <div className="sidebarSocial"> 
                    <i className= "sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-github-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
