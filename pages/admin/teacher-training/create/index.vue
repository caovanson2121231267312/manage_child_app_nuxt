<template>
    <div class="content-mp detail-form-review form-edit-train form-detail-train form-create-train">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="6" xl="6" style="min-width: 373px;">
                <div class="w-100">
                    <h4>Chủ đề đào tạo</h4>
                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Tên chương trình</span>
                        </strong>
                        <div class="input-grop">
                            <input type="text" class="input" placeholder="Nhập tên chương trình" />
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Cấp độ</span>
                        </strong>
                        <div class="input-grop">
                            <select class="select">
                                <option>Cơ bản</option>
                                <option>Nâng cao</option>
                            </select>
                            <span class="icon-down mdi mdi-chevron-down"></span>
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Phân loại</span>
                        </strong>
                        <div class="input-grop">
                            <select class="select">
                                <option>Tất cả User Giáo viên</option>
                                <option>Tất cả tài khoản User Giáo viên đã kích hoạt</option>
                                <option>User Giáo viên cụ thể</option>
                            </select>
                            <span class="icon-down mdi mdi-chevron-down"></span>
                        </div>
                    </div>

                    <div class="mt-3">
                        <strong class="strong-title">
                            <span>Phân loại</span>
                        </strong>
                        <div class="input-grop">
                            <select class="select">
                                <option>Tất cả User Giáo viên</option>
                                <option>Tất cả tài khoản User Giáo viên đã kích hoạt</option>
                                <option>User Giáo viên cụ thể</option>
                            </select>
                            <span class="icon-down mdi mdi-chevron-down"></span>
                        </div>
                    </div>

                    <div class="mt-3">
                        <div>
                            <strong class="strong-title">
                                <span>Hình ảnh</span>
                            </strong>
                            <span class="note">(Tối thiểu không quá 2mb)</span>
                        </div>
                        <div class="input-grop">
                            <input type="file" class="input" placeholder="Nhập tên chương trình" />
                        </div>
                    </div>

                    <div class="mt-6">
                        <div class="w-100 mt-4 mb-4">
                            <h4>Danh sách bài học</h4>
                            <nuxt-link to="/admin/teacher-training/34/create" class="d-block w-100">
                                <div class="btn-add-le d-flex align-items-center justify-content-center">
                                    <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                        viewBox="0 0 13 13" fill="none">
                                        <path d="M6.5 1V12M1 6.5H12" stroke="#4EAEEA" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    thêm bài học
                                </div>
                            </nuxt-link>
                        </div>
                    </div>

                    <div class="mt-8 cr-btn">
                        <button class="btn btn-cancel">Hủy</button>
                        <button class="btn btn-save">Lưu</button>
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
                name: 'Thêm chương trình',
                previous: '/admin/teacher-training/'
            },
            panel: [0],
        };
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
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>