export {dataFormatting}

/** 
 * Function to format data according to the type of data
 * 
 * According the type of data the formatting is the following:
 * <ul>
 *  <li>datatype = sessionUserActivity : session.day is converted into a number</li>
 *  <li>datatype = sessionUserAverage : session.day is converted into a day of the week </li>
 *  <li>datatype = userPerformance : convert fitness features from english to french language</li>
 *  <li>datatype = todayScore : return data as an object containing the data for the score chart and the data of the score to display on the page</li> 
 * </ul>
 * @param { (Object | Number | Array ) } data data to format
 * @param { String } dataType type of data to format
 * @returns { (Object | Array) } data which have been formatted 
 */

function dataFormatting(data, dataType) {

    if(dataType === 'sessionsUserActivity'){
        
        let i = 1

        data.map (session => {
            session.day = i
            i++
            return session
        })
        return data
    }
    if(dataType === 'sessionsUserAverage'){

        let i=0
        const daysArray = ['L','M','M','J','V','S','D']
        data.map (session => {
            session.day = daysArray[i]
            i++
            return session
        })
        return data 
    }
    if(dataType === 'userPerformance'){
  
        let convertData = data.data.map(dataOccurrence => {

            let kindConvertValue

            switch(data.kind[dataOccurrence.kind]){
                case 'cardio':
                    kindConvertValue ='Cardio'
                break
                case 'energy':
                    kindConvertValue ='Energie'
                break
                case 'endurance':
                    kindConvertValue ='Endurance'
                break
                case 'strength':
                    kindConvertValue ='Force'
                break
                case 'speed':
                    kindConvertValue ='Vitesse'
                break
                case 'intensity':
                    kindConvertValue ='Intensité'
                break
                default:
                    kindConvertValue = ''
            }

            return {value: dataOccurrence.value, kind: kindConvertValue}
        }).reverse()

        return convertData
    }
    if(dataType === 'todayScore'){
        
        const dataConverted = [
            {
                score:data*100
            }
        ]

        const todayScore = data*100 

        return {data1: dataConverted, data2: todayScore}        
    }
    else{
        return data
    }

}