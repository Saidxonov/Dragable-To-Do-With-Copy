import { Routes, Route, NavLink } from "react-router-dom";
import TodoApp from "./components/TodoApp/TodoApp.jsx";
import Copy from "./components/copy/Copy.jsx";
import TextEditor from "./components/TextEditor/texEditor.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="header">
          <div className="container">
            <div className="head">
              <ul>
                <li>
                  <NavLink title="To Do" to="/">
                    To Do
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/copy">Copy</NavLink>
                </li>
                <li>
                  <NavLink to="/editor">Text Editor</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/copy" element={<Copy />} />
        <Route path="/editor" element={<TextEditor />} />
      </Routes>
    </div>
  );
}

export default App;
