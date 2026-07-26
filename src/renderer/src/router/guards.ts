//前置守卫
export const beforeEach = (to, from) => {
  console.log('全局前置守卫', to, from)
}

//后置守卫
export const afterEach = (to, from) => {
  console.log('全局后置守卫', to, from)
}
