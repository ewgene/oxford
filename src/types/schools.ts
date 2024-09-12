export interface School {
    id: number|string,
    name: string,
    location: string,
    avatar_url: string,
    telephone: number|string,
    skype: string,
    whats_app: number|string,
    latitude_coordinate: number,
    longitude_coordinate: number,
    work_time: [
        {
            day: number|string,
            from: number|string,
            to: number|string
        }
    ]
}