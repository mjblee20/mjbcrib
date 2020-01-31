import React from 'react';

import './SchemeContainer.css';
import AddScheme from './AddScheme';
import SchemeList from './../Compounds/SchemeList'

const SCHEMES = [
  {
    name: 'warm',
    colors: ['#3C1518', '#92140C', '#FF7700', '#EFD28D', '#D58936']
  },
  {
    name: 'cold',
    colors: ['#71F79F', '#3DD6D0', '#513C2C', '#28190E', '#0081AF']
  },
  {
    name: 'funky',
    colors: ['#220C10', '#ECE2D0', '#7FD1B9', '#FF8A5B', '#F46197']
  },
]

export default function SchemeContainer() {
  return (
    <div className='scheme-content-container'>
      <SchemeList schemes={SCHEMES} />
      <AddScheme />
    </div>
  )
}
