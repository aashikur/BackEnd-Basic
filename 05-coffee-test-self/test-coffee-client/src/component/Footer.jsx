import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200  py-10 mt-10">
      <div className="max-w-7xl text-gray-500 dark:text-gray-400 mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2  text-base-content text-shadow-base-content">Contact Us</h3>
          <p>Email: support@coffeetime.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-base-content">Useful Links</h3>
          <ul className="space-y-2">
            <li><Link to="/terms" className="link link-hover">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="link link-hover">Privacy Policy</Link></li>
            <li><Link to="/faq" className="link link-hover">FAQ</Link></li>
            <li><Link to="/support" className="link link-hover">Support</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2  text-base-content">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-base-300 text-center pt-4 text-sm">
        <p>© {new Date().getFullYear()} CoffeeTime. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
