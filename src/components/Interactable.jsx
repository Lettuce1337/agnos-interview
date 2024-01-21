import React, { cloneElement, isValidElement } from 'react'

function Interactable({children, id, selected, setSelected, bg, stroke, opacity}) {


  return (
    <>
    {React.Children.map(children,(child)=>{
        if(!isValidElement(child)){
            return null;
        }

        return cloneElement(child, 
            {...child.props,
            fill:selected===id || selected==='all'? bg:'white',
            fillOpacity:opacity,
            strokeOpacity:opacity,
            stroke:stroke,
            onClick: () => {setSelected(id);}
            })
        })}
    </>
  )
}

export default Interactable