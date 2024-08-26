// import { useDispatch, useSelector } from 'react-redux'
// import { FaRegMoon, FaRegSun } from "react-icons/fa";
// import { toggleTheme } from '../../store/themeSlice';

// export default function ThemeComponent() {
//     const theme = useSelector((state) => state.theme.value)
//     const dispatch = useDispatch()

//     return (
//         <div>
//             <button onClick={() => { dispatch(toggleTheme()) }}>
//                 {
//                     theme === 'light' ? <FaRegMoon /> : <FaRegSun />
//                 }
//             </button>
//         </div>
//     )
// }