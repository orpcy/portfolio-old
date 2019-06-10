import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <p className="grey-text text-lighten-4">
              <i className="fas fa-map-marker-alt" /> <a href="https://maps.google.com/?q=Ilupeju estate, Lagos, Nigeria" target="_blank" className="text-white">
                Ilupeju Estate, Lagos, Nigeria.
              </a>
            </p>
            <p>
              <i className="fas fa-phone" /> <a href="tel:+2348132205658" className="text-white">
                +234 813 320 5658
              </a>
            </p>
            <p>
              <i class="far fa-envelope" /> <a href="mailto:sofiyullahj@gmail.com" className="text-white">
                sofiyullahj@gmail.com
              </a>
            </p>
          </div>
          <div className="col l4 offset-l2 s12 social">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="https://linkedin.com/in/sofiyullahj" target="_blank">
                  <i class="fab fa-linkedin" /> LinkedIn
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="https://github.com/orpcy" target="_blank">
                  <i class="fab fa-github" /> Github
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="https://twitter.com/HLaykan" target="_blank">
                  <i class="fab fa-twitter-square" /> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container text-center">Copyright ORPCY © 2019</div>
      </div>
    </footer>
  );
};

export default Footer;
