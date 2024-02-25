import Listing from './components/Listing'
import './App.css'
import list from './data/etsy'

function App() {

  const data = JSON.parse(list)
  return (
    <>
      <Listing items={data}/>
    </>
  )
}

export default App
