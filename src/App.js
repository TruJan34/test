import React, { Component } from 'react';
import { BrowserRouter as Router,
   Route,
   Link,
   Switch,   
    } from 'react-router-dom';
import {browserHistory, IndexRoute} from 'react-router'
import { Provider } from 'react-redux';

// Components
import HeaderNavbar from './Components/Shared/Navbar/HeaderNavbar';
import HomePage from './Components/Home/HomePage'
import Grid from './Components/Grid/Grid';
import Single from './Components/Single/Single';
import Store from './Store/index';
import Footer from './Components/Shared/Footer/Footer';
import About from './Components/About/About';

// Obj
import Homes from './Components/Grid/Homes/Homes';

// CSS
import './App.css'


// 
import Obj from './Components/Obj/Obj'

// App
import StoreApp from './Components/StoreApp'

//
import {HomesStore} from './Components/StoreApp';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Provider store={Store}>
      
      <Router >
        <div>
        <HeaderNavbar/>          
          <Switch>
            <Route exact path='/' component={StoreApp} />
            <Route path ='/g' component={Grid} />
            <Route path='/view/:postId' component={Single} />

            <Route path="/obj" component={Obj} />
            <Route path="/homes" component={HomesStore} />
            <Route path="/about" component={About} />
            
            Add all route above this line
            <Route component = {NotFound} />
          </Switch>         
               
        </div>        
      </Router>
      </Provider>
    )
  }
}

const NotFound = () => {
  return(
    <div className="pagenotfound">
      <h1><i class="fas fa-hand-paper"></i></h1><code>Hold on..404 Here, Page that you looking is NOT FOUND!!</code>
    </div>
  )
}
export default App;