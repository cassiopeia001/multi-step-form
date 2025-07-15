import { useContext, useReducer, useState } from "react";
import { navStateContext } from "../Contexts/NavStateContext";
import PersonalinfoCard from "./PersonalinfoCard";
import PlanSelection from "./PlanSelection";
import AddOnsSelection from "./AddOnsSelection";
import SummaryCard from "./SummaryCard";
import ThankYouCard from "./ThankYouCard";
import NavigationButtons from "./NavigationButtons";
import FormDataReducer from "../Reducers/FormDataReducer";
import { FormDataContext } from "../Contexts/FormDataContext";
import {motion, AnimatePresence, animate} from 'framer-motion'

const initialFormData= {
    formInputs: {
        name: "",
        email: "",
        number: ""
    },
    inputErrors: {
        nameError : false,
        emailError: false,
        numberError: false
    },
    planType: "arcade",
    yearlyBilling: false,
    addOns: {
        onlineService: true,
        largerStorage: false,
        customizableProfile: false
    }
}

export default function MainForm(){
    
    const {navState, navStateDispatch}= useContext(navStateContext);
    const [formData, formDispatch]= useReducer(FormDataReducer, initialFormData);
    let currentStep;
    const [isSubmitted, setIsSubmitted]= useState(false);
    const direction= navState.direction
    
    const variants={
        initial :(direction) => ({
            opacity: 0,
            x: direction > 0 ? 20 : -20
        }),
        animate : {
            opacity: 1,
            x: 0
        },
        exit: (direction)=>({
            opacity: 0,
            x: direction > 0 ? -20 : 20 
        }),
    
        }
    
    
    const validateData = (e) =>{
        
        e.preventDefault();        
    
        switch (navState.step){
    
            case 1 : {
                validateFormData(); break;
            }
            case 2: {
                navStateDispatch({type: "INCREMENT"}); break;
            }
            case 3: {
                navStateDispatch({type:"INCREMENT"}); break;
            }  
            case 4: {
                setIsSubmitted(true) ; break;
            }  
        }
    }
    const validateFormData = () =>{

        const regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const validName= !(formData.formInputs.name.trim()==="");
        const validEmail= !(formData.formInputs.email.trim() === "" || !(formData.formInputs.email.match(regex)));
        const validNumber= !(formData.formInputs.number.trim()==="" || isNaN(formData.formInputs.number)); 

        if(!validName){
            formDispatch({
                type: "SET_ERRORS",
                field: "nameError",
                value: true
            })
        }
        if (!validEmail){

            formDispatch({
                type: "SET_ERRORS",
                field: "emailError",
                value: true
            })
        }
        if (!validNumber){

            formDispatch ({
                type: "SET_ERRORS",
                field: "numberError",
                value: true
            })
        }
        if (validName&& validEmail&& validNumber){

            navStateDispatch({
                type: "INCREMENT"
            })
        }
    }


    switch (navState.step){

        case 1 :{
            currentStep= <PersonalinfoCard />; break;
        }
        case 2: {
            currentStep= <PlanSelection />; break;
        }
        case 3: {
            currentStep= <AddOnsSelection />; break;
        }
        case 4: {
            currentStep= <SummaryCard />; break;
        }
         default: currentStep = <PersonalinfoCard />; break;
    }

    return (
        <form className="flex flex-col min-h-screen md:min-h-auto w-full" onSubmit={validateData}>
            <FormDataContext.Provider value={{formData, formDispatch}}>
                <div className="flex-1 min-h-[28rem] overflow-hidden">

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div 
                            key={navState.step}
                            custom={direction}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{duration: 0.3, ease: "easeOut"}}
                            className=" bg-White mt-10 mx-4 rounded-lg px-6 py-8 mb-7 md:mt-0">
                                {isSubmitted? <ThankYouCard/>: currentStep}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </FormDataContext.Provider>
            <NavigationButtons isSubmitted={isSubmitted}/>
        </form>
    )
}