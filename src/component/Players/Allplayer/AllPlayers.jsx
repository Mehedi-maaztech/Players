import Player from "../../../Player/Player";
import './Allplayers.css';
import SelectedPlayers from "../SeletedPlayer/SelectedPlayers";
import { handleAvailable, handleSelectedplayer } from "./loadplayers";

const AllPlayers = ({players, selectedPlayers, handleSelected}) => {
    return (
        <div>
            <div className="flex justify-between py-10">
                <h1 className="text-3xl font-bold">Available Players {players.length} </h1>
                <div className="border-2 border-gray-200 rounded-full overflow-hidden">                    
                
                <button className="active text-2xl py-3 px-5 border-r border-gray-200" onClick={handleAvailable} id="Available">Available</button> 
                <button className="text-2xl py-3 px-5" onClick={handleSelectedplayer} id="Selected">Selected</button>
                </div>
            </div>
            
            <div className="">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4" id="loadPlayers">
                    {players.map(player => <Player key={player.id} player={player} handleSelected={handleSelected}></Player>)}
                </div>
                <div className="hidden grid md:grid-cols-1 sm:grid-cols-1 gap-4" id="loadSelectedPlayers">
                    {selectedPlayers.map(selectedPlayer => <SelectedPlayers key={selectedPlayer.id} selectedPlayer={selectedPlayer}></SelectedPlayers>)}
                </div>
            </div>
        </div>
    );
};

export default AllPlayers;