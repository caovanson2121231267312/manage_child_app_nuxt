(window.webpackJsonp=window.webpackJsonp||[]).push([[39,14,30],{1041:function(t,e,n){"use strict";n(893)},1042:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".blade-id[data-v-0b149ef4]{display:inline;display:initial}.box-img[data-v-0b149ef4]{border-radius:50%;height:55px;overflow:hidden;width:55px}.box-img img[data-v-0b149ef4]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}",""]),o.locals={},t.exports=o},1198:function(t,e,n){"use strict";n.r(e);var o=n(277),r=n(704),l=n(703),d=n(849),c=n(1151),v=n(1148),f=n(1147),h=n(715),_=n(803),m=n(13),x=(n(42),n(14),n(5),n(65)),w=(n(506),n(30)),C=n.n(w),y={layout:"admin",data:function(){return{title:{name:"Chi tiết lương nhân sự",previous:"/admin/dashboard/salary"},data:null,date:(new Date).toISOString().substr(0,7),month:1,menu:!1,modal:!1,select_date:""}},validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},computed:{id:function(){return this.$route.params.id},token:function(){return JSON.parse(localStorage.getItem("user")).auth_key}},methods:{change_page:function(){this.$router.push("/admin/dashboard/salary/"+this.id+"/create/"+this.date)},load_data:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.default.get("chi-luong/chi-tiet?thang=".concat(t.select_date,"&page=1&limit=&sort=&tuKhoa=&id=")+t.id,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n,o=null==e||null===(n=e.data)||void 0===n?void 0:n.data;t.data=o}));case 2:case"end":return e.stop()}}),e)})))()},send_data:function(t){var e=this;return Object(m.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),console.log(123),o=new FormData(document.getElementById("form")),n.next=5,x.default.post("admin-api/cap-nhat-quan-tri-vien",o,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+e.token}).then((function(t){var n;200==(null==t?void 0:t.status)&&(C.a.success(null==t||null===(n=t.data)||void 0===n?void 0:n.message),e.load_data())}));case 5:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.$store.dispatch("title/set_title",this.title);var t=this.date.split("-");this.select_date=t[1]+"/"+t[0],this.load_data()},watch:{date:function(){console.log(this.date);var t=this.date.split("-");this.select_date=t[1]+"/"+t[0]},select_date:function(){this.load_data()}}},k=(n(1041),n(36)),component=Object(k.a)(y,(function(){var t,e,n,m,x,w,C,y,k,j,E=this,O=E._self._c;return O("div",{staticClass:"content-mp"},[O(f.a,[O(d.a,{staticClass:"mt-0 pt-0",attrs:{xs:"12",sm:"12",md:"8",lg:"8",xl:"8"}},[O("div",{staticClass:"d-flex justify-content-between align-items-center mb-5"},[O("title-header",[E._v("Tổng lương theo tháng")]),E._v(" "),O("div",{staticClass:"d-inline-block"},[O("div",[O(v.a,{ref:"dialog",attrs:{"return-value":E.date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){E.date=t},"update:return-value":function(t){E.date=t}},scopedSlots:E._u([{key:"activator",fn:function(t){var e=t.on,n=t.attrs;return[O(_.a,E._g(E._b({staticClass:"month-picker",attrs:{label:"","prepend-icon":"mdi-calendar",readonly:""},model:{value:E.date,callback:function(t){E.date=t},expression:"date"}},"v-text-field",n,!1),e))]}}]),model:{value:E.modal,callback:function(t){E.modal=t},expression:"modal"}},[E._v(" "),O(c.a,{attrs:{type:"month",scrollable:""},model:{value:E.date,callback:function(t){E.date=t},expression:"date"}},[O(h.a),E._v(" "),O(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){E.modal=!1}}},[E._v("\n                                    Cancel\n                                ")]),E._v(" "),O(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return E.$refs.dialog.save(E.date)}}},[E._v("\n                                    OK\n                                ")])],1)],1)],1)])],1),E._v(" "),O("div",[O(r.a,[O(l.a,[O("div",[O("div",[O("div",{staticClass:"d-flex align-items-center"},[O("div",{staticClass:"box-img me-3"},[O("img",{attrs:{src:null===(t=E.data)||void 0===t?void 0:t.anh_nguoi_dung}})]),E._v(" "),O("div",[O("div",{staticClass:"blade blade-id"},[E._v("# "+E._s(null===(e=E.data)||void 0===e?void 0:e.id))]),E._v(" "),O("div",{staticClass:"user-name"},[E._v("\n                                            "+E._s(null!==(n=null===(m=E.data)||void 0===m?void 0:m.hoten)&&void 0!==n?n:"Chưa cập nhật tên")+"\n                                        ")]),E._v(" "),O("div",{},[O("span",{staticClass:"text-muted"},[E._v("\n                                                "+E._s(null!==(x=null===(w=E.data)||void 0===w?void 0:w.dien_thoai)&&void 0!==x?x:"Chưa cập")+"\n                                            ")])])])])]),E._v(" "),O("div",[O("table",{staticClass:"table table-light"},[O("tr",[O("td",[O("span",[E._v("Tổng lương")])]),E._v(" "),O("td",[O("span",[E._v(E._s(E.formatCurrency(null===(C=E.data)||void 0===C?void 0:C.tongLuong)))])])]),E._v(" "),O("tr",[O("td",[O("span",[E._v("Phụ cấp")])]),E._v(" "),O("td",[O("span",[E._v(E._s(E.formatCurrency(null===(y=E.data)||void 0===y?void 0:y.phuCap)))])])]),E._v(" "),O("tr",[O("td",[O("span",[E._v("Ăn trưa")])]),E._v(" "),O("td",[O("span",[E._v(E._s(E.formatCurrency(null===(k=E.data)||void 0===k?void 0:k.anTrua)))])])])])])])])],1)],1),E._v(" "),O("div",{staticClass:"w-100 mt-5",on:{click:function(t){return E.change_page()}}},[O("button-add",[O("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[O("path",{attrs:{d:"M5.60841 16.4166C6.29175 15.6833 7.33342 15.7416 7.93342 16.5416L8.77508 17.6666C9.45008 18.5583 10.5417 18.5583 11.2167 17.6666L12.0584 16.5416C12.6584 15.7416 13.7001 15.6833 14.3834 16.4166C15.8667 18 17.0751 17.475 17.0751 15.2583V5.86663C17.0834 2.50829 16.3001 1.66663 13.1501 1.66663H6.85008C3.70008 1.66663 2.91675 2.50829 2.91675 5.86663V15.25C2.91675 17.475 4.13341 17.9916 5.60841 16.4166Z",stroke:"#4EAEEA","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),E._v(" "),O("path",{attrs:{d:"M6.66675 5.83337H13.3334",stroke:"#4EAEEA","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),E._v(" "),O("path",{attrs:{d:"M7.5 9.16663H12.5",stroke:"#4EAEEA","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})]),E._v("\n                    Tạo phiếu lương\n                ")])],1),E._v(" "),O("div",{staticClass:"mt-6"},[O("title-header",[E._v("Báo cáo lương theo ngày")])],1),E._v(" "),O("div",{staticClass:"mt-4"},E._l(null===(j=E.data)||void 0===j?void 0:j.luong,(function(t,e){return O(r.a,{key:e,staticClass:"mt-3"},[O("div",{staticClass:"card-header"},[O("div",{staticClass:"d-flex"},[O("div",{staticClass:"me-5"},[O("b",{staticClass:"me-1"},[E._v("Mã đơn:")]),E._v(" "),O("span",[E._v(E._s(null==t?void 0:t.ma_don_hang))])]),E._v(" "),O("div",[O("b",{staticClass:"me-1"},[E._v("Ngày:")]),E._v(" "),O("span",{staticClass:"text-primary"},[E._v(E._s(null==t?void 0:t.created))])])])]),E._v(" "),O(l.a,[O("div",[O("table",{staticClass:"table table-borderless"},[O("thead"),E._v(" "),O("tbody",[O("tr",[O("td",[O("span",{staticClass:"me-2"},[O("svg",{attrs:{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[O("circle",{attrs:{cx:"5",cy:"5",r:"5",fill:"yellow"}})])]),E._v(" "),O("b",[E._v("Buổi")])]),E._v(" "),O("td",[E._v(E._s(null==t?void 0:t.buoi))])]),E._v(" "),O("tr",[O("td",[O("span",{staticClass:"me-2"},[O("svg",{attrs:{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[O("circle",{attrs:{cx:"5",cy:"5",r:"5",fill:"#00C092"}})])]),E._v(" "),O("b",[E._v("Lương")])]),E._v(" "),O("td",[E._v(E._s(E.formatCurrency(null==t?void 0:t.tong_tien)))])]),E._v(" "),O("tr",[O("td",[O("span",{staticClass:"me-2"},[O("svg",{attrs:{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[O("circle",{attrs:{cx:"5",cy:"5",r:"5",fill:"#FC4D32"}})])]),E._v(" "),O("b",[E._v("Phụ cấp/ngày")])]),E._v(" "),O("td",[E._v(E._s(E.formatCurrency(null==t?void 0:t.phuCap)))])]),E._v(" "),O("tr",[O("td",[O("span",{staticClass:"me-2"},[O("svg",{attrs:{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[O("circle",{attrs:{cx:"5",cy:"5",r:"5",fill:"#4EAEEA"}})])]),E._v(" "),O("b",[E._v("Tổng lương theo ngày")])]),E._v(" "),O("td",[O("b",{staticClass:"text-primary"},[E._v("\n                                                "+E._s(E.formatCurrency(null==t?void 0:t.thanh_tien))+"\n                                            ")])])])])])])])],1)})),1)])],1)],1)}),[],!1,null,"0b149ef4",null);e.default=component.exports;installComponents(component,{TitleHeader:n(726).default,ButtonAdd:n(730).default})},703:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(704),r=n(8),l=Object(r.i)("v-card__actions"),d=Object(r.i)("v-card__subtitle"),c=Object(r.i)("v-card__text"),v=Object(r.i)("v-card__title");o.a},723:function(t,e,n){var content=n(728);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("794e685a",content,!0,{sourceMap:!1})},725:function(t,e,n){var content=n(734);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7e2793ea",content,!0,{sourceMap:!1})},726:function(t,e,n){"use strict";n.r(e);n(727);var o=n(36),component=Object(o.a)({},(function(){return(0,this._self._c)("h3",{staticClass:"title-component"},[this._t("default")],2)}),[],!1,null,"4f45fb1e",null);e.default=component.exports},727:function(t,e,n){"use strict";n(723)},728:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".title-component[data-v-4f45fb1e]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:19px;font-style:normal;font-weight:700;line-height:normal;margin:0}",""]),o.locals={},t.exports=o},730:function(t,e,n){"use strict";n.r(e);var o={props:{addClass:{type:String,default:""}},computed:{computedClasses:function(){return this.addClass+" button"}}},r=(n(733),n(36)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("div",{class:t.computedClasses+" hover"},[t._t("default")],2)}),[],!1,null,"346bd5ea",null);e.default=component.exports},733:function(t,e,n){"use strict";n(725)},734:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".button[data-v-346bd5ea]{background:#e8f3ff;border:1px solid #4eaeea;border-radius:42px;color:#4eaeea;cursor:pointer;padding:10px;text-align:center}.btn-success-2[data-v-346bd5ea]{background:#e3f9e5;border:1px solid #18cb3f;color:#18cb3f}.btn-danger-2[data-v-346bd5ea]{background:#ffebe8;border:1px solid #c91919;color:#c91919}.hover[data-v-346bd5ea]{font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:20px;transition:.3s}.hover[data-v-346bd5ea]:hover{background:transparent}.btn-header[data-v-346bd5ea]{display:inline;padding:8px 28px}.btn-add-more-law[data-v-346bd5ea]{display:inline;font-size:20px;height:44px;text-align:center;width:44px}",""]),o.locals={},t.exports=o},893:function(t,e,n){var content=n(1042);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("0c8c8f61",content,!0,{sourceMap:!1})}}]);