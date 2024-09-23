import styles from '../assets/css/ClassStyles.module.css'
import img1 from '../images/mainPage.jpg'
import courses from '../images/courses.png'
import { Link } from 'react-router-dom'


const Classes = () => {
  return (
    <>
        <div className={`container-fluid  ${styles.classesContainer}`}>
            <div className={`row  ${styles.infoContainer}`}>
                <div className={`col-lg-6 col-sm-12 col-md-6 ${styles.info}`}>
                    <h1 className='col-lg-5 col-sm-12'>Full Stack<br/>Web Development</h1>
                    <ul className='col-lg-5 col-sm-12'>
                        <li><i className="fa-regular fa-clock"></i>32 Weeks</li>
                        <li><i className="fa-regular fa-calendar"></i>Monday - Thursday Lecture days</li>
                        <li><i className="fa-solid fa-globe"></i>Online Attendance</li>
                        <li><i className="fa-regular fa-star"></i>Beginner Friendly!</li>
                    </ul>
                </div>
                <div className="col-lg-6 col-6">
                    <img src={img1} alt="" />
                </div>
            </div>
            <section id='courses' className={`container ${styles.unitsContainer}`}>
                <h1>Courses</h1>
                {/* Desktop */}
                <div className={`row ${styles.courseContainer}`}>
                    <div className={`col-2 card ${styles.course}`}>
                        <img src={courses} className="card-img-top" alt="Course logo"/>
                        <div className="card-body" >
                            <h5 className="card-title">Programming Basics</h5>
                            <Link to='#' className='btn'>Learn</Link>
                        </div>
                    </div>
                    <div className={`col-2 card ${styles.course}`}>
                        <img src={courses} className="card-img-top" alt="Course logo"/>
                        <div className="card-body">
                            <h5 className="card-title">Web Fundamentals</h5>
                            <Link to='#' className='btn'>Learn</Link>
                        </div>
                    </div>
                    <div className={`col-2 card ${styles.course}`}>
                        <img src={courses} className="card-img-top" alt="Course logo"/>
                        <div className="card-body">
                            <h5 className="card-title">MERN Stack</h5>
                            <Link to='#' className='btn'>Learn</Link>
                        </div>
                    </div>
                    <div className={`col-2 card ${styles.course}`}>
                        <img src={courses} className="card-img-top" alt="Course logo"/>
                        <div className="card-body">
                            <h5 className="card-title">Python Stack</h5>
                            <Link to='#' className='btn'>Learn</Link>
                        </div>
                    </div>

                </div>
                {/* Mobile */}
                <div className={`${styles.courseMobileContainer}`}>
                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Programming Basics</h5>
                                    <Link to='#' className='btn' target='_blank'>Learn</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3 mb-sm-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Web Fundamentals</h5>
                                    <Link to='#' className='btn' >Learn</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3 mb-sm-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">MERN Stack</h5>
                                    <Link to='#' className='btn'>Learn</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3 mb-sm-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Python Stack</h5>
                                    <Link to='#' className='btn'>Learn</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Classes