import Features from '../components/Features'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Introducing from '../components/Introducing';
import Navbar from "../components/Navbar";
import QuickInfo from '../components/QuickInfo';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <QuickInfo/>
      <Introducing/>
      <Footer/>
    </div>
  )
}