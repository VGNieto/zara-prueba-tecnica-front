import axios from "axios";
import { useState, useEffect } from "react";
import { Podcast } from "../types/types";
import { checkCookieExpiration, createCookie, eraseCookie, formatPodcastFromApi } from "../utils/utils";
 


 export const useGetPodcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPodcasts = async () => {
      try {
        const { data } = await axios.get(
          "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
        );
        const podcastList = data?.feed?.entry
        if (!podcastList) {
            setPodcasts([]);
        }
         
        const formattedPodcasts:Podcast[] = Object.values(podcastList)?.map((podcast: any) => {
           return formatPodcastFromApi(podcast)
        })
        setPodcasts(formattedPodcasts);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const localPodcasts = localStorage.getItem("podcasts");
    if (localPodcasts && !checkCookieExpiration("timestamp")) {
      setPodcasts(JSON.parse(localPodcasts));
      setLoading(false);
    } else {
      getPodcasts();
      eraseCookie("timestamp")
    }
  }, []);

  useEffect(() => {
    if (podcasts.length > 0 ) {
        localStorage.setItem("podcasts", JSON.stringify(podcasts));
         createCookie("timestamp", new Date().getTime().toString(), 1);
    }
  }, [podcasts]);

  return { podcasts, loading, error };
};


 