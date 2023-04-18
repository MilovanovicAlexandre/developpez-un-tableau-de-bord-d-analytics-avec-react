import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getData} from '../../Service/apiCallsAndMockCalls.jsx'
import {dataFormatting} from '../../Service/dataFormatting.jsx'
import {ResponsiveContainer,RadarChart,PolarGrid,Radar,PolarAngleAxis} from "recharts";
import './radarchartuserperformance.css'

/**
 * Component which describes user's performance with features on a radar chart
 * @namespace
 * @returns {JSX.Element} A JSX element containing a recharts component named RadarChart 
 */

function RadarChartUserPerformance() {

    const {userId} = useParams()
    const id = parseInt(userId)
    const [dataUserPerformance, setDataUserPerformance] = useState({})
    useEffect(() => {
        async function getTheData(userId){
            setDataUserPerformance(dataFormatting( await getData(userId, 'userPerformance'),'userPerformance' ))
        }
        getTheData(id)
        
      },[id])

    return (
        <div className='mainContainerRadarChart'>
            <ResponsiveContainer width='100%' height={200}>
				<RadarChart cx='50%' cy='55%' outerRadius='70%' innerRadius='10%' data={dataUserPerformance}>
					<PolarGrid radialLines={false}/>
					<PolarAngleAxis dy={3} dataKey='kind' stroke='white' tickLine={false} tick={{ fontSize: 10 }}/>
					<Radar dataKey='value' stroke='#FF0101' fill='#FF0101' fillOpacity={0.7}/>
				</RadarChart>
			</ResponsiveContainer>
        </div>
    )
}
  
export default RadarChartUserPerformance