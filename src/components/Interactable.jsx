import React, { Children, cloneElement, isValidElement, useEffect, useState } from 'react'

function Interactable({children, id, selected, setSelected}) {

  const [fill,setFill] = useState('white');

  useEffect(()=>{
    setFill(selected===id || selected==='all'? 'pink':'white');
  },[selected])

  return (
    <>
    {React.Children.map(children,(child)=>{
        if(!isValidElement(child)){
            return null;
        }
        
        return cloneElement(child, 
            {...child.props,
            fill:fill,
            onClick: () => {setSelected(id);}
            })
        })}
    </>
  )
}

export default Interactable