import Nav from './components/Nav'
import Showcase from './components/Showcase'
import About from './components/About'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Nav />
      <main>
        <Showcase />
        <About />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default App
