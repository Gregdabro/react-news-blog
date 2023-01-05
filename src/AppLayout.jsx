import Header from "./components/UI/header/Header"
import Main from "./components/UI/main/Main"
import Footer from "./components/UI/footer/Footer"

function AppLayout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default AppLayout
