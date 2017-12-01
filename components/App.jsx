import React from 'react';
import {  DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
// import queryString from 'query-string';




/**
* High order components.
*/
 import Food from './Food/Food.jsx';
 import Box from './Box/Box.jsx';

/**
* Styles.
*/
 import { boxStyle } from './App.css';












 class App extends React.Component {

  constructor(props){
    super(props);



  }




  render(){
    return (
      <div>
        <Food value='orange' />
        <Food value='apple' />
        <Food value='cheese' />


        <div className={boxStyle} >
          <Box />
        </div>

      </div>
    );
  }

}

export default DragDropContext(HTML5Backend)(App)
