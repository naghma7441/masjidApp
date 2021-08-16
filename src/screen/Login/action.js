
const loginType={
    LOGIN:'LOGIN',
    LOGIN_SUCCESS:'LOGIN_SUCCESS',
    LOGIN_FAILED:'LOGIN_FAILED'
}


export const loginAction=(data)=>{
    console.log("daaaata",data)
    return{
        type:loginType.LOGIN,
        payload:data
    }

}


export function createAction(type, payload) {
    return {
      type,
      payload,
    };
  }
