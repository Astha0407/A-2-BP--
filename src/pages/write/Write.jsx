import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://i.pinimg.com/originals/a3/9a/4f/a39a4f1fc5b8da136fa4ecfd512a658c.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
