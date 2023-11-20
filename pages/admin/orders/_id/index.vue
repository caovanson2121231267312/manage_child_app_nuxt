<template>
    <div class="content-mp">

        <v-row>
            <v-col xs="12" sm="12" md="12" lg="7" xl="7">
                <!-- <div class="d-flex align-items-center justify-content-between wmt-27">
                    <title-header>
                        <span class="me-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4"
                                    d="M12 5.30019V21.3302C11.83 21.3302 11.65 21.3002 11.51 21.2202L11.47 21.2002C9.55 20.1502 6.2 19.0502 4.03 18.7602L3.74 18.7202C2.78 18.6002 2 17.7002 2 16.7402V4.66019C2 3.47019 2.97 2.57019 4.16 2.67019C6.26 2.84019 9.44 3.90019 11.22 5.01019L11.47 5.16019C11.62 5.25019 11.81 5.30019 12 5.30019Z"
                                    fill="#0056B1" />
                                <path
                                    d="M22 4.67003V16.74C22 17.7 21.22 18.6 20.26 18.72L19.93 18.76C17.75 19.05 14.39 20.16 12.47 21.22C12.34 21.3 12.18 21.33 12 21.33V5.30003C12.19 5.30003 12.38 5.25003 12.53 5.16003L12.7 5.05003C14.48 3.93003 17.67 2.86003 19.77 2.68003H19.83C21.02 2.58003 22 3.47003 22 4.67003Z"
                                    fill="#0056B1" />
                                <path
                                    d="M7.75 9.24023H5.5C5.09 9.24023 4.75 8.90023 4.75 8.49023C4.75 8.08023 5.09 7.74023 5.5 7.74023H7.75C8.16 7.74023 8.5 8.08023 8.5 8.49023C8.5 8.90023 8.16 9.24023 7.75 9.24023Z"
                                    fill="#0056B1" />
                                <path
                                    d="M8.5 12.2402H5.5C5.09 12.2402 4.75 11.9002 4.75 11.4902C4.75 11.0802 5.09 10.7402 5.5 10.7402H8.5C8.91 10.7402 9.25 11.0802 9.25 11.4902C9.25 11.9002 8.91 12.2402 8.5 12.2402Z"
                                    fill="#0056B1" />
                            </svg>
                        </span>
                        Chương trình Bảo mẫu Pro
                    </title-header>
                </div> -->

                <detail-service-info :data="data" :status="data?.trang_thai"></detail-service-info>

                <div class="mt-6" v-if="data?.trang_thai == 'Chưa có GV' || data?.trang_thai == 'Đang khảo sát' || data?.trang_thai == 'Đang dạy'">
                    <div class="d-flex">
                        <b-button class="w-100 text-light rounded-pill" variant="danger" v-b-modal.my-modal-cancel>
                            Hủy đơn
                        </b-button>
                        <b-button class="w-100 text-light rounded-pill mx-3" variant="info">
                            Hoàn tiền
                        </b-button>
                        <b-button class="w-100 text-light rounded-pill" variant="warning">
                            Chương trình
                        </b-button>
                    </div>

                    <div class="mt-3" v-if="data?.trang_thai == 'Chưa có GV'">
                        <b-button class="w-100 text-light rounded-pill" variant="primary" v-b-modal.my-modal>
                            Duyệt đơn
                        </b-button>

                        <b-modal id="my-modal" ref="my-modal" hide-footer centered title="Duyệt đơn này">
                            <template #default="{ hide }">
                                <form>

                                    <div class="my-2">
                                        <div>
                                            <b-form-group>
                                                <label>Gán leader KD:</label>
                                                <b-form-select v-model="kds_id" :options="kds"
                                                    aria-placeholder="Chọn"></b-form-select>
                                            </b-form-group>
                                        </div>

                                    </div>
                                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                        <button type="button" class=" btn-delete ms-1" @click="duyet_don()">Đồng ý</button>
                                    </div>
                                </form>

                            </template>
                        </b-modal>
                    </div>
                </div>

                <!-- // đơn đã huỷ -->
                <div class="mt-6" v-if="data?.trang_thai == 'Đã huỷ' || data?.trang_thai == 'Đã hủy'">
                    <div class="d-flex">
                        <b-button disabled class="w-100 text-light rounded-pill" variant="danger">
                            Hủy đơn
                        </b-button>
                        <b-button disabled class="w-100 text-light rounded-pill mx-3" variant="info">
                            Hoàn tiền
                        </b-button>
                        <b-button disabled class="w-100 text-light rounded-pill" variant="warning">
                            Chương trình
                        </b-button>
                    </div>

                    <div class="mt-3">
                        <b-button class="w-100 text-danger rounded-pill" variant="outline-danger">
                            <span class="mdi mdi-close-circle-outline"></span>
                            <span>Đơn đã hủy</span>
                        </b-button>
                    </div>
                </div>

                <!-- // Đã hoàn thành -->
                <div class="mt-6" v-if="data?.trang_thai == 'Đã hoàn thành'">
                    <div class="d-flex">
                        <b-button disabled class="w-100 text-light rounded-pill" variant="danger">
                            Hủy đơn
                        </b-button>
                        <b-button disabled class="w-100 text-light rounded-pill mx-3" variant="info">
                            Hoàn tiền
                        </b-button>
                        <b-button disabled class="w-100 text-light rounded-pill" variant="warning">
                            Chương trình
                        </b-button>
                    </div>

                    <div class="mt-3">
                        <b-button class="w-100 text-success rounded-pill" variant="outline-success">
                            <span class="mdi mdi-check-circle"></span>
                            <span>Đơn đã hoàn thành</span>
                        </b-button>
                    </div>
                </div>

                <!-- // Đơn hoàn -->
                <div class="mt-6" v-if="data?.trang_thai == 'Đơn hoàn'">
                    <div class="d-flex">
                        <b-button disabled class="w-100 text-light rounded-pill" variant="danger">
                            Hủy đơn
                        </b-button>
                        <b-button disabled class="w-100 text-light rounded-pill mx-3" variant="info">
                            Hoàn tiền
                        </b-button>
                        <b-button disabled class="w-100 text-light rounded-pill" variant="warning">
                            Chương trình
                        </b-button>
                    </div>

                    <div class="mt-3">
                        <b-button class="w-100 text-primary rounded-pill" variant="outline-primary">
                            <span class="mdi mdi-check-circle"></span>
                            <span>Đơn hoàn</span>
                        </b-button>
                    </div>
                </div>


            </v-col>
        </v-row>

        <b-modal id="my-modal-cancel" ref="my-modal-cancel" hide-footer centered title="Xác nhận hủy?">
            <template #default="{ hide }">
                <form>

                    <div class="my-2">
                        <div>
                            <b-form-group>
                                <label>Lý do hủy:</label>
                                <b-form-textarea id="textarea" v-model="li_do_huy" placeholder="Lý do hủy..." rows="3"
                                    max-rows="6"></b-form-textarea>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                        <button type="button" class=" btn-delete ms-1" @click="huy_don()">Đồng ý</button>
                    </div>
                </form>

            </template>
        </b-modal>

    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import DetailServiceInfo from '~/components/service/DetailServiceInfo.vue';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Chi tiết đơn',
                previous: '/admin/orders'
            },
            data: null,
            file: null,
            image: null,
            kds: null,
            kds_id: null,
            li_do_huy: null,
        };
    },
    components: {
        DetailServiceInfo
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
        clearFiles() {
            this.$refs['file-input'].reset()
        },
        async load_kd() {
            await api.get('don-dich-vu/leader-kinh-doanh', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.kds = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.hoten
                    };
                })
            })
        },
        async load_data() {
            await api.get(`don-dich-vu/chi-tiet?id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
            })
        },
        async duyet_don() {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('leader_kd_id', this.kds_id)
            formData.append('noi_dung_khao_sat', this.noi_dung_khao_sat)
            formData.append('xac_nhan_thanh_toan', this.xac_nhan_thanh_toan)

            await api.post('don-dich-vu/duyet-don', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal'].hide()
                    this.clearFiles();
                    this.name = null
                    this.load_data();
                }
            })
        },
        async huy_don() {
            if (this.li_do_huy == '' || this.li_do_huy == null) {
                toastr.error('Vui lòng nhập lý do huỷ đơn');
                return
            }
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('li_do_huy', this.li_do_huy)

            await api.post('don-dich-vu/huy-don', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-cancel'].hide()
                    this.li_do_huy = null
                    this.load_data();
                }
            })
        },
        async send_data(event) {
            event.preventDefault();
            const formData = new FormData(document.getElementById('form'))
            await api.post('dao-tao/tao-moi', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal'].hide()
                    this.clearFiles();
                    this.name = null
                    this.load_data();
                }
            })
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
        this.load_kd()
    },
}
</script>

<style lang="scss" scoped>
button:hover {
    span {
        color: white;
    }
}
button {
    transition: 0.3s;
    span {
        transition: 0.3s;
    }
}
</style>