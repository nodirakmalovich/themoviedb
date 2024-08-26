import { Route, useNavigate } from "react-router-dom"
import PeopleCard from "../../components/PeopleCard/PeopleCard"
import UseData from "../../hooks/useData"

export default function PeopleData() {

    const { popularPerson } = UseData()
    const route = useNavigate()

    const handlePerson = (movieId) => {
    route(`/person/${movieId}`)
    }

    return (
        <div className="my-container px-10 ">
            <p className="text-[1.5em] font-[700] my-5">Popular People</p>

            <div className="person_row grid grid-cols-4 gap-5 ">
                {
                    popularPerson.map((person, index) => {
                        return (

                            <div key={index} className="shadow-lg" onClick={() => {handlePerson(person.id)}}>
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