import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../Components/Header/header.jsx'
import VerticalNavigation from '../../Components/VerticalNavigation/verticalnavigation.jsx'
import { getData } from '../../Service/apiCallsAndMockCalls.jsx'
import KeyData from '../../Components/KeyData/keydata.jsx'
import BarChartActivity from '../../Components/BarChartActivity/barchartactivity.jsx'
import LineChartAverageSessions from '../../Components/LineChartAverageSessions/linechartaveragesessions.jsx'
import RadarChartUserPerformance from '../../Components/RadarChartUserPerformance/radarchartuserperformance.jsx'
import RadialBarChartScore from '../../Components/RadialBarChartScore/radialbarchartscore.jsx'
import iconCalories from '../../Assets/iconCalories.png'
import iconProteines from '../../Assets/iconProteines.png'
import iconGlucides from '../../Assets/iconGlucides.png'
import iconLipides from '../../Assets/iconLipides.png'
import './profile.css'

/**
 * Component which describes the profile page of the user with charts and key data
 * @namespace
 * @returns {JSX.Element} A JSX element containing components from recharts library. 
 * 
 * The components returned are:
 * <ul>
 *  <li>Header</li>
 *  <li>VerticalNavigation</li>
 *  <li>BarChartActivity</li>
 *  <li>LineChartAverageSessions</li>
 *  <li>RadarChartUserPerformance</li>
 *  <li>RadialBarChartScore</li>
 *  <li>KeyData</li>
 * <ul>
 */

function Profile() {

  const {userId} = useParams()
  const id = parseInt(userId) 
  const [dataUserInfos, setDataUserInfos] = useState({})
   
  useEffect(() => {
    async function getTheData(userId){
      setDataUserInfos(await getData(userId, 'userInfos'))
    }
    getTheData(id)
    
  },[id])
   
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
                <div className='containerBarChartActivity'>
                  <BarChartActivity />  
                </div>
                <div className='containerAverageSessions'>
                  <LineChartAverageSessions />
                  <RadarChartUserPerformance />
                  <RadialBarChartScore />
                </div>
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