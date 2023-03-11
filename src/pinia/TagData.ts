import {defineStore} from "pinia";

export const useTagStore = defineStore("tags",{
    state: () => {
        return{
            tags: [{
                name: '首页',
                content: '/backer/index'
            }]
        }
    }
})