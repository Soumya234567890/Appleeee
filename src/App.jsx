import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
const App=() => {
  // const [count, setCount] = useState(0)

  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>

    </main>
  )
}

export default App
