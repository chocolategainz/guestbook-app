import {useState , useEffect} from 'react';

const useWindowDimentions = () => {
    const [windowDimentions , setWindowDimensions] = useState ({
width: window.innerWidth,
height: window.innerHeight,
    });

    useEffect (() => {
const handleResizeEvent = () => {
    setWindowDimensions ({
        width: window.innerWidth,
        height: window.innerHeight,
    });
};
window.addEventListener('resize' , handleResizeEvent);
    return () => {
window.removeEventListener('resize' , handleResizeEvent)
    };
}, []);

return windowDimentions;

};
export default useWindowDimentions;