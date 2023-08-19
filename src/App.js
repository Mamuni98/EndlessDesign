import React from "react";
import "./App.css";
import PlanDetail from "./Components/PlanDeatail/PlanDetail";
import { Route, Routes } from "react-router-dom";
import FinalPage from "./Components/Page/FinalPage";
import SubscribeDetail from "./Components/Subscription/SubscribeDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FinalPage />} />
        <Route path="/plan" element={<SubscribeDetail />} />
        <Route path="/plan/:planDetail" element={<PlanDetail />} />
      </Routes>
    </>
  );
}

export default App;
