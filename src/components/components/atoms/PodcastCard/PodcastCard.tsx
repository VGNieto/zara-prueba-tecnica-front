import React from 'react'
import { SCPodcastCard } from './styled'


const PodcastCard = ({image, title, author} : {image: string, title: string, author:string}) => {
  return (
    <SCPodcastCard>
        <img className='card-img-top' src={image} alt={title} />
        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{`Author: ${author}`}</p>
            </div>
    </SCPodcastCard>
  )
}

export default PodcastCard