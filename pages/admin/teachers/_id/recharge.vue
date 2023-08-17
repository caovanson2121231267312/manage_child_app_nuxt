<template>
    <div class="content-mp recharge">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="6" md="4" lg="4" xl="3">
                <div class="w-100 teacher-changer-password" style="min-width: 300px;">
                    <div>
                        <p class="web-b">
                            Nạp tiền cọc cho giáo viên <span class="web-name">Anh Thư</span>
                        </p>
                    </div>

                    <div class="input">
                        <p class="web-b pb-2 m-0">
                            Số tiền cần nạp (Đơn vị đồng)
                        </p>
                        <input class="input-text"
                            placeholder="Nhập số tiền" />
                    </div>

                    <div class="input">
                        <p class="web-b pb-2 m-0">
                            Số tiền cần nạp (Đơn vị đồng)
                        </p>
                        <textarea class="textarea" placeholder="Nhập ghi chú"></textarea>
                    </div>

                    <div class="d-flex">
                        <button class="btn btn-min">Trừ tiền</button>
                        <button class="btn btn-plus">Nạp tiền</button>
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
                name: 'Nạp/ Trừ tiền',
                previous: '/admin/teachers/' + this.id ?? 0
            },
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
