<template>
	<div class="addBookmark">
		<h1>{{ pageTitle }}</h1>
		<el-divider></el-divider>
		<BookmarkForm/>
	</div>
</template>

<script>
// <router-view>에 주입할 컴포넌트에서 서브 컴포넌트를 불러올 때는
// import를 사용한 후, export default 안 components 배열에 서브 컴포넌트를 명시합니다.
import BookmarkForm from '@/components/BookmarkForm.vue'

export default {
	props: ['pageTitle'],
	components: {
		BookmarkForm
	}
}
</script>

<style scoped>
</style>