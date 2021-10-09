<template>
    <section class="main_cont">
        leaflet21
    </section>
</template>

<script>
import L from 'leaflet'

export default {
    name: "leaflet2",

    data () {
        return {
            
        }
    },

    methods: {
        loadMap() {
            console.log("test")

            var map, layer, options,prjCoordSys,epsgcode,url = "/iserver/services/map-ugcv5-mapyingfengjiedao/rest/maps/map_yingfengjiedao";

            var originResult = {"viewBounds":{"top":30.50107788507784,"left":119.8784956474223,"bottom":29.797952884922317,"leftBottom":{"x":119.8784956474223,"y":29.797952884922317},"right":120.58162064757782,"rightTop":{"x":120.58162064757782,"y":30.50107788507784}},"viewer":{"leftTop":{"x":0,"y":0},"top":0,"left":0,"bottom":256,"rightBottom":{"x":256,"y":256},"width":256,"right":256,"height":256},"distanceUnit":null,"minVisibleTextSize":0,"coordUnit":"DEGREE","scale":8.6536374846915E-7,"description":null,"paintBackground":false,"maxVisibleTextSize":0,"maxVisibleVertex":0,"clipRegionEnabled":false,"antialias":false,"textOrientationFixed":false,"angle":0,"prjCoordSys":{"distanceUnit":"METER","projectionParam":null,"epsgCode":4490,"coordUnit":"DEGREE","name":"GCS_China_2000","projection":null,"type":"PCS_EARTH_LONGITUDE_LATITUDE","coordSystem":{"datum":{"name":"D_China_2000","type":"DATUM_CHINA_2000","spheroid":{"flatten":0.003352810681182319,"name":"CGCS2000","axis":6378137,"type":"SPHEROID_CHINA_2000"}},"unit":"DEGREE","spatialRefType":"SPATIALREF_EARTH_LONGITUDE_LATITUDE","name":"GCS_China_2000","type":"GCS_CHINA_2000","primeMeridian":{"longitudeValue":0,"name":"Greenwich","type":"PRIMEMERIDIAN_GREENWICH"}}},"minScale":0,"markerAngleFixed":false,"overlapDisplayedOptions":null,"visibleScales":[8.6536374846915E-7,1.7307274969383E-6,3.4614550537849502E-6,6.92290986793649E-6,1.384582069440668E-5,2.769164138881335E-5,5.53832827776267E-5,1.1076650420912716E-4,2.2153300841825432E-4,4.4306601683650863E-4],"dpi":96.00000000000001,"visibleScalesEnabled":true,"customEntireBoundsEnabled":false,"clipRegion":null,"maxScale":0,"customParams":"","center":{"x":120.23005814750006,"y":30.14951538500008},"dynamicPrjCoordSyses":[{"distanceUnit":"METER","projectionParam":null,"epsgCode":4490,"coordUnit":"DEGREE","name":"GCS_China_2000","projection":null,"type":"PCS_EARTH_LONGITUDE_LATITUDE","coordSystem":{"datum":{"name":"D_China_2000","type":"DATUM_CHINA_2000","spheroid":{"flatten":0.003352810681182319,"name":"CGCS2000","axis":6378137,"type":"SPHEROID_CHINA_2000"}},"unit":"DEGREE","spatialRefType":"SPATIALREF_EARTH_LONGITUDE_LATITUDE","name":"GCS_China_2000","type":"GCS_CHINA_2000","primeMeridian":{"longitudeValue":0,"name":"Greenwich","type":"PRIMEMERIDIAN_GREENWICH"}}}],"colorMode":null,"textAngleFixed":false,"overlapDisplayed":false,"userToken":{"userID":""},"cacheEnabled":false,"dynamicProjection":false,"autoAvoidEffectEnabled":true,"customEntireBounds":null,"name":"map_yingfengjiedao","bounds":{"top":30.973964620000057,"left":118.84110080000004,"bottom":29.325066150000097,"leftBottom":{"x":118.84110080000004,"y":29.325066150000097},"right":121.61901549500008,"rightTop":{"x":121.61901549500008,"y":30.973964620000057}},"backgroundStyle":null};
			var visableResolution = [0.002746582031857515,0.0013732910159287575,6.866454960804169E-4,3.4332275992417097E-4,1.716613680781227E-4,8.583068403906138E-5,4.291534201953069E-5,2.1457682893727956E-5,1.0728841446863978E-5,5.364420723431989E-6];
			var mapcrs = L.CRS.EPSG3857;
			options = {};
			// 初始化时修改成22级，和计算scales数组时保持一致
			options.maxZoom = 22;
			options.minZoom = 0;
			var maxZoom = 22;
			var zoom = 0;

            if(originResult.overlapDisplayed){
				options.overlapDisplayed=originResult.overlapDisplayed;
			}
			var envelope;
				
			if(originResult.prjCoordSys){
				var resolution;
				if(originResult.prjCoordSys.coordUnit){
					resolution = this.scaleToResolution(originResult.scale, 96, originResult.prjCoordSys.coordUnit);
				}
				if(visableResolution.length == 0){
					envelope = this.getProjectionExtent();
					if(!envelope) {
						envelope = originResult.bounds;
					}
					visableResolution = this.getStyleResolutions(envelope);
					var scales = this.getScales(envelope, originResult.prjCoordSys.coordUnit);
					if(originResult.scale){
						var temp;
						for(var j = 0; j < scales.length; j++){
							if(j == 0) {
								temp = Math.abs(originResult.scale - scales[j]);
							}
							if(temp > Math.abs(originResult.scale - scales[j])){
								temp = Math.abs(originResult.scale - scales[j]);
								zoom = j;
							}
						}
					}					
				} else {
					if(resolution){
						var temp;
						for(var j = 0; j < visableResolution.length; j++){
							if(j == 0) {
								temp = Math.abs(resolution - visableResolution[j]);
							}
							if(temp > Math.abs(resolution - visableResolution[j])){
								temp = Math.abs(resolution - visableResolution[j]);
								zoom = j;
							}
						}
					}			
				}
				if(epsgcode&&originResult.prjCoordSys.type!="PCS_NON_EARTH"){//有设置动态投影而且不是平面坐标的地图
					if(epsgcode=="4326"){
						options.projection = 4326;
						if(visableResolution.length > 0) {
							mapcrs = this.getCRS("EPSG:4326", originResult.bounds, visableResolution);
						} else {
							mapcrs = this.getCRS("EPSG:4326", originResult.bounds);
						}
					}else if(epsgcode=="3857"){
						options.projection = 3857;
						if(visableResolution.length > 0) {
							mapcrs = this.getCRS("EPSG:3857", originResult.bounds, visableResolution);
						} else {
							mapcrs = this.getCRS("EPSG:3857", originResult.bounds);
						}
					}
				} else {//没有设置动态投影
					if(originResult.prjCoordSys.epsgCode=="4326" || originResult.prjCoordSys.type=="PCS_EARTH_LONGITUDE_LATITUDE"){
						lon = (originResult.bounds.left + originResult.bounds.right) / 2;
						lat = (originResult.bounds.bottom + originResult.bounds.top) / 2;
						if(visableResolution.length > 0) {
							mapcrs = this.getCRS("EPSG:4326", originResult.bounds, visableResolution);
						} else {
							mapcrs = this.getCRS("EPSG:4326", originResult.bounds);
						}
					}else if(originResult.prjCoordSys.type=="PCS_NON_EARTH"){
						mapcrs = L.CRS.NonEarthCRS({
							bounds: L.bounds([originResult.bounds.left, originResult.bounds.bottom], [originResult.bounds.right, originResult.bounds.top]),
							origin: L.point(originResult.bounds.left, originResult.bounds.top)
						});
					}else {
						if(visableResolution.length > 0) {
							mapcrs = this.getCRS("EPSG:3857", originResult.bounds, visableResolution);
						} else {
							mapcrs = this.getCRS("EPSG:3857", originResult.bounds);
						}
					}
				}
			}
			
			if(visableResolution.length > 0) {
				maxZoom = visableResolution.length-1;
				options.maxZoom = visableResolution.length-1;
			}
			
			
			map = L.map('map', {
				//crs: L.CRS.EPSG3857
				center: mapcrs.unproject(L.point((originResult.bounds.left + originResult.bounds.right) / 2, (originResult.bounds.bottom + originResult.bounds.top) / 2 )),
		        maxZoom: maxZoom ,
		        zoom: zoom,
				crs: mapcrs,
			});

			var url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";

			console.log("11", L.supermap)

			L.supermap.tiledMapLayer(url).addTo(map)

			// L.supermap.cloudTileLayer("http://t2.dituhui.com/FileService/image").addTo(map);

      var layerUrl = 'https://gis.xiaoshan.gov.cn:6443/iserver/services/map_darkmap210125_v7qbw8um/rest/maps/map';
      layer = L.supermap.tiledMapLayer(layerUrl, options);
			layer.addTo(map);
        },

        getCRS(epsgCodeStr, bounds, resolutions) {
			return L.Proj.CRS(epsgCodeStr,{
				bounds: L.bounds([bounds.left, bounds.bottom], [bounds.right, bounds.top]),
				resolutions: resolutions,
				origin: [bounds.left, bounds.top]
			 });
		},

        zoomIn() {
            map.zoomIn();
        },

        scaleToResolution(scale, dpi, mapUnit) {
        	var inchPerMeter = 1 / 0.0254;
      	  	var meterPerMapUnitValue = this.getMeterPerMapUnit(mapUnit);
      	 	var resolution = scale * dpi * inchPerMeter * meterPerMapUnitValue;
        	resolution = 1 / resolution;
        	return resolution;
   		 },

            getMeterPerMapUnit(mapUnit) {
        	var earchRadiusInMeters = 6378137;// 6371000;
        	var meterPerMapUnit;
        	if (mapUnit == "METER") {
            	meterPerMapUnit = 1;
       		} else if (mapUnit == "DEGREE") {
            	// 每度表示多少米。
            	meterPerMapUnit = Math.PI * 2 * earchRadiusInMeters / 360;
        	} else if (mapUnit == "KILOMETER") {
            	meterPerMapUnit = 1.0E-3;
        	} else if (mapUnit == "INCH") {
            	meterPerMapUnit = 1 / 2.5399999918E-2;
        	} else if (mapUnit == "FOOT") {
            	meterPerMapUnit = 0.3048;
        	}
        	return meterPerMapUnit;
    	},

        getProjectionExtent(){
            Requester = function(){
    this.commit = null;
    try{
        this.commit = new ActiveXObject("Msxml2.XMLHTTP");
    }catch(ex){
        try{
            this.commit = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(ex){
            this.commit=null;
        }
    }
    if(!this.commit && typeof XMLHttpRequest != "undefined"){
        this.commit = new XMLHttpRequest();
    }
    /**
     * 发送异步请求。
     */
    this.sendRequest =  function(url , method ,entry ,onComplete){
        var xhr = this.commit;
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.onreadystatechange = function(){
            var readyState = xhr.readyState;
            if (readyState == 4){
                var status = xhr.status;
                var responseText =  xhr.responseText ;
                onComplete(responseText);

                xhr.onreadystatechange = function(){};
                xhr = null;
            }
        };
        xhr.send(entry);
    }
    /**
     * 发送一个同步请求。
     */
    this.sendRequestWithResponse = function(url,method,entry){
        var xhr = this.commit;
        xhr.open(method, encodeURI(url), false);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.send(entry);
        return xhr.responseText;
    }
}


			var requestUrl = "/iserver/services/map-ugcv5-mapyingfengjiedao/rest/maps/map_yingfengjiedao?key=U0KIlolIUprQ5zSTNGd9FLPa";
			requestUrl = requestUrl + "/" + "prjCoordSys/projection/extent.json";
			var commit = new Requester();
			extent = commit.sendRequestWithResponse(requestUrl, "GET", null);
			if(extent){
				var result = eval('('+extent+')');
				if(result && result.left && result.right && result.top && result.bottom) {
					return result;
				}
			}
			return null;
		},

        getStyleResolutions(bounds){			        	
   			var styleResolutions = [];
   			var temp = Math.abs(bounds.left - bounds.right)/ 256;
   			for(var i = 0;i < 22;i++){
   				if(i == 0){
   					styleResolutions[i] = temp;
   					continue;
   				}
   				temp = temp / 2;
   				styleResolutions[i] = temp;
   			}			
   			return styleResolutions;
   		},

        getScales(bounds, coordUnit){
    		var resolution0 = Math.abs(bounds.left - bounds.right)/ 256;
    		var temp = resolutionToScale(resolution0, 96, coordUnit);
    		var scales = [];
    		for(var i = 0;i < 22;i++){
   				if(i == 0){
   					scales[i] = temp;
   					continue;
   				}
   				temp = temp * 2;
   				scales[i] = temp;
   			}			
   			return scales;
    	},


    },

    mounted() {
        this.loadMap()
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