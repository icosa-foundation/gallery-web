import { Container, Row, Col } from "react-bootstrap"
import HomeHero from "../../components/home-hero"
import ProjectsList from "../../components/projects-list"
import "./homepage.scss"

function Homepage() {
  return (
    <div>
      <HomeHero />
      <ProjectsList />
    </div>
  )
}

export default Homepage
