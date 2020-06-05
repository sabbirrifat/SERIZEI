import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <section id="social-media">
        <div className="container text-center ">
          <p>FIND US ON SOCIAL MEDIA</p>
          <div className="social-icons">
            <a href="#">
              <img src="/images/social/facebook.png" alt="" />
            </a>
            <a href="#">
              <img src="/images/social/Iinstagram.png" alt="" />
            </a>
            <a href="#">
              <img src="/images/social/snapchat.png" alt="" />
            </a>
            <a href="#">
              <img src="/images/social/whatsapp.png" alt="" />
            </a>
            <a href="#">
              <img src="/images/social/twitter.png" alt="" />
            </a>
            <a href="#">
              <img src="/images/social/linkedin.png" alt="" />
            </a>
          </div>
        </div>
      </section>

      {/*-------- Footer Section --------*/}

      <section id="footer" style={{ background: "#1c1c1c" }}>
        <img src="/images/wave5.png" className="footer-img" alt="" />
        <div className="container-fluid footer">
          <div className="row">
            <div className="col-md-4 footer-box">
              <h2>SERIZEI.</h2>
              <p>
                Easy to find TV SHOWS and add them to favorite and never forget
                about the show.
              </p>
            </div>
            <div className="col-md-4 footer-box">
              <p>
                <b>CONTACT US</b>
              </p>
              <p>
                <i className="fas fa-map-marker-alt" />
                2098 Boggess Street, Donnelsville
              </p>
              <p>
                <i className="fas fa-phone" />
                +1(207) 352-2807
              </p>
              <p>
                <i className="far fa-envelope" />
                admin@seriezi.com
              </p>
            </div>
            <div className="col-md-4 footer-box">
              <p>
                <b>SUBSCRIBE NEWSLETTER</b>
              </p>
              <input
                type="email"
                className="form-control"
                placeholder="Email..."
              />
              <button type="button" className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
          <p className="copyright">
            Developed by <a href="https://sabbirrifat.com">Sabbir Rifat</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
