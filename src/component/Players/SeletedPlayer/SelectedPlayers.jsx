import React from 'react';
import { MdDeleteForever } from "react-icons/md";
const SelectedPlayers = ({selectedPlayer}) => {
    const {img, name, hand_bat} = selectedPlayer;
    return (
        <div className='selectedPlayers flex justify-between items-center border-2 border-gray-300 rounded-xl shadow p-3'>
            <div className="playerDetails flex gap-3">
                <div className="image w-10">
                    <img src={img} alt="" className='object-cover rounded-xl'/>
                </div>
                <div>
                    <p className='text-2xl text-gray-700'>{name}</p>
                    <span className='text-gray-700'>{hand_bat}</span>
                </div>
            </div>
            <div className="remove">
                <button className='text-red-800 text-2xl'>
                    <MdDeleteForever />
                </button>
            </div>
        </div>
    );
};

export default SelectedPlayers;