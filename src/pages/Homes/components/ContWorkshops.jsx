import React from 'react';
import '../styles/ContWorkshops.scss';

const ContWorkshops = (props) => {
    
    return(
        <div className="contenedor">
            {props.children}
        </div>
    )
}

export default ContWorkshops;