import 'semantic-ui-css/semantic.min.css'
import Foot from '../src/component/Foot'
import Top from '../src/component/Top'

export default function App({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: '0 auto' }}>
      <Top />
      <Component {...pageProps} />
      <Foot />
    </div>
  )
}
