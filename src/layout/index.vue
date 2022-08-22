<template>
	<transition :name="switchTransition">
		<router-view />
	</transition>
</template>

<script>
// import headers from '@/components/Header'
export default {
	components: {
		// headers,
	},
	data() {
		return {
			transitionName: '',
			switchTransition: '',
		}
	},
	watch: {
		$route(to) {
			if (['/zoom', '/mtr'].includes(to.path)) {
				this.switchTransition = ''
			}
            if(['/home'].includes(to.path)) {
				this.switchTransition = 'threefade'
            }
            if(["/faqs"].includes(to.path)) {
				this.switchTransition = 'twofade'
            }
		},
	},
}
</script>
<style scoped>
.onefade-enter {
	opacity: 0;
}
.onefade-enter-active,
.onefade-leave-active {
	transition: all 0;
}
.onefade-leave-to {
	opacity: 0;
}

.twofade-enter-active,
.twofade-leave-active {
	transition: all .75s;
	position: absolute;
}

.twofade-leave-to {
	transform: translateY(-100%);
}
.twofade-enter {
	transform: translateY(100%);
}

.threefade-enter-active,
.threefade-leave-active {
	transition: all .75s;
	position: absolute;
}
.threefade-leave-to {
	transform: translateY(100%);
}
.threefade-enter {
	transform: translateY(-100%);
}
</style>
