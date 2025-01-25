
export function SidebarAssgn(){

    return <div className="flex ">
        <div className="transition-all duration-500 w-[30vw] h-screen bg-gray-400 border-black border-[1px] hidden md:block">
            Sidebar
        </div>
        <div className="w-full h-screen bg-gray-400 ">
            Content
        </div>
    </div>
}