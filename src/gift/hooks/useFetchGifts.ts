import {useEffect, useState} from "react";
import {Gift} from "../../helpers/types";
import {getGifts} from "../../helpers/getGifts";

export const useFetchGifts = (category: string) => {
     const [images, setImages] = useState<Gift[]>([]);
     const [loading, setLoading] = useState<boolean>(true);

     useEffect(() => {
         getGifts(category).then(setImages);
         setLoading(false);
     }, []);

    return {
        images: images,
        loading: loading
    }
}