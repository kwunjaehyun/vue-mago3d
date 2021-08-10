define(["exports","./Cartesian2-8646c5a1","./PolylineVolumeGeometryLibrary-4d0ebb44","./when-54335d57","./Math-d6182036","./Transforms-79117a7b","./PolylinePipeline-3803a6c2"],function(a,U,G,o,I,c,q){"use strict";var e={},j=new U.Cartesian3,p=new U.Cartesian3,m=new U.Cartesian3,g=new U.Cartesian3,k=[new U.Cartesian3,new U.Cartesian3],F=new U.Cartesian3,H=new U.Cartesian3,J=new U.Cartesian3,K=new U.Cartesian3,W=new U.Cartesian3,X=new U.Cartesian3,Y=new U.Cartesian3,Z=new U.Cartesian3,$=new U.Cartesian3,_=new U.Cartesian3,d=new c.Quaternion,h=new c.Matrix3;function aa(a,e,r,n,t){var i,s=U.Cartesian3.angleBetween(U.Cartesian3.subtract(e,a,j),U.Cartesian3.subtract(r,a,p)),o=n===G.CornerType.BEVELED?1:Math.ceil(s/I.CesiumMath.toRadians(5))+1,C=3*o,l=new Array(C);l[C-3]=r.x,l[C-2]=r.y,l[C-1]=r.z,i=t?c.Matrix3.fromQuaternion(c.Quaternion.fromAxisAngle(U.Cartesian3.negate(a,j),s/o,d),h):c.Matrix3.fromQuaternion(c.Quaternion.fromAxisAngle(a,s/o,d),h);var y=0;e=U.Cartesian3.clone(e,j);for(var u=0;u<o;u++)e=c.Matrix3.multiplyByVector(i,e,e),l[y++]=e.x,l[y++]=e.y,l[y++]=e.z;return l}function ea(a,e,r,n){var t=j;return[(t=(n||(e=U.Cartesian3.negate(e,e)),U.Cartesian3.add(a,e,t))).x,t.y,t.z,r.x,r.y,r.z]}function ra(a,e,r,n){for(var t=new Array(a.length),i=new Array(a.length),s=U.Cartesian3.multiplyByScalar(e,r,j),o=U.Cartesian3.negate(s,p),C=0,l=a.length-1,y=0;y<a.length;y+=3){var u=U.Cartesian3.fromArray(a,y,m),c=U.Cartesian3.add(u,o,g);t[C++]=c.x,t[C++]=c.y,t[C++]=c.z;var d=U.Cartesian3.add(u,s,g);i[l--]=d.z,i[l--]=d.y,i[l--]=d.x}return n.push(t,i),n}e.addAttribute=function(a,e,r,n){var t=e.x,i=e.y,s=e.z;o.defined(r)&&(a[r]=t,a[r+1]=i,a[r+2]=s),o.defined(n)&&(a[n]=s,a[n-1]=i,a[n-2]=t)};var na=new U.Cartesian3,ta=new U.Cartesian3;e.computePositions=function(a){var e=a.granularity,r=a.positions,n=a.ellipsoid,t=a.width/2,i=a.cornerType,s=a.saveAttributes,o=F,C=H,l=J,y=K,u=W,c=X,d=Y,p=Z,m=$,g=_,h=[],f=s?[]:void 0,w=s?[]:void 0,z=r[0],x=r[1],C=U.Cartesian3.normalize(U.Cartesian3.subtract(x,z,C),C),o=n.geodeticSurfaceNormal(z,o),y=U.Cartesian3.normalize(U.Cartesian3.cross(o,C,y),y);s&&(f.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),d=U.Cartesian3.clone(z,d),z=x,l=U.Cartesian3.negate(C,l);for(var P,v,A,B,E,S,b,D,M,T=[],N=r.length,L=1;L<N-1;L++){o=n.geodeticSurfaceNormal(z,o),x=r[L+1],C=U.Cartesian3.normalize(U.Cartesian3.subtract(x,z,C),C),u=U.Cartesian3.normalize(U.Cartesian3.add(C,l,u),u);var O=U.Cartesian3.multiplyByScalar(o,U.Cartesian3.dot(C,o),na);U.Cartesian3.subtract(C,O,O),U.Cartesian3.normalize(O,O);var R,V,Q=U.Cartesian3.multiplyByScalar(o,U.Cartesian3.dot(l,o),ta);U.Cartesian3.subtract(l,Q,Q),U.Cartesian3.normalize(Q,Q),I.CesiumMath.equalsEpsilon(Math.abs(U.Cartesian3.dot(O,Q)),1,I.CesiumMath.EPSILON7)||(u=U.Cartesian3.cross(u,o,u),u=U.Cartesian3.cross(o,u,u),u=U.Cartesian3.normalize(u,u),R=t/Math.max(.25,U.Cartesian3.magnitude(U.Cartesian3.cross(u,l,j))),V=G.PolylineVolumeGeometryLibrary.angleIsGreaterThanPi(C,l,z,n),u=U.Cartesian3.multiplyByScalar(u,R,u),V?(p=U.Cartesian3.add(z,u,p),g=U.Cartesian3.add(p,U.Cartesian3.multiplyByScalar(y,t,g),g),m=U.Cartesian3.add(p,U.Cartesian3.multiplyByScalar(y,2*t,m),m),k[0]=U.Cartesian3.clone(d,k[0]),k[1]=U.Cartesian3.clone(g,k[1]),h=ra(q.PolylinePipeline.generateArc({positions:k,granularity:e,ellipsoid:n}),y,t,h),s&&(f.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),c=U.Cartesian3.clone(m,c),y=U.Cartesian3.normalize(U.Cartesian3.cross(o,C,y),y),m=U.Cartesian3.add(p,U.Cartesian3.multiplyByScalar(y,2*t,m),m),d=U.Cartesian3.add(p,U.Cartesian3.multiplyByScalar(y,t,d),d),i===G.CornerType.ROUNDED||i===G.CornerType.BEVELED?T.push({leftPositions:aa(p,c,m,i,V)}):T.push({leftPositions:ea(z,U.Cartesian3.negate(u,u),m,V)})):(m=U.Cartesian3.add(z,u,m),g=U.Cartesian3.add(m,U.Cartesian3.negate(U.Cartesian3.multiplyByScalar(y,t,g),g),g),p=U.Cartesian3.add(m,U.Cartesian3.negate(U.Cartesian3.multiplyByScalar(y,2*t,p),p),p),k[0]=U.Cartesian3.clone(d,k[0]),k[1]=U.Cartesian3.clone(g,k[1]),h=ra(q.PolylinePipeline.generateArc({positions:k,granularity:e,ellipsoid:n}),y,t,h),s&&(f.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),c=U.Cartesian3.clone(p,c),y=U.Cartesian3.normalize(U.Cartesian3.cross(o,C,y),y),p=U.Cartesian3.add(m,U.Cartesian3.negate(U.Cartesian3.multiplyByScalar(y,2*t,p),p),p),d=U.Cartesian3.add(m,U.Cartesian3.negate(U.Cartesian3.multiplyByScalar(y,t,d),d),d),i===G.CornerType.ROUNDED||i===G.CornerType.BEVELED?T.push({rightPositions:aa(m,c,p,i,V)}):T.push({rightPositions:ea(z,u,p,V)})),l=U.Cartesian3.negate(C,l)),z=x}return o=n.geodeticSurfaceNormal(z,o),k[0]=U.Cartesian3.clone(d,k[0]),k[1]=U.Cartesian3.clone(z,k[1]),h=ra(q.PolylinePipeline.generateArc({positions:k,granularity:e,ellipsoid:n}),y,t,h),s&&(f.push(y.x,y.y,y.z),w.push(o.x,o.y,o.z)),i===G.CornerType.ROUNDED&&(A=F,B=H,E=J,S=(v=h)[1],B=U.Cartesian3.fromArray(v[1],S.length-3,B),E=U.Cartesian3.fromArray(v[0],0,E),b=aa(A=U.Cartesian3.midpoint(B,E,A),B,E,G.CornerType.ROUNDED,!1),D=v.length-1,M=v[D-1],S=v[D],B=U.Cartesian3.fromArray(M,M.length-3,B),E=U.Cartesian3.fromArray(S,0,E),P=[b,aa(A=U.Cartesian3.midpoint(B,E,A),B,E,G.CornerType.ROUNDED,!1)]),{positions:h,corners:T,lefts:f,normals:w,endPositions:P}},a.CorridorGeometryLibrary=e});
