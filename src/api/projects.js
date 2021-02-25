import { loremIpsum, fullname, username } from "react-lorem-ipsum"

const api_root = process.env.REACT_APP_ROOT_SERVER_PATH

class ProjectsAPI {
  static generatePlaceholder = () => {
    const range = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const title = loremIpsum({
      startWithLoremIpsum: false,
      avgWordsPerSentence: 4,
      avgSentencesPerParagraph: 1,
      random: true,
    })
    const author = Math.random() < 0.5 ? fullname() : username()
    const datetime = range(2018, 2021) + "-" + range(1, 12) + "-" + range(1, 28)
    const image_url =
      "http://placeimg.com/" +
      range(1270, 1290) +
      "/" +
      range(320, 1200) +
      "/any"
    return { title, author, datetime, image_url }
  }

  static getProjectList = async (filter, number, page) => {
    let placeholders = []
    for (let i = 0; i < number; i++) {
      placeholders.push(this.generatePlaceholder())
    }
    return placeholders
  }

  static getProject = async () => {
    return this.generatePlaceholder()
  }
}

export default ProjectsAPI
