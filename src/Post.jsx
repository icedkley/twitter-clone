import React from "react";
import TimeComponent from "./TimeComponent.jsx";

function Post({ string }) {
  return (
    <div className="post">
      <div className="profile_wrapper">
        <div className="profile"></div>
        <h3>Meow ninja</h3>
        <TimeComponent></TimeComponent>
      </div>
      <p className="post_content">
        {string !== "" ? string : <p>Lorem ipsum</p>}
      </p>
      <p></p>
      <div className="actions_wrapper">
        <button>Like</button>
        <button>comment</button>
        <button>share</button>
      </div>
    </div>
  );
}

export default Post;
