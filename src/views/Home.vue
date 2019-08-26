<template>
	<div class="home">
		<h1>{{ pageTitle }}</h1>
		<el-divider></el-divider>
		<Greeting/>
	</div>
</template>

<script>
import Greeting from '@/components/Greeting.vue'

export default {
	props: ['pageTitle'],
	components: {
		Greeting
	}
}
</script>
