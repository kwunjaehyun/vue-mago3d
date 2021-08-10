define(["./arrayRemoveDuplicates-3fea1e5f","./BoundingRectangle-07202124","./Transforms-79117a7b","./Cartesian2-8646c5a1","./Check-24483042","./ComponentDatatype-1a100acd","./CoplanarPolygonGeometryLibrary-32520d7a","./when-54335d57","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./GeometryInstance-6aa9010a","./GeometryPipeline-571ff4c9","./IndexDatatype-82ceea78","./Math-d6182036","./PolygonGeometryLibrary-2a7648d9","./PolygonPipeline-97a7160d","./VertexFormat-81ec7207","./RuntimeError-88a32665","./WebGLConstants-95ceb4e9","./OrientedBoundingBox-eb360dc3","./EllipsoidTangentPlane-325a8e68","./IntersectionTests-5394f658","./Plane-13ae4b1b","./AttributeCompression-10c27d9c","./EncodedCartesian3-bf827957","./ArcType-2b58731c","./EllipsoidRhumbLine-2b7999f3"],function(w,e,V,R,t,I,A,s,M,H,F,G,B,O,L,z,p,a,n,r,o,i,l,y,c,m,u){"use strict";var S=new R.Cartesian3,E=new e.BoundingRectangle,N=new R.Cartesian2,Q=new R.Cartesian2,T=new R.Cartesian3,D=new R.Cartesian3,_=new R.Cartesian3,k=new R.Cartesian3,j=new R.Cartesian3,U=new R.Cartesian3,Y=new V.Quaternion,q=new V.Matrix3,J=new V.Matrix3,W=new R.Cartesian3;function Z(e,t,a,n,r,o,i,l){var s=e.positions,p=z.PolygonPipeline.triangulate(e.positions2D,e.holes);p.length<3&&(p=[0,1,2]);var y=B.IndexDatatype.createTypedArray(s.length,p.length);y.set(p);var c,m,u=q;0!==n?(c=V.Quaternion.fromAxisAngle(o,n,Y),u=V.Matrix3.fromQuaternion(c,u),(t.tangent||t.bitangent)&&(c=V.Quaternion.fromAxisAngle(o,-n,Y),m=V.Matrix3.fromQuaternion(c,J),i=R.Cartesian3.normalize(V.Matrix3.multiplyByVector(m,i,i),i),t.bitangent&&(l=R.Cartesian3.normalize(R.Cartesian3.cross(o,i,l),l)))):u=V.Matrix3.clone(V.Matrix3.IDENTITY,u);var d=Q;t.st&&(d.x=a.x,d.y=a.y);for(var g=s.length,h=3*g,b=new Float64Array(h),v=t.normal?new Float32Array(h):void 0,C=t.tangent?new Float32Array(h):void 0,f=t.bitangent?new Float32Array(h):void 0,x=t.st?new Float32Array(2*g):void 0,P=0,w=0,A=0,F=0,G=0,L=0;L<g;L++){var E,T,D,_=s[L];b[P++]=_.x,b[P++]=_.y,b[P++]=_.z,t.st&&(E=r(V.Matrix3.multiplyByVector(u,_,S),N),R.Cartesian2.subtract(E,d,E),T=O.CesiumMath.clamp(E.x/a.width,0,1),D=O.CesiumMath.clamp(E.y/a.height,0,1),x[G++]=T,x[G++]=D),t.normal&&(v[w++]=o.x,v[w++]=o.y,v[w++]=o.z),t.tangent&&(C[F++]=i.x,C[F++]=i.y,C[F++]=i.z),t.bitangent&&(f[A++]=l.x,f[A++]=l.y,f[A++]=l.z)}var k=new H.GeometryAttributes;return t.position&&(k.position=new M.GeometryAttribute({componentDatatype:I.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:b})),t.normal&&(k.normal=new M.GeometryAttribute({componentDatatype:I.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:v})),t.tangent&&(k.tangent=new M.GeometryAttribute({componentDatatype:I.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C})),t.bitangent&&(k.bitangent=new M.GeometryAttribute({componentDatatype:I.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:f})),t.st&&(k.st=new M.GeometryAttribute({componentDatatype:I.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:x})),new M.Geometry({attributes:k,indices:y,primitiveType:M.PrimitiveType.TRIANGLES})}function d(e){var t=(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).polygonHierarchy,a=s.defaultValue(e.vertexFormat,p.VertexFormat.DEFAULT);this._vertexFormat=p.VertexFormat.clone(a),this._polygonHierarchy=t,this._stRotation=s.defaultValue(e.stRotation,0),this._ellipsoid=R.Ellipsoid.clone(s.defaultValue(e.ellipsoid,R.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this.packedLength=L.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+p.VertexFormat.packedLength+R.Ellipsoid.packedLength+2}d.fromPositions=function(e){return new d({polygonHierarchy:{positions:(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid})},d.pack=function(e,t,a){return a=s.defaultValue(a,0),a=L.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,a),R.Ellipsoid.pack(e._ellipsoid,t,a),a+=R.Ellipsoid.packedLength,p.VertexFormat.pack(e._vertexFormat,t,a),a+=p.VertexFormat.packedLength,t[a++]=e._stRotation,t[a]=e.packedLength,t};var g=R.Ellipsoid.clone(R.Ellipsoid.UNIT_SPHERE),h=new p.VertexFormat,b={polygonHierarchy:{}};return d.unpack=function(e,t,a){t=s.defaultValue(t,0);var n=L.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=n.startingIndex,delete n.startingIndex;var r=R.Ellipsoid.unpack(e,t,g);t+=R.Ellipsoid.packedLength;var o=p.VertexFormat.unpack(e,t,h);t+=p.VertexFormat.packedLength;var i=e[t++],l=e[t];return s.defined(a)||(a=new d(b)),a._polygonHierarchy=n,a._ellipsoid=R.Ellipsoid.clone(r,a._ellipsoid),a._vertexFormat=p.VertexFormat.clone(o,a._vertexFormat),a._stRotation=i,a.packedLength=l,a},d.createGeometry=function(e){var t=e._vertexFormat,a=e._polygonHierarchy,n=e._stRotation,r=a.positions;if(!((r=w.arrayRemoveDuplicates(r,R.Cartesian3.equalsEpsilon,!0)).length<3)){var o=T,i=D,l=_,s=j,p=U;if(A.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(r,k,s,p)){var y,o=R.Cartesian3.cross(s,p,o);o=R.Cartesian3.normalize(o,o),R.Cartesian3.equalsEpsilon(k,R.Cartesian3.ZERO,O.CesiumMath.EPSILON6)||(y=e._ellipsoid.geodeticSurfaceNormal(k,W),R.Cartesian3.dot(o,y)<0&&(o=R.Cartesian3.negate(o,o),s=R.Cartesian3.negate(s,s)));var c=A.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(k,s,p),m=A.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(k,s,p);t.tangent&&(i=R.Cartesian3.clone(s,i)),t.bitangent&&(l=R.Cartesian3.clone(p,l));var u=L.PolygonGeometryLibrary.polygonsFromHierarchy(a,c,!1),d=u.hierarchy,g=u.polygons;if(0!==d.length){r=d[0].outerRing;for(var h=V.BoundingSphere.fromPoints(r),b=L.PolygonGeometryLibrary.computeBoundingRectangle(o,m,r,n,E),v=[],C=0;C<g.length;C++){var f=new F.GeometryInstance({geometry:Z(g[C],t,b,n,m,o,i,l)});v.push(f)}var x=G.GeometryPipeline.combineInstances(v)[0];x.attributes.position.values=new Float64Array(x.attributes.position.values),x.indices=B.IndexDatatype.createTypedArray(x.attributes.position.values.length/3,x.indices);var P=x.attributes;return t.position||delete P.position,new M.Geometry({attributes:P,indices:x.indices,primitiveType:x.primitiveType,boundingSphere:h})}}}},function(e,t){return s.defined(t)&&(e=d.unpack(e,t)),d.createGeometry(e)}});
