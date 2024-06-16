import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f98aef4e = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _47ec19b0 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _6c35defd = () => interopDefault(import('../pages/admin/complain/index.vue' /* webpackChunkName: "pages/admin/complain/index" */))
const _56ab6cd4 = () => interopDefault(import('../pages/admin/dashboard/index.vue' /* webpackChunkName: "pages/admin/dashboard/index" */))
const _cd46fda4 = () => interopDefault(import('../pages/admin/materials/index.vue' /* webpackChunkName: "pages/admin/materials/index" */))
const _57bde43a = () => interopDefault(import('../pages/admin/medias/index.vue' /* webpackChunkName: "pages/admin/medias/index" */))
const _749a3002 = () => interopDefault(import('../pages/admin/notification/index.vue' /* webpackChunkName: "pages/admin/notification/index" */))
const _1faddf8e = () => interopDefault(import('../pages/admin/orders/index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _a26ca8ea = () => interopDefault(import('../pages/admin/parents/index.vue' /* webpackChunkName: "pages/admin/parents/index" */))
const _056eed8f = () => interopDefault(import('../pages/admin/review-lesson/index.vue' /* webpackChunkName: "pages/admin/review-lesson/index" */))
const _52278392 = () => interopDefault(import('../pages/admin/service/index.vue' /* webpackChunkName: "pages/admin/service/index" */))
const _4b9bb4ec = () => interopDefault(import('../pages/admin/students/index.vue' /* webpackChunkName: "pages/admin/students/index" */))
const _79cdc879 = () => interopDefault(import('../pages/admin/teacher-training/index.vue' /* webpackChunkName: "pages/admin/teacher-training/index" */))
const _494b1628 = () => interopDefault(import('../pages/admin/videos/index.vue' /* webpackChunkName: "pages/admin/videos/index" */))
const _a8794b66 = () => interopDefault(import('../pages/admin/dashboard/customer_reports/index.vue' /* webpackChunkName: "pages/admin/dashboard/customer_reports/index" */))
const _3d2ba88e = () => interopDefault(import('../pages/admin/dashboard/salary/index.vue' /* webpackChunkName: "pages/admin/dashboard/salary/index" */))
const _2394fe76 = () => interopDefault(import('../pages/admin/dashboard/sales_report/index.vue' /* webpackChunkName: "pages/admin/dashboard/sales_report/index" */))
const _9bd19322 = () => interopDefault(import('../pages/admin/dashboard/user_report/index.vue' /* webpackChunkName: "pages/admin/dashboard/user_report/index" */))
const _7d1ade43 = () => interopDefault(import('../pages/admin/lsm/result-training/index.vue' /* webpackChunkName: "pages/admin/lsm/result-training/index" */))
const _55e5a556 = () => interopDefault(import('../pages/admin/lsm/students/index.vue' /* webpackChunkName: "pages/admin/lsm/students/index" */))
const _334e703c = () => interopDefault(import('../pages/admin/lsm/teacher-training/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/index" */))
const _04908c5a = () => interopDefault(import('../pages/admin/materials/create/index.vue' /* webpackChunkName: "pages/admin/materials/create/index" */))
const _daedc572 = () => interopDefault(import('../pages/admin/materials/create_bg/index.vue' /* webpackChunkName: "pages/admin/materials/create_bg/index" */))
const _7532677e = () => interopDefault(import('../pages/admin/medias/create/index.vue' /* webpackChunkName: "pages/admin/medias/create/index" */))
const _04d511b0 = () => interopDefault(import('../pages/admin/my/notification/index.vue' /* webpackChunkName: "pages/admin/my/notification/index" */))
const _294f943c = () => interopDefault(import('../pages/admin/notification/create/index.vue' /* webpackChunkName: "pages/admin/notification/create/index" */))
const _2fad8f30 = () => interopDefault(import('../pages/admin/orders/create/index.vue' /* webpackChunkName: "pages/admin/orders/create/index" */))
const _574733fe = () => interopDefault(import('../pages/admin/review-lesson/form-review/index.vue' /* webpackChunkName: "pages/admin/review-lesson/form-review/index" */))
const _1653f0aa = () => interopDefault(import('../pages/admin/service/create/index.vue' /* webpackChunkName: "pages/admin/service/create/index" */))
const _0ba87455 = () => interopDefault(import('../pages/admin/students/create/index.vue' /* webpackChunkName: "pages/admin/students/create/index" */))
const _3f23df7e = () => interopDefault(import('../pages/admin/system/about/index.vue' /* webpackChunkName: "pages/admin/system/about/index" */))
const _517b488e = () => interopDefault(import('../pages/admin/system/banner/index.vue' /* webpackChunkName: "pages/admin/system/banner/index" */))
const _31829a36 = () => interopDefault(import('../pages/admin/system/configs/index.vue' /* webpackChunkName: "pages/admin/system/configs/index" */))
const _5e4120fa = () => interopDefault(import('../pages/admin/system/educational-ecosystem/index.vue' /* webpackChunkName: "pages/admin/system/educational-ecosystem/index" */))
const _42416fc3 = () => interopDefault(import('../pages/admin/system/support/index.vue' /* webpackChunkName: "pages/admin/system/support/index" */))
const _1d5d7dc2 = () => interopDefault(import('../pages/admin/system/tax/index.vue' /* webpackChunkName: "pages/admin/system/tax/index" */))
const _bcacaf00 = () => interopDefault(import('../pages/admin/system/tutorial/index.vue' /* webpackChunkName: "pages/admin/system/tutorial/index" */))
const _62de8fb0 = () => interopDefault(import('../pages/admin/teacher-training/create/index.vue' /* webpackChunkName: "pages/admin/teacher-training/create/index" */))
const _8035b8cc = () => interopDefault(import('../pages/admin/teacher-training/training-result/index.vue' /* webpackChunkName: "pages/admin/teacher-training/training-result/index" */))
const _0150bfff = () => interopDefault(import('../pages/admin/users/admins/index.vue' /* webpackChunkName: "pages/admin/users/admins/index" */))
const _6f780a25 = () => interopDefault(import('../pages/admin/users/parent/index.vue' /* webpackChunkName: "pages/admin/users/parent/index" */))
const _51bbb58c = () => interopDefault(import('../pages/admin/users/teachers/index.vue' /* webpackChunkName: "pages/admin/users/teachers/index" */))
const _597b63cc = () => interopDefault(import('../pages/admin/lsm/students/create/index.vue' /* webpackChunkName: "pages/admin/lsm/students/create/index" */))
const _606751a0 = () => interopDefault(import('../pages/admin/review-lesson/form-review/create/index.vue' /* webpackChunkName: "pages/admin/review-lesson/form-review/create/index" */))
const _5a11443c = () => interopDefault(import('../pages/admin/users/admins/create/index.vue' /* webpackChunkName: "pages/admin/users/admins/create/index" */))
const _32477126 = () => interopDefault(import('../pages/admin/users/admins/roles/index.vue' /* webpackChunkName: "pages/admin/users/admins/roles/index" */))
const _12625011 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _09367bb8 = () => interopDefault(import('../pages/admin/dashboard/salary/_id/index.vue' /* webpackChunkName: "pages/admin/dashboard/salary/_id/index" */))
const _1741956b = () => interopDefault(import('../pages/admin/lsm/result-training/_id.vue' /* webpackChunkName: "pages/admin/lsm/result-training/_id" */))
const _7c3595c0 = () => interopDefault(import('../pages/admin/lsm/students/_id/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/index" */))
const _71e721cd = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/index" */))
const _16533160 = () => interopDefault(import('../pages/admin/materials/detail/_id.vue' /* webpackChunkName: "pages/admin/materials/detail/_id" */))
const _798299ee = () => interopDefault(import('../pages/admin/materials/edit/_id.vue' /* webpackChunkName: "pages/admin/materials/edit/_id" */))
const _5aa0986c = () => interopDefault(import('../pages/admin/review-lesson/form-review/_id/index.vue' /* webpackChunkName: "pages/admin/review-lesson/form-review/_id/index" */))
const _e7b602ea = () => interopDefault(import('../pages/admin/students/edit/_id.vue' /* webpackChunkName: "pages/admin/students/edit/_id" */))
const _2793aae6 = () => interopDefault(import('../pages/admin/system/configs/_id.vue' /* webpackChunkName: "pages/admin/system/configs/_id" */))
const _11bb4482 = () => interopDefault(import('../pages/admin/teacher-training/training-result/_id.vue' /* webpackChunkName: "pages/admin/teacher-training/training-result/_id" */))
const _3c88792c = () => interopDefault(import('../pages/admin/users/admins/_id/index.vue' /* webpackChunkName: "pages/admin/users/admins/_id/index" */))
const _0d74eae0 = () => interopDefault(import('../pages/admin/users/parent/_id/index.vue' /* webpackChunkName: "pages/admin/users/parent/_id/index" */))
const _71672a77 = () => interopDefault(import('../pages/admin/users/teachers/_id/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/index" */))
const _05b6ce16 = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/index" */))
const _d2580f58 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/create/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/create/index" */))
const _52ced07c = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/create_course/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/create_course/index" */))
const _379fc944 = () => interopDefault(import('../pages/admin/users/parent/_id/complain/index.vue' /* webpackChunkName: "pages/admin/users/parent/_id/complain/index" */))
const _3c5d866a = () => interopDefault(import('../pages/admin/users/parent/_id/history_service/index.vue' /* webpackChunkName: "pages/admin/users/parent/_id/history_service/index" */))
const _017652d6 = () => interopDefault(import('../pages/admin/users/teachers/_id/change-level/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/change-level/index" */))
const _295d1306 = () => interopDefault(import('../pages/admin/users/teachers/_id/change-service/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/change-service/index" */))
const _12984dd0 = () => interopDefault(import('../pages/admin/users/teachers/_id/course-history/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/course-history/index" */))
const _c7e06e90 = () => interopDefault(import('../pages/admin/users/teachers/_id/edit/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/edit/index" */))
const _ba5f90d6 = () => interopDefault(import('../pages/admin/users/teachers/_id/recharge/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/recharge/index" */))
const _b438be1e = () => interopDefault(import('../pages/admin/users/teachers/_id/training-results/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/training-results/index" */))
const _570ec4b9 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/abc.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/abc" */))
const _f460464c = () => interopDefault(import('../pages/admin/users/teachers/_id/recharge/history/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/recharge/history/index" */))
const _53f41fc5 = () => interopDefault(import('../pages/admin/dashboard/salary/_id/create/_date_l.vue' /* webpackChunkName: "pages/admin/dashboard/salary/_id/create/_date_l" */))
const _3d6b5b0c = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/_id_lesson/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/_id_lesson/index" */))
const _22660608 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/index" */))
const _48c479c0 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/edit/_course_id.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/edit/_course_id" */))
const _6eb7e602 = () => interopDefault(import('../pages/admin/users/teachers/_id/training-results/_results_id.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/training-results/_results_id" */))
const _cd28a57a = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/_id_lesson/edit/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/_id_lesson/edit/index" */))
const _7208fa45 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/create/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/create/index" */))
const _1e42705a = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/teachers/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/teachers/index" */))
const _94d88ba8 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/edit/_id_lesson.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/edit/_id_lesson" */))
const _6dc5e2e0 = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/_id_lesson/_id_baihoc/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/_id_lesson/_id_baihoc/index" */))
const _06dd3368 = () => interopDefault(import('../pages/admin/complain/_id/index.vue' /* webpackChunkName: "pages/admin/complain/_id/index" */))
const _0f1d66a4 = () => interopDefault(import('../pages/admin/orders/_id/index.vue' /* webpackChunkName: "pages/admin/orders/_id/index" */))
const _0a7c08f6 = () => interopDefault(import('../pages/admin/parents/_id/index.vue' /* webpackChunkName: "pages/admin/parents/_id/index" */))
const _28e8a8fa = () => interopDefault(import('../pages/admin/review-lesson/_id/index.vue' /* webpackChunkName: "pages/admin/review-lesson/_id/index" */))
const _727879d7 = () => interopDefault(import('../pages/admin/students/_id/index.vue' /* webpackChunkName: "pages/admin/students/_id/index" */))
const _c5a090f0 = () => interopDefault(import('../pages/admin/materials/_id/create/index.vue' /* webpackChunkName: "pages/admin/materials/_id/create/index" */))
const _7b3c94bc = () => interopDefault(import('../pages/admin/materials/_id/histories/index.vue' /* webpackChunkName: "pages/admin/materials/_id/histories/index" */))
const _d984fb84 = () => interopDefault(import('../pages/admin/medias/_id/edit.vue' /* webpackChunkName: "pages/admin/medias/_id/edit" */))
const _71cbd4d9 = () => interopDefault(import('../pages/admin/orders/_id/lesson/index.vue' /* webpackChunkName: "pages/admin/orders/_id/lesson/index" */))
const _1e06d06d = () => interopDefault(import('../pages/admin/service/_id/edit/index.vue' /* webpackChunkName: "pages/admin/service/_id/edit/index" */))
const _fe09e672 = () => interopDefault(import('../pages/admin/service/_id/lesson-content/index.vue' /* webpackChunkName: "pages/admin/service/_id/lesson-content/index" */))
const _679b7352 = () => interopDefault(import('../pages/admin/service/_id/lesson-price/index.vue' /* webpackChunkName: "pages/admin/service/_id/lesson-price/index" */))
const _0a4d3a6a = () => interopDefault(import('../pages/admin/service/_id/sale/index.vue' /* webpackChunkName: "pages/admin/service/_id/sale/index" */))
const _7b331bc2 = () => interopDefault(import('../pages/admin/students/_id/detail/index.vue' /* webpackChunkName: "pages/admin/students/_id/detail/index" */))
const _fe36bdec = () => interopDefault(import('../pages/admin/videos/_id/create/index.vue' /* webpackChunkName: "pages/admin/videos/_id/create/index" */))
const _6b225558 = () => interopDefault(import('../pages/admin/videos/_id/edit/index.vue' /* webpackChunkName: "pages/admin/videos/_id/edit/index" */))
const _65c8ecee = () => interopDefault(import('../pages/admin/materials/_id/histories/_id_list.vue' /* webpackChunkName: "pages/admin/materials/_id/histories/_id_list" */))
const _671e2e3a = () => interopDefault(import('../pages/admin/students/_id/detail/_package_id/index.vue' /* webpackChunkName: "pages/admin/students/_id/detail/_package_id/index" */))
const _1133a704 = () => interopDefault(import('../pages/admin/students/_id/detail/_package_id/create/index.vue' /* webpackChunkName: "pages/admin/students/_id/detail/_package_id/create/index" */))
const _2785cef9 = () => interopDefault(import('../pages/admin/students/_id/detail/_package_id/edit/_lesson_id.vue' /* webpackChunkName: "pages/admin/students/_id/detail/_package_id/edit/_lesson_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _f98aef4e,
    name: "inspire"
  }, {
    path: "/login",
    component: _47ec19b0,
    name: "login"
  }, {
    path: "/admin/complain",
    component: _6c35defd,
    name: "admin-complain"
  }, {
    path: "/admin/dashboard",
    component: _56ab6cd4,
    name: "admin-dashboard"
  }, {
    path: "/admin/materials",
    component: _cd46fda4,
    name: "admin-materials"
  }, {
    path: "/admin/medias",
    component: _57bde43a,
    name: "admin-medias"
  }, {
    path: "/admin/notification",
    component: _749a3002,
    name: "admin-notification"
  }, {
    path: "/admin/orders",
    component: _1faddf8e,
    name: "admin-orders"
  }, {
    path: "/admin/parents",
    component: _a26ca8ea,
    name: "admin-parents"
  }, {
    path: "/admin/review-lesson",
    component: _056eed8f,
    name: "admin-review-lesson"
  }, {
    path: "/admin/service",
    component: _52278392,
    name: "admin-service"
  }, {
    path: "/admin/students",
    component: _4b9bb4ec,
    name: "admin-students"
  }, {
    path: "/admin/teacher-training",
    component: _79cdc879,
    name: "admin-teacher-training"
  }, {
    path: "/admin/videos",
    component: _494b1628,
    name: "admin-videos"
  }, {
    path: "/admin/dashboard/customer_reports",
    component: _a8794b66,
    name: "admin-dashboard-customer_reports"
  }, {
    path: "/admin/dashboard/salary",
    component: _3d2ba88e,
    name: "admin-dashboard-salary"
  }, {
    path: "/admin/dashboard/sales_report",
    component: _2394fe76,
    name: "admin-dashboard-sales_report"
  }, {
    path: "/admin/dashboard/user_report",
    component: _9bd19322,
    name: "admin-dashboard-user_report"
  }, {
    path: "/admin/lsm/result-training",
    component: _7d1ade43,
    name: "admin-lsm-result-training"
  }, {
    path: "/admin/lsm/students",
    component: _55e5a556,
    name: "admin-lsm-students"
  }, {
    path: "/admin/lsm/teacher-training",
    component: _334e703c,
    name: "admin-lsm-teacher-training"
  }, {
    path: "/admin/materials/create",
    component: _04908c5a,
    name: "admin-materials-create"
  }, {
    path: "/admin/materials/create_bg",
    component: _daedc572,
    name: "admin-materials-create_bg"
  }, {
    path: "/admin/medias/create",
    component: _7532677e,
    name: "admin-medias-create"
  }, {
    path: "/admin/my/notification",
    component: _04d511b0,
    name: "admin-my-notification"
  }, {
    path: "/admin/notification/create",
    component: _294f943c,
    name: "admin-notification-create"
  }, {
    path: "/admin/orders/create",
    component: _2fad8f30,
    name: "admin-orders-create"
  }, {
    path: "/admin/review-lesson/form-review",
    component: _574733fe,
    name: "admin-review-lesson-form-review"
  }, {
    path: "/admin/service/create",
    component: _1653f0aa,
    name: "admin-service-create"
  }, {
    path: "/admin/students/create",
    component: _0ba87455,
    name: "admin-students-create"
  }, {
    path: "/admin/system/about",
    component: _3f23df7e,
    name: "admin-system-about"
  }, {
    path: "/admin/system/banner",
    component: _517b488e,
    name: "admin-system-banner"
  }, {
    path: "/admin/system/configs",
    component: _31829a36,
    name: "admin-system-configs"
  }, {
    path: "/admin/system/educational-ecosystem",
    component: _5e4120fa,
    name: "admin-system-educational-ecosystem"
  }, {
    path: "/admin/system/support",
    component: _42416fc3,
    name: "admin-system-support"
  }, {
    path: "/admin/system/tax",
    component: _1d5d7dc2,
    name: "admin-system-tax"
  }, {
    path: "/admin/system/tutorial",
    component: _bcacaf00,
    name: "admin-system-tutorial"
  }, {
    path: "/admin/teacher-training/create",
    component: _62de8fb0,
    name: "admin-teacher-training-create"
  }, {
    path: "/admin/teacher-training/training-result",
    component: _8035b8cc,
    name: "admin-teacher-training-training-result"
  }, {
    path: "/admin/users/admins",
    component: _0150bfff,
    name: "admin-users-admins"
  }, {
    path: "/admin/users/parent",
    component: _6f780a25,
    name: "admin-users-parent"
  }, {
    path: "/admin/users/teachers",
    component: _51bbb58c,
    name: "admin-users-teachers"
  }, {
    path: "/admin/lsm/students/create",
    component: _597b63cc,
    name: "admin-lsm-students-create"
  }, {
    path: "/admin/review-lesson/form-review/create",
    component: _606751a0,
    name: "admin-review-lesson-form-review-create"
  }, {
    path: "/admin/users/admins/create",
    component: _5a11443c,
    name: "admin-users-admins-create"
  }, {
    path: "/admin/users/admins/roles",
    component: _32477126,
    name: "admin-users-admins-roles"
  }, {
    path: "/",
    component: _12625011,
    name: "index"
  }, {
    path: "/admin/dashboard/salary/:id",
    component: _09367bb8,
    name: "admin-dashboard-salary-id"
  }, {
    path: "/admin/lsm/result-training/:id?",
    component: _1741956b,
    name: "admin-lsm-result-training-id"
  }, {
    path: "/admin/lsm/students/:id",
    component: _7c3595c0,
    name: "admin-lsm-students-id"
  }, {
    path: "/admin/lsm/teacher-training/:id",
    component: _71e721cd,
    name: "admin-lsm-teacher-training-id"
  }, {
    path: "/admin/materials/detail/:id?",
    component: _16533160,
    name: "admin-materials-detail-id"
  }, {
    path: "/admin/materials/edit/:id?",
    component: _798299ee,
    name: "admin-materials-edit-id"
  }, {
    path: "/admin/review-lesson/form-review/:id",
    component: _5aa0986c,
    name: "admin-review-lesson-form-review-id"
  }, {
    path: "/admin/students/edit/:id?",
    component: _e7b602ea,
    name: "admin-students-edit-id"
  }, {
    path: "/admin/system/configs/:id",
    component: _2793aae6,
    name: "admin-system-configs-id"
  }, {
    path: "/admin/teacher-training/training-result/:id",
    component: _11bb4482,
    name: "admin-teacher-training-training-result-id"
  }, {
    path: "/admin/users/admins/:id",
    component: _3c88792c,
    name: "admin-users-admins-id"
  }, {
    path: "/admin/users/parent/:id",
    component: _0d74eae0,
    name: "admin-users-parent-id"
  }, {
    path: "/admin/users/teachers/:id",
    component: _71672a77,
    name: "admin-users-teachers-id"
  }, {
    path: "/admin/lsm/students/:id/detail",
    component: _05b6ce16,
    name: "admin-lsm-students-id-detail"
  }, {
    path: "/admin/lsm/teacher-training/:id?/create",
    component: _d2580f58,
    name: "admin-lsm-teacher-training-id-create"
  }, {
    path: "/admin/lsm/teacher-training/:id?/create_course",
    component: _52ced07c,
    name: "admin-lsm-teacher-training-id-create_course"
  }, {
    path: "/admin/users/parent/:id/complain",
    component: _379fc944,
    name: "admin-users-parent-id-complain"
  }, {
    path: "/admin/users/parent/:id/history_service",
    component: _3c5d866a,
    name: "admin-users-parent-id-history_service"
  }, {
    path: "/admin/users/teachers/:id/change-level",
    component: _017652d6,
    name: "admin-users-teachers-id-change-level"
  }, {
    path: "/admin/users/teachers/:id/change-service",
    component: _295d1306,
    name: "admin-users-teachers-id-change-service"
  }, {
    path: "/admin/users/teachers/:id/course-history",
    component: _12984dd0,
    name: "admin-users-teachers-id-course-history"
  }, {
    path: "/admin/users/teachers/:id/edit",
    component: _c7e06e90,
    name: "admin-users-teachers-id-edit"
  }, {
    path: "/admin/users/teachers/:id/recharge",
    component: _ba5f90d6,
    name: "admin-users-teachers-id-recharge"
  }, {
    path: "/admin/users/teachers/:id/training-results",
    component: _b438be1e,
    name: "admin-users-teachers-id-training-results"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/abc",
    component: _570ec4b9,
    name: "admin-lsm-teacher-training-id-detail-abc"
  }, {
    path: "/admin/users/teachers/:id/recharge/history",
    component: _f460464c,
    name: "admin-users-teachers-id-recharge-history"
  }, {
    path: "/admin/dashboard/salary/:id/create/:date_l?",
    component: _53f41fc5,
    name: "admin-dashboard-salary-id-create-date_l"
  }, {
    path: "/admin/lsm/students/:id/detail/:id_lesson",
    component: _3d6b5b0c,
    name: "admin-lsm-students-id-detail-id_lesson"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id",
    component: _22660608,
    name: "admin-lsm-teacher-training-id-detail-course_id"
  }, {
    path: "/admin/lsm/teacher-training/:id?/edit/:course_id",
    component: _48c479c0,
    name: "admin-lsm-teacher-training-id-edit-course_id"
  }, {
    path: "/admin/users/teachers/:id/training-results/:results_id?",
    component: _6eb7e602,
    name: "admin-users-teachers-id-training-results-results_id"
  }, {
    path: "/admin/lsm/students/:id/detail/:id_lesson/edit",
    component: _cd28a57a,
    name: "admin-lsm-students-id-detail-id_lesson-edit"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id/create",
    component: _7208fa45,
    name: "admin-lsm-teacher-training-id-detail-course_id-create"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id/teachers",
    component: _1e42705a,
    name: "admin-lsm-teacher-training-id-detail-course_id-teachers"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id/edit/:id_lesson",
    component: _94d88ba8,
    name: "admin-lsm-teacher-training-id-detail-course_id-edit-id_lesson"
  }, {
    path: "/admin/lsm/students/:id/detail/:id_lesson/:id_baihoc",
    component: _6dc5e2e0,
    name: "admin-lsm-students-id-detail-id_lesson-id_baihoc"
  }, {
    path: "/admin/complain/:id",
    component: _06dd3368,
    name: "admin-complain-id"
  }, {
    path: "/admin/orders/:id",
    component: _0f1d66a4,
    name: "admin-orders-id"
  }, {
    path: "/admin/parents/:id",
    component: _0a7c08f6,
    name: "admin-parents-id"
  }, {
    path: "/admin/review-lesson/:id",
    component: _28e8a8fa,
    name: "admin-review-lesson-id"
  }, {
    path: "/admin/students/:id",
    component: _727879d7,
    name: "admin-students-id"
  }, {
    path: "/admin/materials/:id/create",
    component: _c5a090f0,
    name: "admin-materials-id-create"
  }, {
    path: "/admin/materials/:id/histories",
    component: _7b3c94bc,
    name: "admin-materials-id-histories"
  }, {
    path: "/admin/medias/:id/edit",
    component: _d984fb84,
    name: "admin-medias-id-edit"
  }, {
    path: "/admin/orders/:id/lesson",
    component: _71cbd4d9,
    name: "admin-orders-id-lesson"
  }, {
    path: "/admin/service/:id/edit",
    component: _1e06d06d,
    name: "admin-service-id-edit"
  }, {
    path: "/admin/service/:id/lesson-content",
    component: _fe09e672,
    name: "admin-service-id-lesson-content"
  }, {
    path: "/admin/service/:id/lesson-price",
    component: _679b7352,
    name: "admin-service-id-lesson-price"
  }, {
    path: "/admin/service/:id/sale",
    component: _0a4d3a6a,
    name: "admin-service-id-sale"
  }, {
    path: "/admin/students/:id/detail",
    component: _7b331bc2,
    name: "admin-students-id-detail"
  }, {
    path: "/admin/videos/:id/create",
    component: _fe36bdec,
    name: "admin-videos-id-create"
  }, {
    path: "/admin/videos/:id/edit",
    component: _6b225558,
    name: "admin-videos-id-edit"
  }, {
    path: "/admin/materials/:id/histories/:id_list",
    component: _65c8ecee,
    name: "admin-materials-id-histories-id_list"
  }, {
    path: "/admin/students/:id/detail/:package_id",
    component: _671e2e3a,
    name: "admin-students-id-detail-package_id"
  }, {
    path: "/admin/students/:id/detail/:package_id/create",
    component: _1133a704,
    name: "admin-students-id-detail-package_id-create"
  }, {
    path: "/admin/students/:id/detail/:package_id/edit/:lesson_id?",
    component: _2785cef9,
    name: "admin-students-id-detail-package_id-edit-lesson_id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
