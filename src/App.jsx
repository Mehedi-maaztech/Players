import { useState, useEffect } from "react"
import Banner from "./component/Banner/Banner"
import Header from "./component/Header/Header"
import AllPlayers from "./component/Players/Allplayer/AllPlayers"
import { ToastContainer, toast, Flip } from 'react-toastify';
import SelectedPlayers from "./component/Players/SeletedPlayer/SelectedPlayers";


function App() {
  const [players, setPlayers] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleCoinAdd = () => {
    const newCount = count + 15030000
    toast("You have claimed free reward");
    setCount(newCount);
  }

  useEffect(() => {
    fetch('Players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])

  
  const handleSelected = (player) => {
    if( player.price < count){
      const newSelectedplyer = [...selectedPlayers, player]
      setSelectedPlayers(newSelectedplyer);
      //console.log(newSelectedplyer);
      const reducedCount = count - player.price;
      setCount(reducedCount)
      toast("Congratulation");
    }
    else {
      toast("Your Balance is insufficiant");
    }

    
  }

  return (
    <>
      <div className="w-11/12 mx-auto space-y-10">
        <Header count={count}></Header>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Flip}
        />
        <Banner handleCoinAdd={handleCoinAdd}></Banner>
        <AllPlayers players={players} selectedPlayers={selectedPlayers} handleSelected={handleSelected}></AllPlayers>
      </div>
    </>
  )
}

export default App
