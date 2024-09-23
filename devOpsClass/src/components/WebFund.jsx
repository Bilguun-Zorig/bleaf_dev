import styles from '../assets/css/CoursesUnitStyles.module.css'
import courses from '../images/courses.png'
import { Link } from 'react-router-dom'

const WebFund = () => {
  return (
    <>
        <div className={`container  ${styles.unitsContainer}`}>
            <h1>Web Fundamentals Units</h1>
            {/* Desktop */}
            <div className={`row ${styles.courseContainer}`}>
                <div className={`col-2 card ${styles.course}`}>
                    <img src={courses} className="card-img-top" alt="Course logo"/>
                    <div className="card-body" >
                        <h5 className="card-title">HTML</h5>
                        <Link to='https://github.com/techCircle/web_fundamentals/tree/main/01%20HTML' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                    </div>
                </div>
                <div className={`col-2 card ${styles.course}`}>
                    <img src={courses} className="card-img-top" alt="Course logo"/>
                    <div className="card-body">
                        <h5 className="card-title">CSS</h5>
                        <Link to='https://github.com/techCircle/web_fundamentals/tree/main/02%20CSS' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                    </div>
                </div>
                <div className={`col-2 card ${styles.course}`}>
                    <img src={courses} className="card-img-top" alt="Course logo"/>
                    <div className="card-body">
                        <h5 className="card-title">Javascript</h5>
                        <Link to='https://github.com/techCircle/web_fundamentals/tree/main/03%20JS' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className={`${styles.courseMobileContainer}`}>
                <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">HTML</h5>
                                <Link to='https://github.com/techCircle/web_fundamentals/tree/main/01%20HTML' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-3 mb-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">CSS</h5>
                                <Link to='https://github.com/techCircle/web_fundamentals/tree/main/02%20CSS' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-3 mb-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Javascript</h5>
                                <Link to='https://github.com/techCircle/web_fundamentals/tree/main/03%20JS' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WebFund