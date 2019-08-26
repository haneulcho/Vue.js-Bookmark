import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import AddBookmark from './views/AddBookmark.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', name: 'home', meta: { title: '첫 화면' }, component: Home },
		{ path: '/list', name: 'list', meta: { title: '내 북마크 목록' }, component: List },
		{ path: '/add', name: 'addBookmark', meta: { title: '북마크 추가' }, component: AddBookmark }
	]
})
