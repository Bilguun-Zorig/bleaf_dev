import styles from '../assets/css/FooterStyles.module.css'
import differentStyle from '../assets/css/FooterStyleDif.module.css'

const Footer = ({ isClassRoute, customClass }) => {
  return (
    <section className={`container-fluid ${customClass}`}>
      <footer>
        <div className="container text-center text-md-left">
          {/* Only show footerInfo_1 if it's not the class route */}
          {!isClassRoute && (
            <div className={styles.footerInfo_1}>
              <h2>Collaborate and Evolve</h2>
              <h5>
                At Bleaf, you can gain the essential practical skillset to become a
                competitive and highly qualified candidate in the IT industry, setting
                you apart in today's tech-driven world.
              </h5>
            </div>
          )}
          
          {/* Apply the common footerInfo_2 with different styles depending on route */}
          <div className={`${styles.footerInfo_2} ${isClassRoute ? differentStyle.footerInfo_2 : ''}`}>
            <div className={`row text-md-left ${differentStyle.bleafInfo}`}>
              <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mt-3">
                <h5 className="font-weight-bold">Bleaf</h5>
                <p>One-Time Software Development Course</p>
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 mx-auto mt-3">
                <h5 className="font-weight-bold">Contact</h5>
                <p className="text-center">
                  <i className="fas fa-phone mr-3"></i> Phone: 703.474.6342
                </p>
                <p className="text-center">
                  <i className="fas fa-envelope mr-3"></i> Email: myemailhere.gmail.com
                </p>
              </div>
            </div>
            <hr className="mb-4"/>
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6">
                <p>&copy;2024 Bleaf</p>
              </div>
              <div className={`col-md-6 col-lg-6 ${styles.contactContainer} ${isClassRoute ? differentStyle.contactContainerDiff : ''}`}>
                <div className="text-center text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/#/"><i className="fab fa-instagram" ></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/#"><i className="fab fa-facebook"></i></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/bilguun-zorigtbaatar" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
