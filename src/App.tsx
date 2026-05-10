import { HashRouter, Route, Routes } from "react-router-dom";
import ShowDetailPage from "./Pages/ShowDetails.Page";
import ShowListPage from "./Pages/ShowsList.Page";

function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <HashRouter>
        <Routes>
          <Route path="/" element={<ShowListPage />} />
          <Route path="show/:showId" element={<ShowDetailPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;