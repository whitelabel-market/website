import {
  About,
  Clients,
  Experience,
  Expertise,
  Features,
  Footer,
  Header,
} from "./container";

import { DarkModeToggler } from "./components";

function App() {
  return (
    <div className="bg-white dark:bg-[#181818]">
      <Header />
      <About />
      <Features />
      <Clients />
      <Expertise />
      <Experience />
      <Footer />
      <DarkModeToggler />
    </div>
  );
}

export default App;
