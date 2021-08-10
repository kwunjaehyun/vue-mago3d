define(["./when-54335d57","./Cartesian2-8646c5a1","./Check-24483042","./EllipsoidGeometry-8e9adb8a","./VertexFormat-81ec7207","./Math-d6182036","./GeometryOffsetAttribute-718fa138","./Transforms-79117a7b","./RuntimeError-88a32665","./ComponentDatatype-1a100acd","./WebGLConstants-95ceb4e9","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./IndexDatatype-82ceea78"],function(a,o,e,n,s,t,r,i,c,d,l,m,u,p){"use strict";function y(e){var t=a.defaultValue(e.radius,1),r={radii:new o.Cartesian3(t,t,t),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,vertexFormat:e.vertexFormat};this._ellipsoidGeometry=new n.EllipsoidGeometry(r),this._workerName="createSphereGeometry"}y.packedLength=n.EllipsoidGeometry.packedLength,y.pack=function(e,t,r){return n.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,r)};var G=new n.EllipsoidGeometry,f={radius:void 0,radii:new o.Cartesian3,vertexFormat:new s.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return y.unpack=function(e,t,r){var i=n.EllipsoidGeometry.unpack(e,t,G);return f.vertexFormat=s.VertexFormat.clone(i._vertexFormat,f.vertexFormat),f.stackPartitions=i._stackPartitions,f.slicePartitions=i._slicePartitions,a.defined(r)?(o.Cartesian3.clone(i._radii,f.radii),r._ellipsoidGeometry=new n.EllipsoidGeometry(f),r):(f.radius=i._radii.x,new y(f))},y.createGeometry=function(e){return n.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(e,t){return a.defined(t)&&(e=y.unpack(e,t)),y.createGeometry(e)}});