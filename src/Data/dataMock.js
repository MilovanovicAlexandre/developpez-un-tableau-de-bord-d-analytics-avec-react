/**
 * Modules containing the dataMocked are defined in src/Data/dataMock.js
 * @module DataMocked
 */

/**
 * Main data of the 2 users contaning: user informations, today score and key data
 */
const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.90,
        keyData: {
            calorieCount: 6030,
            proteinCount: 255,
            carbohydrateCount: 390,
            lipidCount: 90
        }
    },
    {
        id: 18,
        userInfos: {
            firstName: 'Cecilia',
            lastName: 'Ratorez',
            age: 34,
        },
        todayScore: 0.5,
        keyData: {
            calorieCount: 1500,
            proteinCount: 30,
            carbohydrateCount: 200,
            lipidCount: 320
        }
    }
]


/**
 * Users activity data contaning: all sessions with day, kilogram and calories
*/

const USER_ACTIVITY = [
    {
        userId: 12,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 80,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 76,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 81,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 81,
                calories: 290
            },
            {
                day: '2020-07-05',
                kilogram: 80,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 81,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 76,
                calories: 390
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 70,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 70,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 70,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 68,
                calories: 500
            },
            {
                day: '2020-07-05',
                kilogram: 69,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 69,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 66,
                calories: 390
            }
        ]
    }
]

/**
 * Users average session data contaning: all sessions with day and session length
*/

const USER_AVERAGE_SESSIONS = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 50
            },
            {
                day: 2,
                sessionLength: 25
            },
            {
                day: 3,
                sessionLength: 38
            },
            {
                day: 4,
                sessionLength: 10
            },
            {
                day: 5,
                sessionLength: 80
            },
            {
                day: 6,
                sessionLength: 20
            },
            {
                day: 7,
                sessionLength: 120
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 60
            },
            {
                day: 3,
                sessionLength: 10
            },
            {
                day: 4,
                sessionLength: 5
            },
            {
                day: 5,
                sessionLength: 70
            },
            {
                day: 6,
                sessionLength: 20
            },
            {
                day: 7,
                sessionLength: 50
            }
        ]
    }
]

/**
 * Users performance data contaning: features about fitness and all related value and kind
*/

const USER_PERFORMANCE = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 140,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 170,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 160,
                kind: 6
            }
        ]
    },
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 200,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
]



module.exports = {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
}