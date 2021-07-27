import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://i.pinimg.com/originals/a3/9a/4f/a39a4f1fc5b8da136fa4ecfd512a658c.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Books</span>
          <span className="postCat">Novels</span>
        </div>
        <span className="postTitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 Hour Ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        praesentium mollitia sapiente voluptate, laudantium cumque! Aliquam
        repudiandae dignissimos necessitatibus doloremque hic porro accusamus
        qui. Alias esse, quo voluptate qui necessitatibus, aut atque laboriosam
        accusamus quam error architecto. Rem error libero at cumque quis beatae
        quasi a quo pariatur, deserunt ex ipsum vitae accusantium autem
        voluptates temporibus eius. Neque, tenetur esse? Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Animi praesentium mollitia sapiente
        voluptate, laudantium cumque! Aliquam repudiandae dignissimos
        necessitatibus doloremque hic porro accusamus qui. Alias esse, quo
        voluptate qui necessitatibus, aut atque laboriosam accusamus quam error
        architecto. Rem error libero at cumque quis beatae quasi a quo pariatur,
        deserunt ex ipsum vitae accusantium autem voluptates temporibus eius.
        Neque, tenetur esse?
      </p>
    </div>
  );
}
