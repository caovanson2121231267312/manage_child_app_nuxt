(window.webpackJsonp=window.webpackJsonp||[]).push([[34,15,30],{1106:function(t,n,e){"use strict";e(923)},1107:function(t,n,e){var l=e(21)((function(i){return i[1]}));l.push([t.i,".layout-user-complain[data-v-2e9f8322]{border-radius:50%;height:70px;overflow:hidden;width:70px}.layout-user-complain img[data-v-2e9f8322]{-o-object-fit:cover;object-fit:cover;width:100%}svg[data-v-2e9f8322]{margin-right:5px}.text-input[data-v-2e9f8322]{background:#fff;border:1px solid #e5e5e5;border-radius:10px}.title-complain[data-v-2e9f8322]{font-weight:700}.span1[data-v-2e9f8322],.title-complain[data-v-2e9f8322]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;font-style:normal;line-height:normal}.span1[data-v-2e9f8322]{align-items:start;display:flex;font-weight:400}.span1 p[data-v-2e9f8322]{margin-left:6px}.p-text[data-v-2e9f8322]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:500;line-height:18px}tr td[data-v-2e9f8322]{padding-bottom:10px}.complain-detail .lauout-user-complain[data-v-2e9f8322]{border-radius:50%;height:48px;overflow:hidden;width:48px}.complain-detail .lauout-user-complain img[data-v-2e9f8322]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.complain-detail .btn-call[data-v-2e9f8322]{background:#0056b1;border-radius:50px;color:#fff;font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:120%;padding:13px 5px;text-align:center;width:48%}.complain-detail .btn-call svg[data-v-2e9f8322]{left:5px;position:absolute;top:3px}.complain-detail .btn-chat[data-v-2e9f8322]{background:#00c092;border-radius:50px;color:#fff;font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:120%;padding:13px 5px;text-align:center;width:48%}.complain-detail .btn-chat svg[data-v-2e9f8322]{left:5px;position:absolute;top:3px}.complain-detail .input-check[data-v-2e9f8322]{height:30px;width:30px}",""]),l.locals={},t.exports=l},1232:function(t,n,e){"use strict";e.r(n);var l=e(849),o=e(1147),r=e(13),d=(e(42),e(14),e(5),e(65)),C=(e(506),e(30)),c=e.n(C),h={layout:"admin",data:function(){return{title:{name:"Chi tiết phản hồi",previous:"/admin/complain"},data:null,phan_hoi:null,xac_nhan:!1}},validate:function(t){var n=t.params;return/^\d+$/.test(n.id)},computed:{id:function(){return this.$route.params.id},token:function(){return JSON.parse(localStorage.getItem("user")).auth_key}},methods:{shortenedText:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return 0==t.length?"":t.length<=n?t:t.substring(0,n)+"..."},load_data:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.default.get("khieu-nai/chi-tiet-phan-hoi?phan_hoi_id="+t.id,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(n){var e,l=null==n||null===(e=n.data)||void 0===e?void 0:e.data;t.data=l,t.xac_nhan="Chưa xử lý"!=(null==l?void 0:l.tinh_trang),t.xac_nhan="Chưa xử lý"!=(null==l?void 0:l.tinh_trang)}));case 2:case"end":return n.stop()}}),n)})))()},send_data:function(t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=new FormData).append("phan_hoi_id",n.id),e.append("phan_hoi",n.phan_hoi),e.append("xac_nhan",n.xac_nhan?1:0),t.next=6,d.default.post("khieu-nai/cap-nhat-xu-ly-phan-hoi",e,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+n.token}).then((function(t){var e;200==(null==t?void 0:t.status)&&(c.a.success(null==t||null===(e=t.data)||void 0===e?void 0:e.message),n.load_data())}));case 6:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.$store.dispatch("title/set_title",this.title),this.load_data()}},v=h,f=(e(1106),e(36)),component=Object(f.a)(v,(function(){var t,n,e,r,d,C,c,h,v=this,f=v._self._c;return f("div",{staticClass:"content-mp complain-detail"},[f("div",{staticClass:"d-flex align-items-center justify-content-between wmt-27"},[f("title-header",[f("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[f("circle",{attrs:{cx:"12",cy:"12",r:"12",fill:"#0056B1","fill-opacity":"0.2"}}),v._v(" "),f("path",{attrs:{d:"M15.6692 14.1312C16.1782 13.7945 16.8466 14.1618 16.8466 14.774V15.7611C16.8466 16.733 16.0946 17.7737 15.1907 18.0798L12.7676 18.891C12.3423 19.0363 11.651 19.0363 11.2333 18.891L8.81019 18.0798C7.89869 17.7737 7.1543 16.733 7.1543 15.7611V14.7663C7.1543 14.1618 7.82273 13.7945 8.32406 14.1235L9.8888 15.1489C10.4889 15.5545 11.2485 15.7535 12.008 15.7535C12.7676 15.7535 13.5272 15.5545 14.1273 15.1489L15.6692 14.1312Z",fill:"#0056B1"}}),v._v(" "),f("path",{attrs:{d:"M17.9452 8.13048L13.4882 5.37355C12.6845 4.87548 11.3601 4.87548 10.5565 5.37355L6.07706 8.13048C4.64098 9.00737 4.64098 10.9926 6.07706 11.8765L7.2676 12.6061L10.5565 14.6264C11.3601 15.1245 12.6845 15.1245 13.4882 14.6264L16.7547 12.6061L17.7741 11.9747V14.1214C17.7741 14.409 18.0271 14.6475 18.3321 14.6475C18.6372 14.6475 18.8902 14.409 18.8902 14.1214V10.6699C19.1878 9.76499 18.8828 8.71273 17.9452 8.13048Z",fill:"#0056B1"}})]),v._v(" "),f("span",{staticClass:"ms-1"},[v._v("\n                Thông tin khách hàng\n            ")])])],1),v._v(" "),f(o.a,[f(l.a,{staticClass:"mt-0 pt-0",attrs:{xs:"12",sm:"12",md:"8",lg:"7",xl:"6"}},[f("b-card",{staticStyle:{"min-width":"245px"}},[f("div",{staticClass:"block w-100 teachers teacher-detail"},[f("div",{staticClass:"w-100"},[f("div",{staticClass:"d-flex align-items-center card-body-p-16 mb-4"},[f("div",{staticClass:"d-flex align-items-center"},[f("div",{staticClass:"me-2 layout-user-complain"},[f("img",{attrs:{src:null===(t=v.data)||void 0===t||null===(t=t.phuHuynh)||void 0===t?void 0:t.anh_nguoi_dung}})]),v._v(" "),f("div",[f("h3",{staticClass:"user-name"},[v._v("\n                                        "+v._s(null===(n=v.data)||void 0===n||null===(n=n.phuHuynh)||void 0===n?void 0:n.hoten)+"\n                                    ")]),v._v(" "),f("p",{staticClass:"w-p p-0 m-0"},[v._v("\n                                        Phụ huynh\n                                    ")])])])]),v._v(" "),f("div",{staticClass:"card-body-p-16 w-100 pt-0 mb-4"},[f("table",{staticClass:"w-100"},[f("tbody",[f("tr",[f("td",[f("div",{staticClass:"span1",staticStyle:{"min-width":"94px"}},[f("span",[f("svg",{attrs:{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[f("rect",{attrs:{x:"0.5",y:"0.5",width:"11",height:"13",rx:"2.5",fill:"#FC4D32",stroke:"#FC4D32"}}),v._v(" "),f("path",{attrs:{d:"M9 10H3",stroke:"white"}})])]),v._v(" "),f("span",{staticClass:"p"},[v._v("\n                                                    Điện thoại\n                                                ")])])]),v._v(" "),f("td",[f("div",{staticClass:"w-100 p-text"},[v._v("\n                                                "+v._s(null===(e=v.data)||void 0===e||null===(e=e.phuHuynh)||void 0===e?void 0:e.dien_thoai)+"\n                                            ")])])]),v._v(" "),f("tr",[f("td",[f("div",{staticClass:"span1 d-flex"},[f("span",{staticClass:"me-1"},[f("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"15",viewBox:"0 0 12 15",fill:"none"}},[f("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.40885 13.9009C7.76056 13.1677 12 10.5217 12 6.17321C12 2.76384 9.31371 0 6 0C2.68629 0 0 2.76384 0 6.17321C0 10.5217 4.23944 13.1677 5.59115 13.9009C5.84812 14.0403 6.15188 14.0403 6.40885 13.9009ZM5.99985 8.81888C7.42001 8.81888 8.57128 7.63437 8.57128 6.17321C8.57128 4.71205 7.42001 3.52755 5.99985 3.52755C4.57969 3.52755 3.42842 4.71205 3.42842 6.17321C3.42842 7.63437 4.57969 8.81888 5.99985 8.81888Z",fill:"#FFB761"}})])]),v._v(" "),f("span",{staticClass:"p"},[v._v("\n                                                    Thời gian\n                                                ")])])]),v._v(" "),f("td",[f("div",{staticClass:"w-100 p-text"},[v._v("\n                                                "+v._s(null===(r=v.data)||void 0===r?void 0:r.created)+"\n                                            ")])])]),v._v(" "),f("tr",[f("td",[f("div",{staticClass:"span1"},[f("span",[f("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"}},[f("path",{attrs:{d:"M9 0H3C1.344 0 0 1.33867 0 2.98949V6.57929V7.17959C0 8.83041 1.344 10.1691 3 10.1691H3.9C4.062 10.1691 4.278 10.2771 4.38 10.4092L5.28 11.6038C5.676 12.1321 6.324 12.1321 6.72 11.6038L7.62 10.4092C7.734 10.2591 7.914 10.1691 8.1 10.1691H9C10.656 10.1691 12 8.83041 12 7.17959V2.98949C12 1.33867 10.656 0 9 0ZM3.6 6.003C3.264 6.003 3 5.73287 3 5.4027C3 5.07254 3.27 4.8024 3.6 4.8024C3.93 4.8024 4.2 5.07254 4.2 5.4027C4.2 5.73287 3.936 6.003 3.6 6.003ZM6 6.003C5.664 6.003 5.4 5.73287 5.4 5.4027C5.4 5.07254 5.67 4.8024 6 4.8024C6.33 4.8024 6.6 5.07254 6.6 5.4027C6.6 5.73287 6.336 6.003 6 6.003ZM8.4 6.003C8.064 6.003 7.8 5.73287 7.8 5.4027C7.8 5.07254 8.07 4.8024 8.4 4.8024C8.73 4.8024 9 5.07254 9 5.4027C9 5.73287 8.736 6.003 8.4 6.003Z",fill:"#4EAEEA"}})])]),v._v(" "),f("span",{staticClass:"p"},[v._v("\n                                                    Phản hồi\n                                                ")])])]),v._v(" "),f("td",[f("div",{staticClass:"w-100 p-text"},[v._v("\n                                                "+v._s(null===(d=v.data)||void 0===d?void 0:d.noi_dung)+"\n                                            ")])])]),v._v(" "),f("tr",[f("td",[f("div",{staticClass:"span1"},[f("span",[f("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"}},[f("path",{attrs:{d:"M8.4 0H3.6C1.2 0 0 1.2 0 3.6V11.4C0 11.73 0.27 12 0.6 12H8.4C10.8 12 12 10.8 12 8.4V3.6C12 1.2 10.8 0 8.4 0ZM5.466 8.796C5.316 8.946 5.04 9.084 4.836 9.114L3.588 9.288C3.54 9.294 3.492 9.3 3.45 9.3C3.24 9.3 3.048 9.228 2.91 9.09C2.742 8.922 2.67 8.676 2.712 8.412L2.886 7.164C2.916 6.96 3.054 6.678 3.204 6.534L5.466 4.272C5.502 4.38 5.55 4.488 5.604 4.608C5.658 4.716 5.712 4.824 5.772 4.926C5.82 5.01 5.874 5.094 5.922 5.154C5.982 5.244 6.042 5.322 6.084 5.364C6.108 5.4 6.132 5.424 6.138 5.436C6.27 5.586 6.408 5.73 6.54 5.838C6.576 5.874 6.6 5.892 6.606 5.898C6.684 5.958 6.756 6.024 6.828 6.066C6.906 6.126 6.99 6.18 7.074 6.228C7.176 6.288 7.284 6.348 7.398 6.402C7.512 6.456 7.62 6.498 7.728 6.534L5.466 8.796ZM8.73 5.538L8.262 6.006C8.232 6.036 8.19 6.054 8.148 6.054C8.136 6.054 8.112 6.054 8.1 6.048C7.068 5.754 6.246 4.932 5.952 3.9C5.934 3.846 5.952 3.786 5.994 3.744L6.468 3.27C7.242 2.496 7.974 2.514 8.73 3.27C9.114 3.654 9.306 4.026 9.3 4.41C9.3 4.788 9.114 5.154 8.73 5.538Z",fill:"#00C092"}})])]),v._v(" "),f("span",{staticClass:"p"},[v._v("\n                                                    Tình trạng\n                                                ")])])]),v._v(" "),"Chưa xử lý"==(null===(C=v.data)||void 0===C?void 0:C.tinh_trang)?f("td",[f("div",{staticClass:"w-100 p-text"},[f("svg",{attrs:{width:"94",height:"23",viewBox:"0 0 94 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[f("path",{attrs:{d:"M9.00964 1.62922C9.95699 0.591332 11.2974 0 12.7026 0H89C91.7614 0 94 2.23858 94 5V18C94 20.7614 91.7614 23 89 23H12.7026C11.2974 23 9.95699 22.4087 9.00964 21.3708L3.0767 14.8708C1.33397 12.9615 1.33397 10.0385 3.07671 8.12922L9.00964 1.62922Z",fill:"#FFA02F"}}),v._v(" "),f("path",{attrs:{d:"M21.656 15.182C20.172 15.182 18.94 14.692 17.974 13.712C17.008 12.732 16.532 11.528 16.532 10.1C16.532 8.672 17.008 7.468 17.974 6.488C18.94 5.508 20.172 5.018 21.656 5.018C23.448 5.018 25.044 5.942 25.884 7.398L24.75 8.056C24.19 6.978 23 6.278 21.656 6.278C20.522 6.278 19.598 6.642 18.884 7.37C18.17 8.098 17.82 9.008 17.82 10.1C17.82 11.178 18.17 12.088 18.884 12.816C19.598 13.544 20.522 13.908 21.656 13.908C23 13.908 24.19 13.208 24.75 12.144L25.884 12.788C25.478 13.516 24.89 14.104 24.134 14.538C23.378 14.972 22.552 15.182 21.656 15.182ZM30.7596 7.818C32.3976 7.818 33.4756 8.924 33.4756 10.702V15H32.2576V10.772C32.2576 9.638 31.5996 8.98 30.5216 8.98C29.3036 8.98 28.4916 9.722 28.4916 11.29V15H27.2736V5.2H28.4916V9.008C28.9816 8.21 29.7376 7.818 30.7596 7.818ZM41.28 7.132V6.964H42.358V7.132C42.358 8.14 42.078 8.714 41.224 8.882V15H40.006V13.992C39.516 14.79 38.76 15.182 37.738 15.182C36.1 15.182 35.022 14.076 35.022 12.298V8H36.24V12.228C36.24 13.362 36.898 14.02 37.976 14.02C39.194 14.02 40.006 13.278 40.006 11.71V8H40.566C41.182 8 41.28 7.748 41.28 7.132ZM48.8743 9.204V8H50.0923V15H48.8743V13.796C48.2723 14.72 47.3903 15.182 46.2283 15.182C45.2483 15.182 44.4083 14.832 43.7223 14.118C43.0363 13.404 42.6863 12.522 42.6863 11.5C42.6863 10.478 43.0363 9.61 43.7223 8.896C44.4083 8.182 45.2483 7.818 46.2283 7.818C47.3903 7.818 48.2723 8.28 48.8743 9.204ZM46.3823 14.006C47.0963 14.006 47.6843 13.768 48.1603 13.292C48.6363 12.802 48.8743 12.214 48.8743 11.5C48.8743 10.786 48.6363 10.198 48.1603 9.722C47.6843 9.232 47.0963 8.994 46.3823 8.994C45.6823 8.994 45.0943 9.232 44.6183 9.722C44.1423 10.198 43.9043 10.786 43.9043 11.5C43.9043 12.214 44.1423 12.802 44.6183 13.292C45.0943 13.768 45.6823 14.006 46.3823 14.006ZM58.8397 11.388L61.5137 15H60.0857L58.1257 12.354L56.1517 15H54.7237L57.4117 11.402L54.8777 8H56.3197L58.1257 10.436L59.9317 8H61.3597L58.8397 11.388ZM66.0868 7.09H65.2328C65.2328 6.474 65.2468 6.334 65.5128 6.124C65.5128 6.124 65.7228 5.998 65.7368 5.984C65.8208 5.942 66.0028 5.858 66.0028 5.634C66.0028 5.494 65.8908 5.396 65.6528 5.396C65.4008 5.396 65.1208 5.494 65.0088 5.83L64.2248 5.494C64.4908 4.836 65.0368 4.57 65.6528 4.57C66.3108 4.57 66.8568 4.906 66.8568 5.62C66.8568 6.152 66.6048 6.46 66.3388 6.6C66.1568 6.684 66.0448 6.768 66.0868 7.09ZM68.7468 7.132V6.964H69.8248V7.132C69.8248 8.14 69.5448 8.714 68.6908 8.882V15H67.4728V13.992C66.9828 14.79 66.2268 15.182 65.2048 15.182C63.5667 15.182 62.4888 14.076 62.4888 12.298V8H63.7068V12.228C63.7068 13.362 64.3648 14.02 65.4428 14.02C66.6608 14.02 67.4728 13.278 67.4728 11.71V8H68.0328C68.6488 8 68.7468 7.748 68.7468 7.132ZM75.2631 15H74.0451V4.78H75.2631V15ZM80.2153 5.2H81.6853L80.2713 7.048H79.0953L80.2153 5.2ZM79.9913 13.488L82.0073 8H83.3093L80.4533 15.434C79.8513 17.016 78.7453 17.898 77.3453 17.8V16.666C78.1993 16.736 78.8293 16.26 79.2353 15.238L79.3613 14.972L76.3093 8H77.6113L79.9913 13.488Z",fill:"white"}})])])]):f("td",[f("div",{staticClass:"w-100 p-text"},[f("svg",{attrs:{width:"78",height:"23",viewBox:"0 0 78 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[f("path",{attrs:{d:"M9.00964 1.62922C9.95699 0.591332 11.2974 0 12.7026 0H73C75.7614 0 78 2.23858 78 5V18C78 20.7614 75.7614 23 73 23H12.7026C11.2974 23 9.95699 22.4087 9.00964 21.3708L3.0767 14.8708C1.33397 12.9615 1.33397 10.0385 3.07671 8.12922L9.00964 1.62922Z",fill:"#00C092"}}),v._v(" "),f("path",{attrs:{d:"M17.4 5.2H21.222C22.552 5.2 23.658 5.676 24.54 6.628C25.422 7.566 25.87 8.728 25.87 10.1C25.87 11.472 25.422 12.634 24.54 13.586C23.658 14.524 22.552 15 21.222 15H17.4V10.786H16.518V9.666H17.4V5.2ZM18.702 13.768H21.222C22.216 13.768 23.042 13.418 23.672 12.718C24.302 12.018 24.624 11.15 24.624 10.1C24.624 9.05 24.302 8.182 23.672 7.482C23.042 6.782 22.216 6.432 21.222 6.432H18.702V9.666H21.166V10.786H18.702V13.768ZM31.0943 6.642C30.4223 6.082 30.0863 6.068 30.0863 6.978H29.0643C29.0643 5.102 30.1843 4.85 31.2203 5.592C31.9063 6.152 32.2283 6.166 32.2283 5.27H33.2503C33.2503 7.132 32.1583 7.384 31.0943 6.642ZM33.1243 9.204V8H34.3423V15H33.1243V13.796C32.5223 14.72 31.6403 15.182 30.4783 15.182C29.4983 15.182 28.6583 14.832 27.9723 14.118C27.2863 13.404 26.9363 12.522 26.9363 11.5C26.9363 10.478 27.2863 9.61 27.9723 8.896C28.6583 8.182 29.4983 7.818 30.4783 7.818C31.6403 7.818 32.5223 8.28 33.1243 9.204ZM30.6323 14.006C31.3463 14.006 31.9343 13.768 32.4103 13.292C32.8863 12.802 33.1243 12.214 33.1243 11.5C33.1243 10.786 32.8863 10.198 32.4103 9.722C31.9343 9.232 31.3463 8.994 30.6323 8.994C29.9323 8.994 29.3443 9.232 28.8683 9.722C28.3923 10.198 28.1543 10.786 28.1543 11.5C28.1543 12.214 28.3923 12.802 28.8683 13.292C29.3443 13.768 29.9323 14.006 30.6323 14.006ZM43.0897 11.388L45.7637 15H44.3357L42.3757 12.354L40.4017 15H38.9737L41.6617 11.402L39.1277 8H40.5697L42.3757 10.436L44.1817 8H45.6097L43.0897 11.388ZM50.3368 7.09H49.4828C49.4828 6.474 49.4968 6.334 49.7628 6.124C49.7628 6.124 49.9728 5.998 49.9868 5.984C50.0708 5.942 50.2528 5.858 50.2528 5.634C50.2528 5.494 50.1408 5.396 49.9028 5.396C49.6508 5.396 49.3708 5.494 49.2588 5.83L48.4748 5.494C48.7408 4.836 49.2868 4.57 49.9028 4.57C50.5608 4.57 51.1068 4.906 51.1068 5.62C51.1068 6.152 50.8548 6.46 50.5888 6.6C50.4068 6.684 50.2948 6.768 50.3368 7.09ZM52.9968 7.132V6.964H54.0748V7.132C54.0748 8.14 53.7948 8.714 52.9408 8.882V15H51.7228V13.992C51.2328 14.79 50.4768 15.182 49.4548 15.182C47.8167 15.182 46.7388 14.076 46.7388 12.298V8H47.9568V12.228C47.9568 13.362 48.6148 14.02 49.6928 14.02C50.9108 14.02 51.7228 13.278 51.7228 11.71V8H52.2828C52.8988 8 52.9968 7.748 52.9968 7.132ZM59.5131 15H58.2951V4.78H59.5131V15ZM64.4653 5.2H65.9353L64.5213 7.048H63.3453L64.4653 5.2ZM64.2413 13.488L66.2573 8H67.5593L64.7033 15.434C64.1013 17.016 62.9953 17.898 61.5953 17.8V16.666C62.4493 16.736 63.0793 16.26 63.4853 15.238L63.6113 14.972L60.5593 8H61.8613L64.2413 13.488Z",fill:"white"}})])])])])])])]),v._v(" "),f("div",{staticClass:"br-top"}),v._v(" "),f("div",{staticClass:"d-flex align-items-center justify-content-between card-body-p-16"},[f("a",{staticClass:"btn btn-call position-relative",attrs:{href:"tel:+"+(null===(c=v.data)||void 0===c||null===(c=c.phuHuynh)||void 0===c?void 0:c.dien_thoai)}},[f("svg",{attrs:{width:"38",height:"38",viewBox:"0 0 38 38",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[f("circle",{attrs:{cx:"19",cy:"19",r:"19",fill:"white","fill-opacity":"0.3"}}),v._v(" "),f("path",{attrs:{d:"M11.6796 9.84669L12.8192 8.70711C13.2097 8.31658 13.8429 8.31658 14.2334 8.70711L17.2403 11.7139C17.6308 12.1045 17.6308 12.7376 17.2403 13.1282L15.1847 15.1837C14.8544 15.514 14.7725 16.0187 14.9814 16.4365C16.1892 18.8521 18.1479 20.8108 20.5635 22.0186C20.9813 22.2275 21.486 22.1456 21.8163 21.8153L23.8718 19.7597C24.2624 19.3692 24.8955 19.3692 25.2861 19.7597L28.2929 22.7666C28.6834 23.1571 28.6834 23.7903 28.2929 24.1808L27.1533 25.3204C25.042 27.4317 21.6994 27.6693 19.3107 25.8777L17.2602 24.3398C15.5166 23.0322 13.9678 21.4834 12.6602 19.7399L11.1223 17.6893C9.33072 15.3006 9.56827 11.958 11.6796 9.84669Z",fill:"white"}})]),v._v(" "),f("span",[v._v("Gọi điện")])]),v._v(" "),f("a",{staticClass:"btn btn-chat position-relative",attrs:{href:"sms:+"+(null===(h=v.data)||void 0===h||null===(h=h.phuHuynh)||void 0===h?void 0:h.dien_thoai)+"?body=Xin chào"}},[f("svg",{attrs:{width:"38",height:"38",viewBox:"0 0 38 38",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[f("circle",{attrs:{cx:"19",cy:"19",r:"19",fill:"white","fill-opacity":"0.3"}}),v._v(" "),f("path",{attrs:{opacity:"0.4",d:"M29 13.25V18.35C29 19.62 28.58 20.69 27.83 21.43C27.09 22.18 26.02 22.6 24.75 22.6V24.41C24.75 25.09 23.99 25.5 23.43 25.12L22.46 24.48C22.55 24.17 22.59 23.83 22.59 23.47V19.4C22.59 17.36 21.23 16 19.19 16H12.4C12.26 16 12.13 16.01 12 16.02V13.25C12 10.7 13.7 9 16.25 9H24.75C27.3 9 29 10.7 29 13.25Z",fill:"white"}}),v._v(" "),f("path",{attrs:{d:"M22.59 19.4V23.47C22.59 23.83 22.55 24.17 22.46 24.48C22.09 25.95 20.87 26.87 19.19 26.87H16.47L13.45 28.88C13 29.19 12.4 28.86 12.4 28.32V26.87C11.38 26.87 10.53 26.53 9.94 25.94C9.34 25.34 9 24.49 9 23.47V19.4C9 17.5 10.18 16.19 12 16.02C12.13 16.01 12.26 16 12.4 16H19.19C21.23 16 22.59 17.36 22.59 19.4Z",fill:"white"}})]),v._v(" "),f("span",[v._v("Nhắn tin")])])])])])]),v._v(" "),f("b-card",{staticClass:"my-6",staticStyle:{"min-width":"245px"}},[f("div",{staticClass:"block w-100 teachers teacher-detail"},[f("div",{staticClass:"card-body-p-16"},[f("div",{staticClass:"d-flex"},[f("label",{staticClass:"m-0 p-0 d-block w-100 d-flex justify-content-between align-items-center",attrs:{for:"check"}},[f("span",[v._v("Hoàn tất xử lý phản hồi")]),v._v(" "),f("span",{staticClass:"center"},[f("input",{staticClass:"input-check",attrs:{id:"check",type:"checkbox"}})])])])])])]),v._v(" "),f("div",{staticClass:"mb-5"},[f("div",{staticClass:"title-complain mb-2"},[f("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[f("path",{attrs:{d:"M8.4 0H3.6C1.2 0 0 1.2 0 3.6V11.4C0 11.73 0.27 12 0.6 12H8.4C10.8 12 12 10.8 12 8.4V3.6C12 1.2 10.8 0 8.4 0ZM5.466 8.796C5.316 8.946 5.04 9.084 4.836 9.114L3.588 9.288C3.54 9.294 3.492 9.3 3.45 9.3C3.24 9.3 3.048 9.228 2.91 9.09C2.742 8.922 2.67 8.676 2.712 8.412L2.886 7.164C2.916 6.96 3.054 6.678 3.204 6.534L5.466 4.272C5.502 4.38 5.55 4.488 5.604 4.608C5.658 4.716 5.712 4.824 5.772 4.926C5.82 5.01 5.874 5.094 5.922 5.154C5.982 5.244 6.042 5.322 6.084 5.364C6.108 5.4 6.132 5.424 6.138 5.436C6.27 5.586 6.408 5.73 6.54 5.838C6.576 5.874 6.6 5.892 6.606 5.898C6.684 5.958 6.756 6.024 6.828 6.066C6.906 6.126 6.99 6.18 7.074 6.228C7.176 6.288 7.284 6.348 7.398 6.402C7.512 6.456 7.62 6.498 7.728 6.534L5.466 8.796ZM8.73 5.538L8.262 6.006C8.232 6.036 8.19 6.054 8.148 6.054C8.136 6.054 8.112 6.054 8.1 6.048C7.068 5.754 6.246 4.932 5.952 3.9C5.934 3.846 5.952 3.786 5.994 3.744L6.468 3.27C7.242 2.496 7.974 2.514 8.73 3.27C9.114 3.654 9.306 4.026 9.3 4.41C9.3 4.788 9.114 5.154 8.73 5.538Z",fill:"#4EAEEA"}})]),v._v("\n                    Kết quả xử lý\n                ")]),v._v(" "),f("div",[f("textarea",{staticClass:"form-control text-input",attrs:{placeholder:"Nhập thông tin "}})])]),v._v(" "),f("div",{staticClass:"mt-7"},[f("button-component",[v._v("Lưu")])],1)],1)],1)],1)}),[],!1,null,"2e9f8322",null);n.default=component.exports;installComponents(component,{TitleHeader:e(726).default,ButtonComponent:e(729).default})},723:function(t,n,e){var content=e(728);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("794e685a",content,!0,{sourceMap:!1})},724:function(t,n,e){var content=e(732);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("6ef7f2ae",content,!0,{sourceMap:!1})},726:function(t,n,e){"use strict";e.r(n);e(727);var l=e(36),component=Object(l.a)({},(function(){return(0,this._self._c)("h3",{staticClass:"title-component"},[this._t("default")],2)}),[],!1,null,"4f45fb1e",null);n.default=component.exports},727:function(t,n,e){"use strict";e(723)},728:function(t,n,e){var l=e(21)((function(i){return i[1]}));l.push([t.i,".title-component[data-v-4f45fb1e]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:19px;font-style:normal;font-weight:700;line-height:normal;margin:0}",""]),l.locals={},t.exports=l},729:function(t,n,e){"use strict";e.r(n);var l=e(277),o={props:{addClass:{type:String,default:""},typeBtn:{type:String,default:"button"}},computed:{computedClasses:function(){return""==this.addClass?"primary button":this.addClass+" button"}}},r=(e(731),e(36)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)(l.a,{class:t.computedClasses+" hover",attrs:{height:"100%",type:t.typeBtn}},[t._t("default")],2)}),[],!1,null,"8383f84e",null);n.default=component.exports},731:function(t,n,e){"use strict";e(724)},732:function(t,n,e){var l=e(21)((function(i){return i[1]}));l.push([t.i,".button[data-v-8383f84e]{border-radius:42px;color:#fff!important;cursor:pointer;font-family:SVN-Gilroy!important;font-size:16px!important;font-style:normal!important;font-weight:500!important;padding:12px!important;text-align:center!important;transition:.3s;width:100%!important}.danger[data-v-8383f84e]{background:#fc4d32;border:1px solid #fc4d32!important}.danger[data-v-8383f84e]:hover{background:#e7371c}.silver[data-v-8383f84e]{background:#e5e5e5!important;color:#2d2d2d!important}.silver[data-v-8383f84e]:hover{background:#9c9c9c}.primary[data-v-8383f84e]{background:#0056b1!important;border:1px solid #0056b1!important}.primary[data-v-8383f84e]:hover{background:#004691!important}.hover[data-v-8383f84e]{font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:20px;transition:.3s}.btn-header[data-v-8383f84e]{display:inline;padding:8px 28px}",""]),l.locals={},t.exports=l},923:function(t,n,e){var content=e(1107);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("25db8655",content,!0,{sourceMap:!1})}}]);