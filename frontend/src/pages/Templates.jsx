import React from 'react'
import { Link } from 'react-router-dom';

const Templates = () => {
  return (
    <div className="templates-container">
      <div className="home-header">
        <h1 className="header-head">Templates</h1>

        <div className="select-color">
          <p className="color-p">
            Select a color and a template to get started
          </p>
        </div>
      </div>
      <div className="color-selector-main">
        <div className="template-colors">
          <ul>
            <li>
              <div className="template-color"></div>
            </li>
            <li>
              <div className="template-color"></div>
            </li>
            <li>
              <div className="template-color"></div>
            </li>
          </ul>
        </div>
      </div>
      <div className="templates-select">
          <Link to='/editor'>
            <div className="template-one template-margin"></div>
          </Link>
          <Link to='/editor'>
            <div className="template-one template-margin"></div>
          </Link>
        
      </div>
      <div className="paginate">
            <div className="left-move">
                <button className="btn-nav"> <i className="fa fa-arrow-left"></i> </button>
            </div>
            <div className="right-move">
                <button className="btn-nav"> <i className="fa fa-arrow-right"></i></button>
            </div>
      </div>

      <div className="back-create-resume">
        <button className="back">Back</button>
      </div>
    </div>
  );
}

export default Templates