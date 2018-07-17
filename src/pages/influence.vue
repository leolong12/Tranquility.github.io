<template>
    <div id="influence">
        <a onclick="window.open('http://go-dl1.eve-files.com/media/corp/verite/influence.png')">
            <img src="http://go-dl1.eve-files.com/media/corp/verite/influence.png" alt="联盟">
        </a>
    </div>
</template>

<script>
    export default {
        name: 'influence',
        data() {
            return {
                // leftDrawer: true,
            }
        }
    }
</script>

<style>
    #influence {}

    .map-bodar {
        display: flex;
        cursor: pointer;
    }

    .map-style {
        /* height: 400px; */
        /* width: 100%; */
        overflow: hidden;
        /* margin: 10px; */
    }

    img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }

</style>
