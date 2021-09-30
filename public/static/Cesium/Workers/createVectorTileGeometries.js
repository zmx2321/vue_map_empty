define(["./Transforms-d5c6ad6e","./BoxGeometry-507bc135","./Matrix2-ccd5b911","./Color-d6975cd2","./CylinderGeometry-d01014a0","./when-4bbc8319","./EllipsoidGeometry-abf94da3","./IndexDatatype-b7d979a6","./createTaskProcessorWorker","./RuntimeError-346a3079","./ComponentDatatype-93750d1a","./WebGLConstants-1c8239cc","./combine-83860057","./GeometryOffsetAttribute-1772960d","./GeometryAttribute-c30799b8","./GeometryAttributes-7827a6c2","./VertexFormat-71718faa","./CylinderGeometryLibrary-dc0b434b"],function(S,k,T,V,M,F,B,w,e,t,n,r,a,i,o,d,s,c){"use strict";function R(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}var f=new T.Cartesian3,l=T.Matrix4.packedLength+T.Cartesian3.packedLength,u=T.Matrix4.packedLength+2,h=T.Matrix4.packedLength+T.Cartesian3.packedLength,b=T.Cartesian3.packedLength+1,p={modelMatrix:new T.Matrix4,boundingVolume:new S.BoundingSphere};function A(e,t){var n=t*l,t=T.Cartesian3.unpack(e,n,f);n+=T.Cartesian3.packedLength;n=T.Matrix4.unpack(e,n,p.modelMatrix);T.Matrix4.multiplyByScale(n,t,n);n=p.boundingVolume;return T.Cartesian3.clone(T.Cartesian3.ZERO,n.center),n.radius=Math.sqrt(3),p}function O(e,t){var n=t*u,r=e[n++],t=e[n++],t=T.Cartesian3.fromElements(r,r,t,f),n=T.Matrix4.unpack(e,n,p.modelMatrix);T.Matrix4.multiplyByScale(n,t,n);n=p.boundingVolume;return T.Cartesian3.clone(T.Cartesian3.ZERO,n.center),n.radius=Math.sqrt(2),p}function L(e,t){var n=t*h,t=T.Cartesian3.unpack(e,n,f);n+=T.Cartesian3.packedLength;n=T.Matrix4.unpack(e,n,p.modelMatrix);T.Matrix4.multiplyByScale(n,t,n);n=p.boundingVolume;return T.Cartesian3.clone(T.Cartesian3.ZERO,n.center),n.radius=1,p}function E(e,t){var n=t*b,t=e[n++],n=T.Cartesian3.unpack(e,n,f),n=T.Matrix4.fromTranslation(n,p.modelMatrix);T.Matrix4.multiplyByUniformScale(n,t,n);n=p.boundingVolume;return T.Cartesian3.clone(T.Cartesian3.ZERO,n.center),n.radius=1,p}var Z=new T.Cartesian3;function U(e,t,n,r,a){if(F.defined(t)){for(var i=n.length,o=r.attributes.position.values,d=r.indices,s=e.positions,c=e.vertexBatchIds,f=e.indices,l=e.batchIds,u=e.batchTableColors,h=e.batchedIndices,b=e.indexOffsets,p=e.indexCounts,y=e.boundingVolumes,x=e.modelMatrix,g=e.center,m=e.positionOffset,C=e.batchIdIndex,v=e.indexOffset,I=e.batchedIndicesOffset,k=0;k<i;++k){var M=a(t,k),B=M.modelMatrix;T.Matrix4.multiply(x,B,B);for(var w=n[k],A=o.length,O=0;O<A;O+=3){var L=T.Cartesian3.unpack(o,O,Z);T.Matrix4.multiplyByPoint(B,L,L),T.Cartesian3.subtract(L,g,L),T.Cartesian3.pack(L,s,3*m+O),c[C++]=w}for(var E=d.length,U=0;U<E;++U)f[v+U]=d[U]+m;var G=k+I;h[G]=new R({offset:v,count:E,color:V.Color.fromRgba(u[w]),batchIds:[w]}),l[G]=w,b[G]=v,p[G]=E,y[G]=S.BoundingSphere.transform(M.boundingVolume,B),m+=A/3,v+=E}e.positionOffset=m,e.batchIdIndex=C,e.indexOffset=v,e.batchedIndicesOffset+=i}}var G=new T.Cartesian3,D=new T.Matrix4;function P(e,t,n){var r=n.length,a=2+r*S.BoundingSphere.packedLength+1+function(e){for(var t=e.length,n=0,r=0;r<t;++r)n+=V.Color.packedLength+3+e[r].batchIds.length;return n}(t),i=new Float64Array(a),o=0;i[o++]=e,i[o++]=r;for(var d=0;d<r;++d)S.BoundingSphere.pack(n[d],i,o),o+=S.BoundingSphere.packedLength;var s=t.length;i[o++]=s;for(var c=0;c<s;++c){var f=t[c];V.Color.pack(f.color,i,o),o+=V.Color.packedLength,i[o++]=f.offset,i[o++]=f.count;var l=f.batchIds,u=l.length;i[o++]=u;for(var h=0;h<u;++h)i[o++]=l[h]}return i}return e(function(e,t){var n=F.defined(e.boxes)?new Float32Array(e.boxes):void 0,r=F.defined(e.boxBatchIds)?new Uint16Array(e.boxBatchIds):void 0,a=F.defined(e.cylinders)?new Float32Array(e.cylinders):void 0,i=F.defined(e.cylinderBatchIds)?new Uint16Array(e.cylinderBatchIds):void 0,o=F.defined(e.ellipsoids)?new Float32Array(e.ellipsoids):void 0,d=F.defined(e.ellipsoidBatchIds)?new Uint16Array(e.ellipsoidBatchIds):void 0,s=F.defined(e.spheres)?new Float32Array(e.spheres):void 0,c=F.defined(e.sphereBatchIds)?new Uint16Array(e.sphereBatchIds):void 0,f=F.defined(n)?r.length:0,l=F.defined(a)?i.length:0,u=F.defined(o)?d.length:0,h=F.defined(s)?c.length:0,b=k.BoxGeometry.getUnitBox(),p=M.CylinderGeometry.getUnitCylinder(),y=B.EllipsoidGeometry.getUnitEllipsoid(),x=b.attributes.position.values,g=p.attributes.position.values,m=y.attributes.position.values,C=x.length*f;C+=g.length*l,C+=m.length*(u+h);var v=b.indices,I=p.indices,x=y.indices,g=v.length*f;return g+=I.length*l,g+=x.length*(u+h),m=new Float32Array(C),v=new Uint16Array(C/3),I=w.IndexDatatype.createTypedArray(C/3,g),x=f+l+u+h,C=new Uint16Array(x),g=new Array(x),f=new Uint32Array(x),l=new Uint32Array(x),u=new Array(x),h=e.packedBuffer,x=new Float64Array(h),h=0,T.Cartesian3.unpack(x,0,G),h+=T.Cartesian3.packedLength,T.Matrix4.unpack(x,h,D),U(e={batchTableColors:new Uint32Array(e.batchTableColors),positions:m,vertexBatchIds:v,indices:I,batchIds:C,batchedIndices:g,indexOffsets:f,indexCounts:l,boundingVolumes:u,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:D,center:G},n,r,b,A),U(e,a,i,p,O),U(e,o,d,y,L),U(e,s,c,y,E),u=P(I.BYTES_PER_ELEMENT,g,u),t.push(m.buffer,v.buffer,I.buffer),t.push(C.buffer,f.buffer,l.buffer),t.push(u.buffer),{positions:m.buffer,vertexBatchIds:v.buffer,indices:I.buffer,indexOffsets:f.buffer,indexCounts:l.buffer,batchIds:C.buffer,packedBuffer:u.buffer}})});