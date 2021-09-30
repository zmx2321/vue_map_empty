define(["exports","./Transforms-a7d32f6c","./Cartesian2-40b13f31","./Check-3917d765","./when-7b580518","./AttributeCompression-56959beb","./ComponentDatatype-6c2e43c1","./Math-87254c13"],function(e,f,p,t,x,l,d,h){"use strict";function i(e,t){this._ellipsoid=e,this._cameraPosition=new p.Cartesian3,this._cameraPositionInScaledSpace=new p.Cartesian3,this._distanceToLimbInScaledSpaceSquared=0,x.defined(t)&&(this.cameraPosition=t)}Object.defineProperties(i.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},cameraPosition:{get:function(){return this._cameraPosition},set:function(e){var t=this._ellipsoid.transformPositionToScaledSpace(e,this._cameraPositionInScaledSpace),i=p.Cartesian3.magnitudeSquared(t)-1;p.Cartesian3.clone(e,this._cameraPosition),this._cameraPositionInScaledSpace=t,this._distanceToLimbInScaledSpaceSquared=i}}});var a=new p.Cartesian3;i.prototype.isPointVisible=function(e){return C(this._ellipsoid.transformPositionToScaledSpace(e,a),this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)},i.prototype.isScaledSpacePointVisible=function(e){return C(e,this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)};var r=new p.Cartesian3;i.prototype.isScaledSpacePointVisiblePossiblyUnderEllipsoid=function(e,t){var i,a=this._ellipsoid,t=x.defined(t)&&t<0&&a.minimumRadius>-t?((i=r).x=this._cameraPosition.x/(a.radii.x+t),i.y=this._cameraPosition.y/(a.radii.y+t),i.z=this._cameraPosition.z/(a.radii.z+t),i.x*i.x+i.y*i.y+i.z*i.z-1):(i=this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared);return C(e,i,t)},i.prototype.computeHorizonCullingPoint=function(e,t,i){return u(this._ellipsoid,e,t,i)};var n=p.Ellipsoid.clone(p.Ellipsoid.UNIT_SPHERE);i.prototype.computeHorizonCullingPointPossiblyUnderEllipsoid=function(e,t,i,a){return u(c(this._ellipsoid,i,n),e,t,a)},i.prototype.computeHorizonCullingPointFromVertices=function(e,t,i,a,r){return S(this._ellipsoid,e,t,i,a,r)},i.prototype.computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid=function(e,t,i,a,r,o){return S(c(this._ellipsoid,r,n),e,t,i,a,o)};var o=[];i.prototype.computeHorizonCullingPointFromRectangle=function(e,t,i){var a=p.Rectangle.subsample(e,t,0,o),e=f.BoundingSphere.fromPoints(a);if(!(p.Cartesian3.magnitude(e.center)<.1*t.minimumRadius))return this.computeHorizonCullingPoint(e.center,a,i)};var s=new p.Cartesian3;function c(e,t,i){return x.defined(t)&&t<0&&e.minimumRadius>-t&&(t=p.Cartesian3.fromElements(e.radii.x+t,e.radii.y+t,e.radii.z+t,s),e=p.Ellipsoid.fromCartesian3(t,i)),e}function u(e,t,i,a){x.defined(a)||(a=new p.Cartesian3);for(var r=b(e,t),o=0,n=0,s=i.length;n<s;++n){var c=N(e,i[n],r);if(c<0)return;o=Math.max(o,c)}return M(r,o,a)}var m=new p.Cartesian3;function S(e,t,i,a,r,o){x.defined(o)||(o=new p.Cartesian3),a=x.defaultValue(a,3),r=x.defaultValue(r,p.Cartesian3.ZERO);for(var n=b(e,t),s=0,c=0,d=i.length;c<d;c+=a){m.x=i[c]+r.x,m.y=i[c+1]+r.y,m.z=i[c+2]+r.z;var u=N(e,m,n);if(u<0)return;s=Math.max(s,u)}return M(n,s,o)}function C(e,t,i){e=p.Cartesian3.subtract(e,t,a),t=-p.Cartesian3.dot(e,t);return!(i<0?0<t:i<t&&t*t/p.Cartesian3.magnitudeSquared(e)>i)}var g=new p.Cartesian3,y=new p.Cartesian3;function N(e,t,i){var a=e.transformPositionToScaledSpace(t,g),e=p.Cartesian3.magnitudeSquared(a),t=Math.sqrt(e),a=p.Cartesian3.divideByScalar(a,t,y),e=Math.max(1,e),t=1/(t=Math.max(1,t));return 1/(p.Cartesian3.dot(a,i)*t-p.Cartesian3.magnitude(p.Cartesian3.cross(a,i,a))*(Math.sqrt(e-1)*t))}function M(e,t,i){if(!(t<=0||t===1/0||t!=t))return p.Cartesian3.multiplyByScalar(e,t,i)}var T=new p.Cartesian3;function b(e,t){return p.Cartesian3.equals(t,p.Cartesian3.ZERO)?t:(e.transformPositionToScaledSpace(t,T),p.Cartesian3.normalize(T,T))}var P={getHeight:function(e,t,i){return(e-i)*t+i}},v=new p.Cartesian3;P.getPosition=function(e,t,i,a,r){e=t.cartesianToCartographic(e,v),a=P.getHeight(e.height,i,a);return p.Cartesian3.fromRadians(e.longitude,e.latitude,a,t,r)};var z=Object.freeze({NONE:0,BITS12:1}),_=new p.Cartesian3,E=new p.Cartesian3,H=new p.Cartesian2,w=new f.Matrix4,A=new f.Matrix4,I=Math.pow(2,12);function q(e,t,i,a,r,o,n,s,c,d){var u,m,l,h=z.NONE;x.defined(t)&&x.defined(i)&&x.defined(a)&&x.defined(r)&&(l=t.minimum,u=t.maximum,t=p.Cartesian3.subtract(u,l,E),m=a-i,h=Math.max(p.Cartesian3.maximumComponent(t),m)<I-1?z.BITS12:z.NONE,u=f.Matrix4.inverseTransformation(r,new f.Matrix4),m=p.Cartesian3.negate(l,_),f.Matrix4.multiply(f.Matrix4.fromTranslation(m,w),u,u),(m=_).x=1/t.x,m.y=1/t.y,m.z=1/t.z,f.Matrix4.multiply(f.Matrix4.fromScale(m,w),u,u),m=f.Matrix4.clone(r),f.Matrix4.setTranslation(m,p.Cartesian3.ZERO,m),r=f.Matrix4.clone(r,new f.Matrix4),l=f.Matrix4.fromTranslation(l,w),t=f.Matrix4.fromScale(t,A),t=f.Matrix4.multiply(l,t,w),f.Matrix4.multiply(r,t,r),f.Matrix4.multiply(m,t,m)),this.quantization=h,this.minimumHeight=i,this.maximumHeight=a,this.center=p.Cartesian3.clone(e),this.toScaledENU=u,this.fromScaledENU=r,this.matrix=m,this.hasVertexNormals=o,this.hasWebMercatorT=x.defaultValue(n,!1),this.hasGeodeticSurfaceNormals=x.defaultValue(s,!1),this.exaggeration=x.defaultValue(c,1),this.exaggerationRelativeHeight=x.defaultValue(d,0),this.stride=0,this._offsetGeodeticSurfaceNormal=0,this._offsetVertexNormal=0,this._calculateStrideAndOffsets()}q.prototype.encode=function(e,t,i,a,r,o,n,s){var c,d,u=a.x,m=a.y;return this.quantization===z.BITS12?((i=f.Matrix4.multiplyByPoint(this.toScaledENU,i,_)).x=h.CesiumMath.clamp(i.x,0,1),i.y=h.CesiumMath.clamp(i.y,0,1),i.z=h.CesiumMath.clamp(i.z,0,1),c=this.maximumHeight-this.minimumHeight,d=h.CesiumMath.clamp((r-this.minimumHeight)/c,0,1),p.Cartesian2.fromElements(i.x,i.y,H),a=l.AttributeCompression.compressTextureCoordinates(H),p.Cartesian2.fromElements(i.z,d,H),c=l.AttributeCompression.compressTextureCoordinates(H),p.Cartesian2.fromElements(u,m,H),d=l.AttributeCompression.compressTextureCoordinates(H),e[t++]=a,e[t++]=c,e[t++]=d,this.hasWebMercatorT&&(p.Cartesian2.fromElements(n,0,H),d=l.AttributeCompression.compressTextureCoordinates(H),e[t++]=d)):(p.Cartesian3.subtract(i,this.center,_),e[t++]=_.x,e[t++]=_.y,e[t++]=_.z,e[t++]=r,e[t++]=u,e[t++]=m,this.hasWebMercatorT&&(e[t++]=n)),this.hasVertexNormals&&(e[t++]=l.AttributeCompression.octPackFloat(o)),this.hasGeodeticSurfaceNormals&&(e[t++]=s.x,e[t++]=s.y,e[t++]=s.z),t};var V=new p.Cartesian3,G=new p.Cartesian3;q.prototype.addGeodeticSurfaceNormals=function(e,t,i){if(!this.hasGeodeticSurfaceNormals){var a=this.stride,r=e.length/a;this.hasGeodeticSurfaceNormals=!0,this._calculateStrideAndOffsets();for(var o=this.stride,n=0;n<r;n++){for(var s=0;s<a;s++)t[n*o+s]=e[n*a+s];var c=this.decodePosition(t,n,V),d=i.geodeticSurfaceNormal(c,G),c=n*o+this._offsetGeodeticSurfaceNormal;t[c]=d.x,t[c+1]=d.y,t[c+2]=d.z}}},q.prototype.removeGeodeticSurfaceNormals=function(e,t){if(this.hasGeodeticSurfaceNormals){var i=this.stride,a=e.length/i;this.hasGeodeticSurfaceNormals=!1,this._calculateStrideAndOffsets();for(var r=this.stride,o=0;o<a;o++)for(var n=0;n<r;n++)t[o*r+n]=e[o*i+n]}},q.prototype.decodePosition=function(e,t,i){if(x.defined(i)||(i=new p.Cartesian3),t*=this.stride,this.quantization!==z.BITS12)return i.x=e[t],i.y=e[t+1],i.z=e[t+2],p.Cartesian3.add(i,this.center,i);var a=l.AttributeCompression.decompressTextureCoordinates(e[t],H);i.x=a.x,i.y=a.y;t=l.AttributeCompression.decompressTextureCoordinates(e[t+1],H);return i.z=t.x,f.Matrix4.multiplyByPoint(this.fromScaledENU,i,i)},q.prototype.getExaggeratedPosition=function(e,t,i){i=this.decodePosition(e,t,i);var a,r=this.exaggeration,o=this.exaggerationRelativeHeight;return 1!==r&&this.hasGeodeticSurfaceNormals&&(a=this.decodeGeodeticSurfaceNormal(e,t,G),t=this.decodeHeight(e,t),t=P.getHeight(t,r,o)-t,i.x+=a.x*t,i.y+=a.y*t,i.z+=a.z*t),i},q.prototype.decodeTextureCoordinates=function(e,t,i){return x.defined(i)||(i=new p.Cartesian2),t*=this.stride,this.quantization===z.BITS12?l.AttributeCompression.decompressTextureCoordinates(e[t+2],i):p.Cartesian2.fromElements(e[t+4],e[t+5],i)},q.prototype.decodeHeight=function(e,t){return t*=this.stride,this.quantization!==z.BITS12?e[t+3]:l.AttributeCompression.decompressTextureCoordinates(e[t+1],H).y*(this.maximumHeight-this.minimumHeight)+this.minimumHeight},q.prototype.decodeWebMercatorT=function(e,t){return t*=this.stride,this.quantization===z.BITS12?l.AttributeCompression.decompressTextureCoordinates(e[t+3],H).x:e[t+6]},q.prototype.getOctEncodedNormal=function(e,t,i){e=e[t=t*this.stride+this._offsetVertexNormal]/256,t=Math.floor(e);return p.Cartesian2.fromElements(t,256*(e-t),i)},q.prototype.decodeGeodeticSurfaceNormal=function(e,t,i){return t=t*this.stride+this._offsetGeodeticSurfaceNormal,i.x=e[t],i.y=e[t+1],i.z=e[t+2],i},q.prototype._calculateStrideAndOffsets=function(){var e=0;this.quantization===z.BITS12?e+=3:e+=6,this.hasWebMercatorT&&(e+=1),this.hasVertexNormals&&(this._offsetVertexNormal=e,e+=1),this.hasGeodeticSurfaceNormals&&(this._offsetGeodeticSurfaceNormal=e,e+=3),this.stride=e};var O={position3DAndHeight:0,textureCoordAndEncodedNormals:1,geodeticSurfaceNormal:2},B={compressed0:0,compressed1:1,geodeticSurfaceNormal:2};q.prototype.getAttributes=function(i){var e,t,a=d.ComponentDatatype.FLOAT,r=d.ComponentDatatype.getSizeInBytes(a),o=this.stride*r,n=0,s=[];function c(e,t){s.push({index:e,vertexBuffer:i,componentDatatype:a,componentsPerAttribute:t,offsetInBytes:n,strideInBytes:o}),n+=t*r}return this.quantization===z.NONE?(c(O.position3DAndHeight,4),t=2,t+=this.hasWebMercatorT?1:0,t+=this.hasVertexNormals?1:0,c(O.textureCoordAndEncodedNormals,t),this.hasGeodeticSurfaceNormals&&c(O.geodeticSurfaceNormal,3)):(e=this.hasWebMercatorT||this.hasVertexNormals,t=this.hasWebMercatorT&&this.hasVertexNormals,c(B.compressed0,e?4:3),t&&c(B.compressed1,1),this.hasGeodeticSurfaceNormals&&c(B.geodeticSurfaceNormal,3)),s},q.prototype.getAttributeLocations=function(){return this.quantization===z.NONE?O:B},q.clone=function(e,t){if(x.defined(e))return(t=!x.defined(t)?new q:t).quantization=e.quantization,t.minimumHeight=e.minimumHeight,t.maximumHeight=e.maximumHeight,t.center=p.Cartesian3.clone(e.center),t.toScaledENU=f.Matrix4.clone(e.toScaledENU),t.fromScaledENU=f.Matrix4.clone(e.fromScaledENU),t.matrix=f.Matrix4.clone(e.matrix),t.hasVertexNormals=e.hasVertexNormals,t.hasWebMercatorT=e.hasWebMercatorT,t.hasGeodeticSurfaceNormals=e.hasGeodeticSurfaceNormals,t.exaggeration=e.exaggeration,t.exaggerationRelativeHeight=e.exaggerationRelativeHeight,t._calculateStrideAndOffsets(),t},e.EllipsoidalOccluder=i,e.TerrainEncoding=q});
