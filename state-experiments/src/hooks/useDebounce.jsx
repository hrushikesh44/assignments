import { useEffect, useState } from "react";


export function useDebounce( value, delay){
    const [inputValue, setInputValue] = useState(value)

    useEffect(function(){
        let handler = setTimeout(function(){
            setInputValue(value)
        }, delay)

        return function(){
            clearTimeout(handler)
        }

    }, [value, delay])

    return inputValue;

}