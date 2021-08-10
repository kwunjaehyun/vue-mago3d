define(["./GeometryOffsetAttribute-718fa138","./Transforms-79117a7b","./Cartesian2-8646c5a1","./Check-24483042","./ComponentDatatype-1a100acd","./when-54335d57","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./Math-d6182036","./RuntimeError-88a32665","./WebGLConstants-95ceb4e9"],function(c,d,p,e,y,C,l,b,t,a,n){"use strict";var A=new p.Cartesian3;function u(e){var t=(e=C.defaultValue(e,C.defaultValue.EMPTY_OBJECT)).minimum,a=e.maximum;this._min=p.Cartesian3.clone(t),this._max=p.Cartesian3.clone(a),this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxOutlineGeometry"}u.fromDimensions=function(e){var t=(e=C.defaultValue(e,C.defaultValue.EMPTY_OBJECT)).dimensions,a=p.Cartesian3.multiplyByScalar(t,.5,new p.Cartesian3);return new u({minimum:p.Cartesian3.negate(a,new p.Cartesian3),maximum:a,offsetAttribute:e.offsetAttribute})},u.fromAxisAlignedBoundingBox=function(e){return new u({minimum:e.minimum,maximum:e.maximum})},u.packedLength=2*p.Cartesian3.packedLength+1,u.pack=function(e,t,a){return a=C.defaultValue(a,0),p.Cartesian3.pack(e._min,t,a),p.Cartesian3.pack(e._max,t,a+p.Cartesian3.packedLength),t[a+2*p.Cartesian3.packedLength]=C.defaultValue(e._offsetAttribute,-1),t};var m=new p.Cartesian3,o=new p.Cartesian3,s={minimum:m,maximum:o,offsetAttribute:void 0};return u.unpack=function(e,t,a){t=C.defaultValue(t,0);var n=p.Cartesian3.unpack(e,t,m),i=p.Cartesian3.unpack(e,t+p.Cartesian3.packedLength,o),r=e[t+2*p.Cartesian3.packedLength];return C.defined(a)?(a._min=p.Cartesian3.clone(n,a._min),a._max=p.Cartesian3.clone(i,a._max),a._offsetAttribute=-1===r?void 0:r,a):(s.offsetAttribute=-1===r?void 0:r,new u(s))},u.createGeometry=function(e){var t=e._min,a=e._max;if(!p.Cartesian3.equals(t,a)){var n=new b.GeometryAttributes,i=new Uint16Array(24),r=new Float64Array(24);r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=a.x,r[4]=t.y,r[5]=t.z,r[6]=a.x,r[7]=a.y,r[8]=t.z,r[9]=t.x,r[10]=a.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=a.z,r[15]=a.x,r[16]=t.y,r[17]=a.z,r[18]=a.x,r[19]=a.y,r[20]=a.z,r[21]=t.x,r[22]=a.y,r[23]=a.z,n.position=new l.GeometryAttribute({componentDatatype:y.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r}),i[0]=4,i[1]=5,i[2]=5,i[3]=6,i[4]=6,i[5]=7,i[6]=7,i[7]=4,i[8]=0,i[9]=1,i[10]=1,i[11]=2,i[12]=2,i[13]=3,i[14]=3,i[15]=0,i[16]=0,i[17]=4,i[18]=1,i[19]=5,i[20]=2,i[21]=6,i[22]=3,i[23]=7;var u,m,o,s=p.Cartesian3.subtract(a,t,A),f=.5*p.Cartesian3.magnitude(s);return C.defined(e._offsetAttribute)&&(u=r.length,m=new Uint8Array(u/3),o=e._offsetAttribute===c.GeometryOffsetAttribute.NONE?0:1,c.arrayFill(m,o),n.applyOffset=new l.GeometryAttribute({componentDatatype:y.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:m})),new l.Geometry({attributes:n,indices:i,primitiveType:l.PrimitiveType.LINES,boundingSphere:new d.BoundingSphere(p.Cartesian3.ZERO,f),offsetAttribute:e._offsetAttribute})}},function(e,t){return C.defined(t)&&(e=u.unpack(e,t)),u.createGeometry(e)}});