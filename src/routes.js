import React from 'react'
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import Link from 'react-router-dom/Link';
import Gallery from './container/Gallery/Gallery';
import WeddingStories from './container/WeddingStories/WeddingStories';
// import Photo from './container/Photo/Photo';
import Contact from './container/Contact/Contact';
import Feedback from './container/Feedback/Feedback';
import Footer from './container/Footer/Footer';

export default (
    <div>
        <div className="logo">
            {/* <h1 className="logo">Bilyk Bogdan</h1>
            <p>studio</p> */}
            <a href="/" ><img src={require('../src/_/img/logo.png')} /></a>
        </div>
        <ul className='nav'>
            <li><Link to="/">Gallery</Link></li>
            <li><Link to="/wedding-stories">Wedding Stories</Link></li> 
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
        </ul>
        <Route exact path="/" component={Gallery} />
        <Route path="/wedding-stories" component={WeddingStories} />
        {/* <Route path="/photo" component={Photo} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/feedback" component={Feedback} />
        <Switch>
            <Redirect from="/home" to="/" />
        </Switch>
        <Footer />
    </div>
);