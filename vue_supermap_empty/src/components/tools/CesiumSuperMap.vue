<template>
    <section id="conted"></section>
</template>

<script>
export default {
    name: "cesium-supermap",

    data () {
        return {
        }
    },

    methods: {
        resetSuperMap() {
            const Cesium = window.Cesium
            // console.log(Cesium)

            let viewer = new Cesium.Viewer('conted', {
                shadows: true
            })

            let url = 'http://www.supermapol.com/realspace/services/3D-CBDCache20200416/rest/realspace'
            let promise = viewer.scene.open(url)

            Cesium.when(promise, layers=> {
                // console.log(layers)

                layers.forEach(val=> {
                    value.selectEnabled = false
                    value.shadowType = 2
                })
            })

            this.$store.dispatch('Set_Viewer_info', viewer)
            // console.log(this.$store.getters.viewer)  // 异步viewer

            this.$emit("getViewer", viewer)  // 传给父组件
        }
    },

    created() {
        
    },

    mounted() {
        this.resetSuperMap()
    }
}
</script>

<style lang="less" scoped>
.cesium-map-wrapper {
    width: 100%;
    height: 100%;
}
</style>