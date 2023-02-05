import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PodcastDetailedCard from "../components/atoms/PodcastDetailCard/PodcastDetailCard";
import { useGetPodcasts } from "../hooks/useGetPodcasts";
import { Podcast as PodcastType } from "../types/types";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Podcast = () => {
  let navigate = useNavigate()

  const { podcastId } = useParams<{ podcastId: string }>();
  const [selectedPodcast, setSelectedPodcast] = useState<PodcastType | null>(
    null
  );
  const { podcasts, loading } = useGetPodcasts();
  useEffect(() => {
    if (podcasts.length > 0) {
      const podcast = podcasts.find(
        (podcast: PodcastType) => podcast.id === podcastId
      );
      setSelectedPodcast(podcast || null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcasts]);

  return (
    <div style={{display:'flex', alignContent:'center', flexGrow:'1', justifyContent:'space-between'}}>
      {loading && <p>Loading...</p>}
      {selectedPodcast && (
        <PodcastDetailedCard
          image={selectedPodcast.image}
          title={selectedPodcast.title}
          author={selectedPodcast.author}
          description={selectedPodcast.description}
        />
      )}

      <div >
        <div>
          <span>Episodes :1</span>
        </div>
        <div>
        <button onClick={() => navigate("./episode/1")}>Go To Episode 1</button>
      </div>
      </div>

     



      {/* <div>
            <button onClick={() => navigate("./episode/2")}>Go Back One</button>
      </div> */}
      <Outlet />
    </div>
  );
};

export default Podcast;
