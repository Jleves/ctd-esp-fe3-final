import React from 'react'
import footer from '../index.css'
import { themes } from './utils/theme'
import { useApiOdont } from './utils/global.context'

const Footer = () => {

  return (
    <footer>
      
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
