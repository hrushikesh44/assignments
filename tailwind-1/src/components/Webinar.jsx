import { ProfileCard } from "./ProfileCard"
import { Sidebar } from "./Sidebar"

export function Webinar(){

    return <div>
        <Background />
    </div>
}

function Background(){

    return <div className="w-screen h-screen
     bg-[url(https://img.freepik.com/free-vector/black-background-with-focus-spot-light_1017-27230.jpg?t=st=1737671026~exp=1737674626~hmac=d4fe18529242c50b57e28111ce34bec81bbb19b67b16670e2ff4b1c241fa1a20&w=1380)] 
     bg-cover p-5 flex">
        <Sidebar />
        <ProfileCard />
    </div>
}