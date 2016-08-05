import React from 'react';


export default function ItemVal(props){
  return(
    <div onClick={() => {

      props.deleteItem(props.index);

    }}>
      {props.value}
    </div>
  )
}




