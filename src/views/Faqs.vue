<template>
	<main class="faqs" role="main">
	</main>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@media screen and (orientation: portrait) {
	.faqs {
		width: 100vh;
		height: calc(100vw - 1rem);
	}
}

@media screen and (orientation: landscape) {
	.faqs {
		width: 100vw;
		height: calc(100vh - 1rem);
	}
}
</style>