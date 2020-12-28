import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './About';
import Features from './Features';
import Tour from './Tour';

const Slide = () => {



    return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <div className="inside_slide">
                            <Header/>
                            <Link to="/two" className="next">&#10095;</Link>
                        </div>
                    </Route>
                    <Route exact path="/two">
                        <div className="inside_slide">
                            <About/>
                            <Link to="/three" className="next-color">&#10095;</Link>
                            <Link to="/" className="previous-color">&#10094;</Link>
                        </div>
                    </Route>
                    <Route exact path="/three">
                        <div className="inside_slide">
                            <Features/>
                            <Link to="/four" className="next">&#10095;</Link>
                            <Link to="/two" className="previous">&#10094;</Link>
                        </div>
                    </Route>
                    <Route exact path="/four">
                        <div className="inside_slide">
                            <Tour/>
                            <Link to="/five" className="next">&#10095;</Link>
                            <Link to="three" className="previous">&#10094;</Link>
                        </div>
                    </Route>
                </Switch>
            </Router>    
    )
}

export default Slide;