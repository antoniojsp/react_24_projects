import { useLayoutEffect, useState } from "react";

export default function useWindowresize() {
    const [windowSize, setWindowSize] = useState(
        {
            width: 0,
            height: 0
        }
    )

    function handlerResize() {
        setWindowSize(
            prev => ({
                ...prev,
                width: window.innerWidth,
                height: window.innerHeight
            })
        )
    }

    useLayoutEffect(() => {handlerResize();
                        window.addEventListener('resize', handlerResize);
                        return () => window.removeEventListener('resize', handlerResize); // remove listener by not executing right away
                        },
        []
    )

    return windowSize;
}