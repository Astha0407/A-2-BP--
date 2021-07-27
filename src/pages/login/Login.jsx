import { Link } from "react-router-dom";
import "./login.css";
export default function Login() {
  return (
    <div className="login">
      <span className="logintitle">LOGIN</span>
      <form className="loginform">
        <label>
          <b>EMAIL</b>
        </label>
        <input
          type="text"
          className="logininput"
          placeholder="Enter your Email"
        />
        <label>
          <b>PASSWORD</b>
        </label>
        <input
          type="password"
          className="logininput"
          placeholder="Hmmm Hmmm ;)"
        />
        <button className="loginbutton">LOGIN</button>
        <button className="loginregisterbutton">
          <Link className="link" to="/register">
            WaNNa ReGisTer?
          </Link>
        </button>
      </form>
    </div>
  );
}
