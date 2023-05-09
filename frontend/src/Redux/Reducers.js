export const DATA = (state = [],action) => {
switch(action.type) {
    case "POSTDATA" : 
    return [ ...state,  action.payload]
   
}

switch(action.type) {
        case "GETDATA" : 
        return [ ...action.payload]
       
    }
switch(action.type){
    case "CLEARALL":
    return[]
    default: return state 

}
}