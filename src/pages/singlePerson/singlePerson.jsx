import { useNavigate } from "react-router-dom";
import SingleMoviesCategory from "../../components/singleMoviesCategory/singleMoviesCategory"
import UseData from "../../hooks/useData"

export default function SinglePerson() {

    const { singlePerson, imageUrl, singlePersonCast } = UseData()

    const route = useNavigate();

    const paragraphs = singlePerson?.biography ? singlePerson.biography.split('\n\n') : [];

    const formatDate = (dateStr) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', options);
    };

    const calculateAge = (dateStr) => {
        const birthday = new Date(dateStr);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    const formattedDate = formatDate(singlePerson.birthday);
    const age = calculateAge(singlePerson.birthday);



    function handleSingleMovie(movieId) {

        route(`/movie-info/${movieId}`);
    }

    return (
        <div>
            <SingleMoviesCategory />

            <div className="my-container px-10 border-t-[1px] pt-5">
                <div className="content flex  justify-between">
                    <div className="!w-[300px] ">

                        <img
                            className="w-[300px] h-[450px] rounded-lg"
                            src={imageUrl + singlePerson.profile_path}
                            alt={singlePerson.name} />


                        <p className="text-[20.8px] font-[600] mt-8 mb-5">
                            Personal Info
                        </p>

                        <div>
                            <p className="text-[16px] font-[600] mt-2 ">
                                Known For
                            </p>
                            <p>
                                {singlePerson.known_for_department}
                            </p>
                        </div>


                        <div>
                            <p className="text-[16px] font-[600] mt-2 ">
                                Known Credits

                            </p>
                            <p>
                                {singlePersonCast.length}
                            </p>
                        </div>


                        <div>
                            <p className="text-[16px] font-[600] mt-2 ">
                                Gender
                            </p>
                            <p>
                                {singlePerson.gender === 2 ? "Male" : "Female"}
                            </p>
                        </div>


                        <div>
                            <p className="text-[16px] font-[600] mt-2 ">
                                Birthday
                            </p>
                            <p>
                                {formattedDate} ({age} years old)
                            </p>
                        </div>


                        <div>
                            <p className="text-[16px] font-[600] mt-2 ">
                                Place of Birth
                            </p>
                            <p>
                                {singlePerson.place_of_birth}
                            </p>
                        </div>


                        <div>
                            <p className="text-[16px] font-[600] mt-2 ">
                                Also Known As
                            </p>
                            <p>
                                {singlePerson?.also_known_as?.map((item, index) => {
                                    return (
                                        <p key={index}>
                                            {item}
                                        </p>
                                    )
                                }) }
                            </p>
                        </div>
                    </div>

                    <div className="info w-[890px]">
                        <p className="text-[35.2px] font-[700]">
                            {singlePerson.name}
                        </p>
                        <div>

                            <p className="text-[20.8px] font-[600] mt-8 mb-5">
                                Biography
                            </p>

                            <div>
                                {paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>

                            <div className="">

                                <p className="text-[20.8px] font-[600] mt-8 mb-5">
                                    Known For
                                </p>

                                <div className="flex overflow-hidden gap-3 overflow-x-auto pb-5 w-[890px]">
                                    {
                                        singlePersonCast.map((item, index) => {
                                            return (
                                                <div key={index} onClick={() => { handleSingleMovie(item.id) }}>

                                                    <img src={imageUrl + item.poster_path} alt={item.title} className="w-[130px] h-[195px] rounded-lg" />

                                                    <p className="w-[130px] text-center">
                                                        {item.title}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}