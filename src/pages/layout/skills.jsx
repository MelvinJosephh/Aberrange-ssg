import React from 'react';
import Link from "next/link";
import '../../styles/components/Skills.module.scss';

const Skill = () => {
  const Progress = ({ done, title }) => {
    return (
      <div className="progress">
        <div className="progress-done" style={{ opacity: 1, width: `${done}%` }}>
          <h4>{title}</h4>
          <h4>{done} %</h4>
        </div>
      </div>
    );
  };

  const data = [
    {
      title: "Supporting Innovative dreams in Tech",
      para: "Our aim is to support innovative dreams through making ideas come true.",
      para1: "We are committed to offering state-of-the-art innovations that not only offer solutions but also support creative minds.",
    },
  ];

  return (
    <>
      <section className="skill">
        <div className="container">
          <div className="heading">
            <h3>Why Choose Us</h3>
            <h1>Some of our best selling skills</h1>
          </div>
          <div className="content">
            <div className="left">
              <Progress done="70" title="HTML" />
              <Progress done="80" title="PHP" />
              <Progress done="90" title="CSS" />
              <Progress done="90" title="JAVASCRIPT" />
              <Progress done="70" title="REACT JS" />
            </div>
            <div className="right">
              {data.map((val, index) => (
                <div key={index}>
                  <h1>{val.title}</h1>
                  <p>{val.para}</p>
                  <p>{val.para1}</p>
                  <Link to="/hire-talent/steps/step1" className="primary-btn">
                  Hire Talent
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
