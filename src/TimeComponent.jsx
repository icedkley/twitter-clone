import React from "react";

function TimeComponent() {
  const date = new Date();
  const day = date.getDate();
  const hours = date.getHours();
  const mins = date.getMinutes();

  return (
    <>
      <h4>
        <em>{`${hours} : ${mins}`}</em>
      </h4>
    </>
  );
}

export default TimeComponent;
