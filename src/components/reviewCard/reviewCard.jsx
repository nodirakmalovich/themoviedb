import UseData from "../../hooks/useData"

export default function ReviewCard({image, name, rate, date, review}) {

    const { imageUrl } = UseData()

    return (

        <div className="rounded-lg border-[1px] shadow-lg p-5 my-5">
            <div className=" flex items-center gap-5">
                <img className="w-[45px] h-[45px] rounded-[50%]" src={imageUrl + image} alt={name} />
                <div className="">
                    <p className="text-[20.8px] font-[700] cursor-pointer">
                        A review by {name}
                    </p>
                    <div className="flex gap-2">
                        <p className="bg-[#032541] text-white px-2 rounded-lg text-[0.9em] font-semibold">{rate} %</p> 
                        <p className="font-[300] text-[0.9em]"> Written by {name} on {date}</p>
                    </div>
                </div>
            </div>

            <p className="mt-5">
                {review}
            </p>
        </div>
    )
}