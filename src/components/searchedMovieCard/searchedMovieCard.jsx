import UseData from "../../hooks/useData";



export default function SearchedMovieCard({ imageSrc, altText, title, releaseDate, description }) {


    const { imageUrl } = UseData()




    return (
        <div className="searchedmovie_card border-[1px] rounded-[8px] box-border shadow-[0 2px 8px rgba(0, 0, 0, .1)] mb-5">
            <div className="searchedmovie_card_wrapper flex">
                <img
                    src={imageUrl + imageSrc}
                    alt={altText}
                    className="w-[94px] h-[141px] rounded-l-[8px]"
                />
                <div className="searchedmovie_card_wrapper_body py-[10px] px-[15px]">
                    <div className="searchedmovie_card_wrapper_body_title">

                        <p className="searchedmovie_card_wrapper_body_title text-[1.2em] leading-[1.2em] font-semibold">
                            {title}
                        </p>
                        <span className="text-[#999]">{releaseDate}</span>
                    </div>

                    <p className="searchedmovie_card_wrapper_body_description mt-6 w-full">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );

}