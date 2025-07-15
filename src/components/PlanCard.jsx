import { useContext } from "react";
import { FormDataContext } from "../Contexts/FormDataContext";
import { motion, AnimatePresence } from "framer-motion";
export default function PlanCard({plan}){

    const{formData, formDispatch}= useContext(FormDataContext);
    const activePlan= (plan.type.toLowerCase()=== formData.planType);

    return (
        <div className="w-full">
            <input type="radio" 
                    className="sr-only peer"
                    value={plan.key}
                    onChange={e=>formDispatch ({
                        type: "SET_PLAN",
                        value: plan.key
                    })
                    }
                    name="plan"
                    id={`radio-${plan.key}`} 
                    checked={activePlan}
                />
            <label className={`flex items-center md:flex-col md:items-start md:gap-10 w-full px-4 py-3 gap-4 
                peer-focus-visible:ring-1 peer-focus-visible:ring-Purple-600
                ${activePlan? "border-Purple-600 bg-Blue-50": "border-Purple-200"}
                border-[1px] rounded-lg cursor-pointer hover:border-Purple-600 
                transition-all duration-400 ease-in-out hover:scale-103`}
                htmlFor={`radio-${plan.key}`}   
            >
                <img className="h-10 w-10" src={plan.icon} alt="plan icon" />
                <div className="flex flex-col">
                    <h1 className="text-Blue-950 font-bold">{plan.type}</h1>
                    <AnimatePresence mode="wait">
                        <motion.div
                            initial= {{height: 0, opacity: 0}}
                            animate= {{height: "auto", opacity: 1}}
                            exit={{height: 0, opacity: 0 }}
                            transition={{duration: 0.3}}
                        >   
                            <p className="text-Grey-500 text-sm">${`${formData.yearlyBilling? plan.price.yearly+"/yr": plan.price.monthly+"/mo" }`}</p>
                        </motion.div>
                    </AnimatePresence>
                    {formData.yearlyBilling && <motion.p initial={{opacity: 0}} animate={{ opacity: 1}} className="text-xs font-medium text-Blue-950">2 months free</motion.p>}
                </div>
            </label>
        </div>
    )
}