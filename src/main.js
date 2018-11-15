//import 'bootstrap/dist/css/bootstrap.min.css'//这边就触及到我知识的盲区了...
import 'bootstrap'
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './app.vue'
import { CHANGE_MMACTIVE } from './store/mutation-types'

router.beforeEach(({name: toName, meta: {title: toTitle}}, from, next) => {
    window.document.title = toTitle ? toTitle + ' - WZL' : 'WZL'
    next()
})

router.afterEach(({name}) => {
    if (store) {
        store.commit(CHANGE_MMACTIVE, name)
    }
    window.scrollTo(0, 0)
})

let app = new Vue({
    el: '#app',
    router,
    store,
    data: {
        eventHub: new Vue()
    },
    render: h => h(App)
})