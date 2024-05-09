import React from 'react'

export default function Links() {

  const menuLinks = ['Home', 'Profile', 'Skills', 'Certificates', 'Experience', 'Portfolio', 'Contact']
  return (
    <div className='links' style={{color:'rgb(2, 18, 15)'}}>{menuLinks.map(item =>(
      <a href={`#${item}`} key={item}>{item}</a>
    ))}</div>
  )
}
