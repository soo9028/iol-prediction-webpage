import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleScreenResize = () => {
    setScreenWidth(window.innerWidth);
    screenWidth > 768 ? setIsMobile(false) : setIsMobile(true);
    // 리사이징이 수행된 다음, 이벤트 핸들러를 제거합니다.
    window.removeEventListener("resize", handleScreenResize);
  };

  useEffect(() => {
    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);
  }, [screenWidth]);

  return isMobile;
};

export default useIsMobile;