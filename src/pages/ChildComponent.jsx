import React from 'react';

function ChildComponent(props) {
  return (
    <div>
        <p>Hello, {props.name}!</p>
    </div>
  )
}

export default ChildComponent;