import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MainNav from "./MainNav";
import React from "react";

const MediaQuery = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };

  return (
    <>
      <Default>
        <MainNav />
      </Default>

      <Mobile>
        <MainNav />
      </Mobile>
    </>
  );

  // const useIsMobile = () => {
  //   const [isMobile, setIsMobile] = useState(false);
  //   const [screenWidth, setScreenWidth] = useState(0);

  //   useEffect(() => {
  //     const handleScreenResize = () => {
  //       setScreenWidth(window.innerWidth);
  //       screenWidth > 768 ? setIsMobile(false) : setIsMobile(true);
  //       // 리사이징이 수행된 다음, 이벤트 핸들러를 제거합니다.
  //       window.removeEventListener("resize", handleScreenResize);
  //     };
  //     handleScreenResize();
  //     window.addEventListener("resize", handleScreenResize);
  //   }, [screenWidth]);

  //   console.log(screenWidth);
  //   return isMobile;
  // };

  // const isMobile = useIsMobile();
};

export default MediaQuery;
