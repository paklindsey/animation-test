import { ThemeProvider } from "@mui/styles";
import theme from "./components/theme";

import Main from "./components/Main";
import Ani2 from "./components/Ani2";
import Ani3 from "./components/Ani3";
import Ani4 from "./components/Ani4";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <Ani2 />
      <Ani4 />
      <Ani3 />
    </ThemeProvider>
  );
}

export default App;
