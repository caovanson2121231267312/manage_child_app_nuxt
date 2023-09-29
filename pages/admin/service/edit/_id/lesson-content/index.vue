<template>
    <div class="content-mp detail-form-review form-edit-train form-detail-train form-create-train service">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="6" xl="6" style="min-width: 373px;">
                <div class="w-100">

                    <div class="w-100">
                        <div v-for="n in 4" v-bind:key="n" class="mb-3">
                            <div>
                                <strong class="">Thời lượng buổi học: </strong>
                                <span class="time-lesson">{{ n + 1 }} giờ</span>
                            </div>

                            <div class="mt-2">
                                <textarea style="min-height: 138px;" class="textarea">1. Tổ chức vui chơi có chủ đích cho trẻ, thực hiện bài dạy phát triển cho trẻ dưới sự chỉ đạo của Quản lý Chuyên môn
                                </textarea>
                            </div>
                        </div>
                    </div>

                    <div class="mt-7">
                        <nuxt-link to="" class="btn-add-service br-42">
                            <span class="mdi mdi-plus"></span>
                            <span>Thêm nội dung</span>
                        </nuxt-link>
                    </div>

                    <div class="mt-4">
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
                name: 'Nội dung buổi học',
                previous: '/admin/service/edit/' + this.id
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
        this.title.previous = '/admin/service/edit/' + this.id
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>