(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d7cc7c4"],{"04c7":function(i,a){function t(i){var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=function(){return[]},t.resolve=t,i.exports=t,t.id="04c7"},"183a":function(i,a,t){"use strict";t.r(a);var e=function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("div",{staticClass:"main_cont",attrs:{id:"centerDiv"}},[t("Map",{attrs:{url:i.configUrl},on:{onload:i.onMapload}})],1)},n=[],r=t("716f"),o={name:"Index",components:{Map:r["a"]},data:function(){var i=window.basePathUrl||"";return{configUrl:i+"config/config.json"}},methods:{onMapload:function(i){var a=new this.mars3d.layer.GraphicLayer;i.addLayer(a),a.on(this.mars3d.EventType.click,(function(i){console.log("监听layer，单击了矢量对象",i)})),a.on(this.mars3d.EventType.mouseOver,(function(i){console.log("监听layer，鼠标移入了矢量对象",i)})),a.on(this.mars3d.EventType.mouseOut,(function(i){console.log("监听layer，鼠标移出了矢量对象",i)})),a.bindPopup("我是layer上绑定的Popup",{anchor:[0,-10]}),a.bindContextMenu([{text:"删除对象",iconCls:"fa fa-trash-o",callback:function(i){var t=i.graphic;t&&a.removeGraphic(t)}}]),this.addGraphic_e01(a),this.addGraphic_e02(a),this.addGraphic_e03(a),this.addGraphic_e04(a),this.addGraphic_e05(a),this.addGraphic_e06(a),this.addGraphic_e07(a),this.addGraphic_e08(a),this.addGraphic_e09(a),this.addGraphic_e10(a),this.addGraphic_e11(a),this.addGraphic_e12(a),this.addGraphic_e13(a),this.addGraphic_e14(a),this.addGraphic_e15(a)},addGraphic_e01:function(i){var a=new this.mars3d.graphic.LabelEntity({position:new this.mars3d.LatLngPoint(116.1,31,1e3),style:{text:"Mars3D平台",font_size:25,font_family:"楷体",color:"#003da6",outline:!0,outlineColor:"#bfbfbf",outlineWidth:2,horizontalOrigin:this.Cesium.HorizontalOrigin.CENTER,verticalOrigin:this.Cesium.VerticalOrigin.BOTTOM,visibleDepth:!1}});i.addGraphic(a)},addGraphic_e02:function(i){var a=new this.mars3d.graphic.PointEntity({position:[116.2,31,1e3],style:{color:"#ff0000",pixelSize:10,outline:!0,outlineColor:"#ffffff",outlineWidth:2}});i.addGraphic(a)},addGraphic_e03:function(i){var a=new this.mars3d.graphic.BillboardEntity({name:"贴地图标",position:[116.3,31,1e3],style:{image:"http://mars3d.cn/example/img/marker/mark2.png",scale:1,horizontalOrigin:this.Cesium.HorizontalOrigin.CENTER,verticalOrigin:this.Cesium.VerticalOrigin.BOTTOM,clampToGround:!0}});i.addGraphic(a)},addGraphic_e04:function(i){var a=new this.mars3d.graphic.PlaneEntity({position:new this.mars3d.LatLngPoint(116.4,31,1e3),style:{plane:new this.Cesium.Plane(this.Cesium.Cartesian3.UNIT_Z,0),dimensions:new this.Cesium.Cartesian2(4e3,4e3),material:this.mars3d.MaterialUtil.createMaterialProperty(this.mars3d.MaterialType.Image,{image:"http://mars3d.cn/example/img/textures/movingRiver.png",transparent:!0})}});i.addGraphic(a)},addGraphic_e05:function(i){var a=new this.mars3d.graphic.BoxEntity({position:new this.mars3d.LatLngPoint(116.5,31,1e3),style:{dimensions:new this.Cesium.Cartesian3(2e3,2e3,2e3),fill:!0,color:"#00ffff",opacity:.9,heading:45,roll:45,pitch:0}});i.addGraphic(a)},addGraphic_e06:function(i){var a=new this.mars3d.graphic.CircleEntity({position:[116.1,30.9,1e3],style:{radius:1800,color:"#00ff00",opacity:.3,outline:!0,outlineWidth:3,outlineColor:"#ffffff",clampToGround:!0},popup:"直接传参的popup"});i.addGraphic(a)},addGraphic_e07:function(i){var a=new this.mars3d.graphic.CylinderEntity({position:[116.2,30.9,1e3],style:{length:3e3,topRadius:0,bottomRadius:1300,color:"#00FFFF",opacity:.7},popup:"直接传参的popup"});i.addGraphic(a)},addGraphic_e08:function(i){var a=new this.mars3d.graphic.EllipsoidEntity({position:new this.mars3d.LatLngPoint(116.3,30.9,1e3),style:{radii:new this.Cesium.Cartesian3(1500,1500,1500),material:this.Cesium.Color.RED.withAlpha(.5),outline:!0,outlineColor:this.Cesium.Color.WHITE.withAlpha(.3)}});i.addGraphic(a)},addGraphic_e09:function(i){var a=new this.mars3d.graphic.ModelEntity({name:"消防员",position:[116.4,30.9,1e3],style:{url:"http://data.mars3d.cn/gltf/mars/firedrill/xiaofangyuan-run.gltf",scale:16,minimumPixelSize:100}});i.addGraphic(a)},addGraphic_e10:function(i){var a=new this.mars3d.graphic.PolylineEntity({positions:[[116.5,30.9,1e3],[116.52,30.91,1e3],[116.53,30.89,1e3]],style:{width:5,color:"#3388ff"}});i.addGraphic(a)},addGraphic_e11:function(i){var a=new this.mars3d.graphic.PolylineVolumeEntity({positions:[[116.1,30.8,1e3],[116.12,30.81,1e3],[116.13,30.79,1e3]],style:{shape:"pipeline",radius:80,color:"#3388ff",opacity:.9}});i.addGraphic(a)},addGraphic_e12:function(i){var a=new this.mars3d.graphic.CorridorEntity({positions:[[116.2,30.8,1e3],[116.22,30.81,1e3],[116.23,30.79,1e3],[116.247328,30.806077,610.41]],style:{width:500,color:"#3388ff"}});i.addGraphic(a)},addGraphic_e13:function(i){var a=new this.mars3d.graphic.WallEntity({positions:[[116.3,30.8,1e3],[116.31,30.81,1e3],[116.334639,30.800735,721.39],[116.32,30.79,1e3]],style:{closure:!0,diffHeight:500,material:this.mars3d.MaterialUtil.createMaterialProperty(this.mars3d.MaterialType.LineFlow,{image:"http://mars3d.cn/example/img/textures/fence.png",color:"#00ff00",speed:10,axisY:!0})}});i.addGraphic(a)},addGraphic_e14:function(i){var a=new this.mars3d.graphic.RectangleEntity({positions:[[116.383144,30.819978,444.42],[116.42216,30.793431,1048.07]],style:{color:"#3388ff",opacity:.5,outline:!0,outlineWidth:3,outlineColor:"#ffffff"}});i.addGraphic(a)},addGraphic_e15:function(i){var a=new this.mars3d.graphic.PolygonEntity({positions:[[116.510278,30.834372,567.29],[116.530085,30.809331,448.31],[116.507367,30.788551,98.21],[116.472468,30.823091,677.39]],style:{material:this.mars3d.MaterialUtil.createMaterialProperty(this.mars3d.MaterialType.Water,{normalMap:"http://mars3d.cn/example/img/textures/waterNormals.jpg",frequency:8e3,animationSpeed:.02,amplitude:5,specularIntensity:.8,baseWaterColor:"#006ab4",blendColor:"#006ab4"})}});i.addGraphic(a)}}},s=o,d=(t("7cae"),t("2877")),c=Object(d["a"])(s,e,n,!1,null,null,null);a["default"]=c.exports},"56a6":function(i,a,t){},"716f":function(i,a,t){"use strict";var e=function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("div",{class:["mars3d-container",i.customClass,{"mars3d-container-compare-rh":i.compare}],attrs:{id:"mars3d-container"+i.mapKey}})},n=[],r=t("5530"),o=t("a026"),s=(t("d36a"),t("66b3"));t("36a6");o["default"].prototype.mars3d=s,o["default"].prototype.Cesium=s["Cesium"];var d={name:"mars3dViewer",props:{url:String,mapKey:{type:String,default:""},options:Object,compare:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1},customClass:{type:String,default:""}},mounted:function(){var i=this;this.appendToBody&&document.body.appendChild(this.$el),this.mapKey?this.initMars3d(this.options):s["Resource"].fetchJson({url:this.url}).then((function(a){i.initMars3d(a.map3d)}))},destroy:function(){this["map".concat(this.mapKey)].destroy(),delete this["map".concat(this.mapKey)]},methods:{initMars3d:function(i){if(!this["map".concat(this.mapKey)]){var a=Object(r["a"])(Object(r["a"])({},i),this.options),t=new s["Map"]("mars3d-container".concat(this.mapKey),a);this["map".concat(this.mapKey)]=t,console.log(">>>>> 地图创建成功 >>>>",t),this.$emit("onload",t)}}}},c=d,p=(t("77c3"),t("2877")),l=Object(p["a"])(c,e,n,!1,null,null,null);a["a"]=l.exports},"77c3":function(i,a,t){"use strict";t("56a6")},"7cae":function(i,a,t){"use strict";t("9a8e")},"9a8e":function(i,a,t){}}]);