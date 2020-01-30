import React from 'react';
import './SchemeList.css';
import SchemeItem from '../Atoms/SchemeItem';

export default function SchemeList(props) {
  return (
    <div>
      {props.schemes.map(scheme => (
        <SchemeItem colors={scheme.colors} name={scheme.name}/>
      ))}
    </div>
  )
}
