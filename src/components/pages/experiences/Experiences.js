import React from 'react';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                CP2S, Ireland  |
                <strong>  2021</strong> - 
                <strong>2022</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Software Developer Intern</strong>
                </h6>
                <p>
                Designing responsive and user-facing web applications and components with the Vue.js<br/>
                Integrating frontend with the backend through API calls<br/>
                Working with Git, GitHub and Selenium<br/>
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
              Sattvarise Technologies Pvt Ltd, Pune | | 
                <strong>  2020</strong> - 
                <strong>2021</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Android App Developer Intern</strong>
                </h6>
                <p>
                Developed and Designed Android App in Flutter <br/>
                Assisted team with various aspects of product like Camera, Alarm Clock, Audio and Swipe<br/>
                Integrated Razorpay Payment Gateway with App and designed the Landing page<br/>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
