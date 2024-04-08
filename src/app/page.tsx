import React from "react";
import Registration from "./registration/page";
import Loginpage from "./loginpage";
import Dashboard from "./dashboard/page";
import CARD from "./component/card";
import PLAN from "./component/plan";
import PP from "./component/plans";
import FORM from "./from/page";
import TripCard from "./component/tripcard";
import CAMP from "./camp/page";
import HAPPY from "./happy/page";
import Landing from "./landing/page";
import Cam from "./cam";
export default function Home() {        
  return (
    // <div>
    //   <FORM
    //     hr={0}
    //     price="dsdssdd"
    //     label="row.label"
    //     icon="row.icon"
    //     color="bg-stone-700"
    //   />
    // </div>
    // <Registration/>
    // <HAPPY/>
    // <CAMP/>
    <Landing/>
    // <Cam bucket="addtobucket21" name="ganesh" mail_id="sdjsj@jfsdhk.com" endpointType="recognize" />
  );
}
