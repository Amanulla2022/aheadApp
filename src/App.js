import "./App.css";
import DoesTHisSound from "./components/DoesTHisSound";
import EQBeatsIQ from "./components/EQBeatsIQ";
import EQTheBestForYou from "./components/EQTheBestForYou";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MeetAhead from "./components/MeetAhead";
import StartTest from "./components/StartTest";
import Vacancies from "./components/Vacancies";
import WhatPeopleThinksAboutYou from "./components/WhatPeopleThinksAboutYou";
import WorkWithUs from "./components/WorkWithUs";
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
      <StartTest />
      <WorkWithUs />
      <Vacancies />
      <Footer />
    </>
  );
}

export default App;
