import React from 'react';


export default function AddScheme() {
  const addScheme = (e) => { 
    e.preventDefault();
    
  }
  
  return (
    <div>
      <form>
        <div>
          <label>
            Scheme Name:
            <input type='text' className='name-form' />
          </label>
        </div>
          <label>
            Color1 Hex Code:
            <input type='text' className='color-hex' />
          </label>
        <div>
          <label>
            Color2 Hex Code:
            <input type='text' className='color-hex' />
          </label>
        </div>
        <div>
          <label>
            Color3 Hex Code:
            <input type='text' className='color-hex' />
          </label>
        </div>
        <div>
          <label>
            Color4 Hex Code:
            <input type='text' className='color-hex' />
          </label>
        </div>
        <div>
          <label>
            Color5 Hex Code:
            <input type='text' className='color-hex' />
          </label>
        </div>
        
        <button onClick={addScheme}>Add New Color Scheme</button>
      </form>
    </div>
  )
}
