import React from 'react';
import { IoFlagSharp } from "react-icons/io5";

const Player = ({player, handleSelected}) => {
    const {id, name, country, player_type, img, rating, hand_bat, price} = player;
    return (
        <div>
            <div className="card border-2 border-gray-200 rounded-xl p-5">
                <div className='w-full h-auto'>
                    <img key={id} src={img} alt="" className='object-cover mx-auto rounded-xl'/>
                </div>
                <div className='flex gap-3 items-center text-[22px] text-gray-800 pt-5'>
                    <span className='w-7 rounded-full overflow-hidden'><img src={img} alt="" className=''/></span>
                    <span>{name}</span>
                </div>
                <div className='border-b border-gray-200 flex items-center justify-between py-2'>
                    <span className='flex items-center text-gray-400 gap-2'><IoFlagSharp /> {country}</span>
                    <span className='p-2 bg-gray-200 text-gray-700 rounded-xl'>{player_type}</span>
                </div>
                <p className='text-[20px] text-gray-400 flex justify-between'><span>Rating</span> <span>{rating}</span></p>
                <p className='text-[20px] text-gray-400 flex justify-between'><span>Bating Hand</span> <span>{hand_bat}</span></p>
                <div className='text-[20px] text-gray-400 flex justify-between py-2'>
                    <span>Price {price}</span>
                    <button className='bg-gray-300 p-2 rounded-xl text-gray-700 text-[15px]' onClick={()=> handleSelected(player)}>Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;