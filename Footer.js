import React from "react";


const Footer = () => {
return (
<footer className="footer-wrapper">
<div className="footer">
{/* Navigation Row */}
<div className="footer-nav">
<div className="footer-logo">✦ Positivus</div>


<ul className="footer-links">
<li>About us</li>
<li>Services</li>
<li>Use Cases</li>
<li>Pricing</li>
<li>Blog</li>
</ul>

<div className="footer-socials">
<span>in</span>
<span>fb</span>
<span>tw</span>
</div>
</div>


{/* Contact + Subscription */}
<div className="footer-middle">
<div className="contact-block">
<span className="contact-title">Contact us</span>
<div className="contact-info">
<p>Email: info@positivus.com</p>
<p>Phone: +91 98765 43210</p>
<p>Address: Mumbai, India</p>
</div>
</div>


    <div className="subscribe-block">
        <input type="email" placeholder="Email" />
        <button>Subscribe</button>
    </div>
</div>

<hr className="footer-line" />


    <div className="footer-bottom">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="/" onClick={(e) => e.preventDefault()}>
        Privacy policy
        </a>
    </div>
</div>
</footer>
);
}
export default Footer;