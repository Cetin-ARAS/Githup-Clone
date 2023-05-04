import { useEffect, useState } from 'react';

export const useDeviceDetect = () => {
  const [windowSize, setWindowSize] = useState<{ width: undefined | number; height: undefined | number }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ScreenNotReady = () => {
    if (windowSize.width === undefined || windowSize.height === undefined) return true;
    return false;
  };
  const ScreenSmall = () => {
    if (windowSize.width === undefined || windowSize.height === undefined) return true;
    return (windowSize.width as number) < 768 ? true : false;
  };
  const ScreenMedium = () => {
    if (windowSize.width === undefined || windowSize.height === undefined) return true;
    return (windowSize.width as number) < 1024 ? true : false;
  };
  const ScreenLarge = () => {
    if (windowSize.width === undefined || windowSize.height === undefined) return false;
    return (windowSize.width as number) >= 1024 ? true : false;
  };

  return {
    ScreenSmall,
    ScreenMedium,
    ScreenLarge,
    ScreenNotReady,
  };
};
