import React from 'react'
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import Link from 'react-router-dom/Link';
import Gallery from './container/Gallery/Gallery';
import ControlPanel from './container/ControlPanel/ControlPanel';
import WeddingStories from './container/WeddingStories/WeddingStories';
import Contact from './container/Contact/Contact';
import Feedback from './container/Feedback/Feedback';
import Login from './container/Common/authUtils/Login';
import Registration from './container/Common/authUtils/Registration';
import Footer from './container/Footer/Footer';


export default (
    <div className='col-md-12'>
        <div className="logo">
            {/* <h1 className="logo">Bilyk Bogdan</h1>
            <p>studio</p> */}
            <a href="/" ><img src={require('../src/_/img/logo.png')} /></a>
        </div>
        <ul className='nav-menu'>
            <li><Link to="/">Gallery</Link></li>
            <li><Link to="/wedding-stories">Wedding Stories</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* <li><Link to="/control-panel">Control Panel</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/_/_/_/_/_/-/-/registration">Registration</Link></li> */}
        </ul>
        <Route exact path="/" component={Gallery} />
        <Route path="/wedding-stories" component={WeddingStories} />
        <Route path="/contact" component={Contact} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/control-panel" component={ControlPanel} />
        <Route path="/login" component={Login} />
        <Route path="/_/_/_/_/_/-/-/registration" component={Registration} />
        <Switch>
            <Redirect from="/home" to="/" />
        </Switch>
        <Footer />
    </div>
);