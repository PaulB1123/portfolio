import { Routes, Route } from "react-router-dom";
import Project1 from "./pages/Project1";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Routes>
        <Route exact path="/" />
        <Route path="project1" element={<Project1 />} />
      </Routes> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
