import { ADD_PROPERTY } from "./types";
export  const add_property=(property)=>{
    const action={
        type:ADD_PROPERTY,
        property
    }
    return action;
}