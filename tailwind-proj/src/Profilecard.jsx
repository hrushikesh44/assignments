
export function Profilecard () {

    return <>
        <div className=" grid grid-cols-2 content-center">
            <img src="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt="profile" className="w-[150px] h-[150px] rounded-2xl shadow-2xl" />
        </div>
        <br />
        <div className="mt-[-100px] grid place-items-center pt-24">
            <span className="text-2xl font-bold">Hrushikesh Modupalli</span>
            <br/>
            <span className="text-xl font-semibold text-gray-500">hrushikesh@gmail.com</span>
            <span className="text-xl font-semibold text-gray-500">9999988888</span>
            <br/>
            <span className="text-lg font-semibold text-gray-500">Chennai, India</span>
        </div>
    </>
}