
export function Sidebar(){

    return <div className="bg-gray-200 w-[350px] h-[94vh] border-gray-950 border-[1px] flex justify-between">
        <div className="bg-blue-500 flex max-h-11 mt-2 ml-1 p-2 rounded-[4px] ">
            <div>
                <img src="https://img.icons8.com/?size=100&id=20308&format=png&color=000000" alt="icon"
                className="w-[32px] h-[32px]" />
            </div>
            <div className="text-2xl font-semibold  pl-1 text-black">
                <span className="text-green-800">Webinar</span>.gg
            </div>
        </div>
        <div>
            <img src="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt="profile"  className="w-13 h-13 border-black border-[1px] rounded-xl mr-4 mt-1 "/>
        </div>
    </div>
}