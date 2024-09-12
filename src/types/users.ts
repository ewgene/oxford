import { School } from "./schools"

export interface employeeInfo {
    bio: {
        id: number|string,
        login: string,
        firstName: string,
        lastName: string,
        avatarUrl: string,
        telephone: number,
        email: string,
    },
    employee_info: employeeInfo,
    position: string,
    empoloyeeType: string,
    zoomLink: string,
    grade: number|string,
    crmEnabled: boolean,
    diaryEnabled: boolean
}

export interface User {
    empoyeeInfo: employeeInfo,
    currentSchool: School
}