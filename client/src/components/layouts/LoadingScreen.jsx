import React from 'react'

import { useAuth } from '../../context/AuthContext'
import "../../assests/layouts/loadingScreen.css";

function LoadingScreen() {
  const { loading } = useAuth();

  return (
    loading && (
      <div className='loading-main'>
        <div className="spinner">
          <span>Loading...</span>
          <div className="half-spinner"></div>
        </div>
      </div>
    )
  )
}

export default LoadingScreen