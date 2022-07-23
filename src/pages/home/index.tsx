import type { NextPage } from 'next'
import Footer from './components/Footer'
import Header from './components/Header'

const Home: NextPage = () => {
  return <>
    <Header />
    <div className="w-full min-h-screen bg-initial bg-cover bg-fixed flex justify-center items-center">
      <p className="text-[3.5rem] text-white drop-shadow-3xl">
        SONHE. FAÇA. CONQUISTE!
      </p>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Footer />
  </>

}

export default Home
