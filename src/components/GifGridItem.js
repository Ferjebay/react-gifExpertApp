import React from 'react'

export const GifGridItem = ({ id, title, url })=> {

  return (
    <div className='card animate__animated animate__bounce'>
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />