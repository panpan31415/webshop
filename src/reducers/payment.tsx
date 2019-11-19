import * as Redux from "redux";
import {
START_PAYMENT
} from "../actions/type";

import {Ipayment} from "./stateTypes" 
const initialState:Ipayment = {
    status:undefined
}

const Payment: Redux.Reducer<{}, { type: string; payload: any }> = (
  payment: Ipayment = initialState,
  action: { type: string; payload: any } = { type: "", payload: {} }
) => {
    switch(action.type){
        case START_PAYMENT:
            return {
                status:"startted"
            }
        default : return initialState
    }
}

export default Payment