import React, { useState } from "react";
import "./Copy.css";
import { ToastContainer, toast } from "react-toastify";

function Copy() {
  const [copiedText, setCopiedText] = useState("");

  function notify() {
    toast.success("Text Copied To Clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function copyToClipBoard(e) {
    e.preventDefault();

    navigator.clipboard.writeText(`${copiedText}`);
    setCopiedText("");
    notify();
  }
  return (
    <div>
      <form className="copy">
        <input
          type="text"
          value={copiedText}
          onChange={(e) => {
            setCopiedText(e.target.value);
          }}
          id=""
        />
        <button onClick={copyToClipBoard}>Copy text</button>
        <textarea id="textarea" placeholder="CTRL + V"></textarea>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Copy;
