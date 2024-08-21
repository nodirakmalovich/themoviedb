import dot from '../../assets/dot.svg'
import play from '../../assets/play.svg'
import UseData from '../../hooks/useData'

export default function MovieCard({ imageSrc, altText, title, onMouseEnter, onMouseLeave }) {


    const { imageUrl } = UseData()

    return (
        <div className="card w-[300px] flex-shrink-0"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div className="card_wrapper relative">
                <div className="back absolute top-0 right-0 bottom-0 left-0 z-30 bg-gray-700/50 rounded-[10px]"></div>
                <img src={dot} alt="dot" className="absolute top-[5px] right-[5px] w-[25.6px] h-[25.6px]" />
                <div className="play absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center z-50">
                    <img src={play} alt="play" className="w-16 h-16 mx-auto" />

                </div>
                <img src={imageUrl + imageSrc} alt={altText} className="w-[300px] h-[169px] rounded-[10px] z-20" />
            </div>
            <p className="text-white text-center font-semibold text-[19.2px] mt-5">
                {title}
            </p>
        </div>
    )
}