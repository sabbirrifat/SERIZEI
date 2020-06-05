import React from 'react';
import Slide from 'react-reveal/Slide';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';




function Home() {
  return (
    <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light navbarStyle">
            <a className="navbar-brand brand-logo" href="#">SERIZEI.</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#services"> Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#choose-us"> About </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Log in</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">Sign up</a>
                  
                </li>
              </ul>
            </div>
          </nav>
          <div className="hero">
            <div className="row">
              <div className="mainText col-lg-7 col-xl-6">
                <h1>
                  Search Any TV SHOW at Anytime <br />
                  with No Individual Series Costs or<br />
                  Rental Fees.
                </h1>
                <div className="btnGroup">
                  <a href="/register" className="btnWhite">TRY IT FREE</a>
                  <div className="whiteBG" />
                </div>
                <p className="subText">
                  Thousands of movies with <b>no rental fees</b>. Our <br />monthly
                  plan gives you unlimited access to our<br />
                  movie library
                </p>
                <p className="subText">
                  <b>Forget the theaters</b>! Exclusive access <br />
                  to movies in theaters on release data
                </p>
              </div>
              <Slide right>
              <div className=" col-lg-5 col-xl-6 mainImage d-none d-lg-block">
                <img className="image-fluid" src="/images/ipad@2x.png" alt="" />
              </div>
              </Slide>
            </div>
          </div>
        </header>

       {/*--------  Series List --------*/}

        <section className="seriesList">
          <div className="row">
            <h2 className="tv-show">POPULAR TV SHOWS</h2>
          </div>
          <Slide left>
          <div className="totalList">
            <ul className="list-unstyled gallery">
              <li className="series"><a href="#"><img src="/images/01.jpg" alt="" /></a></li>
              <li className="series"><a href="#"><img src="/images/02.jpg" alt="" /></a></li>
              <li className="series"><a href="#"><img src="/images/03.jpg" alt="" /></a></li>
              <li className="series"><a href="#"><img src="/images/04.jpg" alt="" /></a></li>
              <li className="series"><a href="#"><img src="/images/05.jpg" alt="" /></a></li>
              <li className="series"><a href="#"><img src="/images/06.jpg" alt="" /></a></li>
              <li className="series"><a href="#"><img src="/images/07.jpg" alt="" /></a></li>
              <li className="series"><a href="#"><img src="/images/08.jpg" alt="" /></a></li>
            </ul>
          </div>
          </Slide>
          <div className="row justify-content-center btn-view-more">
            <a href="/login" className="btnColor">VIEW MORE</a>
          </div>
          

         {/*---------- Services --------*/}

        </section>
        <section id="services">
          <div className="container-fluid text-center">
            <div className="headLineSection">
              <h1 className="headLine"> WHAT WE OFFER </h1>
            </div>
            <div className="row">
              <Slide left>
              <div className="services col-md-4 ">
                <img src="/images/screenplay.svg" alt="" />
                <h2 className="subHeadLine">FIND TV SHOWS</h2>
                <p>Search and select the best tv shows you always wanted to watch. So easy and user friendly.</p>
              </div>
              </Slide>

              <Slide bottom>
              <div className="services col-md-4 ">
                <img src="/images/click.svg" alt="" />
                <h2 className="subHeadLine">ADD TO FAVORITE</h2>
                <p>You can easily select TV SHOWS and put them into your favorite section. Also you can remove from favotite.</p>
              </div>
              </Slide>

              <Slide right>
              <div className="services col-md-4 ">
                <img src="/images/write.svg" alt="" />
                <h2 className="subHeadLine">REVIEW THE SHOW</h2>
                <p>You can put your review about the TV SHOW also you can give like or dislike whatever you want. </p>
              </div>
              </Slide>
            </div>
            <div className="row justify-content-center">
              <a href="/register" className="btnColor">REGISTER NOW</a>
            </div>
          </div>
        </section>

        {/*---------- Why Choose US --------*/}
        
        <section id="choose-us">
          <div className="container-fluid">
            <div className="headLineSection ">
              <h1 className="headLine"> WHY CHOOSE US? </h1>
            </div>
            <div className="row">
              <Slide left>
              <div className="col-md-6 choose-us">
                <p>Why we're different</p>
                <ul>
                  <li><i className="fas fa-check-square" /> Always Updated Automatically from Server</li>
                  <li><i className="fas fa-check-square" /> Easy to Use and Awesome UI Experience</li>
                  <li><i className="fas fa-check-square" /> Never Miss a TV SHOW with Our Favorite System</li>
                  <li><i className="fas fa-check-square" /> Register and get ready within 10 second</li>
                  <li><i className="fas fa-check-square" /> 24/7 Live Support Available</li>
                  <li><i className="fas fa-check-square" /> User Can Commment About any TV SHOW</li>
                </ul>
              </div>
              </Slide>

              <Slide right>
              <div className="col-md-6">
                <img src="/images/offers.svg" className="image-fluid" alt="" />
              </div>
              </Slide>
            </div>
          </div>
        </section>

        {/*---------- Testimonials ----------*/}

        <section id="testimonials">
          <div className="container-fluid">
            <div className="headLineSection">
              <h1 className="headLine"> WHAT USERS SAY </h1>
            </div>
            <div className="row">
              <Slide top>
              <div className="col-md-5 testimonials ">
                <div className="testi1st">
                  <p>Very easy to find series and awesome UI. I love this site
                    so much. Highly recommended for all.
                  </p>
                  <img src="/images/user1.jpg" alt="" />
                  <p className="user-details"><b>John Doe</b> <br /> Member at Serizei</p>
                </div>
              </div>
              </Slide>

              <Slide bottom>
              <div className="col-md-5 testimonials ">
                <div className="testi2nd">
                  <p>Awesome experience it makes my life easier. I'm using this about a month and so far so good.
                  </p>
                  <img src="/images/user2.jpg" alt="" />
                  <p className="user-details"><b>Ryan Doris</b> <br /> Member at Serizei</p>
                </div>
              </div>
              </Slide>
            </div>
          </div>
        </section>

        {/*--------  Social Media --------*/}
        
        <section id="social-media">

          <Slide bottom>
          <div className="container text-center ">
            <p>FIND US ON SOCIAL MEDIA</p>
            <div className="social-icons">
              <a href="#"><img src="/images/social/facebook.png" alt="" /></a>
              <a href="#"><img src="/images/social/Iinstagram.png" alt="" /></a>
              <a href="#"><img src="/images/social/snapchat.png" alt="" /></a>
              <a href="#"><img src="/images/social/whatsapp.png" alt="" /></a>
              <a href="#"><img src="/images/social/twitter.png" alt="" /></a>
              <a href="#"><img src="/images/social/linkedin.png" alt="" /></a>
            </div>
          </div>
          </Slide>
        </section>

        {/*-------- Footer Section --------*/}
        
        <section id="footer">
          <img src="/images/wave5.png" className="footer-img" alt="" />
          <div className="container-fluid footer">
            <div className="row">
              <div className="col-md-4 footer-box">
                <h2>SERIZEI.</h2>
                <p>Easy to find TV SHOWS and add them to favorite and never forget about the show.</p>
              </div>
              <div className="col-md-4 footer-box">
                <p><b>CONTACT US</b></p>
                <p><i className="fas fa-map-marker-alt" />2098 Boggess Street, Donnelsville</p>
                <p><i className="fas fa-phone" />+1(207) 352-2807</p>
                <p><i className="far fa-envelope" />admin@seriezi.com</p>
              </div>
              <div className="col-md-4 footer-box">
                <p><b>SUBSCRIBE NEWSLETTER</b></p>
                <input type="email" className="form-control" placeholder="Email..." />
                <button type="button" className="btn btn-primary">Subscribe</button>
              </div>
            </div>
            <p className="copyright">Developed by <a href="https://sabbirrifat.com">Sabbir Rifat</a></p>        
          </div>
        </section>
      </div>


);
}

export default Home;
