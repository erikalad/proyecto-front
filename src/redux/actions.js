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

export function getReportExecution() {
    try{
        return async function (dispatch) {
            let results = await axios.get(`https://api.qsocialnow.com.ar/reports-highcharts/family/1/reports`);

            return dispatch({
                type: "GET_REPORT_FAMILY",
                payload: results.data
            })
        }
    }
    catch (error) {
        console.log(error)
    }
}


export function getCloudWordsByRangePost() {
    try {
        return async function (dispatch) {
            let results = await axios.get(`https://api.qsocialnow.com.ar/relational/statisticServer/getCloudWordsByRangePost`);

            return dispatch({
                type: "GET_CLOUDWORDSBYRANGEPOST",
                payload: results.data
            });

        }
    } catch (error) {
        console.log(error)
    }
}