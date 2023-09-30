<template>
    <div class="content-mp">
        <div class="service-edit-lesson-content">

            <b-row>
                <b-col class="mt-0 pt-0" cols="12" sm="9" md="7">
                    <div class="mb-7 ">
                        <div class="d-flex align-items-center">
                            <button-filter active="active">Cả ngày</button-filter>
                            <button-filter>Sáng</button-filter>
                            <button-filter>Chiều</button-filter>
                            <button-filter>Tối</button-filter>
                        </div>
                    </div>
                    <div v-for="n in 3" v-bind:key="n">
                        <div class="">
                            <div>
                                <span class="me-1">
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.5 0C3.194 0 0.5 2.694 0.5 6C0.5 9.306 3.194 12 6.5 12C9.806 12 12.5 9.306 12.5 6C12.5 2.694 9.806 0 6.5 0ZM9.11 8.142C9.026 8.286 8.876 8.364 8.72 8.364C8.642 8.364 8.564 8.346 8.492 8.298L6.632 7.188C6.17 6.912 5.828 6.306 5.828 5.772V3.312C5.828 3.066 6.032 2.862 6.278 2.862C6.524 2.862 6.728 3.066 6.728 3.312V5.772C6.728 5.988 6.908 6.306 7.094 6.414L8.954 7.524C9.17 7.65 9.242 7.926 9.11 8.142Z"
                                            fill="#FC4D32" />
                                    </svg>
                                </span>
                                <span class="span-title">Thời lượng: </span>
                                <b class="span-title">7h - 17h</b>
                            </div>
                            <div>
                                <Suneditor :app="n"></Suneditor>
                            </div>
                        </div>
                        <hr class="support-hr" />
                    </div>
                </b-col>
                <b-col class="mt-0 pt-0" cols="12" sm="9" md="7">
                    <div class="">
                        <button-add v-b-modal.my-modal>
                            <span class="mdi mdi-plus"></span> Thêm nội dung
                        </button-add>

                        <b-modal size="lg" id="my-modal" hide-footer centered title="Thêm nội dung buổi học">
                            <!-- <template #modal-header="{ close }">
                <h5>Thông báo</h5>
            </template> -->
                            <template #default="{ hide }">
                                <div class="w-100">
                                    <div class="mb-3">
                                        <b-form-select v-model="selected" :options="options"></b-form-select>
                                    </div>
                                    <div class="mb-3">
                                        <b-form-select v-model="selected1" :options="options1"></b-form-select>
                                    </div>

                                    <div class="mb-3">
                                        <Suneditor></Suneditor>
                                    </div>

                                </div>
                                <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                    <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                    <button class=" btn-delete ms-1">Tạo</button>
                                </div>
                            </template>
                        </b-modal>
                    </div>
                    <div class="my-5">
                        <button-save>Lưu thay đổi</button-save>
                    </div>
                </b-col>
            </b-row>
        </div>

    </div>
</template>

<script>
import Suneditor from '../../../../../components/inputField/Suneditor'
export default {
  components: { Suneditor },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Thời lượng ca và nội dung buổi học',
                previous: '/admin/service/' + this.id + '/edit'
            },
            selected: 1,
            options: [
                { value: '1', text: 'Cả ngày' },
                { value: '2', text: 'Sáng' },
                { value: '3', text: 'Chiều' },
                { value: '4', text: 'Tối' },
            ],
            selected1: 1,
            options1: [
                { value: '1', text: '7h - 17h' },
                { value: '2', text: '7h30 - 17h30' },
                { value: '3', text: '8h - 18h' },
            ]
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
    },
    mounted() {
        this.title.previous = '/admin/service/' + this.id + '/edit'
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>

<style lang="scss" scoped>
.span-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
b.span-title {
    font-weight: 600;
}
</style>