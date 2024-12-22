import React, { useState } from "react";
import "./TextEditor.css";

function TexEditor() {
  const [qalin, setQalin] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [area, setArea] = useState("");

  function handleBold(e) {
    e.preventDefault();
    setQalin(true);
    setUnderline(false);
  }

  function handleUnderline(e) {
    e.preventDefault();
    setUnderline(true);
    setQalin(false);
  }

  function notify() {
    toast.success("🦄 Wow so easy!", {
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

  function Copy(e) {
    e.preventDefault();
    navigator.clipboard.writeText(`${area}`);
    setArea("");
    notify();
  }

  return (
    <div className="container">
      <div className="editor-top-content">
        <h1>Text Editor with Copy/Paste and Formatting</h1>
      </div>
      <div className="textarea mt-[100px]">
        <div className="button-of-styles-and-textarea">
          <textarea
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
            }}
            id="textarea-of-editor"
            className={qalin ? "bold" : "text-underline"}
            placeholder="Enter Your Word Here"
          ></textarea>
          <div className="buttons-of-style">
            <button onClick={handleBold} className="font-bold">
              Qalin
            </button>
            <button onClick={handleUnderline} className="underline">
              Tag Chiziq
            </button>
          </div>
        </div>
        <br />
        <button onClick={Copy} className="copy-btn-of-editor">
          Copy
        </button>
      </div>
    </div>
  );
}

export default TexEditor;
