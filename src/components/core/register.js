import Vue from 'vue'

Vue.component('d2-container', resolve => { require(['@/components/core/d2-container'], resolve) })
Vue.component('d2-count-up', resolve => { require(['@/components/core/d2-count-up'], resolve) })
Vue.component('d2-highlight', resolve => { require(['@/components/core/d2-highlight'], resolve) })
Vue.component('Icon', resolve => { require(['@/components/core/Icon'], resolve) })
Vue.component('IconSelect', resolve => { require(['@/components/core/IconSelect/index.vue'], resolve) })
Vue.component('IconSvg', resolve => { require(['@/components/core/IconSvg/index.vue'], resolve) })
Vue.component('Markdown', resolve => { require(['@/components/core/Markdown'], resolve) })
Vue.component('QuillEditor', resolve => { require(['@/components/core/QuillEditor'], resolve) })
Vue.component('SimpleMDE', resolve => { require(['@/components/core/SimpleMDE'], resolve) })
