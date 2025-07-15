import { useContext } from "react"
import PlanCard from "./PlanCard"
import { FormDataContext } from "../Contexts/FormDataContext"
import data from "/data.json"
export default function PlanSelection(){

    const{formData, formDispatch}= useContext(FormDataContext);
    const plans= data.plans

    return(
        <fieldset className="flex flex-col gap-4 md:gap-10 w-full">
                <legend className="font-bold text-2xl text-Blue-950 flex flex-col gap-2 mb-4 md:mb-10">Select your plan
                    <p className="text-Grey-500 font-normal text-base">You have the option of monthly or yearly billing.</p>
                </legend>    
            
            <div className="flex flex-col gap-5 w-full">

                <div className="flex flex-col gap-3 md:flex-row w-full">

                    {
                        plans.map((plan)=>{
                            return <PlanCard plan={plan} key={plan.key}/>
                        })
                    }
                </div>
                <label className="w-full flex items-center justify-center gap-4 bg-Blue-50 font-medium p-2 rounded-lg">
                    <p className={`${formData.yearlyBilling? "text-Grey-500": " text-Blue-950"}`}>Monthly</p>
                    <div 
                        className="relative w-9 h-5 rounded-xl bg-Blue-950 flex items-center cursor-pointer"> 
                        <input type="checkbox" 
                            checked= {formData.yearlyBilling}
                            aria-labelledby="billing-label"
                            aria-checked={formData.yearlyBilling}
                            onChange={e=> formDispatch({
                                type: "TOGGLE_BILLING"
                            })}
                            className="sr-only peer"/>
                        <span className="h-3/5 w-1/3 bg-white rounded-full left-1 absolute 
                        peer-checked:left-5 peer-focus-visible:ring-2 peer-focus-visible:ring-Purple-600
                        transition-left duration-400 ease-in-out "></span>
                    </div>
                    <p className={`${formData.yearlyBilling? "text-Blue-950": " text-Grey-500"}`}>Yearly</p>
                    <p className="sr-only"
                    id="billing-label">
                        toggle billing type currently : {formData.yearlyBilling? "Yearly":"Monthly"}
                    </p>
                </label>
            </div>
        </fieldset>
    )
}