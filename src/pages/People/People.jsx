import { Route, useNavigate } from "react-router-dom"
import PeopleCard from "../../components/PeopleCard/PeopleCard"
import UseData from "../../hooks/useData"
import { t } from "i18next"

export default function PeopleData() {

    const { popularPerson } = UseData()
    const route = useNavigate()

    const handlePerson = (movieId) => {
    route(`/person/${movieId}`)
    }

    return (
        <div className="my-container px-10 ">
            <p className="text-[1.5em] font-[700] my-5">{t("Popular People")}</p>

            <div className="person_row sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 flex flex-wrap justify-center gap-5 my-5">
                {
                    popularPerson.map((person, index) => {
                        return (

                            <div key={index} className="shadow-lg w-[315px] sm:w-auto" onClick={() => {handlePerson(person.id)}}>
                                <PeopleCard
                                    name={person.name}
                                    image={person.profile_path}
                                    description={
                                        person.known_for
                                            .map((item) => item.title || item.name)
                                            .join(', ')
                                    }
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}