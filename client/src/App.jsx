import "./App.scss";
import TextEditor from "./component/TextEditor/TextEditor";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Templates from "./component/Templates/Templates";
import HomePage from "./pages/HomePage";
import Login from "./component/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/template" element={<Templates />}></Route>
          <Route
            path="/"
            exact
            element={<Navigate to={`/documents/${uuidv4()}`} />}
          ></Route>
          <Route path="/documents/:id" element={<TextEditor />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
