import React, { useEffect, useState } from 'react';

const EffectClass = () => {
    let [value, setValue] = useState(0);
    let [title, setTitle] = useState("");

    let [size, setSize] = useState(0);
    const getSize = () => {
        setSize(window.innerWidth);
    }
    useEffect(()=>{
        console.log("USING useEffect()")
        if(value > 0){
            document.title = `My count (${value})`
        }else{
            document.title = `My count`
        }

        window.addEventListener('resize',getSize);
        return(()=>{
            window.removeEventListener('resize',null)
        })

    }, [value]);


    console.log("Rendered Component");

    // if(value > 0){
    //     return (
    //         <>
    //             <BlueComponent />
    //         </>
    //     )
    // }else if(value <= 0 ){
    //     return (
    //         <>
    //             <RedComponent />
    //         </>
    //     )
    // }
    return (
        <>
            <p className="display-4 text-center">Effect Class</p>
            <div className="text-center">
                <p className="display-4">
                    { value > 0 ? <b className="text-primary">{value}</b> : <b className="text-danger">{value}</b>}
                    { value > 0 ? <BlueComponent /> : <RedComponent />}

                </p>
                <p className="display-4">{size}</p> 

                <button className="btn btn-danger" onClick={()=>setValue(value+1)}>Increase</button>
                <input className="form-control" />

            </div>
        </>
    )
}

function RedComponent() {
    return (
        <>
            <p className="bg-danger p-3 text-white">RED COMPONENT</p>
        </>
    )
}

function BlueComponent() {
    return (
        <>
            <p className="bg-primary p-3 text-white">BLUE COMPONENT</p>
        </>
    )
}
export default EffectClass;