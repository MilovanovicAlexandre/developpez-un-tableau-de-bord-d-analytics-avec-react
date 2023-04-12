import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getData} from '../../Service/apiCallsAndMockCalls.jsx'
import { dataFormatting } from '../../Service/dataFormatting.jsx'
import ToolTipAverageSessions from '../ToolTipAverageSessions/tooltipaveragesessions.jsx'
import CursorAverageSessions from '../CursorAverageSessions/cursoraveragesessions.jsx'
import {ResponsiveContainer,LineChart,Line,XAxis,Tooltip} from "recharts";
import './linechartaveragesessions.css'

function LineChartAverageSessions() {
    
    const {userId} = useParams()
    const id = parseInt(userId)
    const [dataSessionsUserAverage, setDataSessionsUserAverage] = useState({})
    useEffect(() => {
        async function getTheData(userId){
            setDataSessionsUserAverage(dataFormatting( await getData(userId, 'sessionsUserAverage'),'sessionsUserAverage' ))
        }
        getTheData(id)
        
      },[id])
    
    return (
        <div className='mainContainerLineChart'>
            <p className='textAverageSessions'>Durée moyenne des sessions</p>
            <ResponsiveContainer width='100%' height={200} className='containerResponsiveAverageSessions'>
                <LineChart data={dataSessionsUserAverage} margin={{ top: 95, bottom: 10, left: 5, right: 5 }}>                    
                    <Tooltip cursor={<CursorAverageSessions/>} wrapperStyle={{ outline: 'none' }} content={<ToolTipAverageSessions/>}/>
                    <XAxis dataKey='day' axisLine={false} tickLine={false} stroke='rgba(196, 196, 196, 0.9)' tickMargin={10} tick={{ fontSize: 12, opacity: 0.7 }} />
                    <Line dot={false} legendType='none' type='monotone' dataKey='sessionLength' stroke='white' strokeOpacity={0.8} strokeWidth='1.8' />
                </LineChart>
            </ResponsiveContainer>             
        </div>
    )
}

export default LineChartAverageSessions