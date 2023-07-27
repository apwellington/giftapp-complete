import {Gift} from "./types";

export const getGifts = async (category: string, limit: number = 10) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZSDkKWjXRXNht0TUnfQPSimr1WuWR4TE&q=${category}&limit=${limit}`
    const resp = await fetch(url);
    const {data} = await resp.json();
    return data.map((img: any) => {
        const gift: Gift = {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
        return gift;
    });
}