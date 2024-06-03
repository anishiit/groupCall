import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
function VideoPAge() {
    const {id} = useParams();


    const roomID = id ;
    let myMeeting = async (element) => {
   // generate Kit Token
    const appID = 14009403;
    const serverSecret = "fcbf7e82101cf3e7f7c2bc360a3df1b9";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), 'Anish');

  
   // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Share link to join',
          url:
           window.location.protocol + '//' + 
           window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });}

  return (
    <div ref={myMeeting}>
    
    </div>
  )
}

export default VideoPAge
