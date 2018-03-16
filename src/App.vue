<template>
  <div id="app">
    <router-view/>
    <o-footer></o-footer>
  </div>
</template>

<script>
	import oFooter from "./base/footer/footer";
	export default {
	  components: {
	  	oFooter
	  },
	  methods:{
	  	
	  }
	}
</script>

<style>
</style>
