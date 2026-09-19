"use client";

import CountUp from "react-countup";

const NumberCounters = () => {
  const experienceYears = new Date().getFullYear() - 2019;
  const stats = [
    { title: "سنوات خبرة", count: experienceYears },
    { title: "مراجع", count: 400 },
  ];

  return (
    <div className="row justify-content-center stats-row">
      {stats.map(({ title, count }, i) => {
        return (
          <div className="col-6 stat-item" key={i}>
            <div className="stat-number" lang="en" dir="ltr">
              {count}
              <span>+</span>
            </div>
            <h5 className="stat-label">{title}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default NumberCounters;
