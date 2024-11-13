import { ReactNode } from 'react'

import './Page.scss'

const Page = ({ children }: { children: ReactNode }) => {
  return <main className='page'>{children}</main>
}

export default Page
