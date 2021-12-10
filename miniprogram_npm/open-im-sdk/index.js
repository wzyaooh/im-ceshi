module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1638407355855, function(require, module, exports) {
var e,n,t=function(){function e(){this.events=void 0,this.events={}}var n=e.prototype;return n.emit=function(e,n){return this.events[e]&&this.events[e].forEach(function(e){return e(n)}),this},n.on=function(e,n){return this.events[e]?this.events[e].push(n):this.events[e]=[n],this},n.off=function(e,n){if(e&&"function"==typeof n){var t=this.events[e],r=t.findIndex(function(e){return e===n});t.splice(r,1)}else this.events[e]=[];return this},e}();function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}exports.RequestFunc=void 0,(e=exports.RequestFunc||(exports.RequestFunc={})).INITSDK="InitSDK",e.LOGIN="Login",e.LOGOUT="Logout",e.GETLOGINSTATUS="GetLoginStatus",e.GETLOGINUSER="GetLoginUser",e.CREATETEXTMESSAGE="CreateTextMessage",e.CREATETEXTATMESSAGE="CreateTextAtMessage",e.CREATEIMAGEMESSAGEFROMBYURL="CreateImageMessageByURL",e.CREATESOUNDMESSAGEBYURL="CreateSoundMessageByURL",e.CREATEVIDEOMESSAGEBYURL="CreateVideoMessageByURL",e.CREATEFILEMESSAGEBYURL="CreateFileMessageByURL",e.CREATELOCATIONMESSAGE="CreateLocationMessage",e.CREATECUSTOMMESSAGE="CreateCustomMessage",e.CREATEMERGERMESSAGE="CreateMergerMessage",e.CREATEFORWARDMESSAGE="CreateForwardMessage",e.CREATEQUOTEMESSAGE="CreateQuoteMessage",e.SENDMESSAGE="SendMessage",e.SENDMESSAGENOTOSS="SendMessageNotOss",e.GETHISTORYMESSAGELIST="GetHistoryMessageList",e.REVOKEMESSAGE="RevokeMessage",e.DELETEMESSAGEFROMLOCALSTORAGE="DeleteMessageFromLocalStorage",e.MARKSINGLEMESSAGEHASREAD="MarkSingleMessageHasRead",e.INSERTSINGLEMESSAGETOLOCALSTORAGE="InsertSingleMessageToLocalStorage",e.FINDMESSAGES="FindMessages",e.TYPINGSTATUSUPDATE="TypingStatusUpdate",e.MARKC2CMESSAGEASREAD="MarkC2CMessageAsRead",e.ADDFRIEND="AddFriend",e.GETFRIENDSINFO="GetFriendsInfo",e.GETFRIENDAPPLICATIONLIST="GetFriendApplicationList",e.GETFRIENDLIST="GetFriendList",e.SETFRIENDINFO="SetFriendInfo",e.ADDTOBLACKLIST="AddToBlackList",e.GETBLACKLIST="GetBlackList",e.DELETEFROMBLACKLIST="DeleteFromBlackList",e.CHECKFRIEND="CheckFriend",e.ACCEPTFRIENDAPPLICATION="AcceptFriendApplication",e.REFUSEFRIENDAPPLICATION="RefuseFriendApplication",e.DELETEFROMFRIENDLIST="DeleteFromFriendList",e.GETUSERSINFO="GetUsersInfo",e.SETSELFINFO="SetSelfInfo",e.GETALLCONVERSATIONLIST="GetAllConversationList",e.GETONECONVERSATION="GetOneConversation",e.GETMULTIPLECONVERSATION="GetMultipleConversation",e.DELETECONVERSATION="DeleteConversation",e.SETCONVERSATIONDRAFT="SetConversationDraft",e.PINCONVERSATION="PinConversation",e.GETTOTALUNREADMSGCOUNT="GetTotalUnreadMsgCount",e.MARKGROUPMESSAGEHASREAD="MarkGroupMessageHasRead",e.INVITEUSERTOGROUP="InviteUserToGroup",e.KICKGROUPMEMBER="KickGroupMember",e.GETGROUPMEMBERSINFO="GetGroupMembersInfo",e.GETGROUPMEMBERLIST="GetGroupMemberList",e.GETJOINEDGROUPLIST="GetJoinedGroupList",e.CREATEGROUP="CreateGroup",e.SETGROUPINFO="SetGroupInfo",e.GETGROUPSINFO="GetGroupsInfo",e.JOINGROUP="JoinGroup",e.QUITGROUP="QuitGroup",e.TRANSFERGROUPOWNER="TransferGroupOwner",e.GETGROUPAPPLICATIONLIST="GetGroupApplicationList",e.ACCEPTGROUPAPPLICATION="AcceptGroupApplication",e.REFUSEGROUPAPPLICATION="RefuseGroupApplication",exports.CbEvents=void 0,(n=exports.CbEvents||(exports.CbEvents={})).ONCONNECTFAILED="OnConnectFailed",n.ONCONNECTSUCCESS="OnConnectSuccess",n.ONCONNECTING="OnConnecting",n.ONKICKEDOFFLINE="OnKickedOffline",n.ONSELFINFOUPDATED="OnSelfInfoUpdated",n.ONUSERTOKENEXPIRED="OnUserTokenExpired",n.SENDMSGPROGRESS="OnProgress",n.ONRECVNEWMESSAGE="OnRecvNewMessage",n.ONRECVMESSAGEREVOKED="OnRecvMessageRevoked",n.ONRECVC2CREADRECEIPT="OnRecvC2CReadReceipt",n.ONCONVERSATIONCHANGED="OnConversationChanged",n.ONNEWCONVERSATION="OnNewConversation",n.ONSYNCSERVERFAILED="OnSyncServerFailed",n.ONSYNCSERVERFINISH="OnSyncServerFinish",n.ONSYNCSERVERSTART="OnSyncServerStart",n.ONTOTALUNREADMESSAGECOUNTCHANGED="OnTotalUnreadMessageCountChanged",n.ONBLACKLISTADD="OnBlackListAdd",n.ONBLACKLISTDELETED="OnBlackListDeleted",n.ONFRIENDAPPLICATIONLISTACCEPT="OnFriendApplicationListAccept",n.ONFRIENDAPPLICATIONLISTADDED="OnFriendApplicationListAdded",n.ONFRIENDAPPLICATIONLISTDELETED="OnFriendApplicationListDeleted",n.ONFRIENDAPPLICATIONLISTREJECT="OnFriendApplicationListReject",n.ONFRIENDINFOCHANGED="OnFriendInfoChanged",n.ONFRIENDLISTADDED="OnFriendListAdded",n.ONFRIENDLISTDELETED="OnFriendListDeleted",n.ONAPPLICATIONPROCESSED="OnApplicationProcessed",n.ONGROUPCREATED="OnGroupCreated",n.ONGROUPINFOCHANGED="OnGroupInfoChanged",n.ONMEMBERENTER="OnMemberEnter",n.ONMEMBERINVITED="OnMemberInvited",n.ONMEMBERKICKED="OnMemberKicked",n.ONMEMBERLEAVE="OnMemberLeave",n.ONRECEIVEJOINAPPLICATION="OnReceiveJoinApplication";var o=function(){return(36*Math.random()).toString(36).slice(2)+(new Date).getTime().toString().slice(6)};exports.OpenIMSDK=function(e){var n,t;function i(){var n;return(n=e.call(this)||this).ws=void 0,n.uid=void 0,n.token=void 0,n.platform="web",n.wsUrl="",n.lock=!1,n.logoutFlag=!1,n.timer=void 0,n.ws2promise=[],n.getLoginStatus=function(e){return new Promise(function(t,r){var i=e||o(),s={reqFuncName:exports.RequestFunc.GETLOGINSTATUS,operationID:i,uid:n.uid,data:""};n.wsSend(s,t,r)})},n.getLoginUser=function(e){return new Promise(function(t,r){var i=e||o(),s={reqFuncName:exports.RequestFunc.GETLOGINUSER,operationID:i,uid:n.uid,data:""};n.wsSend(s,t,r)})},n.getUsersInfo=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.GETUSERSINFO,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.setSelfInfo=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.SETSELFINFO,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.createTextMessage=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.CREATETEXTMESSAGE,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.createTextAtMessage=function(e,t){return new Promise(function(r,i){var s=e;s.atUserList=JSON.stringify(s.atUserList);var u=t||o(),a={reqFuncName:exports.RequestFunc.CREATETEXTATMESSAGE,operationID:u,uid:n.uid,data:s};n.wsSend(a,r,i)})},n.createImageMessage=function(e,t){return new Promise(function(r,i){var s=t||o(),u=e;u.bigPicture=JSON.stringify(u.bigPicture),u.snapshotPicture=JSON.stringify(u.snapshotPicture),u.sourcePicture=JSON.stringify(u.sourcePicture);var a={reqFuncName:exports.RequestFunc.CREATEIMAGEMESSAGEFROMBYURL,operationID:s,uid:n.uid,data:JSON.stringify(u)};n.wsSend(a,r,i)})},n.createSoundMessage=function(e,t){return new Promise(function(r,i){var s=t||o(),u={soundBaseInfo:JSON.stringify(e)},a={reqFuncName:exports.RequestFunc.CREATESOUNDMESSAGEBYURL,operationID:s,uid:n.uid,data:JSON.stringify(u)};n.wsSend(a,r,i)})},n.createVideoMessage=function(e,t){return new Promise(function(r,i){var s=t||o(),u={videoBaseInfo:JSON.stringify(e)},a={reqFuncName:exports.RequestFunc.CREATEVIDEOMESSAGEBYURL,operationID:s,uid:n.uid,data:JSON.stringify(u)};n.wsSend(a,r,i)})},n.createFileMessage=function(e,t){return new Promise(function(r,i){var s=t||o(),u={fileBaseInfo:JSON.stringify(e)},a={reqFuncName:exports.RequestFunc.CREATEFILEMESSAGEBYURL,operationID:s,uid:n.uid,data:JSON.stringify(u)};n.wsSend(a,r,i)})},n.createMergerMessage=function(e,t){return new Promise(function(r,i){var s=t||o(),u=e;u.messageList=JSON.stringify(e.messageList),u.summaryList=JSON.stringify(e.summaryList);var a={reqFuncName:exports.RequestFunc.CREATEMERGERMESSAGE,operationID:s,uid:n.uid,data:u};n.wsSend(a,r,i)})},n.createForwardMessage=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.CREATEFORWARDMESSAGE,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.createLocationMessage=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.CREATELOCATIONMESSAGE,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.createCustomMessage=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.CREATECUSTOMMESSAGE,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.createQuoteMessage=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.CREATEQUOTEMESSAGE,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.sendMessage=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.SENDMESSAGE,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.sendMessageNotOss=function(e,t){return new Promise(function(r,i){var s=t||o(),u=Object.assign({},e);u.receiver=e.recvID,delete u.recvID;var a={reqFuncName:exports.RequestFunc.SENDMESSAGENOTOSS,operationID:s,uid:n.uid,data:u};n.wsSend(a,r,i)})},n.getHistoryMessageList=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.GETHISTORYMESSAGELIST,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.revokeMessage=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.REVOKEMESSAGE,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.deleteMessageFromLocalStorage=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.DELETEMESSAGEFROMLOCALSTORAGE,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.markSingleMessageHasRead=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.MARKSINGLEMESSAGEHASREAD,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.markGroupMessageHasRead=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.MARKGROUPMESSAGEHASREAD,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.insertSingleMessageToLocalStorage=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.INSERTSINGLEMESSAGETOLOCALSTORAGE,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.findMessages=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.FINDMESSAGES,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.typingStatusUpdate=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.TYPINGSTATUSUPDATE,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.markC2CMessageAsRead=function(e,t){return new Promise(function(r,i){var s=e;s.msgIDList=JSON.stringify(s.msgIDList);var u=t||o(),a={reqFuncName:exports.RequestFunc.MARKC2CMESSAGEASREAD,operationID:u,uid:n.uid,data:s};n.wsSend(a,r,i)})},n.getAllConversationList=function(e){return new Promise(function(t,r){var i=e||o(),s={reqFuncName:exports.RequestFunc.GETALLCONVERSATIONLIST,operationID:i,uid:n.uid,data:""};n.wsSend(s,t,r)})},n.getOneConversation=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.GETONECONVERSATION,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.getMultipleConversation=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.GETMULTIPLECONVERSATION,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.deleteConversation=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.DELETECONVERSATION,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.setConversationDraft=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.SETCONVERSATIONDRAFT,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.pinConversation=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.PINCONVERSATION,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.getTotalUnreadMsgCount=function(e){return new Promise(function(t,r){var i=e||o(),s={reqFuncName:exports.RequestFunc.GETTOTALUNREADMSGCOUNT,operationID:i,uid:n.uid,data:""};n.wsSend(s,t,r)})},n.addFriend=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.ADDFRIEND,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.getFriendsInfo=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.GETFRIENDSINFO,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.getFriendApplicationList=function(e){return new Promise(function(t,r){var i=e||o(),s={reqFuncName:exports.RequestFunc.GETFRIENDAPPLICATIONLIST,operationID:i,uid:n.uid,data:""};n.wsSend(s,t,r)})},n.getFriendList=function(e){return new Promise(function(t,r){var i=e||o(),s={reqFuncName:exports.RequestFunc.GETFRIENDLIST,operationID:i,uid:n.uid,data:""};n.wsSend(s,t,r)})},n.setFriendInfo=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.SETFRIENDINFO,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.checkFriend=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.CHECKFRIEND,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.acceptFriendApplication=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.ACCEPTFRIENDAPPLICATION,operationID:s,uid:n.uid,data:JSON.stringify(e)};n.wsSend(u,r,i)})},n.refuseFriendApplication=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.REFUSEFRIENDAPPLICATION,operationID:s,uid:n.uid,data:JSON.stringify(e)};n.wsSend(u,r,i)})},n.deleteFromFriendList=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.DELETEFROMFRIENDLIST,operationID:s,uid:n.uid,data:JSON.stringify(e)};n.wsSend(u,r,i)})},n.addToBlackList=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.ADDTOBLACKLIST,operationID:s,uid:n.uid,data:JSON.stringify(e)};n.wsSend(u,r,i)})},n.deleteFromBlackList=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.DELETEFROMBLACKLIST,operationID:s,uid:n.uid,data:JSON.stringify(e)};n.wsSend(u,r,i)})},n.getBlackList=function(e){return new Promise(function(t,r){var i=e||o(),s={reqFuncName:exports.RequestFunc.GETBLACKLIST,operationID:i,uid:n.uid,data:""};n.wsSend(s,t,r)})},n.inviteUserToGroup=function(e,t){return new Promise(function(r,i){var s=t||o(),u=e;u.userList=JSON.stringify(u.userList);var a={reqFuncName:exports.RequestFunc.INVITEUSERTOGROUP,operationID:s,uid:n.uid,data:u};n.wsSend(a,r,i)})},n.kickGroupMember=function(e,t){return new Promise(function(r,i){var s=t||o(),u=e;u.userList=JSON.stringify(u.userList);var a={reqFuncName:exports.RequestFunc.KICKGROUPMEMBER,operationID:s,uid:n.uid,data:u};n.wsSend(a,r,i)})},n.getGroupMembersInfo=function(e,t){return new Promise(function(r,i){var s=t||o(),u=e;u.userList=JSON.stringify(u.userList);var a={reqFuncName:exports.RequestFunc.GETGROUPMEMBERSINFO,operationID:s,uid:n.uid,data:u};n.wsSend(a,r,i)})},n.getGroupMemberList=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.GETGROUPMEMBERLIST,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.getJoinedGroupList=function(e){return new Promise(function(t,r){var i=e||o(),s={reqFuncName:exports.RequestFunc.GETJOINEDGROUPLIST,operationID:i,uid:n.uid,data:""};n.wsSend(s,t,r)})},n.createGroup=function(e,t){return new Promise(function(r,i){var s=t||o(),u=e;u.gInfo=JSON.stringify(u.gInfo),u.memberList=JSON.stringify(u.memberList);var a={reqFuncName:exports.RequestFunc.CREATEGROUP,operationID:s,uid:n.uid,data:u};n.wsSend(a,r,i)})},n.setGroupInfo=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.SETGROUPINFO,operationID:s,uid:n.uid,data:{groupInfo:JSON.stringify(e)}};n.wsSend(u,r,i)})},n.getGroupsInfo=function(e,t){return new Promise(function(r,i){var s=t||o(),u={groupIdList:JSON.stringify(e)},a={reqFuncName:exports.RequestFunc.GETGROUPSINFO,operationID:s,uid:n.uid,data:u};n.wsSend(a,r,i)})},n.joinGroup=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.JOINGROUP,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.quitGroup=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.QUITGROUP,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.transferGroupOwner=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.TRANSFERGROUPOWNER,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.getGroupApplicationList=function(e){return new Promise(function(t,r){var i=e||o(),s={reqFuncName:exports.RequestFunc.GETGROUPAPPLICATIONLIST,operationID:i,uid:n.uid,data:""};n.wsSend(s,t,r)})},n.acceptGroupApplication=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.ACCEPTGROUPAPPLICATION,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.refuseGroupApplication=function(e,t){return new Promise(function(r,i){var s=t||o(),u={reqFuncName:exports.RequestFunc.REFUSEGROUPAPPLICATION,operationID:s,uid:n.uid,data:e};n.wsSend(u,r,i)})},n.wsSend=function(e,t,r){"object"==typeof e.data&&(e.data=JSON.stringify(e.data)),n.ws2promise.push({oid:e.operationID,mname:e.reqFuncName,mrsve:t,mrjet:r,flag:!1}),n.ws2promise=n.ws2promise.filter(function(e){return!e.flag}),"web"==n.platform?(n.ws.send(JSON.stringify(e)),n.ws.onmessage=function(t){var r=JSON.parse(t.data);Object.prototype.hasOwnProperty.call(exports.CbEvents,r.event.toUpperCase())&&n.emit(r.event,r),e.reqFuncName===exports.RequestFunc.LOGOUT&&(n.logoutFlag=!0,n.ws.close(),n.ws=void 0);var o=n.ws2promise.findIndex(function(e){return e.oid===r.operationID});o>-1&&(0===r.errCode?(n.ws2promise[o].mrsve(r),n.ws2promise[o].flag=!0):(n.ws2promise[o].mrjet(r),n.ws2promise[o].flag=!0))}):n.ws.send({data:JSON.stringify(e),success:function(t){"uni"===n.platform&&void 0!==n.ws._callbacks&&void 0!==n.ws._callbacks.message&&(n.ws._callbacks.message=[]),n.ws.onMessage(function(t){var r=JSON.parse(t.data);Object.prototype.hasOwnProperty.call(exports.CbEvents,r.event.toUpperCase())&&n.emit(r.event,r),e.reqFuncName===exports.RequestFunc.LOGOUT&&(n.logoutFlag=!0,n.ws.close(),n.ws=void 0);var o=n.ws2promise.findIndex(function(e){return e.oid===r.operationID});o>-1&&(0===r.errCode?(n.ws2promise[o].mrsve(r),n.ws2promise[o].flag=!0):(n.ws2promise[o].mrjet(r),n.ws2promise[o].flag=!0))})}})},n.getPlatform(),n}t=e,(n=i).prototype=Object.create(t.prototype),n.prototype.constructor=n,r(n,t);var s=i.prototype;return s.login=function(e){var n=this;return new Promise(function(t,r){var o=e.uid,i=e.token,s=e.operationID;n.wsUrl=e.url+"?sendID="+o+"&token="+i+"&platformID="+e.platformID;var u={uid:o,token:i},a={event:exports.RequestFunc.LOGIN,errCode:0,errMsg:"",data:"",operationID:s||""};"web"===n.platform?(n.ws=new WebSocket(n.wsUrl),n.ws.onopen=function(){n.uid=o,n.token=i,n.iLogin(u,s).then(function(e){n.logoutFlag=!1,t(e)}).catch(function(e){r(e)})},n.ws.onclose=function(){a.errCode=111,a.errMsg="ws connect failed...",n.logoutFlag||n.reconnect(),r(a)},n.ws.onerror=function(e){a.errCode=111,a.errMsg="ws connect failed...",r(a)}):"uni"===n.platform||"wx"===n.platform?(n.ws="uni"===n.platform?uni.connectSocket({url:n.wsUrl,complete:function(){}}):wx.connectSocket({url:n.wsUrl,complete:function(){}}),n.ws.onOpen(function(){n.uid=o,n.iLogin(u,s).then(function(e){n.logoutFlag=!1,t(e)}).catch(function(e){a.errCode=111,a.errMsg="ws connect failed...",r(a)})}),n.ws.onClose(function(){a.errCode=111,a.errMsg="ws connect failed...",n.logoutFlag||n.reconnect(),r(a)}),n.ws.onError(function(){a.errCode=111,a.errMsg="ws connect failed...",r(a)})):(a.errCode=112,a.errMsg="The current platform is not supported...",r(a))})},s.iLogin=function(e,n){var t=this;return new Promise(function(r,i){var s=n||o(),u={reqFuncName:exports.RequestFunc.LOGIN,operationID:s,uid:t.uid,data:e};t.wsSend(u,r,i)})},s.logout=function(e){var n=this;return new Promise(function(t,r){var i=e||o(),s={reqFuncName:exports.RequestFunc.LOGOUT,operationID:i,uid:n.uid,data:""};n.wsSend(s,t,r)})},s.getPlatform=function(){var e=typeof WebSocket,n=typeof uni,t=typeof wx;this.platform="undefined"===e?"object"===n&&"object"===t?"uni":"object"!==n&&"object"===t?"wx":"unknow":"web"},s.createWs=function(){var e=this;"web"===this.platform?(this.ws=new WebSocket(this.wsUrl),this.ws.onclose=function(){e.logoutFlag||e.reconnect()},this.ws.onopen=function(){e.iLogin({uid:e.uid,token:e.token}).then(function(n){return e.logoutFlag=!1})}):"uni"===this.platform?(this.ws=uni.connectSocket({url:this.wsUrl,complete:function(){}}),this.ws.onClose=function(){e.logoutFlag||e.reconnect()},this.ws.onOpen=function(){e.iLogin({uid:e.uid,token:e.token}).then(function(n){return e.logoutFlag=!1})}):"wx"===this.platform&&(this.ws=wx.connectSocket({url:this.wsUrl,complete:function(){}}),this.ws.onClose=function(){e.logoutFlag||e.reconnect()},this.ws.onOpen=function(){e.iLogin({uid:e.uid,token:e.token}).then(function(n){return e.logoutFlag=!1})})},s.reconnect=function(){var e=this;this.lock||(this.lock=!0,setTimeout(function(){e.createWs(),e.lock=!1},2e3))},i}(t),exports.emitter=t;
//# sourceMappingURL=index.js.map

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1638407355855);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map