import { IoMdArrowDropdown } from "react-icons/io";
import '../Navbar/Navbar.scss'

export default function SingleMoviesCategory() {

    const category = [
        {
            title: 'Overview',
            category: ['Main', 'Alternative Title', 'Cast & Crew']
        },
        {
            title: 'Media',
            category: ['Backdrops', 'Logos', 'Posters', 'Videos']
        },
        {
            title: 'Fandom',
            category: ['Discussion', 'Reviews']
        },
        {
            title: 'Share',
            category: ['Share Link', 'FAcebook', 'Tweet']
        },
    ]

    return (
        <div>
            <ul className="md:flex gap-5 justify-center items-center w-full hidden ">
                {
                    category.map((item, index) => {
                        return (
                            <div key={index}>
                                <li className="flex items-center font-semibold text-black p-2 relative navbar_menu_item cursor-pointer">{item.title} <IoMdArrowDropdown />
                                    <ul className="navbar_menu_item_menu absolute z-40">
                                        {
                                            item.category.map((child, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="navbar_menu_item_menu_list font-semibold text-black p-2 relative"
                                                    >
                                                        {child}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>


                            </div>

                        )
                    })
                }
            </ul>
        </div>
    )
}