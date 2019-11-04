import store from './store'
import component from './index.vue'
import preview from './preview.png'

export default {
  component,
  store,
  options: {
    name: '简洁',
    code: 'pithy',
    preview,
    themes: [
      {
        name: 'default',
        color: '#0078D7'
      },
      {
        name: 'mazarine',
        color: '#0063B1'
      },
      {
        name: 'blueblack',
        color: '#11578a'
      },
      {
        name: 'blue-light',
        color: '#e4e7ed'
      }
    ]
  }
}
