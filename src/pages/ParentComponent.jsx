import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    var name = 'Arisrada';
  return (
    <div>
        <ChildComponent name={name}/>
    </div>
  )
}

export default ParentComponent