<template>
    <section class="main_cont">
        <CesiumSuperMap 
            @getViewer="getViewer"
        />
        <el-button type="primary" @click="getvw" style="z-index: 1;position: absolute;top: 0;">getvw</el-button>
    </section>
</template>

<script>
import CesiumSuperMap from '@/components/tools/CesiumSuperMap'

export default {
    name: "TestSuperMap1",

    components: {
        CesiumSuperMap
    },

    data () {
        return {
            // title: this.$store.state.common.title
            // title: this.$store.getters.title
        }
    },

    methods: {
        getViewer(viewer) {
            console.log("获取viewer", viewer)
        },
        getvw() {
            console.log("getvw", this.$store.getters.viewer)

        }
    },

    mounted() {
        
    },

    created() {
        // console.log(this.$store.getters.viewer)
    }
}
</script>

<style lang="less" scoped>
.main_cont {
    padding: 0;
    position: relative;
}
</style>