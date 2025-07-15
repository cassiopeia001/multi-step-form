import { useContext } from "react"
import { navStateContext } from "../Contexts/NavStateContext"

export default function NavigationButtons ({isSubmitted}){
    
    const {navState, navStateDispatch}= useContext(navStateContext);

    return(
        <>
        {(!isSubmitted) && (

        <div className="sticky bottom-0 px-4 py-4 bg-white w-full md:static">
            <div className="flex justify-between font-medium">
                {navState.step>1 && 
                    <button className="text-Grey-500 cursor-pointer hover:text-Blue-950
                            transition-colors duration-200 ease-in-out"
                        onClick={()=>{
                            navStateDispatch({type: "DECREMENT"})
                        }   
                        }
                        type="button">
                    Go Back
                    </button>}
                
                <button className={`${navState.step>3? "bg-Purple-600 hover:opacity-50":"bg-Blue-950 hover:opacity-75"} 
                        ml-auto px-5 py-3 rounded-md text-white hover:cursor-pointer 
                        transition-opacity duration-200 ease-in-out`} 
                        type="submit">
                    {navState.step>3 ? "Confirm" : "Next Step"}
                </button>
            </div>
        </div> 
    )}
    </>
    )
}