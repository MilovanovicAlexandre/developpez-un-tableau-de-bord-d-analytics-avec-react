import axios from 'axios'
import {USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from '../Data/dataMock.js'
export {getData}

/**
 * Function which gets the data of the user either from the mock file or the API
 * @param { Number } id the user id for which we wish to retrieve the data  
 * @param { String } dataToRetrieve  the type of data we want to retrieve, for example: 'keydata'
 * @return { (Object | Number | Array ) } Function returns the data retrieved, the data can have 3 different types  
 */

async function getData(id,dataToRetrieve) {

    const dataMocked = true
    let response = null

    if(dataMocked === true){
        
        switch(dataToRetrieve) {

            case 'userInfos':
                response = USER_MAIN_DATA.find(element => element.id === id)
                return response.userInfos
            case 'todayScore':
                response = USER_MAIN_DATA.find(element => element.id === id)
                return response.todayScore
            case 'keyData':
                response = USER_MAIN_DATA.find(element => element.id === id)
                response.keyData.calorieCount= (response.keyData.calorieCount).toLocaleString('en-US')
                return response.keyData
            case 'sessionsUserActivity':
                response = USER_ACTIVITY.find(element => element.userId === id)
                return response.sessions
            case 'sessionsUserAverage':
                response = USER_AVERAGE_SESSIONS.find(element => element.userId === id)
                return response.sessions
            case 'userPerformance':
                response = USER_PERFORMANCE.find(element => element.userId === id)
                return response    
            default: 
                return ''
        }
    }
    else{

        switch(dataToRetrieve) {

            case 'userInfos':
                response = await axios.get(`http://localhost:3001/user/${id}`)
                return response.data.data.userInfos        
            case 'todayScore':
                response = await axios.get(`http://localhost:3001/user/${id}`)
                return response.data.data.todayScore
            case 'keyData':
                response = await axios.get(`http://localhost:3001/user/${id}`)
                response.data.data.keyData.calorieCount= (response.data.data.keyData.calorieCount).toLocaleString('en-US')
                return response.data.data.keyData
            case 'sessionsUserActivity':
                response = await axios.get(`http://localhost:3001/user/${id}/activity`)
                return response.data.data.sessions                
            case 'sessionsUserAverage':
                response = await axios.get(`http://localhost:3001/user/${id}/average-sessions`)
                return response.data.data.sessions
            case 'userPerformance':
                response = await axios.get(`http://localhost:3001/user/${id}/performance`)
                return response.data.data    
            default: 
                return ''
        }
    }
}
