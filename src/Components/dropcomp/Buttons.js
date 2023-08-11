import React from 'react'
import Base from '../../Base/Base'
import { dash_data } from '../../data/data'


const Buttons = () => {
  return (
    <Base
            styles={"title-page"}
    title={"Buttons"}
    >
        <div className="card-data">
            {dash_data.map((data,idx)=>(
                <div className="card"  key={idx}>
                    <div style={{borderLeft:`3px solid ${data.color}`}} className="card-body1">
                        <p 
                        style={{
                            color:`${data.color}`,
                            fontSize:'12px',
                        }}
                        >{data.title}</p>
                        <p>{data.price}</p>
                    </div>
                    <div className="card-body2">
                        <i className="icon-card">{data.icon}</i>
                    </div>
                </div>
            ))}
        </div>
                
        </Base>
  )
}

export default Buttons