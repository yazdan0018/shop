import React, { useState, useEffect, useRef } from 'react';

function Example() {
    const [name, setName] = useState('');
    const prevName = useRef();

  useEffect(()=>{
      prevName.current = name
  },[name])

    return (
        <div>
            <input  onChange={e => setName(e.target.value)} type="text"/>
            <h2 >{name} befor {prevName.current}</h2>
        </div>
    );
}

export default Example;