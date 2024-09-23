import styles from '../assets/css/CoursesUnitStyles.module.css'
import courses from '../images/courses.png'
import { Link } from 'react-router-dom'

const MernStack = () => {
  return (
    <>
    <div className={`container  ${styles.unitsContainer}`}>
        <h1>MERN Stack Units</h1>
        {/* Desktop */}
        <div className={`row ${styles.courseContainer}`}>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body" >
                    <h5 className="card-title">JS</h5>
                    <Link to='https://github.com/techCircle/mern_stack/tree/main/01%20JavaScript' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">React</h5>
                    <Link to='https://github.com/techCircle/mern_stack/tree/main/02%20React' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">Express</h5>
                    <Link to='https://github.com/techCircle/mern_stack/tree/main/03%20Express' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">MongoDB</h5>
                    <Link to='https://github.com/techCircle/mern_stack/tree/main/04%20MongoDB' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">Socket.io</h5>
                    <Link to='https://github.com/techCircle/mern_stack/tree/main/07%20Stocket.io' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">NPM</h5>
                    <Link to='https://github.com/techCircle/mern_stack/tree/main/01%20JavaScript/04%20NPM' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
            <div className={`col-2 card ${styles.course}`}>
                <img src={courses} className="card-img-top" alt="Course logo"/>
                <div className="card-body">
                    <h5 className="card-title">Deployment</h5>
                    <Link to='https://github.com/techCircle/mern_stack/tree/main/09%20MERN%20Deployment' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                </div>
            </div>
        </div>

        {/* Mobile */}
        <div className={`${styles.courseMobileContainer}`}>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">JS</h5>
                            <Link to='https://github.com/techCircle/mern_stack/tree/main/01%20JavaScript' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">React</h5>
                            <Link to='https://github.com/techCircle/mern_stack/tree/main/02%20React' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Express</h5>
                            <Link to='https://github.com/techCircle/mern_stack/tree/main/03%20Express' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">MongoDB</h5>
                            <Link to='https://github.com/techCircle/mern_stack/tree/main/04%20MongoDB' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Socket.io</h5>
                            <Link to='https://github.com/techCircle/mern_stack/tree/main/07%20Stocket.io' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">NPM</h5>
                            <Link to='https://github.com/techCircle/mern_stack/tree/main/01%20JavaScript/04%20NPM' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Deployment</h5>
                            <Link to='https://github.com/techCircle/mern_stack/tree/main/09%20MERN%20Deployment' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MernStack