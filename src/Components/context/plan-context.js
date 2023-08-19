import React, { useState } from "react";

const PlanContext = React.createContext({
  plan: {},
  addDetail: (plan) => {},
});

export const PlanProvider = (props) => {
  const [planDetail, setPlanDetail] = useState({});
  const addPlanDetail = (plan) => {
    setPlanDetail(plan);
  }
const planContext = {
    plan: planDetail,
    addDetail: addPlanDetail
}
  return <PlanContext.Provider value={planContext}>{props.children}</PlanContext.Provider>;
};
export default PlanContext;