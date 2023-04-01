import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../Components/Header/header.jsx'
import VerticalNavigation from '../../Components/VerticalNavigation/verticalnavigation.jsx'
import { getData } from '../../Service/apiCallsAndMockCalls.jsx'
import KeyData from '../../Components/KeyData/keydata.jsx'
import iconCalories from '../../Assets/iconCalories.png'
import iconProteines from '../../Assets/iconProteines.png'
import iconGlucides from '../../Assets/iconGlucides.png'
import iconLipides from '../../Assets/iconLipides.png'
import './profile.css'

function Profile() {

  const {userId} = useParams()
  console.log('userId='+userId)
  const id = parseInt(userId) 
  const [dataUserInfos, setDataUserInfos] = useState({})
   

  useEffect(() => {
    async function getTheData(userId){
      //const dataUser =  await getData(userId, 'userInfos')
      setDataUserInfos(await getData(userId, 'userInfos'))
      //setDataKeyData(await getData(userId, 'keyData'))
    }
    getTheData(id)
    
  },[id])

  console.log('dataUserInfos='+dataUserInfos)
   
    return (
      <main className='containerMainProfile'>
        <Header />
        <div className='containerEntireProfile'>
          <div className='containerVerticalNav'>
            <VerticalNavigation />
          </div>
          <div className='containerDashBoard'>
            <div className='containerHelloText'>
              <h1 className='titleHelloText'>Bonjour <span className='HelloTextFirstName'>{dataUserInfos.firstName}</span></h1>
              <p className='congratulationsText'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='containerGraphsScoreKeyData'>
              <div className='containerGraphsScore'>

              </div>
              <div className='containerAllKeyData'>
                <div className='containerKeyData'>
                     <KeyData 
                     keyDataName= 'Calories' 
                      
                     keyDataImage={iconCalories}
                     keyDataContainerImageClass='containerIconKeyDataCalories'
                     />
                </div>
                <div className='containerKeyData'>
                     <KeyData 
                     keyDataName= 'Proteines' 
                      
                     keyDataImage={iconProteines}
                     keyDataContainerImageClass='containerIconKeyDataProteines'
                     />
                </div>
                <div className='containerKeyData'>
                     <KeyData 
                     keyDataName= 'Glucides' 
                      
                     keyDataImage={iconGlucides}
                     keyDataContainerImageClass='containerIconKeyDataGlucides'
                     />
                </div>
                <div className='containerKeyData'>
                    <KeyData 
                    keyDataName= 'Lipides' 
                     
                    keyDataImage={iconLipides}
                    keyDataContainerImageClass='containerIconKeyDataLipides'
                    />
                </div>  
              </div>
            </div>
          </div>
        </div>  
      </main>
    )
}
  
export default Profile