import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getData} from '../../Service/apiCallsAndMockCalls.jsx'
import { dataFormatting } from '../../Service/dataFormatting.jsx'
import {ResponsiveContainer,RadialBarChart,PolarAngleAxis,RadialBar} from 'recharts'
import './radialbarchartscore.css'

function RadialBarChartScore() {
    
    const {userId} = useParams()
    const id = parseInt(userId)
    const [dataTodayScore, setDataTodayScore] = useState({})
    useEffect(() => {
        async function getTheData(userId){
            setDataTodayScore(dataFormatting( await getData(userId, 'todayScore'),'todayScore' ))
        }
        getTheData(id)
        
      },[id])
    
    return (
        <div className='mainContainerRadialBarChart'>
            <div className='containerScoreTitle'>
                <p className='scoreTitle'>Score</p>
            </div>
            <ResponsiveContainer width='100%' height={200}>               
                <RadialBarChart  cx="50%" cy="50%" innerRadius={80} outerRadius='70%' barSize={10} data={dataTodayScore.data1} startAngle={-280} endAngle={80}>    
                    <PolarAngleAxis type='number' domain={[0, 100]} angleAxisId={0} tick={false} />
                    <RadialBar dataKey='score' cornerRadius={50} background={false} fill='#FF0000' />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className='containerScoreText'>
                <p className='scoreText'>{dataTodayScore.data2}%</p>
            </div>
            <div className='containerScoreText2'>
                <div className='secondContainerScoreText2'><p className='scoreText2'>de votre<br />objectif</p></div>
            </div>
        </div>
    )
}
  
export default RadialBarChartScore