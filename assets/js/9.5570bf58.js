(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{378:function(t,e,i){},379:function(t,e,i){},417:function(t,e,i){t.exports=i.p+"assets/img/heart.c76ab3e8.jpeg"},418:function(t,e,i){"use strict";i(378)},419:function(t,e,i){"use strict";i(379)},431:function(t,e,i){"use strict";i.r(e);i(328),i(26),i(82);var n=i(329),a={name:"PjTrack",data:function(){return{deviations:[]}},props:{id:{type:String,required:!0},width:{type:String,default:"200"},height:{type:String,default:"200"},lineColor:{type:String,default:"#67c23a"}},methods:{getPath:function(){return this.$slots.default[0].elm},getTrain:function(){return this.$slots.default[2].elm},getDeviation:function(){var t=this.$slots.default[2].elm.clientWidth,e=this.$slots.default[2].elm.clientHeight;this.deviations[0]=t/2,this.deviations[1]=e/2},createEl:function(){var t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("width",this.width),t.setAttribute("height",this.height),t.setAttribute("style","fill:transparent;stroke:".concat(this.lineColor)),t.appendChild(this.getPath()),document.getElementById(this.id).appendChild(t);var e=document.createElement("div");e.setAttribute("id",this.id+"-train"),e.setAttribute("style","position:absolute;left:0;top:0;"),e.appendChild(this.getTrain()),document.getElementById(this.id).appendChild(e),this.run()},run:function(){var t=this,e=performance.now(),i=this.getPath(),n=i.getTotalLength(),a={},s=0;!function r(){var c=(performance.now()-e)/6e3%1,l=i.getPointAtLength(n*c);if(a.x){var o=Math.atan2(l.y-a.y,l.x-a.x);s=o*(180/Math.PI)}document.getElementById(t.id+"-train").style.transform="translate3d("+(l.x-t.deviations[0])+"px,"+(l.y-t.deviations[1])+"px,0) rotateZ("+s+"deg)",document.getElementById(t.id+"-train").style.WebkitTransform="translate3d("+(l.x-t.deviations[0])+"px,"+(l.y-t.deviations[1])+"px,0 rotateZ("+s+"deg))",a=l,requestAnimationFrame(r)}()}},mounted:function(){this.getDeviation(),this.createEl()}},s=(i(418),i(50)),r=Object(s.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"pj-track",style:{width:this.width,height:this.height},attrs:{id:this.id}},[this._t("default")],2)}),[],!1,null,"258075f4",null).exports,c={props:{type:{type:String,default:"basic"}},components:{"pj-track":r,"pj-code-block":n.a},data:function(){return{basicCode:'\n        <pj-track id="track1" width="400" height="300" style="margin-left:170px;">\n          <path d="m183.207758,118.065134c61.431988,-141.165435 302.124531,0 0,181.498416c-302.124531,-181.498416 -61.431988,-322.663852 0,-181.498416z" fill-opacity="null" stroke-opacity="null" stroke-width="4" stroke="pink" fill="#fff"/>\n          <img style="width:30px;height:30px;" src="../public/img/heart.jpeg" alt="">\n        </pj-track>\n        <pj-track id="track2" width="400" height="300" lineColor="pink"  style="margin-left:170px;">\n          <path d="m88.5,75.453125c0,0 190,-72 148,1c-42,73 -85,29 -85.5,28.546875c0.5,0.453125 85.5,-88.546875 -19.5,-72.546875c-105,16 157,79 57,106c-100,27 -197,88 -81,80c116,-8 194,145 79,41c-115,-104 61,-121 60.5,-121.453125c0.5,0.453125 20.5,187.453125 -84.5,96.453125c-105,-91 -74,-159 -74,-159z" stroke-width="4" stroke="#409eff" fill="#fff"/>\n          <div style="width:12px;height:12px;background:#ebc07f"></div>\n        </pj-track>\n      '.replace(/^ {8}/gm,"").trim()}}},l=(i(419),Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"track-demo"},["basic"===t.type?n("pj-code-block",[n("pj-track",{staticStyle:{"margin-left":"170px"},attrs:{id:"track1",width:"400",height:"300"}},[n("path",{attrs:{d:"m183.207758,118.065134c61.431988,-141.165435 302.124531,0 0,181.498416c-302.124531,-181.498416 -61.431988,-322.663852 0,-181.498416z","fill-opacity":"null","stroke-opacity":"null","stroke-width":"4",stroke:"pink",fill:"#fff"}}),t._v(" "),n("img",{staticStyle:{width:"30px",height:"30px"},attrs:{src:i(417),alt:""}})]),t._v(" "),n("pj-track",{staticStyle:{"margin-left":"170px"},attrs:{id:"track2",width:"400",height:"300",lineColor:"pink"}},[n("path",{attrs:{d:"m88.5,75.453125c0,0 190,-72 148,1c-42,73 -85,29 -85.5,28.546875c0.5,0.453125 85.5,-88.546875 -19.5,-72.546875c-105,16 157,79 57,106c-100,27 -197,88 -81,80c116,-8 194,145 79,41c-115,-104 61,-121 60.5,-121.453125c0.5,0.453125 20.5,187.453125 -84.5,96.453125c-105,-91 -74,-159 -74,-159z","stroke-width":"4",stroke:"#409eff",fill:"#fff"}}),t._v(" "),n("div",{staticStyle:{width:"12px",height:"12px",background:"#ebc07f"}})]),t._v(" "),n("template",{slot:"code"},[t._v("\n      id是必传项，通过width,height可指定svg的宽高，通过lineColor可指定图形线条颜色，也可在path元素中指定，\n      path之后可以自定义元素用于在svg轨迹上运动，这个元素也可以是图片。\n      "),n("pre",[n("code",[t._v(t._s(t.basicCode))])])])],2):t._e()],1)}),[],!1,null,"2eddd0c2",null));e.default=l.exports}}]);