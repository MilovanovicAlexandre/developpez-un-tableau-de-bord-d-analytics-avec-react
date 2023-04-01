import axios from 'axios'
import {USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from '../Data/dataMock.js'
export {getData}

const dataMocked = true

async function getData(id,dataToRetrieve) {

    let response = null

    if(dataMocked === true){
        console.log('id='+id+'et typeof(id)='+typeof(id))
        /*const response = USER_MAIN_DATA.find(element => element.id === id)
        return response.userInfos*/
        
        switch(dataToRetrieve) {

            case 'userInfos':
                response = USER_MAIN_DATA.find(element => element.id === id)
                return response.userInfos
            case 'todayScore':
                response = USER_MAIN_DATA.find(element => element.id === id)
                return response.todayScore
            case 'keyData':
                response = USER_MAIN_DATA.find(element => element.id === id)
                return response.keyData
            case 'sessionsUserActivity':
                response = USER_ACTIVITY.find(element => element.id === id)
                return response.sessions
            case 'sessionsUserAverage':
                response = USER_AVERAGE_SESSIONS.find(element => element.id === id)
                return response.sessions
            case 'kindUserPerformance':
                response = USER_PERFORMANCE.find(element => element.id === id)
                return response.kind
            case 'dataUserPerformance':
                response = USER_PERFORMANCE.find(element => element.id === id)
                return response.data
            default: 
                return ''
        }
    }
    else{

        switch(dataToRetrieve) {

            case 'userInfos':
                response = await axios.get(`http://localhost:3000/user/${id}`)
                return response.userInfos        
            case 'todayScore':
                return ''
            case 'keyData':
                return ''
            case 'sessionsUserActivity':
                return ''
            case 'sessionsUserAverage':
                return ''
            case 'kindUserPerformance':
                return ''
            case 'dataUserPerformance':
                return ''
            default: 
                return ''
        }
    }
}
