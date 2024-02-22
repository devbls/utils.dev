import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Pomodore } from "./pages/Pomodore";
import App from "./App";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Pomodore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
