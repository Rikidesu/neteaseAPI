/**
 * Created by Riki on 17/5/16.
 */

let request = require("request");


const j = request.jar();

let cookie = request.cookie("appver=2.0.2");

request.post(

    {
        url:"http://music.163.com/api/search/get/",
        form:{
            s:'鹿乃',
            limit:10,
            type:1,
            offset:0
        },
        encoding:'utf8',
        cookie:cookie,
        headers:{
            "referer":"http://music.163.com"
        }
    },
    function(err,res,body){
        if(res.statusCode == 200){
            console.log(body)
        }
        else{
            console.log(res.statusCode)
        }
    }

);