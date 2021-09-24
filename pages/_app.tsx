import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Navbar from '../components/Navbar'
import MainContainer from '../components/myAccountContainerComps/MainContainer'
import myAccount from './myaccount'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar/>
      <myAccount/>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
