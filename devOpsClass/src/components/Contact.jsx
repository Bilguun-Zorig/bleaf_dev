import styles from '../assets/css/ContactStyles.module.css'
import img1 from '../images/mainPage.jpg'


const Contact = () => {
  return (
    <div className={`container-fluid  ${styles.contactContainer}`}>
            <div className={`row  ${styles.infoContainer}`}>
                <div className={`col-lg-6 col-sm-12 col-md-6 ${styles.info}`}>
                    <h1 className='col-lg-6 col-sm-12'>Contact</h1>
                    <ul className='col-lg-6 col-sm-12'>
                        <li><i className="fa fa-phone"></i>703.474.6342</li>
                        <li><i className="fa fa-envelope"></i>myemailhere@gmail.com</li>
                    </ul>
                </div>
                <div className="col-lg-6 col-6">
                    <img src={img1} alt="" />
                </div>
            </div>
    </div>
  )
}

export default Contact