import React from 'react';
import './SchemeItem.css';

/**
 * 
 * @param {Object} props [obj]colorset, [string]name
 */
export default function SchemeItem(props) {
  return (
    <div className='scheme-item-container'>
      <div className='scheme-colors'>
        {props.colors.map(color => {
          return(
            <div style={{ background: color }}>
              <span>{color}</span>
            </div>
          );
        })}
      </div>
      <div className='scheme-name'>
        {props.name}
      </div>
    </div>
  )
}
