import HomeHero from "../../components/layout/home-hero"
import SketchList from "../../components/sketch/sketch-list"
import "./homepage.scss"

function Homepage() {
  return (
    <div>
      <HomeHero />
      <SketchList isPoly={true} />
    </div>
  )
}

export default Homepage
