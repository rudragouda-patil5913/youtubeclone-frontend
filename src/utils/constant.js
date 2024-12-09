const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=32&regionCode=US&key=${API_KEY}`;

export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=apna%20college&maxResults=25&q=surfing&key=${API_KEY}`;
