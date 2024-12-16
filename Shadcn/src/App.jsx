import { ThemeProvider } from "./Components/ThemeProvider";
import Pages from "./Components/pages";
// import footer from "./Components/footer";
import Footer from "./Components/footer";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />
      <Pages />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
