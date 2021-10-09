<template>
    <section class="main_cont">
        <div id="map"></div>
    </section>
</template>

<script>
import L from 'leaflet'
import * as supermap from '@supermap/iclient-leaflet';

export default {
    name: "leaflet2",

    data () {
        return {
            
        }
    },

    methods: {
        testmap() {
            console.log("test")

            var url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";
            var map = L.map('map', {
                crs: L.CRS.EPSG4326,
                center: [0, 0],
                maxZoom: 18,
                zoom: 4
            });
            L.supermap.tiledMapLayer(url).addTo(map);
        }
    },

    mounted() {
        this.testmap()
    },

    created() {
    }
}
</script>

<style lang="less" scoped>
.main_cont {
    padding: 0;
}
</style>