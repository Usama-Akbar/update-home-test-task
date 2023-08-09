import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div>
      <div className="footer-main-div">
        <div>
          <h5 className="logo-footer mb-4">Logo</h5>
          <span className="footer-desc">
            Search for will uncover many web sites variables onto of passages of
            lorem ipsum available but the majority the words all predefined
            humour to met chunks recently with desktop.
          </span>
          <div className="d-flex justify-content-around mt-4">
            <Image
              width="0"
              height="0"
              unoptimized
              className="social-links"
              src={"/assets/meta.png"}
            />
            <Image
              width="0"
              height="0"
              unoptimized
              className="social-links"
              src={"/assets/twitter.png"}
            />
            <Image
              width="0"
              height="0"
              unoptimized
              className="social-links"
              src={"/assets/insta.png"}
            />
            <Image
              width="0"
              height="0"
              unoptimized
              className="social-links"
              src={"/assets/linkedin.png"}
            />
          </div>
        </div>
        <div className="quick-links-section">
          <h5 className="logo-footer">Quick Links</h5>
          <div className="d-flex align-items-center mt-4">
            <Image
              width="0"
              height="0"
              unoptimized
              className="quick-links-image"
              src={"/assets/file.png"}
            />
            <span className="footer-desc ms-3">About us</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <Image
              width="0"
              height="0"
              unoptimized
              className="quick-links-image"
              src={"/assets/file.png"}
            />
            <span className="footer-desc ms-3">Our Services</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <Image
              width="0"
              height="0"
              unoptimized
              className="quick-links-image"
              src={"/assets/file.png"}
            />
            <span className="footer-desc ms-3">Featured Blog</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <Image
              width="0"
              height="0"
              unoptimized
              className="quick-links-image"
              src={"/assets/file.png"}
            />
            <span className="footer-desc ms-3">Car Fleet</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <Image
              width="0"
              height="0"
              unoptimized
              className="quick-links-image"
              src={"/assets/file.png"}
            />
            <span className="footer-desc ms-3">FAQ</span>
          </div>
        </div>
        <div className="info-section">
          <h5 className="logo-footer">Contact Info</h5>
          <div className="d-flex align-items-center mt-4">
            <Image
              width="0"
              height="0"
              unoptimized
              className="quick-links-image"
              src={"/assets/house.png"}
            />
            <span className="footer-desc ms-3">10A, San Andreno, USA</span>
          </div>
          <div className="d-flex align-items-center mt-4">
            <Image
              width="0"
              height="0"
              unoptimized
              className="quick-links-image"
              src={"/assets/mail.png"}
            />
            <span className="footer-desc ms-3">example@booking.com</span>
          </div>
          <div className="d-flex align-items-center mt-4">
            <Image
              width="0"
              height="0"
              unoptimized
              className="quick-links-image"
              src={"/assets/call.png"}
            />
            <span className="footer-desc ms-3">+1-333-444-555</span>
          </div>
          <div className="d-flex align-items-center mt-4">
            <Image
              width="0"
              height="0"
              unoptimized
              className="quick-links-image"
              src={"/assets/web.png"}
            />
            <span className="footer-desc ms-3">www.example.com</span>
          </div>
        </div>
      </div>
      <div className="sec-footer-bar">
        <span className="footer-bar-text">
          © Copyrights 2023 Logo. All Rights Reserved
        </span>
      </div>
    </div>
  );
}
