import React from 'react';

const CenterDiv = (Component) => (props) => {
  return (
    <div
      className='mt-5 pt-5'
    >
      <div
        className='container pt-2'
      >
      <Component {...props} />
      </div>
    </div>
  )
}

export default CenterDiv;