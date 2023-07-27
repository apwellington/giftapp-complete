import {GridGiftComponentProps} from "../../helpers/types";
import {capitalize} from "../../helpers/texthelpers";
import {GiftGridItemComponent} from "./";
import {useFetchGifts} from "../hooks/useFetchGifts";
import {LoadingComponent} from "../../common/LoadingComponent";



export const GridGiftComponent = ({category}: GridGiftComponentProps) => {


    const {images, loading} = useFetchGifts (category);

    return (
        <>
            <h3>{capitalize(category)}</h3>
            <div className="card-grid">
                {loading
                    ? <LoadingComponent/>
                    :images.map((image) => (
                        <GiftGridItemComponent key={image.id} image={image}/>
                    ))
                }
            </div>
        </>
    );
};