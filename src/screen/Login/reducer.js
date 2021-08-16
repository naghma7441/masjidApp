const initialState={
    token:null,
}

const loginType={
    LOGIN:'LOGIN',
    LOGIN_SUCCESS:'LOGIN_SUCCESS',
    LOGIN_FAILED:'LOGIN_FAILED'
}

export const loginReducer =  (state = initialState,action)=>{

    console.log("action",action)

    switch(action.type){
        case loginType.LOGIN:
            return{
                token:action.payload

            };
            break;
            case 'REMOVE_USER':
                return{
                    token:null
                }
                break;
             default:
                 return state;
    }



}