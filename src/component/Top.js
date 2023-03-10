import Link from 'next/link'
import { Header } from 'semantic-ui-react'
import Gnb from './Gnb'

export default function Top() {
  return (
    <div>
      <div style={{ display: 'flex', paddingTop: 20 }}>
        <div style={{ flex: '100px 0 0' }}>
          <Link href="/">
            <img
              src="/images/4183848_94064_492.jpg"
              alt="logo"
              style={{ display: 'block', width: 80 }}
            />
          </Link>
        </div>
        <Header as="h2" color="blue">
          MS Department
        </Header>
      </div>
      <Gnb />
    </div>
  )
}
