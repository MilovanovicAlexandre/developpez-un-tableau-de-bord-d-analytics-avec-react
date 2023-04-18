import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../../Service/apiCallsAndMockCalls.jsx'
//install Proptypes with the command: yarn add prop-types
import PropTypes from 'prop-types'
import './keydata.css'

/**
 * Component which is a 
 * @namespace
 * @property { String } keyDataName Name of the data that must be displayed in the keyData component 
 * @property { String } keyDataImage Icon that must be displayed in the keyData component 
 * @property { String } keyDataContainerImageClass the class of the container element of the icon element
 * @returns {JSX.Element} A JSX element containing a keyData component with a value and a unit. 
 * 
 * The keyData returned can be one of the list below:
 * <ul>
 * <li>Calories</li>
 * <li>Proteins</li>
 * <li>Carbohydrate</li>
 * <li>Lipid</li>
 * </ul>
 * 
 */

function KeyData({keyDataName,keyDataImage,keyDataContainerImageClass}) {

    const {userId} = useParams()
    const id = parseInt(userId)
    const [dataKeyData, setDataKeyData] = useState({})
    let unit = ''
    let keyDataToDisplay = 0

    useEffect(() => {
        async function getTheData(userId){
          setDataKeyData(await getData(userId, 'keyData'))
        }
        getTheData(id)
        
      },[id])


    if(keyDataName === 'Calories') {
        unit = 'kCal'
    }
    else{
        unit = 'g'
    }

    switch(keyDataName){
        case 'Calories':
            keyDataToDisplay = (dataKeyData.calorieCount)
        break
        case 'Proteines':
            keyDataToDisplay = dataKeyData.proteinCount
        break
        case 'Glucides':
            keyDataToDisplay = dataKeyData.carbohydrateCount
        break
        case 'Lipides':
            keyDataToDisplay = dataKeyData.lipidCount
        break
        default: 
        keyDataToDisplay = 0
    }

    return (
        <div className='mainContainerKeyData'>
            <div className={keyDataContainerImageClass}></div>
            <img src={keyDataImage} alt={keyDataName} className='iconKeyData'/>
            <div className='containerKeyDataNumberUnitName'>
                <p className='keyDataNumberAndUnit'>{keyDataToDisplay}{unit}</p>
                <p className='keyDataName'>{keyDataName}</p>
            </div>
        </div>
    )
}

KeyData.propTypes = {
    keyDataName: PropTypes.string.isRequired,
    keyDataImage:PropTypes.string.isRequired,
    keyDataContainerImageClass:PropTypes.string.isRequired,
}

export default KeyData
