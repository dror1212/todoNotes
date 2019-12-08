import React from 'react';
import {Checkbox} from 'semantic-ui-react'

export type TodoProps = {
  text : string,
}

class Todo extends React.Component<TodoProps> {

  render(){
      return (
          <div>
            <Checkbox label={this.props.text} />
          </div>
       );
  }   
} 

export default Todo;
