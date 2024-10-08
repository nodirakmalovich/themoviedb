import logo from '../../assets/footerLogo.svg'
import './footer.scss'


export default function Footer() {
    return (
        <div className="footer bg-[#032541] h-[650px] sm:h-[350px]  px-10 py-8 lg:mx-0  lg:h-[324px] flex lg:items-center justify-center">
            <div className="footer_content grid lg:gap-0 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-5 w-[859px] h-[147px] justify-center">

                <div className="footer_content_logo relative   lg:mr-10">
                    <img src={logo} alt="logo" className='w-[130px] h-[93.71px] lg:absolute top-[-40px]' />

                    <p className='absolute left-[-85px] bottom-0 text-[#01b4e4] font-semibold text-[1.3em] px-4 py-2 bg-white border-white border-[1px] w-[220.3px] rounded-[0.25rem] mt-[40px] hidden lg:block'>Hi nodirakmalovich!</p>
                </div>

                <ul className='text-white font-[400] leading-[23.04px] text-[17.28px] mr-10'>
                    <li className='text-[20.06px] font-[700]'>The Basics</li>
                    <li>About TMDB</li>
                    <li>Contact Us</li>
                    <li>Support Forums</li>
                    <li>API</li>
                    <li>System Status</li>
                </ul>


                <ul className='text-white font-[400] leading-[23.04px] text-[17.28px] mr-10'>
                    <li className='text-[20.06px] font-[700]'>Get Involved</li>
                    <li>Contribution Bible</li>
                    <li>Add New Movie</li>
                    <li>Add New TV Show</li>
                </ul>


                <ul className='text-white font-[400] leading-[23.04px] text-[17.28px] mr-10'>
                    <li className='text-[20.06px] font-[700]'>Community</li>
                    <li>Guidelines</li>
                    <li>Discussions</li>
                    <li>Leaderboard</li>
                </ul>


                <ul className='text-white font-[400] leading-[23.04px] text-[17.28px] mr-10'>
                    <li className='text-[20.06px] font-[700]'>Legal</li>
                    <li>Terms of Use</li>
                    <li>API Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>DMCA Policy</li>
                </ul>
            </div>
        </div>
    )
}