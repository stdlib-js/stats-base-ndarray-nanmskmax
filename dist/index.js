"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=v(function(c,n){
var m=require('@stdlib/ndarray-base-numel-dimension/dist'),a=require('@stdlib/ndarray-base-stride/dist'),i=require('@stdlib/ndarray-base-offset/dist'),u=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/stats-strided-nanmskmax/dist').ndarray;function d(t){var r=t[1],e=t[0];return q(m(e,0),u(e),a(e,0),i(e),u(r),a(r,0),i(r))}n.exports=d
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
