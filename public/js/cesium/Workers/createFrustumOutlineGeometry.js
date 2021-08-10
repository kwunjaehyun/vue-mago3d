define(["./when-54335d57","./Transforms-79117a7b","./Cartesian2-8646c5a1","./Check-24483042","./ComponentDatatype-1a100acd","./FrustumGeometry-c7d19501","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./Math-d6182036","./RuntimeError-88a32665","./WebGLConstants-95ceb4e9","./Plane-13ae4b1b","./VertexFormat-81ec7207"],function(s,d,p,e,f,g,_,k,t,r,n,a,u){"use strict";var m=0,o=1;function h(e){var t,r,n=e.frustum,a=e.orientation,u=e.origin,i=s.defaultValue(e._drawNearPlane,!0);n instanceof g.PerspectiveFrustum?(t=m,r=g.PerspectiveFrustum.packedLength):n instanceof g.OrthographicFrustum&&(t=o,r=g.OrthographicFrustum.packedLength),this._frustumType=t,this._frustum=n.clone(),this._origin=p.Cartesian3.clone(u),this._orientation=d.Quaternion.clone(a),this._drawNearPlane=i,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+r+p.Cartesian3.packedLength+d.Quaternion.packedLength}h.pack=function(e,t,r){r=s.defaultValue(r,0);var n=e._frustumType,a=e._frustum;return(t[r++]=n)===m?(g.PerspectiveFrustum.pack(a,t,r),r+=g.PerspectiveFrustum.packedLength):(g.OrthographicFrustum.pack(a,t,r),r+=g.OrthographicFrustum.packedLength),p.Cartesian3.pack(e._origin,t,r),r+=p.Cartesian3.packedLength,d.Quaternion.pack(e._orientation,t,r),t[r+=d.Quaternion.packedLength]=e._drawNearPlane?1:0,t};var l=new g.PerspectiveFrustum,y=new g.OrthographicFrustum,v=new d.Quaternion,F=new p.Cartesian3;return h.unpack=function(e,t,r){t=s.defaultValue(t,0);var n,a=e[t++];a===m?(n=g.PerspectiveFrustum.unpack(e,t,l),t+=g.PerspectiveFrustum.packedLength):(n=g.OrthographicFrustum.unpack(e,t,y),t+=g.OrthographicFrustum.packedLength);var u=p.Cartesian3.unpack(e,t,F);t+=p.Cartesian3.packedLength;var i=d.Quaternion.unpack(e,t,v),o=1===e[t+=d.Quaternion.packedLength];if(!s.defined(r))return new h({frustum:n,origin:u,orientation:i,_drawNearPlane:o});var c=a===r._frustumType?r._frustum:void 0;return r._frustum=n.clone(c),r._frustumType=a,r._origin=p.Cartesian3.clone(u,r._origin),r._orientation=d.Quaternion.clone(i,r._orientation),r._drawNearPlane=o,r},h.createGeometry=function(e){var t=e._frustumType,r=e._frustum,n=e._origin,a=e._orientation,u=e._drawNearPlane,i=new Float64Array(24);g.FrustumGeometry._computeNearFarPlanes(n,a,t,r,i);for(var o,c,s=new k.GeometryAttributes({position:new _.GeometryAttribute({componentDatatype:f.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:i})}),p=u?2:1,m=new Uint16Array(8*(1+p)),h=u?0:1;h<2;++h)c=4*h,m[o=u?8*h:0]=c,m[o+1]=c+1,m[o+2]=c+1,m[o+3]=c+2,m[o+4]=c+2,m[o+5]=c+3,m[o+6]=c+3,m[o+7]=c;for(h=0;h<2;++h)c=4*h,m[o=8*(p+h)]=c,m[o+1]=c+4,m[o+2]=c+1,m[o+3]=c+5,m[o+4]=c+2,m[o+5]=c+6,m[o+6]=c+3,m[o+7]=c+7;return new _.Geometry({attributes:s,indices:m,primitiveType:_.PrimitiveType.LINES,boundingSphere:d.BoundingSphere.fromVertices(i)})},function(e,t){return s.defined(t)&&(e=h.unpack(e,t)),h.createGeometry(e)}});
