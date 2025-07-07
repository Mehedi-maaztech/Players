import logo from '../../assets/logo.png';
import { BsCoin } from "react-icons/bs";
const Header = ({count}) => {
    return (
        <div>
            <nav className='flex justify-between items-center my-4'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className='flex text-[18px] text-gray-500 gap-20 items-center font-bold'>
                    <a href="#">Home</a>
                    <a href="#">Fixture</a>
                    <a href="#">Team</a>
                    <a href="#">Schedule</a>
                    <a href="#">
                        <span className='flex items-center gap-3 text-gray-800 border-2 border-gray-300 rounded-xl p-2'>{count} Coin <span><BsCoin className='text-amber-500'/></span></span>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;