(window.webpackJsonp=window.webpackJsonp||[]).push([[75,14,30],{1158:function(t,e,n){"use strict";n.r(e);var o=n(849),r=n(1147),l=(n(20),n(13)),d=(n(42),n(5),n(15),n(37),n(65)),c=(n(506),n(30),{layout:"admin_notification",data:function(){return{title:{name:"Quản lý thông báo",previous:"/admin/dashboard"},data:null,types:null,selectedFilter:"",per_page:0,current_page:1,total:0,tuKhoa:""}},computed:{token:function(){return JSON.parse(localStorage.getItem("user")).auth_key},keyword:function(){return this.$store.getters["notification/keyword"]}},methods:{load_type:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.default.get("thong-bao/get-type",{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n;t.types=null==e||null===(n=e.data)||void 0===n?void 0:n.data}));case 2:case"end":return e.stop()}}),e)})))()},load_data:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.default.get("thong-bao/danh-sach?type=".concat(t.selectedFilter,"&limit=10&sort=1&tuKhoa=").concat(t.tuKhoa,"&page=").concat(t.current_page),{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n,o,r,l,d,c;t.data=null==e||null===(n=e.data)||void 0===n?void 0:n.data,t.per_page=null!==(o=null==e||null===(r=e.data)||void 0===r?void 0:r.per_page)&&void 0!==o?o:0,t.current_page=null!==(l=null==e||null===(d=e.data)||void 0===d?void 0:d.current_page)&&void 0!==l?l:0,t.total=null==e||null===(c=e.data)||void 0===c?void 0:c.total}));case 2:case"end":return e.stop()}}),e)})))()},updateFilter:function(filter){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,filter;case 2:if(e.t1=n=e.sent,e.t0=null!==e.t1,!e.t0){e.next=6;break}e.t0=void 0!==n;case 6:if(!e.t0){e.next=10;break}e.t2=n,e.next=11;break;case 10:e.t2="";case 11:return t.selectedFilter=e.t2,e.next=14,t.load_data();case 14:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$store.dispatch("title/set_title",this.title),this.load_type(),this.load_data()},components:{},watch:{current_page:function(){this.load_data()},keyword:function(){this.tuKhoa=this.keyword},tuKhoa:function(){var t=this;clearTimeout(this.timeOut),this.timeOut=setTimeout((function(){t.load_data()}),this.timer)}}}),f=(n(972),n(36)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-mp"},[e("div",{staticClass:"notification"},[e(r.a,{},[e(o.a,{staticClass:"w-100",attrs:{xs:"12",sm:"12",md:"7",lg:"7",xl:"7"}},[e("div",{staticClass:"d-flex justify-content-between align-items-center mb-4"},[e("title-header",[t._v("Thông báo đã gửi")]),t._v(" "),e("nuxt-link",{attrs:{to:"/admin/notification/create"}},[e("button-add",{attrs:{addClass:"btn-header"}},[e("span",{staticClass:"mdi mdi-plus"}),t._v(" Tạo thông báo\n                        ")])],1)],1),t._v(" "),e("div",{staticClass:"d-flex flex-wrap"},[e("div",{staticClass:"btn btn-type",class:{active:""===t.selectedFilter},on:{click:function(e){return t.updateFilter("")}}},[t._v("\n                        Tất cả\n                    ")]),t._v(" "),t._l(t.types,(function(n,o){return e("div",{key:o,staticClass:"btn btn-type",class:{active:t.selectedFilter===(null==n?void 0:n.id)},on:{click:function(e){return t.updateFilter(null==n?void 0:n.id)}}},[t._v("\n                        "+t._s(null==n?void 0:n.name)+"\n                    ")])}))],2)]),t._v(" "),t._l(t.data,(function(n,r){return[e(o.a,{key:r,staticClass:"w-100",attrs:{xs:"12",sm:"12",md:"7",lg:"7",xl:"7"}},[e("div",{staticClass:"d-flex w-100",staticStyle:{"min-width":"245px"}},[e("div",{staticClass:"time"},[t._v(t._s(null==n?void 0:n.date))]),t._v(" "),e("div",{staticClass:"br-bt"})]),t._v(" "),t._l(null==n?void 0:n.data,(function(i,n){var o;return e("div",{key:n,staticClass:"mt-3 card-notification hover-card wow animate__animated animate__zoomIn",staticStyle:{"min-width":"245px"}},[e("div",{staticClass:"me-3"},[e("div",{staticClass:"box-img-no"},[e("img",{attrs:{src:null==i?void 0:i.image}})])]),t._v(" "),e("div",{staticClass:"w-100"},[e("div",{staticClass:"notification-title"},[t._v(t._s(null==i?void 0:i.tieu_de)+" !")]),t._v(" "),e("div",{staticClass:"time mt-2"},[t._v(t._s(null==i?void 0:i.created))]),t._v(" "),e("hr",{staticClass:"my-1"}),t._v(" "),e("div",[e("span",{staticClass:"span1"},[t._v("Nội dung:")]),t._v(" "),e("span",{staticClass:"ms-1 span2"},[t._v(t._s(null==i?void 0:i.noi_dung))])]),t._v(" "),e("div",[e("span",{staticClass:"span1"},[t._v("Bởi:")]),t._v(" "),e("span",{staticClass:"ms-1 span2"},[t._v(t._s(null==i||null===(o=i.user)||void 0===o?void 0:o.hoten))])])])])}))],2)]})),t._v(" "),e("div",{staticClass:"d-flex justify-content-center mt-4 w-100"},[e("b-pagination",{attrs:{"total-rows":t.total,"per-page":t.per_page,"first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last"},model:{value:t.current_page,callback:function(e){t.current_page=e},expression:"current_page"}})],1)],2)],1)])}),[],!1,null,"47983846",null);e.default=component.exports;installComponents(component,{TitleHeader:n(726).default,ButtonAdd:n(730).default})},723:function(t,e,n){var content=n(728);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("794e685a",content,!0,{sourceMap:!1})},725:function(t,e,n){var content=n(734);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7e2793ea",content,!0,{sourceMap:!1})},726:function(t,e,n){"use strict";n.r(e);n(727);var o=n(36),component=Object(o.a)({},(function(){return(0,this._self._c)("h3",{staticClass:"title-component"},[this._t("default")],2)}),[],!1,null,"4f45fb1e",null);e.default=component.exports},727:function(t,e,n){"use strict";n(723)},728:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".title-component[data-v-4f45fb1e]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:19px;font-style:normal;font-weight:700;line-height:normal;margin:0}",""]),o.locals={},t.exports=o},730:function(t,e,n){"use strict";n.r(e);var o={props:{addClass:{type:String,default:""}},computed:{computedClasses:function(){return this.addClass+" button"}}},r=(n(733),n(36)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("div",{class:t.computedClasses+" hover"},[t._t("default")],2)}),[],!1,null,"346bd5ea",null);e.default=component.exports},733:function(t,e,n){"use strict";n(725)},734:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".button[data-v-346bd5ea]{background:#e8f3ff;border:1px solid #4eaeea;border-radius:42px;color:#4eaeea;cursor:pointer;padding:10px;text-align:center}.btn-success-2[data-v-346bd5ea]{background:#e3f9e5;border:1px solid #18cb3f;color:#18cb3f}.btn-danger-2[data-v-346bd5ea]{background:#ffebe8;border:1px solid #c91919;color:#c91919}.hover[data-v-346bd5ea]{font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:20px;transition:.3s}.hover[data-v-346bd5ea]:hover{background:transparent}.btn-header[data-v-346bd5ea]{display:inline;padding:8px 28px}.btn-add-more-law[data-v-346bd5ea]{display:inline;font-size:20px;height:44px;text-align:center;width:44px}",""]),o.locals={},t.exports=o},856:function(t,e,n){var content=n(973);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("25ee803c",content,!0,{sourceMap:!1})},972:function(t,e,n){"use strict";n(856)},973:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".box-img-no[data-v-47983846]{border-radius:50%;height:48px;overflow:hidden;width:48px}.box-img-no img[data-v-47983846]{width:100%}.notification .card-notification[data-v-47983846]{background:#fff;border-radius:10px;display:flex;padding:15px;width:100%}.notification .card-notification .notification-title[data-v-47983846]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:18px;font-style:normal;font-weight:700;line-height:normal}.notification .card-notification .span1[data-v-47983846]{font-weight:400}.notification .card-notification .span1[data-v-47983846],.notification .card-notification .span2[data-v-47983846]{color:rgba(45,45,45,.8);font-family:SVN-Gilroy;font-size:14px;font-style:normal;line-height:20px}.notification .card-notification .span2[data-v-47983846]{font-weight:500}.notification .time[data-v-47983846]{color:#7d7d7d;flex:1;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:500;line-height:20px;min-width:-moz-fit-content;min-width:fit-content}.notification .br-bt[data-v-47983846]{border-bottom:1px solid #e5e5e5;width:100%}.notification .btn-type[data-v-47983846]{align-items:center;background:#e5e5e5;border-radius:46px;color:#2d2d2d;display:flex;flex-wrap:wrap;font-family:Inter;font-size:14px;font-style:normal;font-weight:500;justify-content:center;line-height:normal;margin-bottom:10px;margin-right:10px;padding:10px 28px;text-align:center;transition:.3s}.notification .active[data-v-47983846],.notification .btn-type[data-v-47983846]:hover{background:#fc4d32;color:#fff}@media(max-width:600px){.notification .btn-type[data-v-47983846]{margin-bottom:7px;margin-right:7px;padding:8px 25px}}",""]),o.locals={},t.exports=o}}]);