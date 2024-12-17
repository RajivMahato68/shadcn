import { ModeToggle } from "./Components/ModeToggle";
import { ThemeProvider } from "./Components/ThemeProvider";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
    </ThemeProvider>
  );
}

export default App;
