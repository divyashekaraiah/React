import React from 'react';
  export  const Wrapper = ({children }) => {
    return (
        <div style={{ display: 'flex',
                justifyContent: 'space-around',
                padding: '20px',
                border: '1px solid grey' }}>
           
            {children}
        </div>
    )
}