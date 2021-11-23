import "./App.css";
import { HomeScreen } from "./components/home/HomeScreen";
import { SkillsScreen } from "./components/skills/SkillsScreen";
import { NavBar } from "./components/ui/NavBar";
import { SocialBar } from "./components/ui/SocialBar";

function App() {
  return (
    <>
      <NavBar />
      <SocialBar />
      <HomeScreen />
      <SkillsScreen />
    </>
  );
}

export default App;
