import { 
    type APISpaceXResponse,
    type Doc
} from '../types/api'

export const getLatestLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'desc'
                },
                limit: 50
            }
        })
    })
    const { docs: launches } = await res.json() as APISpaceXResponse

    const launchesOk = launches.map((launch, index) => ({
        ...launch,
        idAutoincrement: index,
    }))

    return launchesOk.filter((launch) => launch.idAutoincrement > 30 && launch.idAutoincrement < 49)
}

export const getLatestLaunchById = async (id: string) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
    const launch = await res.json() as Doc
    return launch
}

export const getOldLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc'
                },
                limit: 174
            }
        })
    })
    const { docs: launches } = await res.json() as APISpaceXResponse

    return launches
}