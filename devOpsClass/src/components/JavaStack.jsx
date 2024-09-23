import styles from '../assets/css/CoursesUnitStyles.module.css'
import courses from '../images/courses.png'
import { Link } from 'react-router-dom'

const JavaStack = () => {
  return (
    <>
    <div className={`container  ${styles.unitsContainer}`}>
        <h1>Java Stack Units</h1>
        {/* Desktop */}
        <div className={`row ${styles.courseContainer}`}>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body" >
                    <h5 className="card-title">Java</h5>
                    <Link to='https://github.com/techCircle/java_stack/tree/main/01%20Java%20Fundamentals' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">JSP</h5>
                    <Link to='https://github.com/techCircle/java_stack/tree/main/03%20Java%20Spring/01%20Spring%20Intro' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">SpringMVC</h5>
                    <Link to='https://github.com/techCircle/java_stack/tree/main/03%20Java%20Spring/02%20Spring%20MVC' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">JPA</h5>
                    <Link to='https://github.com/techCircle/java_stack/tree/main/03%20Java%20Spring/02%20Spring%20MVC' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">ThymeLeaf</h5>
                    <Link to='https://github.com/techCircle/java_stack/tree/main/03%20Java%20Spring/02%20Spring%20MVC' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">Tomcat</h5>
                    <Link to='https://github.com/techCircle/java_stack/tree/main/03%20Java%20Spring/02%20Spring%20MVC' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">Deployment</h5>
                    <Link to='https://github.com/techCircle/java_stack/tree/main/04%20AWS%20Deployment' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
        </div>

        {/* Mobile */}
        <div className={`${styles.courseMobileContainer}`}>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Java</h5>
                            <Link to='https://github.com/techCircle/java_stack/tree/main/01%20Java%20Fundamentals' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">JSP</h5>
                            <Link to='https://github.com/techCircle/java_stack/tree/main/03%20Java%20Spring/01%20Spring%20Intro' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">SpringMVC</h5>
                            <Link to='https://github.com/techCircle/java_stack/tree/main/03%20Java%20Spring/02%20Spring%20MVC' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">JPA</h5>
                            <Link to='https://github.com/techCircle/java_stack/tree/main/03%20Java%20Spring/02%20Spring%20MVC' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">ThymeLeaf</h5>
                            <Link to='https://github.com/techCircle/java_stack/tree/main/03%20Java%20Spring/02%20Spring%20MVC' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tomcat</h5>
                            <Link to='https://github.com/techCircle/java_stack/tree/main/03%20Java%20Spring/02%20Spring%20MVC' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Deployment</h5>
                            <Link to='https://github.com/techCircle/java_stack/tree/main/04%20AWS%20Deployment' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default JavaStack