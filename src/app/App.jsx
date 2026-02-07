import { useEffect, useState } from "react";
import { Header } from "../component/header/header";
import { SideMenu } from "../component/side-menu/sideMenu";
import { Card } from "../component/Card/Card";
import { LoadAllRedditsPost } from "../features/allReddits/allReddits";
import { Layout } from "./layout";
import { SkeletonLoader } from "../helper function/loader";
function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
