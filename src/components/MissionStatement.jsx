import React from "react";
import { useDeviceSelectors } from "react-device-detect";

export const MissionStatement = (props) => {

  const [selectors] = useDeviceSelectors(window.navigator.userAgent);

  // todo: check if it can be done with code instead of react device detect
  const { isMobile } = selectors;

  if(isMobile){
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          margin: '0 auto',
          textAlign: 'center',
          height:'20vh',
          paddingTop : '40vh',
          width:'100%',
          backgroundColor: '#faf0e6',
          // backgroundColor: 'red',
  
        }}
      >
        <h1 style={{ fontSize: '48px', fontWeight: 'bold',marginBottom: '16px' }}>
          {props?.data?.title}
        </h1>
        <p style={{ fontSize: '17px', lineHeight: '1.6', fontStyle:'italic' }}>
          {props?.data?.text}
        </p>
      </div>
    );
  }
  else{

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '200px',
        margin: '0 auto',
        textAlign: 'center',
        height:'40vh',
        paddingTop : '40vh',
        width:'100%',
        backgroundColor: '#faf0e6',
        // backgroundColor: 'red',

      }}
    >
      <h1 style={{ fontSize: '48px', fontWeight: 'bold',marginBottom: '16px' }}>
        {props?.data?.title}
      </h1>
      <p style={{ fontSize: '17px', lineHeight: '1.6', fontStyle:'italic' }}>
        {props?.data?.text}
      </p>
    </div>
  );
}
};
