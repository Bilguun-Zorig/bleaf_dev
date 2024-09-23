import styles from '../assets/css/NavStyles.module.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    
    return (
    <div className={`container-fluid ${styles.navBarContainer}`}>
        <div id='contactContainer' className={`${styles.contactContainer}`}>
            <span className={`${styles.contact_1}`}>
                <p>
                    <a href="mailto:techcircle@techcirclesolutions.org" target='_blank'>
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <span>
                        myemailhere.gmail.com
                    </span>
                </p>
                <p>
                    <a href="mailto:techcircle@techcirclesolutions.org" target='_blank'>
                        <i className="fa-solid fa-phone"></i>
                    </a>
                    <span>
                        703.474.6342
                    </span>
                </p>           
            </span>
            <span className={`${styles.contact_2}`}>
                    <a href="https://www.instagram.com/#" target='_blank'>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/#" target='_blank'>
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/bilguun-zorigtbaatar" target='_blank'>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
            </span>
            
                
        </div>
        <nav className="navbar navbar-expand-lg sticky-top" style={{padding: '0px'}} data-bs-ride="true">
            <div className={`container-fluid ${styles.navBar}`}>
                    {/* Logo */}
                    <Link to='/bleaf_dev'>
                        <span className={`${styles.bleafLogo}`}>
                            Bleaf
                        </span>
                    </Link>
                    
                    {/* Navbar Toggler for smaller screens */}
                    <button className={`navbar-toggler ${styles.navbarToggle}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Content */}
                    <div className={`collapse navbar-collapse  ${styles.linkContainer}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to='/bleaf_dev' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/bleaf_dev/classes' className="nav-link">Learn</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/bleaf_dev/contact' className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    </div>
    
    )
}

export default Nav;
