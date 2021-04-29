import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./userselfassets.scss"

const UserSelfAssets = (props) => {
  const { content } = props
  return (
    <div className="userselfassets">
      <Container>
        <Row>
          {content &&
            content.map((project, key) => {
              return (
                <Col md={3} xs={6} key={key}>
                  <h3>{project.name}</h3>
                  <span>{project.description}</span>
                </Col>
              )
            })}
        </Row>
      </Container>
    </div>
  )
}

export default UserSelfAssets
