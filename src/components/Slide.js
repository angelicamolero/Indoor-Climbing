import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

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
                            <p>segundo slide</p>
                            <Link to="/three" className="next">&#10095;</Link>
                            <Link to="/" className="previous">&#10094;</Link>
                        </div>
                    </Route>
                </Switch>
            </Router>    
    )
}

export default Slide;