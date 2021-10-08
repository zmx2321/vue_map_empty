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
            var url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";
            var map = L.map('map', {
                crs: L.CRS.EPSG4326,
                center: [0, 0],
                maxZoom: 18,
                zoom: 4
            });
            tiledMapLayer(url).addTo(map);
        },

        addMap1() {
            var host = window.isLocal ? window.server : "https://iserver.supermap.io";
            var map, resultLayer, service, parameter, marker,
                baseUrl = host + "/iserver/services/map-changchun/rest/maps/长春市区图",
                serviceUrl = host + "/iserver/services/transportationanalyst-sample/rest/networkanalyst/RoadNet@Changchun";
            map = L.map('map', {
                crs: L.CRS.NonEarthCRS({
                    bounds: L.bounds([48.4, -7668.25], [8958.85, -55.58]),
                    origin: L.point(48.4, -55.58)
                }),
                center: [-3500, 5200],
                maxZoom: 18,
                zoom: 3
            });
            L.supermap.tiledMapLayer(baseUrl, {noWrap: true}).addTo(map);
            findServiceAreas();

            function findServiceAreas() {
                //添加中心点
                marker = L.marker([-3375, 5605]).addTo(map);
                var resultSetting = new SuperMap.TransportationAnalystResultSetting({
                    returnEdgeFeatures: true,
                    returnEdgeGeometry: true,
                    returnEdgeIDs: true,
                    returnNodeFeatures: true,
                    returnNodeGeometry: true,
                    returnNodeIDs: true,
                    returnPathGuides: true,
                    returnRoutes: true
                });
                var analystParameter = new SuperMap.TransportationAnalystParameter({
                    resultSetting: resultSetting,
                    weightFieldName: "length"
                });
                parameter = new SuperMap.FindServiceAreasParameters({
                    centers: [marker.getLatLng()],
                    isAnalyzeById: false,
                    parameter: analystParameter
                });
                service = L.supermap.networkAnalystService(serviceUrl);
                resultLayer = L.featureGroup().addTo(map);
                parameter.weights = [400 + Math.random() * 100];
                service.findServiceAreas(parameter, function (serviceResult) {
                    var result = serviceResult.result;
                    result.serviceAreaList.map(function (serviceArea) {
                        resultLayer.addLayer(L.geoJSON(serviceArea.serviceRegion));
                    });

                });
            }
        },
        addMap2() {
            var map = L.map('map', {
                center: [0, 0],
                zoom: 0,
                crs: L.CRS.TianDiTu_Mercator
            });
            L.supermap
                .tiandituTileLayer({
                layerType: 'img',
                key: '1d109683f4d84198e37a38c442d68311'
                })
                .addTo(map);
            L.supermap
                .tiandituTileLayer({
                layerType: 'img',
                isLabel: true,
                key: '1d109683f4d84198e37a38c442d68311'
                })
                .addTo(map);
        },
        addMap3() {
            var map = L.map('map', {
                center: [0, 0],
                zoom: 0,
                crs: L.CRS.TianDiTu_WGS84
            });
            L.supermap
                .tiandituTileLayer({
                key: '1d109683f4d84198e37a38c442d68311'
                })
                .addTo(map);
            L.supermap
                .tiandituTileLayer({
                isLabel: true,
                key: '1d109683f4d84198e37a38c442d68311'
                })
                .addTo(map);
        },
        addMap4() {
            var map = L.map('map', {
                center: [39.92, 116.46],
                crs: L.CRS.EPSG3857,
                zoom: 3
            });
            L.supermap.cloudTileLayer("http://t2.dituhui.com/FileService/image").addTo(map);
        }
    },

    mounted() {
        // this.addMap()
        // this.addMap1()
        // this.addMap2()
        // this.addMap3()
        this.addMap4()
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