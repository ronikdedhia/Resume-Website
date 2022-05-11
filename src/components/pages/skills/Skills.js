import React from 'react';

export default function Skills() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROFESSIONAL SKILLS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col s6">
              <p>Machine Learning</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '81%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>Flutter</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>Data Science</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>VueJS</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>Tableau</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>ReactJS</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
