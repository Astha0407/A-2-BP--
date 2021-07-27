// import { Link } from "react-router-dom";
// import "./topbar.css";
// export default function TopBar() {
//   const user=true;
//   return (

//       <div className="top">
//         <div className="topIcon topleft">
//           <i className="topIcon fab fa-facebook-square"></i>
//           <i className="topIcon fab fa-twitter-square"></i>
//           <i className="topIcon fab fa-goodreads"></i>
//           <i className="topIcon fab fa-medium"></i>
//           {/* <i className="topIcon fas fa-book"></i>
//           <i className="topIcon fab fa-amazon"></i> */}
//         </div>
//         <div className="topcenter">
//           <ul className="topList">
//             <li className="topListItems"> <Link className="link" to="/">
//               HOME
//             </Link></li>
//             <li className="topListItems">ABOUT</li>
//             <li className="topListItems">CONTACT</li>
//             <li className="topListItem">
//             <Link className="link" to="/write">
//               WRITE
//             </Link>
//           </li>
//             <li className="topListItems">LOGOUT</li>
//           </ul>
//         </div>

//         <div className="topright">
//         {user ? (
//           <Link className="link" to="/settings">
//           <img
//             className="topImg"
//             src="https://pbs.twimg.com/profile_images/947199740285935616/udMKeX7v_400x400.jpg"
//             alt=""
//           />
//            </Link>
//         ) : (
//           <ul className="topList">
//             <li className="topListItem">
//               <Link className="link" to="/login">
//                 LOGIN
//               </Link>
//               ) : (
//           <ul className="topList">
//             <li className="topListItem">
//               <Link className="link" to="/login">
//                 LOGIN
//               </Link> </li>
//               <li className="topListItem">
//               <Link className="link" to="/register">
//                 REGISTER
//               </Link>
//             </li>
//           </ul>
//         )}
//         <i className="topSearchIcon fas fa-search"></i>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://pbs.twimg.com/profile_images/947199740285935616/udMKeX7v_400x400.jpg"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
