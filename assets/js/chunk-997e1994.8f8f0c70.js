(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-997e1994"],{a950:function(o,e,n){},b6a7:function(o,e,n){"use strict";n.r(e);var t=function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("section",{staticClass:"main_cont amap-wrapper"},[n("el-amap",{ref:"map",staticClass:"amap-box",attrs:{vid:"amap-vue",center:o.center,zoom:o.zoom,events:o.events}})],1)},a=[],i=(n("b0c0"),{name:"testmap1",data:function(){var o=this;return{center:[107.943579,30.131735],zoom:7,events:{init:function(e){window.amapview=e,o.getMapInfo(),o.getGeoJson()}}}},computed:{},methods:{getGeoJsonExample:function(){var o=this;this.axios.get("https://a.amap.com/jsapi_demos/static/geojson/chongqing.json").then((function(e){var n=e.data,t=new AMap.GeoJSON({geoJSON:n,getPolygon:function(o,e){var n=AMap.GeometryUtil.ringArea(e[0]);return new AMap.Polygon({path:e,fillOpacity:1-Math.sqrt(n/8e9),strokeColor:"white",fillColor:"red"})}});console.log(t),o.$message.success("geojson加载成功"),t.eachOverlay((function(o){console.log(o)})),console.log(window.amapview),t.setMap(window.amapview)})).catch({})},getMapInfo:function(){var o=this;console.log("AMap",AMap),setTimeout((function(){console.log("amapview",window.amapview),window.amapview.on("click",(function(e){o.getPosition(e)})),window.amapview.on("moveend",(function(){o.logMapinfo()}))}),0)},logMapinfo:function(){console.log("当前级别",window.amapview.getZoom()),console.log("当前中心点",window.amapview.getCenter())},getPosition:function(o){console.log("您在 ["+o.lnglat.getLng()+","+o.lnglat.getLat()+"] 的位置点击了地图")},initGeojsonLayer:function(o,e){return new AMap.GeoJSON({geoJSON:o,getPolygon:function(o,n){var t=AMap.GeometryUtil.ringArea(n[0]);return new AMap.Polygon({path:n,fillOpacity:1-Math.sqrt(t/8e9),fillColor:e,strokeColor:"#fff",strokeWeight:.6,strokeStyle:"solid",strokeOpacity:1})}})},setGeoJsonLayer:function(o,e,n,t){var a=this.initGeojsonLayer(o,e);a.eachOverlay((function(o){o.on(n,(function(e){t(e,o)}))})),a.setMap(window.amapview)},getGeoEvent:function(o,e,n){var t=e.toGeoJSON();n(t);var a=this.initGeojsonLayer(t,"#00f");a.setMap(window.amapview),a.on("mouseout",(function(){console.log("鼠标移除事件"),a.hide()})),a.on("click",(function(){console.log("鼠标点击事件"),a.hide()}))},getGeoJson:function(){var o=this;this.axios.get("https://a.amap.com/jsapi_demos/static/geojson/chongqing.json").then((function(e){var n=e.data;o.setGeoJsonLayer(n,"#f00","click",(function(e,n){o.getGeoEvent(e,n,(function(o){console.log("处理geojson业务流程"),o.properties.name?console.log("区县名称",o.properties.name):console.log("区县名称",o.properties.Name)}))})),o.$message.success("geojson加载成功")})).catch({})}},created:function(){},mounted:function(){}}),s=i,c=(n("d01a"),n("2877")),l=Object(c["a"])(s,t,a,!1,null,"4a2ed174",null);e["default"]=l.exports},d01a:function(o,e,n){"use strict";n("a950")}}]);