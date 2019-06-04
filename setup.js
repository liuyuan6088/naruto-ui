window.alert = msg => {
  console.log(msg)
}
window.matchMedia = () => ({})
window.scrollTo = () => {}

const Enzyme = require('enzyme')

let Adapter
if (process.env.REACT === '15') {
  Adapter = require('enzyme-adapter-react-15'); // eslint-disable-line
} else {
  Adapter = require('enzyme-adapter-react-16')
}

Enzyme.configure({ adapter: new Adapter() })
