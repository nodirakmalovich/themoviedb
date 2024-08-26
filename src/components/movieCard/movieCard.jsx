import { CircularProgress } from '@mui/material';
import dot from '../../assets/dot.svg'
import UseData from '../../hooks/useData'
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';


export default function MovieCardSec({  imageSrc, altText, vote, title, releseDate, id, onClick }) {

    const { imageUrl } = UseData();

    const DateFormatter = ({ date }) => {
        if (!date || isNaN(new Date(date).getTime())) {
            return <p>Noma'lum sana</p>;
        }

        return (
            <p>
                {format(new Date(date), 'MMM dd, yyyy')}
            </p>
        );
    };


    return (
        <div  onClick={onClick}>
            <div className="card relative">
                <img className="icon absolute top-[5px] right-[5px] rounded-[50%] w-[25.6px] h-[25.6px]" src={dot} alt="dot" />
                <img src={imageUrl + imageSrc} alt={altText} className="rounded-[8px] h-[223px] w-full" />
                <div className='relative top-[-20px] left-[10px]'>
                    <CircularProgress
                        className='!w-[38px] !h-[38px] bg-black rounded-[50%]'
                        variant="determinate"
                        value={Math.floor(vote * 10)}
                    />
                    <div className='absolute !w-[38px] !h-[38px] inset-0 z-40 flex justify-center items-center text-white'>
                        <p className='text-[12px]'>{Math.floor(vote * 10)}%</p>
                    </div>
                </div>
                <div className="content px-[10px]">
                    <p className="w-full font-[700] text-black">
                        {title}
                    </p>
                    <DateFormatter date={releseDate} />
                </div>
            </div>
        </div>
    );
}