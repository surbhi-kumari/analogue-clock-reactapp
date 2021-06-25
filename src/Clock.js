import React, { useEffect, useState } from "react";
import "./styles.css";

const Clock = () => {
  // const [clock, setClock] = useState(" ");
  const [hourRotation, setHourRotation] = useState(0);
  const [minuteRotation, setMinuteRotation] = useState(0);
  const [secondRotation, setSecondRotation] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setClock();
    }, 1000);
  }, []);
  function setClock() {
    const myDate = new Date();
    const hourTime = myDate.getHours();
    const minuteTime = myDate.getMinutes();
    const secondTime = myDate.getSeconds();
    setHourRotation(30 * hourTime + minuteTime / 2);
    setMinuteRotation(6 * minuteTime);
    setSecondRotation(6 * secondTime);
  }

  return (
    <>
      <div className="clock">
        <div
          className="hand hour"
          style={{ transform: `translate(-50%) rotate(${hourRotation}deg)` }}
        ></div>
        <div
          className="hand minute"
          style={{
            transform: `translate(-50%) rotate(${minuteRotation}deg)`
          }}
        ></div>
        <div
          className="hand second"
          style={{
            transform: `translate(-50%) rotate(${secondRotation}deg)`
          }}
        ></div>
        <div className="number number1">
          <div>1</div>
        </div>
        <div className="number number2">
          <div>2</div>
        </div>
        <div className="number number3">
          <div>3</div>
        </div>
        <div className="number number4">
          <div>4</div>
        </div>
        <div className="number number5">
          <div>5</div>
        </div>
        <div className="number number6">
          <div>6</div>
        </div>
        <div className="number number7">
          <div>7</div>
        </div>
        <div className="number number8">
          <div>8</div>
        </div>
        <div className="number number9">
          <div>9</div>
        </div>
        <div className="number number10">
          <div>10</div>
        </div>
        <div className="number number11">
          <div>11</div>
        </div>
        <div className="number number12">
          <div>12</div>
        </div>
      </div>
    </>
  );
};

export default Clock;
