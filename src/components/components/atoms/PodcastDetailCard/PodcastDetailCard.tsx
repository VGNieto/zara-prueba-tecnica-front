import React from 'react'
import { SCPodcastDetailedCard } from './styled'


const PodcastDetailedCard = ({image, title, author, description} : {image: string, title: string, author:string, description: string}) => {
  return (
    <SCPodcastDetailedCard>
        <div className='card-img'>
          <img className='card-img-top' src={image} alt={title} />
        </div>
        <div className='card-body'>
            <hr style={{opacity: '30%'}} />
            <h5 className='card-title'>{`${title}`}</h5>
            <h6 className='card-author'>{` by ${author}`}</h6>
            <hr style={{opacity: '30%'}} />


            <p className='card-text-title'>{`Description:`}</p>
            <p className='card-text'>{`${description}`}</p>
            </div>
    </SCPodcastDetailedCard>
  )
}

export default PodcastDetailedCard