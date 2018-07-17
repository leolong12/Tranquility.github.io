<template>
    <div id="home">
        主页
        <div class="home_v">
            <!-- <video src="./../statics/eve1.mp4" controls="controls">
                your browser does not support the video tag
            </video> -->
            <video width="100%" height="100%" autoplay="autoplay" loop="loop">
                <source src="./../statics/eve1.mp4" type="video/mp4" />
                <source src="./../statics/eve1.ogg" type="video/ogg" />
            </video>
        </div>
    </div>
</template>
<script>
    // import eve1 from ""
    export default {
        name: 'home',
        data() {
            return {
                // eve1: './../statics/eve1.mp4',
                // eve_logo: './../statics/eve_logo.png'
            }
        }
    }

</script>

<style>
    #home {
        background: #333;
        opacity: 0.3;
        width: 100%;
        height: 100%;
    }

    #home .home_v {
        opacity: 1;
    }

    .map-bodar {
        display: flex;
        cursor: pointer;
    }

</style>
