import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Loading.module.css'

function Loading() {
  return (
    <div className={styles.container} name='loading'>
        <div className={styles.loading}>
          <CircularProgress color="inherit"/>
        </div>
    </div>
  )
}

export default Loading