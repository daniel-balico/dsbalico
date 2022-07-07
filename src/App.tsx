import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollingProvider } from 'react-scroll-section';
import Main from "./pages/Main";
import { ThemeProvider } from "./components/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ScrollingProvider offset={-20}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </ScrollingProvider>
    </ThemeProvider>
  );
}

export default App;
