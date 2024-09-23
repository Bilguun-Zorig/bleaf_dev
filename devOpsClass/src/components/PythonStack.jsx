import styles from '../assets/css/CoursesUnitStyles.module.css'
import courses from '../images/courses.png'
import { Link } from 'react-router-dom'

const PythonStack = () => {
  return (
    <>
    <div className={`container  ${styles.unitsContainer}`}>
        <h1>Python Stack Units</h1>
        {/* Desktop */}
        <div className={`row ${styles.courseContainer}`}>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body" >
                    <h5 className="card-title">Python</h5>
                    <Link to='https://github.com/techCircle/python_stack/tree/main/01%20Python%20Fundamentals' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">MySQL</h5>
                    <Link to='https://github.com/techCircle/python_stack/tree/main/02%20MySQL' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">Flask</h5>
                    <Link to='https://github.com/techCircle/python_stack/tree/main/03%20Flask%20Fundamental' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">APIs</h5>
                    <Link to='https://github.com/techCircle/python_stack/tree/main/02%20MySQL' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">Deployment</h5>
                    <Link to='https://github.com/techCircle/python_stack/tree/main/05%20Flask%20Deployment' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">AJAX</h5>
                    <Link to='https://github.com/techCircle/python_stack/tree/main/06%20AJAX' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
        </div>

        {/* Mobile */}
        <div className={`${styles.courseMobileContainer}`}>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Python</h5>
                            <Link to='https://github.com/techCircle/python_stack/tree/main/01%20Python%20Fundamentals' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">MySQL</h5>
                            <Link to='https://github.com/techCircle/python_stack/tree/main/02%20MySQL' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Flask</h5>
                            <Link to='https://github.com/techCircle/python_stack/tree/main/03%20Flask%20Fundamental' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">APIs</h5>
                            <Link to='https://github.com/techCircle/python_stack/tree/main/02%20MySQL' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Deployment</h5>
                            <Link to='https://github.com/techCircle/python_stack/tree/main/05%20Flask%20Deployment' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">AJAX</h5>
                            <Link to='https://github.com/techCircle/python_stack/tree/main/06%20AJAX' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PythonStack