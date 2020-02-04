import React from 'react';
import './SchemeItem.css';
import Card from '../UI/Card';

/**
 * 
 * @param {Object} props [obj]colorset, [string]name
 */
export default function SchemeItem(props) {
  return (
    <Card className='scheme-cards'>
      <div className='scheme-item-container'>

        <div className='scheme-name'>
          {props.name}
        </div>

        <hr />

        <div className='scheme-colors'>
          
          {props.colors.map(color => {
            return(
              <div className='color-bar' style={{ background: color }}>
                <span>{color}</span>
              </div>
            );
          })}
        </div>
        
      </div>
    </Card>
  )
}
