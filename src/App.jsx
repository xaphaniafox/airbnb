import './style.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {

  const cardItems = data.map(item => {
    return(
      <Card
        img = {item.coverImg}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        location = {item.location}
        title = {item.title}
        price = {item.price}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      {cardItems}
    </>
  )
}

export default App
