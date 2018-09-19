import axios from 'axios';
const baseURL='/api/admin'
import {Message} from 'element-ui'
import router from '../router'
const instance=axios.create({
    baseURL,
    timeout:100000,
    // headers:{'X-Custom-Header':'foobar'}
})
const xhr={
    get(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.get(url,{params:data},config).then(res=>{
if(res.data.code==401){
    Message.error('登录状态失效,请重新登录')
    router.push('/login')
}
resolve(res.data)
            })
        })  
    },
    post(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.post(url,data,config).then(res=>{
                if(res.data.code==401){
                    Message.error('登录状态失效,请重新登录')
                    router.push('/login')
                }
resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        }) 
    },
    fetch(url,data,config,methods){
        return new Promise((resolve,reject)=>{
            instance[methods](url,data,config).then(res=>{
                if(res.data.code==401){
                    Message.error('登录状态失效,请重新登录')
                    router.push('/login')
                }
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    put(url,data,config){
        return this.fetch(url,data,config,'put')
    },
    delete(url, params, config){
        return this.fetch(url, params, config,'delete')
      }
    
}
export const $axios=xhr