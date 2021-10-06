<template>
    <section class="main_cont">
        <div id="map"></div>
    </section>
</template>

<script>
import L from 'leaflet'
// import '@supermap/iclient-leaflet';
import {tiledMapLayer} from '@supermap/iclient-leaflet';

export default {
    name: "leaflet1",

    data () {
        return {
            
        }
    },

    methods: {
        addMap () {
            /* var m = L.map('map').setView([36.52, 120.31], 10)

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>'
            }).addTo(m) */

            var url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";
            var map = L.map('map', {
                crs: L.CRS.EPSG4326,
                center: [0, 0],
                maxZoom: 18,
                zoom: 4
            });
            tiledMapLayer(url).addTo(map);
        }
    },

    mounted() {
        this.addMap()
    },

    created() {
        // this.addMap()
    }
}
</script>

<style lang="less" scoped>
.main_cont {
    padding: 0;

    #map {
        width: 100%;
        height: 100%;
    }
}
</style>