import { useEffect  } from "react"


export default function useOutsideClick(ref, handler) {
    useEffect(() => {
        function listener(event) {
            if (!ref.current || ref.current.contains(event.target)) {// if ref is not assgied or the event doesnt point to the event
                return
            }
            handler()
        }
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        }

    }, [handler, ref])
} 