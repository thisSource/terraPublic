import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Navbar from '../components/Navbar'
import MainContainer from '../components/myAccountContainerComps/MainContainer'
import MyAccount from './myaccount'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
