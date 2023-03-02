import { Route, Routes, BrowserRouter } from "react-router-dom";
import Contact from "./compontents/contact";
import Home from "./compontents/home";
import Posts from "./compontents/posts";
import Header from "./compontents/header";
import MainLayouts from "./layouts/mainLayouts";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <MainLayouts>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="posts/:id" element={<Posts />} />
        </Routes>
      </MainLayouts>
    </BrowserRouter>
  );
}

export default Router;
