import React, {useState} from 'react';

const Card = (props) => {
    const [show, setShow] = useState('olá');
    
    function ToggleImage () {
      setShow('mundo');
    }
  
    return (
       <>
        <div>
          <h1>{props.informacao}</h1>
        </div>
       </>
    )
}
 export default Card;