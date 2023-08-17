<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="6" md="4" lg="4" xl="3">
                <div class="w-100 teacher-changer-password" style="min-width: 300px;">
                    <!-- <h3>Thông tin cá nhân</h3> -->
                    <div class="input">
                        <input class="input-form" :type="showPassword ? 'text' : 'password'"
                            placeholder="Mật khẩu hiện tại" />
                        <span v-if="showPassword" @click="togglePassword" class="icon mdi mdi-eye-off-outline"></span>
                        <span v-else @click="togglePassword" class="icon mdi mdi-eye-outline"></span>
                    </div>

                    <div class="input">
                        <input :type="showPassword ? 'text' : 'password'" v-model="newPassword" class="input-form"
                            placeholder="Mật khẩu mới" />
                        <span v-if="showPassword" @click="togglePassword" class="icon mdi mdi-eye-off-outline"></span>
                        <span v-else @click="togglePassword" class="icon mdi mdi-eye-outline"></span>
                    </div>

                    <div class="input">
                        <input :type="showPassword ? 'text' : 'password'" v-model="confirmNewPassword" class="input-form"
                            placeholder="Nhập lại mật khẩu mới" />
                        <span v-if="showPassword" @click="togglePassword" class="icon mdi mdi-eye-off-outline"></span>
                        <span v-else @click="togglePassword" class="icon mdi mdi-eye-outline"></span>
                    </div>

                    <div>
                        <button class="btn btn-save-pass">Lưu thay đổi</button>
                    </div>
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
                name: 'Reset mật khẩu',
                previous: '/admin/teachers/' + this.id ?? 0
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
        this.title.previous = '/admin/teachers/' + this.id ?? 0
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>
