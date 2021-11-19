import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import '../Components/component.css'
import * as location from '../1055-world-locations.json';
import * as success from '../1127-success.json';
import Exchange from './Exchange';

const defaultOptions1 = {
    loop: true,
    autoplay: true, 
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const defaultOptions2 = {
    loop: true,
    autoplay: true, 
    animationData: success.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const LoadExchange = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(undefined);
    const [Completed, setCompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((json) => {
                console.log(json);
                setData(json);
                setLoading(true);

                setTimeout(() => {
                    setCompleted(true)
                }, 1000)
            })
        }, 2000)
    }, [])
    return (
        <>
            {
                !Completed ? (
                    <div className="loader">
                        {
                            !loading ? (
                                <Lottie options={defaultOptions1} height={200} width={200}/>
                            ):(
                                <Lottie options={defaultOptions2} height={100} width={100}/>
                            )
                        }
                    </div>
                ):(
                    <Exchange />
                )
            }
        </>
    )
}

export default LoadExchange