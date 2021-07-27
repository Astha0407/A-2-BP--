import "./single.css";
import Sidebar from "/src/components/sidebar/Sidebar";
import Singlepost from "/src/components/singlepost/Singlepost";
export default function Single() {
  return (
    <>
      <div className="single">
        <Singlepost />
        <Sidebar />
      </div>
    </>
  );
}
