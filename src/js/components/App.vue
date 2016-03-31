<template>
  <div class="app">
  	<h1>Vue Application</h1>
  	<p>Hello hwo are you are are?sdfsdfsd</p>
  	<ul>
  		<li v-for="item in items">{{ item }}</li>
  	</ul>
  </div>
</template>

<script>
export default {
  components: {},
  data : () => {
  	return {
  		items : [1,2,3,4,5]
  	}
  }
}
</script>