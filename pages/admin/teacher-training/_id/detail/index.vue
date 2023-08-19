<template>
    <div class="content-mp detail-form-review form-edit-train form-detail-train">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="6" xl="6" style="min-width: 373px;">
                <div class="d-flex align-items-center justify-content-between w-100 mb-6">
                    <div class="d-flex align-center">
                        <span class="me-3">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 0C2.694 0 0 2.694 0 6C0 9.306 2.694 12 6 12C9.306 12 12 9.306 12 6C12 2.694 9.306 0 6 0ZM8.61 8.142C8.526 8.286 8.376 8.364 8.22 8.364C8.142 8.364 8.064 8.346 7.992 8.298L6.132 7.188C5.67 6.912 5.328 6.306 5.328 5.772V3.312C5.328 3.066 5.532 2.862 5.778 2.862C6.024 2.862 6.228 3.066 6.228 3.312V5.772C6.228 5.988 6.408 6.306 6.594 6.414L8.454 7.524C8.67 7.65 8.742 7.926 8.61 8.142Z"
                                    fill="#0056B1" />
                            </svg>
                            <span class="text-v">08/08/2023</span>
                        </span>

                        <span>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.232 10.9623C11.6359 10.8822 11.8748 10.4576 11.6601 10.1061C11.2407 9.41955 10.5973 8.81612 9.78142 8.35279C8.69659 7.73675 7.3674 7.40283 6 7.40283C4.6326 7.40283 3.30341 7.73675 2.21858 8.35279C1.40268 8.81611 0.759293 9.41955 0.339881 10.1061C0.125175 10.4576 0.364056 10.8822 0.768045 10.9623C4.22238 11.6473 7.77762 11.6473 11.232 10.9623Z"
                                    fill="#FC4D32" />
                                <path
                                    d="M9.45067 3.28363C9.45067 5.0971 7.90564 6.56721 5.99975 6.56721C4.09386 6.56721 2.54883 5.0971 2.54883 3.28363C2.54883 1.47016 4.09386 5.80744e-05 5.99975 5.80744e-05C7.90564 5.80744e-05 9.45067 1.47016 9.45067 3.28363Z"
                                    fill="#FC4D32" />
                            </svg>

                            <span class="text-v">Bởi Tên Admin</span>
                        </span>
                    </div>

                    <div class="d-inline-block">
                        <div>
                            <button class="btn btn-delete-form" v-b-modal.my-modal>
                                <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="15" height="16"
                                    viewBox="0 0 15 16" fill="none">
                                    <path
                                        d="M4.95833 1H9.29167M0.625 3.33333H13.625M12.1806 3.33333L11.6741 11.515C11.5981 12.7425 11.5601 13.3563 11.3139 13.8217C11.0972 14.2314 10.7702 14.5608 10.3762 14.7664C9.92864 15 9.35746 15 8.21508 15H6.03492C4.89254 15 4.32136 15 3.8738 14.7664C3.47977 14.5608 3.15284 14.2314 2.9361 13.8217C2.68991 13.3563 2.65192 12.7425 2.57593 11.515L2.06944 3.33333M5.68056 6.83333V10.7222M8.56944 6.83333V10.7222"
                                        stroke="#2D2D2D" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="pt-1">Xóa bài</span>
                            </button>
                        </div>
                    </div>

                    <b-modal id="my-modal" hide-footer centered title="Thông báo">
                        <template #default="{ hide }">
                            <div class="text-center">
                                <strong class="title-modal">
                                    Bạn muốn xóa bài học này?
                                </strong>
                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button class=" btn-delete ms-1">Xóa</button>
                            </div>
                        </template>
                    </b-modal>
                </div>

                <div class="w-100">
                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Tên bài học</span>
                        </strong>
                        <div class="input-grop">
                            <input type="text" class="input" value="Giới thiệu" />
                        </div>
                    </div>
                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Thứ tự bài học</span>
                        </strong>
                        <div class="input-grop">
                            <select class="select">
                                <option>Bài 1</option>
                                <option>Bài 2</option>
                            </select>
                            <span class="icon-down mdi mdi-chevron-down"></span>
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Giới thiệu bài học</span>
                        </strong>
                        <div class="input-grop">
                            <textarea
                                class="textarea">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</textarea>
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Video bài học</span>
                        </strong>
                        <div class="input-grop">
                            <input type="text" class="input" value="https://www.youtube.com/watch?v=..." />
                            <span class="copy">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.61204 14.5083L8.38796 15.7324C6.69786 17.4225 3.95767 17.4225 2.26757 15.7324C0.577475 14.0423 0.577476 11.3021 2.26757 9.61204L3.49165 8.38796M14.5083 9.61204L15.7324 8.38796C17.4225 6.69786 17.4225 3.95767 15.7324 2.26757C14.0423 0.577475 11.3021 0.577476 9.61204 2.26757L8.38796 3.49165M5.97056 12.0294L12.0294 5.97054"
                                        stroke="#979797" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>

                        <div class="w-100 mt-4 mb-4">
                            <button class="btn-add-le">
                                <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 1V12M1 6.5H12" stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                Thêm bài học
                            </button>
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Bài kiểm tra</span>
                            <span class="web-text-red"> *</span>
                        </strong>
                        <div class="input-grop">
                            <input type="text" class="input" value="https://www.youtube.com/watch?v=..." />
                            <span class="copy">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.61204 14.5083L8.38796 15.7324C6.69786 17.4225 3.95767 17.4225 2.26757 15.7324C0.577475 14.0423 0.577476 11.3021 2.26757 9.61204L3.49165 8.38796M14.5083 9.61204L15.7324 8.38796C17.4225 6.69786 17.4225 3.95767 15.7324 2.26757C14.0423 0.577475 11.3021 0.577476 9.61204 2.26757L8.38796 3.49165M5.97056 12.0294L12.0294 5.97054"
                                        stroke="#979797" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>

                        <div class="w-100 mt-4 mb-4">
                            <button class="btn-add-le">
                                <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 1V12M1 6.5H12" stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                Thêm bài kiểm tra
                            </button>
                        </div>
                    </div>

                    <div class="mt-8">
                        <button class="btn btn-save-pass">Lưu thay đổi</button>
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
                name: 'Chi tiết bài học',
                previous: '/admin/teacher-training/' + (this.id ?? 0)
            },
            panel: [0],
        };
    },
    validate({ params }) {
        return /^[0-9]{0,2}$/.test(params.id)
    },
    computed: {
        id() {
            return this.$route.params.id
        },
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
    },
    mounted() {
        this.title.previous = '/admin/teacher-training/' + (this.id ?? 0)
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>