import { ID_INJECTION_KEY } from 'element-plus'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.provide(ID_INJECTION_KEY, {
    prefix: 100,
    current: 0
  })

  return {
    provide: {
      $elComponentSize: {
        small: 'small',
        default: 'default',
        large: 'large'
      },
      $elComponentType: {
        primary: 'primary',
        success: 'success',
        warning: 'warning',
        danger: 'danger',
        info: 'info'
      }
    }
  }
})
