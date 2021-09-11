// import {useRef, useEffect} from 'react';
// import { init, animate } from '@/helpers/backgroundAnimation'; 

const Background: React.FC = ({children}) => {
    // const animatedBackground = useRef<HTMLDivElement>(null)
    // useEffect(() => {
        // const element = animatedBackground
        // init(element)
        // animate()
        // return () => {
        //     element.current && element.current.removeChild(element.current.childNodes[1])
        // }
    // }, [])

    return (
        <div>
            {children}
        </div>
    )
}

export default Background