import { View, Text, Dimensions } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
const {width, height} = Dimensions.get('window')

const ShowMap = ({ data }) => {
  return (
      <WebView
        originWhitelist={["*"]}
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        source={{
          html: `
                <!DOCTYPE html>
                <html>
                  <head>
                      <style>
                        body:{
                          margin:0,
                          padding: 0
                        }
                      </style>
                  </head> 
                  <body style="background-color:'red'">
                    <div id="baseDiv">${data}</div> 
                  </body>
                </html>
          `,
        }}
        style={{ width: width+182, }}
      />
  );
};

export default ShowMap;
