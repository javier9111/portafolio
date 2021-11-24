import "./App.css";
import { HomeScreen } from "./components/home/HomeScreen";
import { ProjectScreen } from "./components/projects/ProjectScreen";
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
      <ProjectScreen />
    </>
  );
}

export default App;
