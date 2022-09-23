import Header from './Navigation/Header'
import Footer from './Navigation/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}