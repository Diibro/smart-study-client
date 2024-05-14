import { Route, Routes, useLocation } from "react-router-dom"
import NotFound from "./NotFound";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import { useEffect } from "react";
import FeedBack from "./FeedBack";
import ContactForm from "../components/forms/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "./About";

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
               <Route path="/about" element={<About />} />
               <Route path="/feedback" element={<FeedBack />} />
               <Route path="/contact-page" element={<ContactForm />} />
               <Route path="/error-page" element={<ErrorPage />} />
               <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
     </div>
     )
}

export default Layout