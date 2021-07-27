import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">DELETE ACCOUNT</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/000/143/596/small/cute-pink-and-green-succulent-illustration-character-watercolor-with-quote.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Astha" name="name" />
          <label>Email</label>
          <input
            type="email"
            placeholder="asthabaranwal04072000@gmail.com"
            name="email"
          />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
