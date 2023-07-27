import {GiftGridItemComponentProps} from "../../helpers/types";


export const GiftGridItemComponent = ({image}: GiftGridItemComponentProps) => {
    return (
        <div className="card">
            <img src={image.url} alt={image.title}/>
            <p>{image.title}</p>
        </div>
    );
};