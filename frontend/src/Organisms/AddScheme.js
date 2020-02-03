import React from 'react';

import Card from '../UI/Card';
import './AddScheme.css';

export default function AddScheme() {
  const addScheme = (e) => { 
    e.preventDefault();
    
  }
  
  return (
    <div className='add-scheme-form'>

    <Card>
      <form>
        <div>
          <label>
            Scheme Name: 
          </label>
          <input type='text' className='name-form' />
        </div>

        <div>
          <label>
            Color1 Hex Code: 
          </label>
          <input type='text' className='color-hex' />
        </div>

        <div>
          <label>
            Color2 Hex Code:
          </label>
          <input type='text' className='color-hex' />
        </div>

        <div>
          <label>
            Color3 Hex Code:
          </label>
          <input type='text' className='color-hex' />
        </div>

        <div>
          <label>
            Color4 Hex Code:
          </label>
          <input type='text' className='color-hex' />
        </div>
        
        <div>
          <label>
            Color5 Hex Code:
          </label>
          <input type='text' className='color-hex' />
        </div>
        
        <button onClick={addScheme} className='add-scheme-button'>Add New Color Scheme</button>
      </form>

    </Card>
    </div>
    
  )
}
