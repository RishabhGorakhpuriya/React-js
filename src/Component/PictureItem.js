import React from 'react'
import './PictureItem.css'

// import SearchResult from './SearchResult'

export default function PictureItem(props) {
  let { webformatURL, largeImageURL, tags} = props
  return (
    <div className='display-image'>
      <a href={largeImageURL}>
        <img className='image' src={webformatURL} alt="" width={'100%'} height={'500px'} />
      </a>
      <p className='overlay'>{tags}</p>
      
    </div>
  )
}

