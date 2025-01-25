
export function Profilecard () {

    return <>
        <div className="flex flex-col justify-center items-center mt-10 ">
            <img src="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt="profile" className="w-[150px] h-[150px] rounded-2xl shadow-2xl" />
            <span className=" font-bold">Hrushikesh Modupalli</span>
            <br/>
            <span className="text-lg md:text-xl font-semibold text-gray-500">hrushikesh@gmail.com</span>
            <span className="text-lg md:text-xl font-semibold text-gray-500">9999988888</span>
            <br/>
            <span className="text-lg md:text-xl font-semibold text-gray-500 pb-2">Chennai, India</span>
        </div>
    </>
}