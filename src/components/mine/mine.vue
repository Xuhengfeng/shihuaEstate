<template>
	<div class="mine">
		<button @click="minebtn">mine</button>
	</div>
</template>

<script>
	export default {
		methods:{
			minebtn(){
				this.$store.dispatch("cardidauth");
				console.log(this.$store)
			}
		}
	}
</script>

<style>
</style>