 import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Chip from '../components/atoms/Chip/Chip'
import Input from '../components/atoms/Input/Input'
import PodcastCard from '../components/atoms/PodcastCard/PodcastCard'
import { useGetPodcasts } from '../hooks/useGetPodcasts'
import { Podcast } from '../types/types'
const Home = () => {

  const {podcasts, loading} = useGetPodcasts()
  const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>(podcasts)
  const [search, setSearch] = useState('')
  
  useEffect(() => {
     
      if(search!==''){
        const filterPodcasts = podcasts.filter(podcast => {
          return podcast.title.toLowerCase().includes(search.toLowerCase()) || podcast.author.toLowerCase().includes(search.toLowerCase())
        })
         setFilteredPodcasts(filterPodcasts)
      }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  
  useEffect(() => {
    if(podcasts.length>0){
      setFilteredPodcasts(podcasts)
    }
  }, [podcasts])
  
  return (
    <div style={{'margin':'0px 20%'}}>
      <h1 style={{'fontFamily':'Roboto, sans-serif', 'color': '#3377b3'}}>Podcaster</h1>
      <hr style={{'opacity':'30%'}}/>
      <div  style={{ marginBottom:'3rem', display:'flex', alignItems:'center' , justifyContent: 'flex-end' }}>
        <Chip value={podcasts.length.toString()} />
        <Input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      {loading && <p>Loading...</p>}
       <div style={{'display':'grid', 'gridTemplateColumns': '1fr 1fr 1fr 1fr', 'rowGap':'5rem', 'justifyItems':'center'}}>

       {filteredPodcasts && filteredPodcasts.map(podcast => (
        <Link to={`/podcast/${podcast.id}`} key={podcast.id} style={{ textDecoration: 'none' }}> 
          <PodcastCard key={podcast.id} image={podcast.image} title={podcast.title} author={podcast.author} />
        </Link>

      ))}
       </div>
    </div>
  )
}

export default Home