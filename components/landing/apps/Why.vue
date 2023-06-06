<template>
	<v-container>
		<p v-slide-up class="text-center pa-5 mb-10 text-white text-h4">
			{{ title }}
		</p>
		<v-card v-slide-up:duration="500" flat class="card">
			<v-tabs v-model="tab" class="d-flex justify-space-between" grow>
				<v-tab
					v-for="(item, i) in items"
					:key="i"
					class="text-h6 font-weight-bold text-light-blue-accent-2"
				>
					{{ item.title }}
				</v-tab>
			</v-tabs>
			<v-card-text>
				<v-window v-model="tab">
					<v-window-item v-for="(item, j) in items" :key="j">
						<v-row>
							<v-col cols="12" md="6" class="pa-10">
								<span class="text-h6 ma-2 text-justify font-weight-bold text-white">
									{{ item.content }}
								</span>
								<v-list class="list">
									<v-list-item v-for="(listItem, index) in item.subcontent" :key="index">
										<IconCSS
											name="mdi:check"
											size="1.5em"
											class="text-light-blue-accent-2"
										/>
										<p class="pa-3 text-white d-inline">{{ listItem }}</p>
									</v-list-item>
								</v-list>
							</v-col>
							<v-col cols="12" md="6" class="d-flex justify-center align-center">
								<v-img :src="item.image" height="300" class="rounded-lg hidden-sm-and-down" />
							</v-col>
						</v-row>
					</v-window-item>
				</v-window>
			</v-card-text>
		</v-card>
	</v-container>
</template>
<script setup lang="ts">
const tab = ref(null)
const { vSlideUp } = useAnimation()
defineProps<{
	title: string
	items: {
		title: string
		content: string
		subcontent: {
			list1: string
			list2: string
			list3: string
		}
		image: string
	}[]
}>()
</script>

<style scoped>
.list {
	background-color: #151f32;
}

.card {
	background-color: #151f32;
}
</style>
