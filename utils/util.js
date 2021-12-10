import { OpenIMSDK,CbEvents } from "open-im-sdk"; 

const openIM = new OpenIMSDK();

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const im_url = 'https://im.mingqiqipei.com';
const ws_im_url ='wss://ws.mingqiqipei.com';
const  user_token= () =>{
	wx.request({
		url: `${im_url}/auth/user_token`,
		data: {
			secret: "tuoyun", 
			platform: 1, 
			uid: "1638354318000"
		},
		method: 'post',
		success(res) {
      console.log(res)  
        	const loginData = {platformID: 5,uid:'1638354318000',url:ws_im_url,token:res.data.data.token}
          openIM.login(loginData).then(res => {
              console.log('登录好了')
          })
		},
		fail(res) {
			console.log(err)
		}
  })
}



const sendMessage=async()=>{
//  const createMessageData = await openIM.createTextMessage(Math.ceil(Math.random()*10).toString())
 
    const timestamp = Date.parse(new Date()).toString();

    const data = {
      uuid:timestamp,
      soundPath:"https://qipei-1305458977.cos.ap-chengdu.myqcloud.com/2021-12-10/1638354318000-/tmp_87f1c1c0431be37018a791f46fdfcfa8ae65f5b7a60a5e07.mp3",
      sourceUrl:"https://qipei-1305458977.cos.ap-chengdu.myqcloud.com/2021-12-10/1638354318000-/tmp_87f1c1c0431be37018a791f46fdfcfa8ae65f5b7a60a5e07.mp3",
      dataSize:17712,
      duration:3
    }
  const createSoundData = await openIM.createSoundMessage(data) 
console.log(createSoundData)
  const content = {
    recvID: "1639012926000",
    groupID: "",
    onlineUserOnly: false,
    message: createSoundData.data,
    };
  openIM.sendMessageNotOss(content)
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTime,
  user_token,
  sendMessage
}
