import React from 'react';
import { DragSource } from 'react-dnd';



import { ItemTypes } from '../../constants/dndCompTypes';

/**
* High order components.
*/
// import Menu from '../Menu/Menu.jsx';

/**
* Styles.
*/
 import { foodStyle } from './Food.css';








const foodSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


class Food extends React.Component {

  constructor(props){
    super(props);


  }




  render(){

     const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <div className={foodStyle}>
        {this.props.value}
      </div>
    );
  }

}


export default DragSource(ItemTypes.FOOD, foodSource, collect)(Food);
