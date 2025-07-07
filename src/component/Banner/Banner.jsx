import './Banner.css'
import banner from '../../assets/banner-main.png';
const Banner = ({handleCoinAdd}) => {
    return (
        <div>
            <div className="bannerContainer w-full text-center pt-20 space-y-6">
                <img src={banner} alt="" className='mx-auto'/>
                <h1 className='md:text-4xl sm:text-2xl text-white'>Assembel Your Ultimate Dream 11 Team</h1>
                <p className='text-gray-400'>Byond Boundaries Beyond Limits</p>
                <button className='claimbtn' onClick={handleCoinAdd}>Claim Free Credits</button>
            </div>
        </div>
    );
};

export default Banner;