import pageData from './data.json'

export default function handler(req, res) {
  res.status(200).json(pageData)
}
