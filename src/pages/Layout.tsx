import { Route, Routes, useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header";
import NotFound from "./NotFound";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import About from "./About";
import { useEffect } from "react";

const Layout = () => {
     const {pathname} = useLocation();
     useEffect(() => {
          window.scrollTo(0,0);
     }, [pathname]);
     return (
     <div className="main-layout">
          <Header />
          <Routes>
               <Route index path="/" element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="/error-page" element={<ErrorPage />} />
               <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
     </div>
     )
}

export default Layout