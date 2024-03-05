import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// Css Import
import './assets/scss/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Page404 from "./pages/page404/Page404";
import Home1 from "./pages/home1/Home1";
import ServiceDetail from "./pages/serviceDetail/ServiceDetail";

function App() {
  return (
    <Router>
      <ScrollToTop> 
        <Routes>
          
          {/* Home - Pages */}
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home1 />}/>
        
          {/* Pages */}
          <Route path={process.env.PUBLIC_URL + "/Page404"} element={<Page404 />}/>
          <Route path={process.env.PUBLIC_URL + "/ServiceDetail"} element={<ServiceDetail />}/>

        
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
