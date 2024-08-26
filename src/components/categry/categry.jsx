import { useState } from "react";
import rightArrow from '../../assets/arrowRight.svg'


export default function Category() {


    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSec, setIsOpenSec] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleToggleFilter = () => {
        setIsOpenSec(!isOpenSec)
    }

    return (
        <div >
            <div className="sort shadow-lg border-[1px] rounded-lg">
                <div className="sort_title py-[14px] px-[16px] flex justify-between items-center border-b-[1px]" onClick={handleToggle}>
                    <p className="font-semibold">Sort</p>
                    <img className={`w-4 h-4 ${isOpen ? 'rotate-90' : 'rotate-0'}`} src={rightArrow} alt="rightArrow" />
                </div>

                <div className={`sort_result py-[14px] px-[16px] ${isOpen ? 'flex' : 'hidden'} justify-between items-center`}>
                    <p>Sort Results By</p>
                </div>
            </div>


            <div className="filter shadow-lg border-[1px] rounded-lg mt-3">
                <div className="filter_title py-[14px] px-[16px] flex justify-between items-center border-b-[1px]" onClick={handleToggleFilter}>
                    <p className="font-semibold">Filter</p>
                    <img className={`w-4 h-4 ${isOpenSec ? 'rotate-90' : 'rotate-0'}`} src={rightArrow} alt="rightArrow" />
                </div>

                <div className={`filter_result py-[14px] px-[16px] ${isOpenSec ? 'flex' : 'hidden'} justify-between items-center`}>

                    <div className="filter flex flex-wrap gap-3">
                        <h3>Show Me</h3>

                        <div className="w-full flex items-center">
                            <input type="radio" id="everything" name="filter" checked />
                            <label htmlFor="everything" className="ml-2">everything</label>
                        </div>

                        <div className="w-full flex items-center">
                            <input type="radio" id="havent" name="filter" />
                            <label htmlFor="havent" className="ml-2">Movies I Haven't Seen</label>
                        </div>

                        <div className="w-full flex items-center">
                            <input type="radio" id="have" name="filter" />
                            <label htmlFor="have" className="ml-2">Movies I Have Seen</label>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}