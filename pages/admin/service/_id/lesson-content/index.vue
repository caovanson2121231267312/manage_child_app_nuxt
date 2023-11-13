<template>
    <div class="content-mp">
        <div class="service-edit-lesson-content">

            <b-row>
                <b-col class="mt-0 pt-0" cols="12" sm="9" md="7">
                    <div class="mb-7 ">
                        <div class="d-flex align-items-center">
                            <button-filter v-for="(item, index) in chonCa" :key="index"
                                :active="{ active: selectedFilter === item?.id }" @click="updateFilter(item?.id)">
                                {{ item?.name }}
                            </button-filter>
                        </div>
                    </div>
                    <div v-for="(item, n) in data" v-bind:key="n">
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
                                <b class="span-title">{{ item?.khung_gio }}</b>
                            </div>
                            <div>
                                <Suneditor :app="n" :contents="item?.noi_dung"></Suneditor>
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
                        <button-component>Lưu thay đổi</button-component>
                    </div>
                </b-col>
            </b-row>
        </div>

    </div>
</template>

<script>
import ButtonComponent from '~/components/button/ButtonComponent.vue';
import Suneditor from '../../../../../components/inputField/Suneditor'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';


export default {
    components: { Suneditor, ButtonComponent },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Thời lượng ca và nội dung buổi học',
                previous: '/admin/service/' + this.id + '/edit'
            },
            data: null,
            chonCa: null,
            selectedFilter: '',
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
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async load_role() {
            await api.get('dich-vu/danh-sach-khung-gio?type=10&page=1&limit=20&sort=1&dich_vu_id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.chonCa = res?.data?.data.chonCa
                this.selectedFilter = this.chonCa[0].id

            })
        },
        async load_data() {
            await api.get(`dich-vu/danh-sach-khung-gio?type=${this.selectedFilter ?? ''}&page=1&limit=20&sort=1&dich_vu_id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data.khungGio
                this.data = user

            })
        },
        async send_data(event) {
            event.preventDefault();
            console.log(123)
            const formData = new FormData(document.getElementById('form'))
            await api.post('admin-api/cap-nhat-quan-tri-vien', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data()
                    this.load_role()
                }
            })
        },
        async updateFilter(filter) {
            this.selectedFilter = await filter ?? '';
            await this.load_data()
        }
    },
    mounted() {
        this.title.previous = '/admin/service/' + this.id + '/edit'
        this.$store.dispatch('title/set_title', this.title);

        this.load_role()
        this.load_data()
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