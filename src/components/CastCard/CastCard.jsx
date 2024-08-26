import { useNavigate } from "react-router-dom"
import UseData from "../../hooks/useData"

export default function CastCard({image, altText, name, cast}) {

    const {imageUrl} = UseData()


    return (
        <div className="cast_card w-[140px] h-[285px] rounded-lg shadow-lg">
            <div className="card_image">
                <img className="rounded-t-[8px]" src={imageUrl + image} alt={name} />
            </div>
            <div className="card_body p-2">
                <h2 className="text-[16px] font-semibold">{name}</h2>
                <p className="text-[14.4px]">{cast}</p>
            </div>
        </div>
    )
}