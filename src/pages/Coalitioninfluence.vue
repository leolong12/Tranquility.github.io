<template>
	<div id="Coalitioninfluence">
		<div class="map-bodar">
			<div class="map-style">
				<a onclick="window.open('http://go-dl1.eve-files.com/media/corp/coalitionsov/Coalitioninfluence.png')">
					<img src="http://go-dl1.eve-files.com/media/corp/coalitionsov/Coalitioninfluence.png" alt="联盟">
				</a>
			</div>
		</div>

		<!-- <q-page-container>
            <router-view />
        </q-page-container> -->
	</div>
</template>

<script>
	export default {
		name: 'Coalitioninfluence',
		data() {
			return {
				// leftDrawer: true,
			}
		}
	}
</script>

<style>
	.map-bodar {
		display: flex;
        cursor: pointer;
	}

	.map-style {
		/* height: 400px; */
		width: 100%;
		overflow: hidden;
		margin: 10px;
	}

	.map-style img {
		/* height: 400px;
		width: 400px; */
		width: 100%;
	}

</style>
