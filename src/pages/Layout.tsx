import { Route, Routes } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header";
import NotFound from "./NotFound";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

const Layout = () => {
     return (
     <div className="main-layout">
          <Header />
          <Routes>
               <Route index path="/" element={<Home />} />
               <Route path="/error-page" element={<ErrorPage />} />
               <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
     </div>
     )
}

export default Layout