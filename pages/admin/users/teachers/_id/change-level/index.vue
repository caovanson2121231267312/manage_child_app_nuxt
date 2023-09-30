<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="6" md="6" lg="5" xl="4">
                <div class="w-100 teacher-detail-info-service-nav mt-3">
                    <!-- <h3>Tùy chỉnh</h3> -->
                    <div class="w-100">
                        <div>
                            <b-card  class="teacher-nav">
                                <label class="block w-100 teachers cs m-0 p-0" for="check1">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2 layout-img">
                                                <img width="30" src="@/static/images/icons/l1.png" alt="">
                                            </span>
                                            <span>
                                                Sinh viên
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon center">
                                                <input type="checkbox" id="check1" class="input-check">
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </b-card>

                            <b-card  class="teacher-nav">
                                <label class="block w-100 teachers cs m-0 p-0" for="check2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2 layout-img">
                                                <img width="30" src="@/static/images/icons/l2.png" alt="">
                                            </span>
                                            <span>
                                                Nhân viên
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon center">
                                                <input type="checkbox" id="check2" class="input-check">
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </b-card>

                            <b-card  class="teacher-nav">
                                <label class="block w-100 teachers cs m-0 p-0" for="check3">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2 layout-img">
                                                <img width="30" src="@/static/images/icons/l3.png" alt="">
                                            </span>
                                            <span>
                                                Giáo viên
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon center">
                                                <input type="checkbox" id="check3" class="input-check">
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </b-card>

                            <b-card  class="teacher-nav">
                                <label class="block w-100 teachers cs m-0 p-0" for="check4">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2 layout-img">
                                                <img width="30" src="@/static/images/icons/l4.png" alt="">
                                            </span>
                                            <span>
                                                Giáo viên chuyên
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon center">
                                                <input type="checkbox" id="check4" class="input-check">
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </b-card>

                            <b-card  class="teacher-nav">
                                <label class="block w-100 teachers cs m-0 p-0" for="check5">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="">
                                            <span class="me-2 layout-img">
                                                <img width="30" src="@/static/images/icons/l5.png" alt="">
                                            </span>
                                            <span>
                                                Chuyên gia
                                            </span>
                                        </div>
                                        <div>
                                            <div class="web-icon center">
                                                <input type="checkbox" id="check5" class="input-check">
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </b-card>

                        </div>
                    </div>
                </div>

                <div class="mt-8">
                    <button-save>Lưu thay đổi</button-save>
                </div>

            </v-col>
        </v-row>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Thay đổi trình độ',
                previous: '/admin/users/teachers/' + this.id
            },
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
            showPassword: false,
        };
    },
    validate({ params }) {
        return /^[0-9]{0,2}$/.test(params.id)
    },
    computed: {
        id() {
            console.log(this.$route.params.id)
            return this.$route.params.id
        }
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
    },
    mounted() {
        this.title.previous = '/admin/users/teachers/' + this.id

        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>
