import { useTranslation } from "react-i18next";
import SSLogo from "../assets/logo/ss-logo.png";
import ILink from "../interfaces/ILink";
import { Link } from "react-router-dom";

const Footer = () => {
     const {t} = useTranslation("global");
     const navLinks:ILink[]  = t("footer.links",{returnObjects:true});
     return (
          <footer className="main-footer">
               <div className="row">
                    <div className="col">
                         <img src={SSLogo} alt="smart study logo" />
                    </div>
                    <div className="col">
                         {navLinks.map((item, index) => <Link key={`footer-link-${index}`} to={item.link}>{item.title}</Link>)}
                    </div>
                    <div className="col">
                         <h3>{t("footer.contactLinks.social.title")}</h3>
                         <div className="social-links"></div>
                         <h3>{t("footer.contactLinks.others.title")}</h3>
                         <div className="social-links"></div>
                    </div>
               </div>
               <div className="row"></div>
          </footer>
     )
}

export default Footer