import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation , Link} from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchedComponent = () => {
  const query = useQuery();
  const searchKey = query.get("key");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      if (searchKey) {
        try {
          const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/search",
            {
              params: {
                part: "snippet",
                q: encodeURIComponent(searchKey),
                key: process.env.REACT_APP_YOUTUBE_API_KEY,
                maxResults: 10,
                type: "video",
              },
            }
          );
          setVideos(response.data.items);
        } catch (error) {
          console.error("Error fetching the YouTube data", error);
        }
      }
    };

    fetchVideos();
  }, [searchKey]);
  console.log(videos);

  return (
    <div>
      <ul>
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id.videoId}>
            <li key={video.id.videoId} className="flex h-[300px] mx-4 my-8">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <div>
                <h2 className="font-bold text-lg m-2 p-2">
                  {video.snippet.title}
                </h2>
                <p className="font-light font-serif text-md m-2 p-2">
                  {video.snippet.description}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SearchedComponent;
