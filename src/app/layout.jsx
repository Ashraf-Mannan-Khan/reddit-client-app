import { Card } from "../component/Card/Card";
import { Header } from "../component/header/header";
import { SideMenu } from "../component/side-menu/sideMenu";
import { LoadAllRedditsPost } from "../features/allReddits/allReddits";
import { use, useState } from "react";
export function Layout() {
      const [show, setShow] = useState(false);
      const [light, setLight] = useState(false);
    return (
        <>
        <Header show={show} setShow={setShow}  light={light} setLight={setLight}/>
          <SideMenu show={show} light={light}/>
            <LoadAllRedditsPost light={light}/>
    
        
        </>
    )
}