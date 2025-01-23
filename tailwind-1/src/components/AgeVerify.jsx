import { Button } from "./Button";
import { Input } from "./Input";

export function AgeVerify(){
    return(
      <div className='bg-blue-700 h-screen w-screen  '>
      <div className='flex justify-center pt-[150px] '>
        <img src="https://img.icons8.com/?size=100&id=20308&format=png&color=000000" alt="monitor"
        className='max-w-[50px] max-h-[50px] '
        />
        <div className='text-4xl font-bold pt-1.5 pl-1.5 flex'>
          <p className='text-green-500'>Webinar</p>
          <p className='text-gray-200'>.gg</p>
        </div>
      </div>
      <div className='text-4xl text-gray-200 font-bold pt-[80px] flex justify-center'>
        Verify Your Age
      </div>
      <div className='flex justify-center text-xl text-gray-200 pt-[50px] '>
        Please enter your date of birth. Your data will not be saved
      </div>
      <Input />
      <Button />
    </div>
    )
  }