import UseData from "../../hooks/useData"

export default function RecomendCard({ image, altText, title, rate, date }) {

    const { imageUrl } = UseData()

    return (
        <div className="w-[250px] group">
            <div className="relative">
                <img className="w-[251px] h-[141px] rounded-lg" src={imageUrl + image} alt={altText} />
                <div className="absolute bottom-0 bg-gray-400/90 w-full rounded-b-lg h-[40px] hidden items-center px-3 group-hover:flex">
                    {date}
                </div>
            </div>
            <div className="flex justify-between items-center px-1">
                <p>{title}</p>
                <p>{rate}%</p>
            </div>
        </div>

    )
}