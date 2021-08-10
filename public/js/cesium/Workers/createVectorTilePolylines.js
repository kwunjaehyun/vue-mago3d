define(["./Cartesian2-8646c5a1","./AttributeCompression-10c27d9c","./Math-d6182036","./IndexDatatype-82ceea78","./createTaskProcessorWorker","./Check-24483042","./when-54335d57","./WebGLConstants-95ceb4e9"],function(G,W,B,z,a,e,r,n){"use strict";var H=32767,O=new G.Cartographic,Y=new G.Cartesian3;var Z=new G.Rectangle,j=new G.Ellipsoid,q=new G.Cartesian3,J={min:void 0,max:void 0};var K=new G.Cartesian3,Q=new G.Cartesian3,V=new G.Cartesian3,X=new G.Cartesian3,$=new G.Cartesian3;return a(function(a,e){var r=new Uint16Array(a.positions),n=new Uint16Array(a.widths),t=new Uint32Array(a.counts),i=new Uint16Array(a.batchIds);!function(a){a=new Float64Array(a);var e=0;J.min=a[e++],J.max=a[e++],G.Rectangle.unpack(a,e,Z),e+=G.Rectangle.packedLength,G.Ellipsoid.unpack(a,e,j),e+=G.Ellipsoid.packedLength,G.Cartesian3.unpack(a,e,q)}(a.packedBuffer);for(var s=q,u=function(a,e,r,n,t){var i=a.length/3,s=a.subarray(0,i),u=a.subarray(i,2*i),c=a.subarray(2*i,3*i);W.AttributeCompression.zigZagDeltaDecode(s,u,c);for(var o=new Float64Array(a.length),p=0;p<i;++p){var f=s[p],C=u[p],d=c[p],b=B.CesiumMath.lerp(e.west,e.east,f/H),w=B.CesiumMath.lerp(e.south,e.north,C/H),h=B.CesiumMath.lerp(r,n,d/H),l=G.Cartographic.fromRadians(b,w,h,O),y=t.cartographicToCartesian(l,Y);G.Cartesian3.pack(y,o,3*p)}return o}(r,Z,J.min,J.max,j),c=u.length/3,o=4*c-4,p=new Float32Array(3*o),f=new Float32Array(3*o),C=new Float32Array(3*o),d=new Float32Array(2*o),b=new Uint16Array(o),w=0,h=0,l=0,y=0,k=t.length,v=0;v<k;++v){for(var A,g,m,x=t[v],E=n[v],D=i[v],I=0;I<x;++I){0===I?(A=G.Cartesian3.unpack(u,3*y,K),g=G.Cartesian3.unpack(u,3*(y+1),Q),m=G.Cartesian3.subtract(A,g,V),G.Cartesian3.add(A,m,m)):m=G.Cartesian3.unpack(u,3*(y+I-1),V);var T,U,F,N=G.Cartesian3.unpack(u,3*(y+I),X);I===x-1?(T=G.Cartesian3.unpack(u,3*(y+x-1),K),U=G.Cartesian3.unpack(u,3*(y+x-2),Q),F=G.Cartesian3.subtract(T,U,$),G.Cartesian3.add(T,F,F)):F=G.Cartesian3.unpack(u,3*(y+I+1),$),G.Cartesian3.subtract(m,s,m),G.Cartesian3.subtract(N,s,N),G.Cartesian3.subtract(F,s,F);for(var R=I===x-1?2:4,M=0===I?2:0;M<R;++M){G.Cartesian3.pack(N,p,w),G.Cartesian3.pack(m,f,w),G.Cartesian3.pack(F,C,w),w+=3;var P=M-2<0?-1:1;d[h++]=M%2*2-1,d[h++]=P*E,b[l++]=D}}y+=x}var L=z.IndexDatatype.createTypedArray(o,6*c-6),S=0,_=0,k=c-1;for(v=0;v<k;++v)L[_++]=S,L[_++]=S+2,L[_++]=S+1,L[_++]=S+1,L[_++]=S+2,L[_++]=S+3,S+=4;return e.push(p.buffer,f.buffer,C.buffer),e.push(d.buffer,b.buffer,L.buffer),{indexDatatype:2===L.BYTES_PER_ELEMENT?z.IndexDatatype.UNSIGNED_SHORT:z.IndexDatatype.UNSIGNED_INT,currentPositions:p.buffer,previousPositions:f.buffer,nextPositions:C.buffer,expandAndWidth:d.buffer,batchIds:b.buffer,indices:L.buffer}})});