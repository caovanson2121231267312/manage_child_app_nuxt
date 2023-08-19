<template>
    <div class="content-mp training-results training-results-detail detail-review-leson app-training-edit">

        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="6" md="4" lg="4" xl="3">
                <div class="d-flex align-items-center justify-content-between w-100">
                    <h1 class="w-title d-inline w-h1">
                        <span>
                            Bảo mẫu cơ bản 0 - 6 tuổi
                        </span>
                    </h1>

                    <div class="d-inline-block">
                        <div>
                            <button class="btn btn-delete-form" v-b-modal.my-modal>
                                <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="15" height="16"
                                    viewBox="0 0 15 16" fill="none">
                                    <path
                                        d="M4.95833 1H9.29167M0.625 3.33333H13.625M12.1806 3.33333L11.6741 11.515C11.5981 12.7425 11.5601 13.3563 11.3139 13.8217C11.0972 14.2314 10.7702 14.5608 10.3762 14.7664C9.92864 15 9.35746 15 8.21508 15H6.03492C4.89254 15 4.32136 15 3.8738 14.7664C3.47977 14.5608 3.15284 14.2314 2.9361 13.8217C2.68991 13.3563 2.65192 12.7425 2.57593 11.515L2.06944 3.33333M5.68056 6.83333V10.7222M8.56944 6.83333V10.7222"
                                        stroke="#2D2D2D" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="pt-1">Xóa form</span>
                            </button>
                        </div>
                    </div>

                    <b-modal id="my-modal" hide-footer centered title="Thông báo">
                        <!-- <template #modal-header="{ close }">
                            <h5>Thông báo</h5>
                        </template> -->
                        <template #default="{ hide }">
                            <div class="text-center">
                                <strong class="title-modal">
                                    Bạn muốn xóa chương trình này?
                                </strong>
                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button class=" btn-delete ms-1">Xóa</button>
                            </div>
                        </template>
                    </b-modal>
                </div>

                <div class="my-4">
                    <div class="box-img">
                        <img src="@/static/images/teacher-training/Rectangle4052.png" alt="">
                    </div>
                </div>

                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="max-w">
                                        <span>
                                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.6001 0H7.40003C6.29333 0 5.36441 0.662527 5.08554 1.45977C4.99436 1.72043 5.22386 1.95 5.5 1.95H9.00005C9.32805 1.95 9.60006 2.154 9.60006 2.4C9.60006 2.646 9.32805 2.85 9.00005 2.85H5.5C5.22386 2.85 5 3.07386 5 3.35V3.85C5 4.12614 5.22386 4.35 5.5 4.35H7.24803C7.57603 4.35 7.84804 4.554 7.84804 4.8C7.84804 5.046 7.57603 5.25 7.24803 5.25H5.5C5.22386 5.25 5 5.47386 5 5.75V6.22374C5 6.49842 5.22158 6.72166 5.49625 6.72372L9.00005 6.75C9.33605 6.75 9.60006 6.954 9.60006 7.206C9.59206 7.452 9.32805 7.65 9.00005 7.65C8.99205 7.65 8.99205 7.65 8.99205 7.65L5.50376 7.62379C5.22615 7.6217 5 7.84616 5 8.12377V8.65C5 8.92614 5.22386 9.15 5.5 9.15H8.12004C8.45604 9.15 8.72005 9.354 8.72005 9.6C8.72005 9.846 8.45604 10.05 8.12004 10.05H5.5C5.22386 10.05 4.99436 10.2796 5.08554 10.5402C5.36441 11.3375 6.29333 12 7.40003 12H10.6001C11.9201 12 13.0001 11.196 13.0001 10.2V1.8C13.0001 0.804 11.9201 0 10.6001 0Z"
                                                    fill="#FC4D32" />
                                                <path
                                                    d="M4.00005 2.08235V2.5C4.00005 2.77614 3.77619 3 3.50005 3H0.5C0.223857 3 0 2.77614 0 2.5V2.08235C0 0.938823 0.90018 0 2.00341 0C3.09987 0 4.00005 0.938823 4.00005 2.08235Z"
                                                    fill="#FC4D32" />
                                                <path
                                                    d="M0 9.71388C0 9.96696 0.128597 10.355 0.291036 10.5687L0.839266 11.3336C1.48225 12.2221 2.52457 12.2221 3.16078 11.3336L3.71578 10.5687C3.87145 10.355 4.00005 9.96696 4.00005 9.71388V4.5C4.00005 4.22386 3.77619 4 3.50005 4H0.5C0.223857 4 0 4.22386 0 4.5V9.71388Z"
                                                    fill="#FC4D32" />
                                            </svg>
                                        </span>
                                        <span class="text-view-w">Cấp độ</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="text-view-w-2">Cơ bản</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="max-w">
                                        <span>
                                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90674 9.13117C10.3793 8.79446 11 9.16177 11 9.77397V10.7611C11 11.733 10.3017 12.7737 9.46238 13.0798L7.21238 13.891C6.8174 14.0363 6.17555 14.0363 5.78762 13.891L3.53762 13.0798C2.69122 12.7737 2 11.733 2 10.7611V9.76631C2 9.16177 2.62069 8.79446 3.08621 9.12351L4.53919 10.1489C5.0964 10.5545 5.80172 10.7535 6.50705 10.7535C7.21238 10.7535 7.91771 10.5545 8.47492 10.1489L9.90674 9.13117Z"
                                                    fill="#00C092" />
                                                <path
                                                    d="M12.0206 3.13048L7.88185 0.373553C7.13564 -0.124518 5.90578 -0.124518 5.15957 0.373553L1.00013 3.13048C-0.333377 4.00737 -0.333377 5.99263 1.00013 6.87653L2.10563 7.6061L5.15957 9.62645C5.90578 10.1245 7.13564 10.1245 7.88185 9.62645L10.9151 7.6061L11.8616 6.97474V9.12136C11.8616 9.40898 12.0966 9.64749 12.3799 9.64749C12.6631 9.64749 12.8981 9.40898 12.8981 9.12136V5.66994C13.1744 4.76499 12.8911 3.71273 12.0206 3.13048Z"
                                                    fill="#00C092" />
                                            </svg>
                                        </span>
                                        <span class="text-view-w">Phân loại</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="text-view-w-2">Cơ bản</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="w-100 mt-4 mb-6">
                    <nuxt-link to="/admin/teacher-training/2/edit" class="btn-edit-training">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path
                                    d="M15.5 12.9814L14.7221 13.8121C14.3096 14.2526 13.7501 14.5 13.1668 14.5C12.5834 14.5 12.024 14.2526 11.6114 13.8121C11.1983 13.3725 10.6389 13.1257 10.0557 13.1257C9.47253 13.1257 8.91312 13.3725 8.49999 13.8121M1.5 14.5H2.80242C3.1829 14.5 3.37314 14.5 3.55216 14.458C3.71089 14.4208 3.86262 14.3595 4.0018 14.2762C4.15878 14.1823 4.2933 14.051 4.56234 13.7883L14.3334 4.24962C14.9777 3.62061 14.9777 2.60077 14.3334 1.97176C13.689 1.34275 12.6444 1.34275 12 1.97176L2.22898 11.5105C1.95994 11.7731 1.82543 11.9044 1.72923 12.0577C1.64394 12.1936 1.58109 12.3417 1.54298 12.4966C1.5 12.6714 1.5 12.8571 1.5 13.2286V14.5Z"
                                    stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <span class="ms-1">Chỉnh sửa</span>
                    </nuxt-link>
                </div>
            </v-col>

            <v-col class="mt-0 pt-0" xs="12" sm="6" md="4" lg="4" xl="3">
                <div class="" style="min-width: 245px;">
                    <h4 class=" mt-3 mb-3">
                        Danh sách bài học
                    </h4>
                    <div>
                        <div class="d-flex justify-content-between align-items-center w-100 flex-wrap">
                            <div class="mb-3" v-for="(i, n) in 6" v-bind:key="n">
                                <nuxt-link to="/admin/teacher-training/31/detail" class="item">
                                    <svg width="56" height="51" viewBox="0 0 56 51" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.4496 5.37648L9.40289 13.7277C4.89956 16.4052 4.89956 22.3977 9.40289 25.0752L23.4496 33.4265C25.9696 34.9352 30.1229 34.9352 32.6429 33.4265L46.6196 25.0752C51.0996 22.3977 51.0996 16.4265 46.6196 13.749L32.6429 5.39773C30.1229 3.86773 25.9696 3.86773 23.4496 5.37648Z"
                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M13.1366 27.7949L13.1133 37.7612C13.1133 40.4599 15.3999 43.3499 18.1999 44.1999L25.6433 46.4524C26.9266 46.8349 29.0499 46.8349 30.3566 46.4524L37.8 44.1999C40.6 43.3499 42.8866 40.4599 42.8866 37.7612V27.9012"
                                            stroke="white" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M49.9336 31.875V19.125" stroke="white" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <div class="text-w-l">
                                        BÀI {{ n + 1 }}
                                    </div>
                                </nuxt-link>
                                <div class="text-center">
                                    <b>Giới thiệu</b>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-100">
                        <nuxt-link to="/admin/teacher-training/34/create" class="btn-add-le w-100 d-block">
                            <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path d="M6.5 1V12M1 6.5H12" stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            Thêm bài học
                        </nuxt-link>
                    </div>
                </div>

            </v-col>
        </v-row>

    </div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Chương trình đào tạo',
                previous: '/admin/teacher-training'
            },
        };
    },
    validate({ params }) {
        return /^[0-9]{0,2}$/.test(params.id)
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        results_id() {
            return this.$route.params.results_id
        }
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>