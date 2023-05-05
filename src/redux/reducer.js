const initialState = {
    token:"",
    cloud_words_by_range_post:[]
}



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TOKEN":
            return {
                ...state,
                token: action.payload,

            }

            case "GET_CLOUDWORDSBYRANGEPOST":
                return {
                    ...state,
                    cloud_words_by_range_post: action.payload,
    
                }
            
        default: return { ...state }
    }
}



export default rootReducer;
