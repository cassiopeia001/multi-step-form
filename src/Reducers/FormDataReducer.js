export default function FormDataReducer(state, action){
    switch (action.type){
        case "SET_INPUT": {
            return {
                ...state, 
                formInputs :{
                    ...state.formInputs,
                    [action.field]: action.value
                }
            }
        }
        case "SET_ERRORS":{
            return {
                ...state, 
                inputErrors :{
                    ...state.inputErrors,
                    [action.field]: action.value
                }
            }
        }
        case "SET_PLAN": {
            return {
                ...state,
                planType: action.value
            }
        }
        case "TOGGLE_BILLING": {
            return{
                ...state,
                yearlyBilling: !state.yearlyBilling
            }
        }
        case "SET_ADDONS": {
            return {
                ...state,
                addOns: {
                    ...state.addOns,
                    [action.field]: !state.addOns[action.field]
                }
            }
        }
    }
}