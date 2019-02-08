import React, { Component } from 'react';
import ComponentOne from './components/componentOne.js';
import ComponentTwo from './components/componentTwo.js';
import ComponentThree from './components/componentThree.js';
import ComponentFour from './components/componentFour.js';
import ComponentFive from './components/componentFive.js';

import './App.css';

class App extends Component {
  render() {
    return (
          <div className="container"  style={{backgroundColor: "#770929",width:'100%',height:'100vh',border:"2px solid #770929", borderRadius:50}}>

            <div className="row">
              <div className="col-md-12 Heading">
                <h2 style={{color:"white"}}>Demo App</h2>
              </div>
            </div>

            <ComponentOne>

              <ComponentTwo>  
              </ComponentTwo>

              <ComponentThree>

                <ComponentFour>
                </ComponentFour>

                <ComponentFive>
                </ComponentFive>

              </ComponentThree>

            </ComponentOne>
        </div>
    );
  }
}

export default App;
