import "./App.css";
import DoesTHisSound from "./components/DoesTHisSound";
import EQBeatsIQ from "./components/EQBeatsIQ";
import EQTheBestForYou from "./components/EQTheBestForYou";
import Header from "./components/Header";
import Home from "./components/Home";
import MeetAhead from "./components/MeetAhead";
import WhatPeopleThinksAboutYou from "./components/WhatPeopleThinksAboutYou";
import WrongWithSelfImprovement from "./components/WrongWithSelfImprovement";

function App() {
  return (
    <>
      <Header />
      <Home />
      <EQBeatsIQ />
      <DoesTHisSound />
      <MeetAhead />
      <WrongWithSelfImprovement />
      <EQTheBestForYou />
      <WhatPeopleThinksAboutYou />
    </>
  );
}

export default App;
