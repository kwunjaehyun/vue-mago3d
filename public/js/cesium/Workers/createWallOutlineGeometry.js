define(["./when-54335d57","./Cartesian2-8646c5a1","./Transforms-79117a7b","./ComponentDatatype-1a100acd","./Check-24483042","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./IndexDatatype-82ceea78","./Math-d6182036","./WallGeometryLibrary-0e5f04d3","./RuntimeError-88a32665","./WebGLConstants-95ceb4e9","./arrayRemoveDuplicates-3fea1e5f","./PolylinePipeline-3803a6c2","./EllipsoidGeodesic-cc216670","./EllipsoidRhumbLine-2b7999f3","./IntersectionTests-5394f658","./Plane-13ae4b1b"],function(G,L,x,P,e,T,D,V,I,R,i,t,a,n,r,o,s,l){"use strict";var S=new L.Cartesian3,M=new L.Cartesian3;function d(e){var i=(e=G.defaultValue(e,G.defaultValue.EMPTY_OBJECT)).positions,t=e.maximumHeights,a=e.minimumHeights,n=G.defaultValue(e.granularity,I.CesiumMath.RADIANS_PER_DEGREE),r=G.defaultValue(e.ellipsoid,L.Ellipsoid.WGS84);this._positions=i,this._minimumHeights=a,this._maximumHeights=t,this._granularity=n,this._ellipsoid=L.Ellipsoid.clone(r),this._workerName="createWallOutlineGeometry";var o=1+i.length*L.Cartesian3.packedLength+2;G.defined(a)&&(o+=a.length),G.defined(t)&&(o+=t.length),this.packedLength=o+L.Ellipsoid.packedLength+1}d.pack=function(e,i,t){var a;t=G.defaultValue(t,0);var n=e._positions,r=n.length;for(i[t++]=r,a=0;a<r;++a,t+=L.Cartesian3.packedLength)L.Cartesian3.pack(n[a],i,t);var o=e._minimumHeights,r=G.defined(o)?o.length:0;if(i[t++]=r,G.defined(o))for(a=0;a<r;++a)i[t++]=o[a];var s=e._maximumHeights;if(r=G.defined(s)?s.length:0,i[t++]=r,G.defined(s))for(a=0;a<r;++a)i[t++]=s[a];return L.Ellipsoid.pack(e._ellipsoid,i,t),i[t+=L.Ellipsoid.packedLength]=e._granularity,i};var u=L.Ellipsoid.clone(L.Ellipsoid.UNIT_SPHERE),p={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:u,granularity:void 0};return d.unpack=function(e,i,t){i=G.defaultValue(i,0);for(var a,n,r=e[i++],o=new Array(r),s=0;s<r;++s,i+=L.Cartesian3.packedLength)o[s]=L.Cartesian3.unpack(e,i);if(0<(r=e[i++]))for(a=new Array(r),s=0;s<r;++s)a[s]=e[i++];if(0<(r=e[i++]))for(n=new Array(r),s=0;s<r;++s)n[s]=e[i++];var l=L.Ellipsoid.unpack(e,i,u),m=e[i+=L.Ellipsoid.packedLength];return G.defined(t)?(t._positions=o,t._minimumHeights=a,t._maximumHeights=n,t._ellipsoid=L.Ellipsoid.clone(l,t._ellipsoid),t._granularity=m,t):(p.positions=o,p.minimumHeights=a,p.maximumHeights=n,p.granularity=m,new d(p))},d.fromConstantHeights=function(e){var i=(e=G.defaultValue(e,G.defaultValue.EMPTY_OBJECT)).positions,t=e.minimumHeight,a=e.maximumHeight,n=G.defined(t),r=G.defined(a);if(n||r)for(var o=i.length,s=n?new Array(o):void 0,l=r?new Array(o):void 0,m=0;m<o;++m)n&&(s[m]=t),r&&(l[m]=a);return new d({positions:i,maximumHeights:l,minimumHeights:s,ellipsoid:e.ellipsoid})},d.createGeometry=function(e){var i=e._positions,t=e._minimumHeights,a=e._maximumHeights,n=e._granularity,r=e._ellipsoid,o=R.WallGeometryLibrary.computePositions(r,i,a,t,n,!1);if(G.defined(o)){var s=o.bottomPositions,l=o.topPositions,m=l.length,d=2*m,u=new Float64Array(d),p=0;for(m/=3,v=0;v<m;++v){var f=3*v,h=L.Cartesian3.fromArray(l,f,S),c=L.Cartesian3.fromArray(s,f,M);u[p++]=c.x,u[p++]=c.y,u[p++]=c.z,u[p++]=h.x,u[p++]=h.y,u[p++]=h.z}for(var g=new D.GeometryAttributes({position:new T.GeometryAttribute({componentDatatype:P.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})}),y=d/3,d=2*y-4+y,_=V.IndexDatatype.createTypedArray(y,d),E=0,v=0;v<y-2;v+=2){var C,H,A=v,b=v+2,k=L.Cartesian3.fromArray(u,3*A,S),w=L.Cartesian3.fromArray(u,3*b,M);L.Cartesian3.equalsEpsilon(k,w,I.CesiumMath.EPSILON10)||(C=v+1,H=v+3,_[E++]=C,_[E++]=A,_[E++]=C,_[E++]=H,_[E++]=A,_[E++]=b)}return _[E++]=y-2,_[E++]=y-1,new T.Geometry({attributes:g,indices:_,primitiveType:T.PrimitiveType.LINES,boundingSphere:new x.BoundingSphere.fromVertices(u)})}},function(e,i){return G.defined(i)&&(e=d.unpack(e,i)),e._ellipsoid=L.Ellipsoid.clone(e._ellipsoid),d.createGeometry(e)}});