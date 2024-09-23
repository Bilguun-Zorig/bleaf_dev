import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Classes from './components/Classes'
import WebFund from './components/WebFund'
import JavaStack from './components/JavaStack'
import MernStack from './components/MernStack'
import PythonStack from './components/PythonStack'
import Contact from './components/Contact'
import styles from './assets/css/FooterStyles.module.css'
import differentStyle from './assets/css/FooterStyleDif.module.css'


function App() {
  
  const location = useLocation(); 

  const hideFooterRoutes = [
    '/bleaf_dev/classes/web_funds',
    '/bleaf_dev/classes/java_stack',
    '/bleaf_dev/classes/mern_stack',
    '/bleaf_dev/classes/python_stack',
  ];

  const isClassRoute = location.pathname === '/bleaf_dev/classes';

  const footerClass = isClassRoute ? differentStyle.footerContainer : styles.footerContainer;


  return (
    <>
        <Nav/>
        <Routes>
          <Route path='/bleaf_dev' element={<HomePage/>}/>
          <Route path='/bleaf_dev/classes' element={<Classes/>}/>
          <Route path='/bleaf_dev/classes/web_funds' element={<WebFund/>}/>
          <Route path='/bleaf_dev/classes/java_stack' element={<JavaStack/>}/>
          <Route path='/bleaf_dev/classes/mern_stack' element={<MernStack/>}/>
          <Route path='/bleaf_dev/classes/python_stack' element={<PythonStack/>}/>
          <Route path='/bleaf_dev/contact' element={<Contact/>}/>
        </Routes>
        {/* Conditionally render Footer if the current route is not in the hideFooterRoutes array */}
        {!hideFooterRoutes.includes(location.pathname) && <Footer isClassRoute={isClassRoute} customClass={footerClass} />}
    </>
  )
}

export default App
