import Posts from "/src/components/posts/Posts";

import Header from "/src/components/header/Header";
import "./home.css";
import Sidebar from "/src/components/sidebar/Sidebar";
export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
