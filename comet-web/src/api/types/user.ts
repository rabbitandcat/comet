export interface registerUser {
    username: string
    password: string
    captcha: string
}

export interface loginUser {
    username: string
    password: string
    captcha: string
}

export interface phoneUser {
    username: string
    password: string
    phone: string
}


export interface emailUser {
    username: string
    password: string
    email: string
}