import React from 'react';
import '../styles/ContButtons.scss';

const ContButtons = ({children}) =>{

    return(
        <div className="cont-button">
            {children}
        </div>
    )
}

export default ContButtons;