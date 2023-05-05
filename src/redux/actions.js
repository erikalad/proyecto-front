import axios from "axios";


export function getToken() {
    try {
        return async function (dispatch) {
            let results = await axios.get(`https://api.qsocialnow.com.ar/relational/auth/login?user=usertesting@qsocialnow.com&pass=alex66`);

            return dispatch({
                type: "GET_TOKEN",
                payload: results.data.token
            });

        }
    } catch (error) {
        console.log(error)
    }
} 