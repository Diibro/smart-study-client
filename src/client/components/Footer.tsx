import { useTranslation } from "react-i18next";
import SSLogo from "../../assets/logo/ss-logo.png";
import { Link } from "react-router-dom";

import InstagramIcon from "../../assets/svg/Instagram.svg";
import TwitterIcon from "../../assets/svg/TwitterX.svg";
import LinkedInIcon from "../../assets/svg/LinkedIn.svg";
import WhatsappIcon from "../../assets/svg/WhatsApp.svg";
import ILink from "../../interfaces/ILink";


const Footer = () => {
     const {t} = useTranslation("global");
     const navLinks:ILink[]  = t("footer.links",{returnObjects:true});
     return (
          <footer className="main-footer">
               <div className="row row-1">
                    <div className="col">
                         <img src={SSLogo} alt="smart study logo" />
                    </div>
                    <div className="col">
                         {navLinks.map((item, index) => <Link key={`footer-link-${index}`} to={item.link}>{item.title}</Link>)}
                    </div>
                    <div className="col">
                         <h3>{t("footer.contactLinks.social.title")}</h3>
                         <div className="social-icons">
                              <Link to="https://instagram.com"><img src={InstagramIcon} alt="instagram icon" /></Link>
                              <Link to="https://twitter.com"><img src={TwitterIcon} alt="x-icon" /></Link>
                              <Link to="https://linkedin.com"><img src={LinkedInIcon} alt="linked in" /></Link>
                              <Link to="https://wa.me.com/+250780795232"><img src={WhatsappIcon} alt="whatsapp icon" /></Link>
                         </div>
                         <div className="social-links"></div>
                         <h3>{t("footer.contactLinks.others.title")}</h3>
                         <div className="social-links">
                              <Link to={"maito:smartstudy.plat@gmail.com"}>smartstudy.plat@gmail.com</Link>
                         </div>
                    </div>
               </div>
               <div className="row row-2">
                    <p>Copyright &copy; all rights reserved 2024.</p>
               </div>
          </footer>
     )
}

export default Footer