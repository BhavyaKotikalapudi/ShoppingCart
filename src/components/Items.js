import React from 'react';
import data from '../Data/data';
import Card from './Card';

export default function Items() {
  return (
    <div>
          {data.map((items,key)=>{
            return <div key={key} className='cont'>
                <Card items={items}/>
            </div>
          })}
        </div>)
}
