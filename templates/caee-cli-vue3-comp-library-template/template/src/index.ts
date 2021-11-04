import LText from './components/LText'
import LImage from './components/LImage'
import LShape from './components/LShape'
import FinalPage from './components/FinalPage'
import { App } from 'vue'
const components = [LText, LImage, LShape, FinalPage]

const install = (app: App) => {
  components.map(component => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    app.use(component as any)
  })
}

export { install, LText, LImage, LShape, FinalPage }

export default {
  install,
}
