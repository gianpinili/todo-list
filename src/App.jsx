import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </BrowserRouter> */}
      <Header />
      <Container />
    </>
  );
}

export default App;
