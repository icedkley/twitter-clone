import React from "react";

function Post({ string }) {
  return (
    <div className="post">
      <h3>Meow ninja</h3>
      <p>{string !== "" ? string : <p>Lorem ipsum</p>}</p>
      <p>
        <button>Like</button>
        <button>comment</button>
        <button>share</button>
      </p>
    </div>
  );
}

export default Post;
