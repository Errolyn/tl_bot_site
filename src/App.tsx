import React, { useState } from 'react';
import { Login } from "./components/discordLogin";
import { GuildsSelector } from './components/guildSelector';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); //Thinking the state for if logged in should go here

  let guild = [{ // Example informtaion to start working with the different components.
    id: "66192955777486848",
    name: "Function & Arg",
    icon: "8bfeb3237cd8697d1d1cd5c626ca8cea",
    owner: false,
    permissions: 37084737,
    features: ["feature"],
    permissions_new: "109558750785",
  },
  {
    id: "81384788765712384",
    name: "Discord API",
    icon: "a363a84e969bcbe1353eb2fdfb2e50e6",
    owner: false,
    permissions: 104189632,
    features: ["feature"],
    permissions_new: "107478372032",
  },
  {
    id: "375719969490599947",
    name: "The Fungeon",
    icon: "56554f6a5ead3a605137bd8b486016e2",
    owner: true,
    permissions: 2147483647,
    features: ["feature"],
    permissions_new: "137438953471",
  },]


  return (
    <div className="App">TimeLord
      <Login /> {/* Should probably change to a log out button after successful login */}
      <GuildsSelector guilds={guild} /> {/* This needs to be conditional on successful login and auth with discord. Also the guild list needs to be passed here. */}
    </div>
  );
}

export default App;
