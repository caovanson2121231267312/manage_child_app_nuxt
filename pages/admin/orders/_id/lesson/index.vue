<template>
    <div class="content-mp">

        <v-row>
            <v-col xs="12" sm="12" md="12" lg="7" xl="7">
                <div class="card">
                    <div class="card-header bg-primary text-light text-center">
                        <b>Buổi {{ data?.buoi ?? 1 }} / {{ data?.tong_buoi }}</b>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div>
                                <span class="mdi mdi-calendar-alert-outline"></span>
                                <span>
                                    {{ data?.ngay_day }}
                                </span>
                            </div>
                            <div>
                                <span class="mdi mdi-clock-time-eight-outline"></span>
                                <span>
                                    {{ data?.ca_day }}
                                </span>
                            </div>
                        </div>
                        <v-divider></v-divider>
                        <div class="mt-2">
                            <div>
                                <div>
                                    <strong class="text-dark">
                                        Nội dung hoạt động buổi {{ data?.buoi ?? 1 }}
                                    </strong>
                                    <p>...</p>
                                </div>
                            </div>
                        </div>
                        <v-divider></v-divider>
                        <div class="mt-2">
                            <div>
                                <div>
                                    <strong class="text-dark">
                                        Nhận xét buổi học
                                    </strong>
                                    <p>
                                        {{ data?.nhan_xet_buoi_hoc ?? 'Chưa cập nhật' }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <v-divider></v-divider>
                        <div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <div class="me-2 layout-user">
                                        <img :src="giaoVien?.anh_nguoi_dung" alt="">
                                    </div>
                                    <div>
                                        <h3 class="user-name">
                                            {{ giaoVien?.hoten }}
                                        </h3>
                                        <p class="w-p p-0 m-0">
                                            {{ giaoVien?.vai_tro }}
                                        </p>
                                    </div>
                                </div>

                                <div class="d-flex">
                                    <div class="me-2">
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.1" />
                                            <path
                                                d="M11.6796 9.84669L12.8192 8.70711C13.2097 8.31658 13.8429 8.31658 14.2334 8.70711L17.2403 11.7139C17.6308 12.1045 17.6308 12.7376 17.2403 13.1282L15.1847 15.1837C14.8544 15.514 14.7725 16.0187 14.9814 16.4365C16.1892 18.8521 18.1479 20.8108 20.5635 22.0186C20.9813 22.2275 21.486 22.1456 21.8163 21.8153L23.8718 19.7597C24.2624 19.3692 24.8955 19.3692 25.2861 19.7597L28.2929 22.7666C28.6834 23.1571 28.6834 23.7903 28.2929 24.1808L27.1533 25.3204C25.042 27.4317 21.6994 27.6693 19.3107 25.8777L17.2602 24.3398C15.5166 23.0322 13.9678 21.4834 12.6602 19.7399L11.1223 17.6893C9.33072 15.3006 9.56827 11.958 11.6796 9.84669Z"
                                                fill="#0056B1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.1" />
                                            <path opacity="0.4"
                                                d="M29 13.25V18.35C29 19.62 28.58 20.69 27.83 21.43C27.09 22.18 26.02 22.6 24.75 22.6V24.41C24.75 25.09 23.99 25.5 23.43 25.12L22.46 24.48C22.55 24.17 22.59 23.83 22.59 23.47V19.4C22.59 17.36 21.23 16 19.19 16H12.4C12.26 16 12.13 16.01 12 16.02V13.25C12 10.7 13.7 9 16.25 9H24.75C27.3 9 29 10.7 29 13.25Z"
                                                fill="#0056B1" />
                                            <path
                                                d="M22.59 19.4V23.47C22.59 23.83 22.55 24.17 22.46 24.48C22.09 25.95 20.87 26.87 19.19 26.87H16.47L13.45 28.88C13 29.19 12.4 28.86 12.4 28.32V26.87C11.38 26.87 10.53 26.53 9.94 25.94C9.34 25.34 9 24.49 9 23.47V19.4C9 17.5 10.18 16.19 12 16.02C12.13 16.01 12.26 16 12.4 16H19.19C21.23 16 22.59 17.36 22.59 19.4Z"
                                                fill="#0056B1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>

    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import { Swiper, SwiperSlide } from 'swiper';
import 'swiper/swiper.css';
import { Pagination } from 'swiper/modules';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Tiến độ khóa học',
                previous: '/admin/orders'
            },
            part: 1,
            data: null,
            giaoVien: null,
            list: null,
            file: null,
            image: null,
            kds: null,
            kds_id: null,
            teachers: null,
            teacher_id: null,
            li_do_huy: null,
            phu_phi_li_do: null,
            phu_phi_tien: null,
            xac_nhan_thanh_toan: false,
        };
    },
    components: {
        Swiper,
        SwiperSlide,
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
        },
    },
    methods: {
        clearFiles() {
            this.$refs['file-input'].reset()
        },
        set_teacher(id) {
            if (this.teacher_id == id) {
                this.teacher_id = null
            } else {
                this.teacher_id = id
            }
            console.log(this.teacher_id)
        },
        async add_teacher() {
            if (!this.teacher_id) {
                toastr.error('Chọn giáo viên để tiếp tục');
                return
            }
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('giao_vien_id', this.teacher_id)

            await api.post('don-dich-vu/dieu-giao-vien', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-teacher'].hide()
                    this.teacher_id = null
                    this.load_data();
                }
            })
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

            await api.get('don-dich-vu/danh-sach-giao-vien?tuKhoa=&page=1&limit=100&id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.teachers = res?.data?.data
            })
        },
        async load_data() {
            await api.get(`don-dich-vu/tien-do-khoa-hoc?id=${this.id}&buoi=1`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.tienDo
                this.giaoVien = res?.data?.giaoVien
            })
        },
        async add_phu_phi() {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('tong_tien', this.phu_phi_tien)
            formData.append('ghi_chu', this.phu_phi_li_do)

            await api.post('don-dich-vu/them-phu-phi', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-them-phu-phi'].hide()
                    this.phu_phi_tien = null
                    this.phu_phi_li_do = null
                    this.load_data();
                }
            })
        },
        async duyet_don() {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('leader_kd_id', this.kds_id)
            // formData.append('noi_dung_khao_sat', this.noi_dung_khao_sat)
            formData.append('xac_nhan_thanh_toan', this.xac_nhan_thanh_toan ? 1 : 0)

            await api.post('don-dich-vu/duyet-don', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal'].hide()
                    this.kds_id = null
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
        this.title.previous = '/admin/orders/' + this.id
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
        this.load_kd()

        const swiper = new Swiper('#sw1', {
            modules: [Pagination],
            slidesPerView: 2,
            spaceBetween: 25,
            freeMode: true,
        });
    },
}
</script>

<style lang="scss" scoped>
table {
    margin: 0 !important;
    padding: 0 !important;
}

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

.btn {
    padding: 0.575rem 0.75rem !important;
}

.card-teacher {
    border-radius: 10px;
    background: #FFF;
    border: 1px solid #c9c8c8;
    padding: 10px;
    margin-bottom: 10px;
}

.card-teacher.active {
    border-radius: 10px;
    border: 1px solid #4EAEEA;

    background: #E7F6FF;
}</style>