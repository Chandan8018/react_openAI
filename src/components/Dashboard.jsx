import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DrawerDetails from "./DrawerDetails";
import Chat from "./Chat";
import MyCharacters from "./MyCharacters";
import GenerateImages from "./GenerateImages";
import CreateCharacter from "./CreateCharacter";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlPharse = new URLSearchParams(location.search);
    const tabFromUrl = urlPharse.get("tab");
    setTab(tabFromUrl);
  }, [location.search]);
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        {/* SideBar  */}
        <DrawerDetails />

        {/* Chat */}
        {tab === "chat" && <Chat />}

        {/* My Characters */}
        {tab === "my-char" && <MyCharacters />}

        {/* Generate Images */}
        {tab === "generate-img" && <GenerateImages />}

        {/* Create Character */}
        {tab === "create-char" && <CreateCharacter />}
      </div>
    </>
  );
}
