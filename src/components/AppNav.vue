<template>
	<div id="nav">
		<el-menu
			:router="true"
			:default-active="activeLink"
			mode="horizontal"
			background-color="#073862"
			text-color="#ffffff"
			active-text-color="#b5dc11">
			<el-menu-item :index="rule.path" v-for="rule in $router.options.routes" :key="rule.meta.title">{{ rule.meta.title }}</el-menu-item>
		</el-menu>
		<div class="line"></div>
	</div>
</template>

<script>
export default {
	name: 'AppNav',
	data: () => ({
		activeLink: null
	}),
	mounted () {
		this.activeLink = this.$route.path
	},
	watch: {
		$route (to, from) {
			this.activeLink = to.path
		}
	}
}
</script>