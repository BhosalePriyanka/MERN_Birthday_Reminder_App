export const PostData = (data) => {
   return {
    type: "POSTDATA",
    payload:data
   } 
}

export const GetData = (data) => {
   return {
    type: "GETDATA",
    payload:data
   } 
}

export const clearData = (data) =>{
   return{
      type:"CLEARALL",
      payload:data
   }
}