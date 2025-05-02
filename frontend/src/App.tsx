import "./App.css";
import LeaderboardPage from "./Leaderboard/LeaderboardPage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="containers App">
        <Routes>
          <Route path="/" element={<LeaderboardPage />} />.
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
