import React from 'react';
import '../styles/Workshops.scss';

const Workshops = ({work}) => {
    return(
      <a href={work.url}>
        <div typeof='button' className="buttons">
        <div>
          <p>{work.name}</p>
        </div>
        <div>
          <img src={work.image} alt={work.name} />
        </div>
      </div>
      </a>
    )
}
export default Workshops;