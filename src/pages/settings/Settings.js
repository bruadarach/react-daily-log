import Sidebar from '../../components/sidebar/Sidebar'
import './Settings.css'

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            <img 
              src="img/top-image.jpg" 
              alt="profile-image" />
              <label htmlFor="fileInput">
                <i className="settingsProfilePictureIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{display: "none"}}/>
          </div>
          <label>User Name</label>
          <input type="text" placeholder='Sujeong Ji' />
          <label>Email</label>
          <input type="email" placeholder='suji.sujeongji@gmail.com' />
          <label>Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
        <Sidebar />
    </div>
  )
}
