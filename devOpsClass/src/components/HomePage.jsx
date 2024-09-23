import styles from '../assets/css/HomePageStyles.module.css'
import jsl from '../images/js_logo.png'
import python from '../images/pythonlogo.png'




const HomePage = () => {
  return (
    <div className={`container-fluid  ${styles.homePageContainer}`}>
        <section className={`row  ${styles.mainImg}`}>
            <span>
                <h1>Collaborate and Evolve</h1>
                <h4>One-Time Software Development Course</h4>
            </span>
        </section>
        <div className="container">
            <section id='stack-info'>
                <div className={`${styles.stackInfoContainer}`} id="carouselExampleDarkDesktop">
                    <h1>Full-Stack Programs</h1>
                    
                    <div className={`row ${styles.stackContainer}`}>
                        <div className='col-lg-4 col-10'>
                            <div className={`card ${styles.stack}`}>
                                <img src={jsl} className="card-img-top" alt="MERN"/>
                                <div className="card-body">
                                    <h5 className="card-title">JavaScript</h5>
                                    <p className="card-text">Javascript is a user-friendly, full-stack framework ideal for building dynamic websites and applications. Our JavaScript stack is MERN: MongoDB for data, ExpressJS for servers, ReactJS for dynamic web pages, and NodeJS for back-end development. Through hands-on projects, you'll master creating complex web pages with user registration and interactive features.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-10'>
                            <div className={`card ${styles.stack}`}>
                                <img src={python} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Python</h5>
                                    <p className="card-text">Python is one of the most in-demand programming languages in the industry. Our Python stack includes Python for programming, Flask for server-side development, MySQL for data management, AJAX for asynchronous interactions, APIs, and Jinja2 for template rendering. Through practical projects, you'll gain mastery in these technologies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row" id='program-info'>
                <div className={`${styles.programInfoContainer}`}>
                    <span>
                        <h1>Program Overview</h1>
                        <h3>Monday - Thursday</h3>
                    </span>
                    <div className={`${styles.programContainer}`}>
                        <div className={`col-lg-5 col-10 ${styles.program}`}>
                            <h4>Full-Stack Web Development</h4>
                            <div className={`${styles.programInfo}`}>
                                <i class="fa-regular fa-clock"></i>
                                <span>
                                    <h4>Online</h4>
                                    <p>9 Months</p>
                                    <p>Learn two complete tech stacks through live, hands-on instruction in an immersive learning environment.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="curriculum_overview" className={`row ${styles.curriculumContainer}`}>
                <h1>Curriculum Overview</h1>
                <div id="section_block" className={`col-lg-10 col-sm-10 col-10 ${styles.curriculum}`}>
                    <div id="overview_list" className={`col-lg-3 col-sm-6 nav flex-column nav-pills ${styles.durationContainer}`} role="tablist" aria-orientation="vertical">
                        <button className={`nav-link lazy-background visible active ${styles.btn}`} data-bs-toggle="pill" data-bs-target="#data_science" type="button" role="tab" aria-selected="true" >Week One to Two</button>
                        <button className="nav-link lazy-background visible" data-bs-toggle="pill" data-bs-target="#intro_machine_learning" type="button" role="tab" aria-selected="false" tabindex="-1">Weeks Three to Six</button>
                        <button className="nav-link lazy-background visible" data-bs-toggle="pill" data-bs-target="#data_enrichment" type="button" role="tab" aria-selected="false" tabindex="-1">Weeks Seven to Fourteen</button>
                        <button className="nav-link lazy-background visible" data-bs-toggle="pill" data-bs-target="#data_visualization" type="button" role="tab" aria-selected="false" tabindex="-1">Weeks Fifteen to Twenty-Two</button>
                        <button className="nav-link lazy-background visible" data-bs-toggle="pill" data-bs-target="#intermediate_machine_learning" type="button" role="tab" aria-selected="false" tabindex="-1">Weeks Twenty-Three to Thirty</button>
                    </div>
                        {/* Desktop */}
                    <div className={`col-lg-8 col-sm-6 tab-content overview_list_contents desktop ${styles.programInfoContainer}`}>
                        <div id="data_science" className="tab-pane fade active show" role="tabpanel">
                            <h3>Week One to Two</h3>
                            <h4>Programming Basics</h4>
                            <p>To kick off the program, you’ll explore habits, computer basics, and fundamental programming concepts and skills necessary to be successful in your bootcamp!</p>
                            <h5>What you'll focus on</h5>
                            <ul className="focus_list">
                                <li className="lazy-background visible">Basic computer literacy</li>
                                <li className="lazy-background visible">Algorithmic foundations</li>
                                <li className="lazy-background visible">Learning stamina</li>
                            </ul>
                        </div>
                        <div id="intro_machine_learning" className="tab-pane fade" role="tabpanel">
                            <h3>Web Fundamentals</h3>
                            <h4>Weeks Three to Six</h4>
                            <p>During Web Fundamentals, you’ll be introduced to HTML, CSS, and JavaScript along with other common tools in the industry. At the end of this three week course, students should be able to build out static web pages with JavaScript interactivity.</p>
                            <h5>What you'll focus on</h5>
                            <ul className="focus_list">
                                <li className="lazy-background visible">HTML, CSS, &amp; JavaScript</li>
                                <li className="lazy-background visible">Git/Github</li>
                                <li className="lazy-background visible">HTTP Request Response</li>
                                <li className="lazy-background visible">Optional: jQuery &amp; Wireframing</li>
                            </ul>
                        </div>
                        <div id="data_enrichment" className="tab-pane fade" role="tabpanel">
                            <h3>Weeks Seven to Fourteen</h3>
                            <h4>Full-Stack Python</h4>
                            <p>Dive into the first full-stack language: Python. Beginning with small projects, you’ll work your way up to designing a full framework project alongside your classNamemates and instructor.</p>
                            <h5>What you'll focus on</h5>
                            <ul className="focus_list">
                                <li className="lazy-background">Python Fundamentals &amp; OOP</li>
                                <li className="lazy-background">MySQL</li>
                                <li className="lazy-background">Flask</li>
                                <li className="lazy-background">MVC Framework&nbsp;</li>
                                <li className="lazy-background">ERD / Database Design</li>
                                <li className="lazy-background">Web Security Basics</li>
                                <li className="lazy-background">Object Relational Mapper</li>
                            </ul>
                        </div>
                        <div id="data_visualization" className="tab-pane fade" role="tabpanel">
                            <h3>Weeks Fifteen to Twenty-Two</h3>
                            <h4>Full-Stack Javascript</h4>
                            <p>Mid-program, explore your second full-stack language: JavaScript. Studying a wide-range of applicable formats, students can obtain familiarity with building web applications using common industry technologies like MongoDB, Express, React, and Nod</p>
                            <h5>What you'll focus on</h5>
                            <ul className="focus_list">
                                <li className="lazy-background visible">JavaScript Fundamentals &amp; OOP</li>
                                <li className="lazy-background visible">Node.JS</li>
                                <li className="lazy-background visible">Express.JS</li>
                                <li className="lazy-background visible">Socket.io</li>
                                <li className="lazy-background visible">MongoDB</li>
                                <li className="lazy-background visible">React</li>
                            </ul>
                        </div>
                        <div id="intermediate_machine_learning" className="tab-pane fade" role="tabpanel">
                            <h3>Weeks Twenty-Three to Thirty</h3>
                            <h4>Full-Stack Java</h4>
                            <p>For your last full-stack language, students will select Java in the last 4 weeks of their course.</p>
                            <div className="java_block">
                                <h5>Java</h5>
                                <p>Study procedural programming in Java using popular frameworks and build and manipulate databases in programs like MySQL.</p>
                                <h5>What You’ll Focus On:</h5>
                                <ul className="focus_list">
                                    <li className="lazy-background visible">Java Fundamentals &amp; OOP</li>
                                    <li className="lazy-background visible">Java Web Development</li>
                                    <li className="lazy-background visible">Java Spring MVC, Boot, Security</li>
                                    <li className="lazy-background visible">(JPA Hibernate)</li>
                                    <li className="lazy-background visible">ThymeLeaf</li>
                                    <li className="lazy-background visible">Tomcat</li>
                                    <li className="lazy-background">Deployment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div id="overview_carousel" className={`carousel slide overview_list_contents ${styles.mobileCurriculumContainer}`}>
                        <div className={`carousel-indicators bottom_indicators ${styles.carouselIndicators}`}>
                            <button type="button" data-bs-target="#overview_carousel" data-bs-slide-to="0" className="active">
                            </button>
                            <button type="button" data-bs-target="#overview_carousel" data-bs-slide-to="1">
                            </button>
                            <button type="button" data-bs-target="#overview_carousel" data-bs-slide-to="2">
                            </button>
                            <button type="button" data-bs-target="#overview_carousel" data-bs-slide-to="3">
                            </button>
                            <button type="button" data-bs-target="#overview_carousel" data-bs-slide-to="4">
                            </button>
                        </div>
                        <div className={`carousel-inner ${styles.programInfoMobileContainer}`}>
                            <div className="carousel-item active">
                                                <h3>Week One to Two</h3>
                                                <h4>Programming Basics</h4>
                                                <p>To kick off the program, you’ll explore habits, computer basics, and fundamental programming concepts and skills necessary to be successful in your bootcamp!</p>
                                                <h5>What you'll focus on</h5>
                                                <ul className="focus_list">
                                                    <li className="lazy-background">Basic computer literacy</li>
                                                    <li className="lazy-background">Algorithmic foundations</li>
                                                    <li className="lazy-background">Learning stamina</li>
                                                </ul>
                            </div>
                            <div className="carousel-item">
                                                <h3>Weeks Three to Six</h3>
                                                <h4>Web Fundamentals</h4>
                                                <p>During Web Fundamentals, you’ll be introduced to HTML, CSS, and JavaScript along with other common tools in the industry. At the end of this three week course, students should be able to build out static web pages with JavaScript interactivity.</p>
                                                <h5>What you'll focus on</h5>
                                                <ul className="focus_list">
                                                    <li className="lazy-background">HTML, CSS, &amp; JavaScript</li>
                                                    <li className="lazy-background">Git/Github</li>
                                                    <li className="lazy-background">HTTP Request Response</li>
                                                    <li className="lazy-background">Optional: jQuery &amp; Wireframing</li>
                                                </ul>
                            </div>
                            <div className="carousel-item">
                                                <h3>Weeks Seven to Fourteen</h3>
                                                <h4>Full-Stack Python</h4>
                                                <p>Dive into the first full-stack language: Python. Beginning with small projects, you’ll work your way up to designing a full framework project alongside your classmates and instructor.</p>
                                                <h5>What you'll focus on</h5>
                                                <ul className="focus_list">
                                                    <li className="lazy-background">Python Fundamentals &amp; OOP</li>
                                                    <li className="lazy-background">MySQL</li>
                                                    <li className="lazy-background">Flask</li>
                                                    <li className="lazy-background">MVC Framework&nbsp;</li>
                                                    <li className="lazy-background">ERD / Database Design</li>
                                                    <li className="lazy-background">Web Security Basics</li>
                                                    <li className="lazy-background">Object Relational Mapper</li>
                                                </ul>
                            </div>
                            <div className="carousel-item">
                                                <h3>Weeks Fifteen to Twenty-Two</h3>
                                                <h4>Full-Stack Javascript</h4>
                                                <p>Mid-program, explore your second full-stack language: JavaScript. Studying a wide-range of applicable formats, students can obtain familiarity with building web applications using common industry technologies like MongoDB, Express, React, and NodeJS.</p>
                                                <h5>What you'll focus on</h5>
                                                <ul className="focus_list">
                                                    <li className="lazy-background">JavaScript Fundamentals &amp; OOP</li>
                                                    <li className="lazy-background">Node.JS</li>
                                                    <li className="lazy-background">Express.JS</li>
                                                    <li className="lazy-background">Socket.io</li>
                                                    <li className="lazy-background">MongoDB</li>
                                                    <li className="lazy-background">React</li>
                                                </ul>
                            </div>
                            <div className="carousel-item">
                                                <h3>Weeks Twenty-Three to Thirty</h3>
                                                <h4>Full-Stack Java</h4>
                                                <p>For your last full-stack language, students will select Java in the last 4 weeks of their course.</p>
                                                <div className="java_block">
                                                    <h5>Java</h5>
                                                    <p>Study procedural programming in Java using popular frameworks and build and manipulate databases in programs like MySQL.</p>
                                                    <h5>What You’ll Focus On:</h5>
                                                    <ul className="focus_list">
                                                        <li className="lazy-background">Java Fundamentals &amp; OOP</li>
                                                        <li className="lazy-background">Java Web Development</li>
                                                        <li className="lazy-background">Java Spring MVC, Boot, Security</li>
                                                        <li className="lazy-background">(JPA Hibernate)</li>
                                                        <li className="lazy-background">ThymeLeaf</li>
                                                        <li className="lazy-background">Tomcat</li>
                                                        <li className="lazy-background">Deployment</li>
                                                    </ul>
                                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default HomePage