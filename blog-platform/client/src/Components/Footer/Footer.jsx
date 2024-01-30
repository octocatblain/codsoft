import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_wrapper">
                <div className="footer_address">
                    <h4 className="footer_title">Locate Us</h4>
                    <p className="address"><i className="bi bi-map"></i>123 Street, New York, USA</p>
                    <p className="phone"><i className="bi bi-phone"></i>+012 345 67890</p>
                    <p className="email"><i className="bi bi-envelope"></i>info@example.com</p>
                </div>
                <div className="footer_socials">
                    <h4 className="footer_title">Our Socials</h4>
                    <div>
                        <a className="footer_social" href=""><i className="bi bi-twitter-x"></i></a>
                        <a className="footer_social" href=""><i className="bi bi-facebook"></i></a>
                        <a className="footer_social" href=""><i className="bi bi-youtube"></i></a>
                        <a className="footer_social" href=""><i className="bi bi-linkedin"></i></a>
                        
                        <a className="footer_social" href=""><i className="bi bi-threads"></i></a>
                        <a className="footer_social" href=""><i className="bi bi-whatsapp"></i></a>
                        <a className="footer_social" href=""><i className="bi bi-reddit"></i></a>
                        <a className="footer_social" href=""><i className="bi bi-discord"></i></a>
                        
                    </div>
                </div>
                <div className="footer_links">
                    <h4 className="footer_title">Quick Links</h4>
                    <Link className="footer_link" to="/about">About Us</Link> 
                    <Link  className="footer_link"to="/contact">Contact Us</Link>
                    <Link className="footer_link" to="/">Our Blog</Link>
                    <a className="footer_link" href="#">Terms & Condition</a>
                    <a className="footer_link" href="#">Privacy Policy</a>
                </div>

            </div>
            <hr />
            <div className="copyright">
                <p className="copyright">&copy; 2024 &mdash; GRVTY Media Co.</p>
            </div>
        </footer>
    )
}

export default Footer
