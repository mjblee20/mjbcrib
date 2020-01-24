import React from 'react';

import './Glitchy.css';

const Glitchy = (props) => {
  return(
    <div className="table glitchy-body">
      <div className="table-cell">
          <div>
              <a href="http://www.kikk.be/2016/" className="btn-link">
                  <span className="link-inner">
                      On a button
                  </span>
              </a>
          </div>
          <div>
              <a href="http://www.kikk.be/2016/" data-content="On plain text" className="text-link">
                  On plain text
              </a>
          </div>
          <div>
              <a href="http://www.kikk.be/2016/" className="line-link">
                  Or on a border
              </a>
          </div>
      </div>
    </div>
  )
}

export default Glitchy;
