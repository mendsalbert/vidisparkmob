import React, { useState, useEffect } from "react";
import ProfileInfoSidebar from "../src/components/Profile Page/Profile Info/ProfileInfoSidebar";
import ProfilePurchase from "../src/components/Profile Page/Profile Upload/ProfilePurchase";
import ProfileUploadAndPreview from "../src/components/Profile Page/Profile Upload/ProfileUploadAndPreview";
import Layouts from "../src/layouts/Layouts";
import { useAccount, useSigner } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useAuth } from "../src/lib/auth";
const UploadArtWork = () => {
  useAuth();

  return (
    <Layouts>
      <div className="primary-content-area container content-padding grid-left-sidebar">
        {/* / Profile Info Sidebar */}
        <ProfileInfoSidebar />
        {/* / Profile Info Sidebar */}
        <div className="main-content-area">
          <div className="user-db-content-area">
            {/* / Profile Upload & Preview */}
            <ProfileUploadAndPreview />
            {/* / Profile Upload & Preview */}

            {/* / Profile Purchase */}
            <ProfilePurchase />
            {/* / Profile Purchase */}
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default UploadArtWork;

//GOLD
// import React, { useState } from "react";
// import axios from "axios";

// function VideoUploader() {
//   const [uploadUrl, setUploadUrl] = useState("");
//   const [videoUrl, setVideoUrl] = useState("");

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     const uploadResponse = await fetch("https://api.thetavideoapi.com/upload", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
//         "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
//       },
//       body: JSON.stringify({}),
//     });
//     const uploadResponseJson = await uploadResponse.json();
//     const { presigned_url } = uploadResponseJson.body.uploads[0];
//     setUploadUrl(presigned_url);
//     await fetch(presigned_url, {
//       method: "PUT",
//       headers: { "Content-Type": "application/octet-stream" },
//       body: file,
//     });
//     const videoResponse = await fetch("https://api.thetavideoapi.com/video", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
//         "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
//       },
//       body: JSON.stringify({
//         source_upload_id: uploadResponseJson.body.uploads[0].id,
//         playback_policy: "public",
//         nft_collection: "0x5d0004fe2e0ec6d002678c7fa01026cabde9e793",
//       }),
//     });
//     const videoResponseJson = await videoResponse.json();
//     console.log(videoResponseJson.body.videos);
//     let finished = false;

//     while (!finished) {
//       const { data } = await axios.get(
//         `https://api.thetavideoapi.com/video/${videoResponseJson.body.videos[0].id}`,
//         {
//           headers: {
//             "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
//             "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
//           },
//         }
//       );
//       console.log("data", data);
//       if (
//         data?.body?.videos?.[0]?.state === "success" &&
//         data?.body?.videos?.[0]?.sub_state === "none"
//       ) {
//         finished = true;
//         setVideoUrl(data.body.videos[0].player_uri);
//       } else {
//         await new Promise((resolve) => setTimeout(resolve, 1000)); // wait one second before checking again
//       }
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       {videoUrl && <video controls src={videoUrl} />}
//       {/* <iframe
//         src="https://player.thetavideoapi.com/video/video_5v9q854twpr893bz4nktx22xkh"
//         border="0"
//         width="100%"
//         height="100%"
//         allowfullscreen
//       /> */}
//     </div>
//   );
// }

// export default VideoUploader;
// import React, { useState, useRef } from "react";
// import axios from "axios";

// function ThetaLiveStreaming() {
//   const [streamUrl, setStreamUrl] = useState("");
//   const [isStreaming, setIsStreaming] = useState(false);
//   const videoRef = useRef(null);
//   const streamRef = useRef(null);

//   const startStream = async () => {
//     setIsStreaming(true);
//     const streamData = new FormData();
//     streamData.append("name", "My Live Stream");
//     streamData.append("resolutions", [
//       "160p",
//       "240p",
//       "360p",
//       "720p",
//       "source",
//     ]);
//     streamData.append("source_resolution", "720p");
//     streamData.append("fps", "60");

//     const response = await axios.post(
//       "https://api.thetavideoapi.com/stream",
//       streamData,
//       {
//         headers: {
//           "x-tva-sa-id": "srvacc_fk130i83e047t4kg5w4edswj7",
//           "x-tva-sa-secret": "6hvuhqk3499qu9gbb8w34gft6q6q8re5",
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     const streamKey = response.data.body.stream_key;
//     const streamServer = response.data.body.stream_server;

//     setStreamUrl(`${streamServer}/${streamKey}`);

//     const stream = await navigator.mediaDevices.getUserMedia({
//       audio: true,
//       video: true,
//     });

//     streamRef.current = stream;
//     videoRef.current.srcObject = stream;
//     videoRef.current.play();

//     const publishStreamUrl = `rtmp://ingestor.thetavideoapi.com/app/${streamKey}`;

//     const ws = new WebSocket("ws://ingestor.thetavideoapi.com/app");

//     ws.addEventListener("open", () => {
//       console.log("Connection established");
//       ws.send(`{"command":"publish","streamName":"${streamKey}"}`);
//     });

//     ws.addEventListener("message", (event) => {
//       console.log(`[message] Data received from server: ${event.data}`);
//       const message = JSON.parse(event.data);
//       if (message.status == "publishing") {
//         console.log("Stream is publishing");
//       }
//     });

//     const wsHeartbeatInterval = setInterval(() => {
//       ws.send('{"command":"ping"}');
//     }, 5000);

//     window.addEventListener("beforeunload", () => {
//       clearInterval(wsHeartbeatInterval);
//       ws.close();
//       streamRef.current.getTracks().forEach((track) => track.stop());
//     });
//   };

//   const stopStream = () => {
//     setIsStreaming(false);
//     streamRef.current.getTracks().forEach((track) => track.stop());
//   };

//   return (
//     <div>
//       {!isStreaming && <button onClick={startStream}>Start Live Stream</button>}
//       {isStreaming && <button onClick={stopStream}>Stop Live Stream</button>}
//       {streamUrl && (
//         <div>
//           <div>
//             <a href={streamUrl} target="_blank">
//               Playback Live Stream
//             </a>
//           </div>
//           <video ref={videoRef} width="640" height="480" controls></video>
//         </div>
//       )}
//     </div>
//   );
// }
// Import ComposeDB client
