import React from 'react'
import './barchartactivity.css'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../../Service/apiCallsAndMockCalls.jsx'
import{dataFormatting} from '../../Service/dataFormatting.jsx'
import ToolTipUserActivity from '../ToolTipUserActivity/tooltipuseractivity.jsx'
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";

function BarChartActivity() {

    const {userId} = useParams()
    const id = parseInt(userId)
    const [dataSessionsUserActivity, setDataSessionsUserActivity] = useState({})
    useEffect(() => {
        async function getTheData(userId){
            setDataSessionsUserActivity(dataFormatting( await getData(userId, 'sessionsUserActivity'),'sessionsUserActivity' ))
        }
        getTheData(id)
        
      },[id])

    return (
        <div className='mainContainerBarChartActivity'>
            <div className='containerTextDailyActivityWeightCalories'>
                <div className='containerTextDailyActivity'>
                    <p className='textDailyActivity'>Activité quotidienne</p>
                </div>
                <div className='containerCirclesAndTextWeightCalories'>
                    <div className='containerBlackCircleAndTextWeight'>
                        <div className='blackCircle'></div>
                        <p className='textWeightKg'>Poids (kg)</p>
                    </div>
                    <div className='containerRedCircleAndTextCalories'>
                      <div className='redCircle'></div>
                      <p className='textCaloriesBurnt'>Calories brûlées (kCal)</p>
                    </div>
                </div>  
            </div>
            <ResponsiveContainer width='90%' height={120}>
              <BarChart data={dataSessionsUserActivity} margin={{top: 5,right: 5,left: 5,bottom: 5}}>
                {/*strokeDasharray is the pattern of dashes and gaps to paint the lines of the grid, and vertical=false 
                means no vertical frid lines will be drawn*/}
                <CartesianGrid vertical={false} strokeDasharray="1 1"/>
                {/*dataKey corresponds to the key data diplayed in the axis X, so here we display sessions.day on the axis X.
                and stroke corresponds to the color of the axis X and the color of the numbering in the axis and
                dy corresponds to the margin between the axis X and the labels of the axis.
                tickLine equals false so no axis X tick lines will be drawn*/}
                <XAxis dataKey='day' dy={16} tickLine={false} stroke='#9B9EAC'/>
                {/*dataKey corresponds to the key data displayed in the axis Y, so here we display sessions.kilogram on the axis Y.
                Yaxis has an orientation to right , the number on the axis are on the right. dx corresponds to the margin
                batween the axis Y and the labels of the axis. AxisLine of Y axis is not display so it is equal to false.
                tickline equals false because no axis tick lines are drawn on axis Y. tickCount corresponds to the count of axis ticks
                so for 3 tickCount we need to put tickCount=3. type = number corresponds to the type of axis here Axis Y displays kilograms
                so it is a number. Domain axis Y is display between the dataMin -1 value of dataKey kilogram and auto value of
                dataKey kilogram, like an element of the domain is auto so comprensible scale ticks will be calculated and the final
                domain of axis is generated by the ticks*/}
                <YAxis yAxisId='kilogram' dataKey='kilogram' orientation='right' dx={38} axisLine={false} tickLine={false} tickCount='3' type='number' domain={['dataMin - 1', 'auto']}/>
                {/*type = number corresponds to rhe type of axis here Axis Y displays calories so it is a number.
                Domain axis Y is not display so hide=true. Domain axis is between values dataMin-10 and dataMax+10 of dataKey calories*/}
                <YAxis yAxisId='calories' dataKey='calories' type='number' domain={['dataMin - 10', 'dataMax + 10']}  hide={true}/>
                {/*content corresponds to the react element to personnalize the ToolTip, here the personnalize react element
                is ToolTipUserActivity. wrapperStyle is the style of tooltip wrapper here there is no border for the Tooltip*/}
                <Tooltip wrapperStyle={{ outline: 'none' }} content={<ToolTipUserActivity/>}/>
                {/*radius corresponds to the rounded edges of the bar here the top edges of the bar kilogram are rounded.
                fill corresponds of the color of the bar. barSize corresponds to the width of the bar*/}
                <Bar yAxisId='kilogram' dataKey='kilogram' barSize={6} radius={[50, 50, 0, 0]} fill='#282D30'/>
                {/*radius corresponds to the rounded edges of the bar here the top edges of the bar calories are rounded.
                fill corresponds of the color of the bar. barSize corresponds to the width of the bar*/}
                <Bar yAxisId='calories' dataKey='calories' barSize={6} radius={[50, 50, 0, 0]} fill='#E60000'/>
              </BarChart>
            </ResponsiveContainer>               
        </div> 
    )
}
  
export default BarChartActivity