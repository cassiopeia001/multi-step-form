import { useContext } from "react"
import { navStateContext } from "../Contexts/NavStateContext"

export default function Step ({number}){

    const{navState, navStateDispatch}= useContext(navStateContext);

    let text;
    switch (number){
        case 1: {
            text= "YOUR INFO"; break;
        }
        case 2: {
            text= "SELECT PLAN"; break;
        }
        case 3: {
            text= "ADD-ONS"; break;
        }
        case 4: {
            text= "SUMMARY"; break;
        }
    }
    const currentStep= number===navState.step;
    return (

        <div className="flex gap-4 items-center">
            <div className={`rounded-full h-8 w-8 border-[1px] flex items-center justify-center font-medium 
                ${currentStep? "bg-Blue-200 text-Blue-950 border-transparent" :"text-white border-white"} transition-colors duration-300 ease-in`}>{number}
            </div>
            <div className="hidden text-sm md:block">
                <p className="text-Blue-300"> STEP {number}</p>
                <p className="text-white font-medium">{text}</p>
            </div>
        </div>
    )
}