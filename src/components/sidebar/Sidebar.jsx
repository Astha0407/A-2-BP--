import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/143/596/small/cute-pink-and-green-succulent-illustration-character-watercolor-with-quote.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ut rem
          doloribus expedita cum officiis facere.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Books</li>
          <li className="sidebarListItem">Novels</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Anime</li>
          <li className="sidebarListItem">Plants</li>
          <li className="sidebarListItem">Asthetic</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-goodreads"></i>
          <i className="sidebarIcon fab fa-medium"></i>
        </div>
      </div>
    </div>
  );
}
