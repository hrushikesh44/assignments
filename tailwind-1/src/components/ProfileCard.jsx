
export function ProfileCard(){

    return <div className="grid place-items-center w-[350px] h-[45vh] bg-gray-200 border-gray-400 rounded-xl mt-[100px] ml-2">
        <div className=" mt-10">
            <img src="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt="profile" className="w-[150px] h-[150px] border-gray-950 rounded-2xl border-[1px] " />
        </div>
        <br />
        <div className="mt-[-100px] grid place-items-center">
            <span className="text-2xl font-bold">Hrushikesh Modupalli</span>
            <br/>
            <span className="text-xl font-semibold text-gray-500">hrushikesh@gmail.com</span>
            <span className="text-xl font-semibold text-gray-500">9999988888</span>
            <br/>
            <span className="text-lg font-semibold text-gray-500">Chennai, India</span>
        </div>
    </div>
}