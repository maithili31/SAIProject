import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p>{timerDays}</p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;