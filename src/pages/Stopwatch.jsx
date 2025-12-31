import { useState } from "react";
import Layout from "../components/Layout";

function StopWatch() {
    const [ml, setMl] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);
    const [timer, setTimer] = useState("");
    const [lap, setLap] = useState([]);
    const start = () => {
        const temp = setInterval(() => {
            setMl((ml) => ml + 1);
            setTimer(temp);
        }, 10)
    }

    if (ml === 100) {
        setSec((sec) => sec + 1);
        setMl((ml) => ml = 0)
    }

    if (sec === 60) {
        setMin((min) => min + 1);
        setSec((sec) => sec = 0);
    }

    if (min === 60) {
        setHour((hour) => hour + 1);
        setMin((min) => min = 0);
    }

    const stop = () => {
        clearInterval(timer);
    }

    const reset = () => {
        setMl((ml) => ml = 0);
        setSec((sec) => sec = 0);
        setMin((min) => min = 0);
        setHour((hour) => hour = 0);
    }

    const recordLap = () => {
        let laptime = `${hour} : ${min} : ${sec} : ${ml}`;
        setLap([...lap, laptime])
    }
    return (
        <div>
            <Layout />
            <div className="mt-5">
                <h1 style={{ textAlign: 'center' }}>Stop Watch</h1>
                <div className="d-flex p-5" style={{ justifyContent: 'space-between' }}>
                    <button className="form-control btn btn-outline-danger">Mili Sceond : {ml}</button>
                    <button className="form-control btn btn-outline-danger">Sceond : {sec}</button>
                    <button className="form-control btn btn-outline-danger">Minute : {min}</button>
                    <button className="form-control btn btn-outline-danger">Hour : {hour}</button>
                </div>
                <div className="p-5 d-flex">
                    <button className="btn btn-primary" onClick={start}>Start</button>
                    <button className="btn btn-warning" onClick={stop}>Stop</button>
                    <button className="btn btn-success" onClick={reset}>Reset</button>
                    <button className="btn btn-info" onClick={recordLap}>Lap</button>


                </div>
                <div className="mt-3">
                    <h3>Laps</h3>
                    {lap && lap.map((lap, index) => (
                        <div className="bg-dark p-2 d-flex" key={index}>
                            <h4 style={{ color: "white" }}>{lap}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StopWatch;