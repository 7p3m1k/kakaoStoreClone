import React from "react";

function SideModal({ showModal }) {
  return (
    <>
      <div>{showModal ? "이거" : null}</div>
    </>
  );
}

export default SideModal;
