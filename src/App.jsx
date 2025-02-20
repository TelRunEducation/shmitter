import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";

function App() {
  const [user, setUser] = useState({
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
  });

  const [stats, setStats] = useState({
    followers: 0,
    following: 0
  });

  const changeStats = (statsType, sum) => {
    setStats(stats => {
      let res = stats[statsType] + sum;
      res = res < 0 ? 0 : res;
      return {...stats, [statsType]: res};
    })
  }

  return (
    <div className={'app'}>
        <TwitterContext.Provider value={{
          user, stats, changeStats,
        }}>
          <Navigation/>
          <Body/>
        </TwitterContext.Provider>
    </div>
  )
}

export default App
