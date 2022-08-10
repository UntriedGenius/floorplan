import React from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import BedRoom from "./BedRoom";
import Bath from "./Bath";

const FloorPlan = () => {
  return (
    <div>
      <h1>FloorPlan</h1>
      <LivingRoom></LivingRoom>
      <Kitchen></Kitchen>
      <div>
        <BedRoom bedNum="1"> </BedRoom>
        <Bath size="Full"></Bath>
      </div>
      <BedRoom bedNum="2"></BedRoom>
      <Bath size="Full"></Bath>
    </div>
  );
};

export default FloorPlan;
