export {dataFormatting}

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
    else{
        return data
    }

}