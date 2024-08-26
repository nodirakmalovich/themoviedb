import UseData from "../../hooks/useData"

export default function PeopleCard({ image, name, description }) {

    const { imageUrl } = UseData()

    return (
        <div>
            <div className="card rounded-lg box-border">
                <div className="card_image">
                    <img
                        className="rounded-t-lg h-[315px] w-[315px] object-cover"
                        src={imageUrl + image}
                        alt={name} />
                </div>
                <div className="card_body px-[10px] py-2">
                    <p className="text-[1.1em] font-[700]">
                        {name}
                    </p>
                    <p className="text-[0.9em] font-[400] text-[#00000099]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}