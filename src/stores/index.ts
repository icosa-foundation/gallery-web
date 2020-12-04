import { atom } from 'recoil'

export const UserInfo = atom({
    key: 'userInfo',
    default: {
        userName: 'testName'
    }
})