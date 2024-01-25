import "./Settings.css"
import Sidebar from "../../Components/Sidebar/Sidebar"
import accountImage from "../../Assets/images/person_4.jpg"

const Settings = () => {
  return (
    <div className="settings">
      <div className="setings_wrapper">
        <h4 className="settings_title">
          <span>Update Your Details</span>
          <span>Delete Account</span>
        </h4>
        <form action="" className="settings_form">
          <div className="profile_image_section">
            <img className="person_image" src={accountImage} alt="" />
            <label htmlFor="imageInput">Add Profile Image</label>
            <input type="file" name="profile image" id="imageInput" style={{ display: "none" }} />

          </div>
          <div className="name_section">
            <div><label htmlFor="fullname">Enter Your Full Name</label>
              <input type="text" id="fullname" />
            </div>

            <div> <label htmlFor="username">Enter Your Username</label>
              <input type="text" id="username" placeholder="example123" /></div>
          </div>

          <label htmlFor="email">Enter Your Email</label>
          <input type="email" id="email" placeholder="example@example.com" />

          <div className="password_section">
            <div> <label htmlFor="password">Enter Your Password</label>
              <input type="password" id="password" />
            </div>
            <div> <label htmlFor="confirm-password">Confirm Your Password</label>
              <input type="password" id="confirm-password" /></div>
          </div>


          <button className="save_details" type="submit">Save Details</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings
