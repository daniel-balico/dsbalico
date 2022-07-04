import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollingProvider } from 'react-scroll-section';
import Main from "./pages/Main";
import ProjectList from "./pages/ProjectList";
import { ThemeProvider } from "./components/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ScrollingProvider offset={-20}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<ProjectList />} />
          </Routes>
        </BrowserRouter>
      </ScrollingProvider>
    </ThemeProvider>
  );
}

export default App;
