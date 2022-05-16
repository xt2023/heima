//将可复用的API接口都封装到整个模块中


//向外按需导出一个API函数
import request from "@/utils/request";

export const getListAPI =function (){
    return request.get('/api/goods',{
        params:{
            //get请求参数
        }
    })
}
