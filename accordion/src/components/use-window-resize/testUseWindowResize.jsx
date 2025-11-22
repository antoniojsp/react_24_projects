import useWindowresize from ".";

export default function TestWindowResize(){
    const windowsSize = useWindowresize();
    const {width, height} = windowsSize;
    return(
        <div>
            <h1>Use Window Resize Hook</h1>
            <p>
                width is {width}
            </p>
            <p>
                height is {height}
            </p>
        </div>
    )
}