import axios from "axios"
const unsplashAPIUrl = "https://api.unsplash.com/photos/random"
const key = "hKTg2QLuZM2vhYqX_msxan8i8mmE2OPiQ3yoJ1qZHl8" // TODO : .env


export const imageUrl = ""


export const getImageUrl = async (query: string) => {
    const queryUrl = unsplashAPIUrl + "?query=" + query + "&client_id=" + key;
    const { data } = await axios.get(queryUrl);
    return (data.urls.regular)
  };