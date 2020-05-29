import React, { useState }  from 'react';
import './App.css';
import SearchButton from './component/SearchButton'
import PopularMovieList from './component/PopularMovieList'
import {NavLink, Route, HashRouter, withRouter} from 'react-router-dom'
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Movie from "./component/Movie"
import Home from './component/Home'

class App extends React.Component {
  constructor(params)
  {
    super(params);
    this.state={id: 0}
  }

  render(){
    return(
      <Router>
 <Switch>
        <Route exact path="/" render={()=> (<Home ></Home>)}/>

        <Route path="/Movies/:id" render={(props)=>  (<Movie  {...props} ></Movie>)}></Route>
       </Switch>
      </Router>
  );
  }
}



export default () => (
  <div>
     <Router>
          <Route component={App} />
     </Router>
 </div>
);

