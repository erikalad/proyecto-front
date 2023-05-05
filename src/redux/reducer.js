const initialState = {
    token:""
}



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TOKEN":
            return {
                ...state,
                token: action.payload,

            }
            
        default: return { ...state }
    }
}



export default rootReducer;
