import React from 'react'

const Reccommendations = () => {
    const containerStyle = {
        width: '100%',             // 60% of the window width
        margin: '0 auto',         // Center the container
        padding: '20px',          // Add some padding for content
        backgroundColor: '#f0f0f0', // Light gray background
        border: '1px solid #ccc', // Light border
        boxSizing: 'border-box',  // Include padding in width/height
        overflow: 'hidden',       // Ensure content doesn't overflow
      };
  return (
    <div style={containerStyle}>
        <h1>Reccommendations</h1>
        </div>
  )
}

export default Reccommendations