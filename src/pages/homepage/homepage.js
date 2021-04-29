import HomeHero from "../../components/layout/home-hero"
import ProjectsList from "../../components/sketch/projects-list"
import "./homepage.scss"

function Homepage() {
  return (
    <div>
      <HomeHero />
      <ProjectsList isPoly={true} />
    </div>
  )
}

export default Homepage
