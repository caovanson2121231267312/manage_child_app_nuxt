<template>
    <div class="content-mp">

        <v-row>
            <v-col xs="12" sm="12" md="12" lg="7" xl="7">
                <div class="d-flex align-items-center justify-content-between wmt-27">
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
                        {{ data_service?.dichVu?.ten_dich_vu ?? 'Loading...' }}
                    </title-header>


                </div>

                <!--  -->
                <div class="mb-11 mt-5">
                    <div class="w-100">
                        <div class="swiper" id="sw1">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide max-box" v-for="(item, n) in data" v-bind:key="n">
                                    <nuxt-link class="position-relative"
                                        :to="'/admin/lsm/students/' + id + '/detail/' + item?.id">
                                        <div class="card-body-bg img-box">
                                            <img :src="item?.image" alt="">
                                            <!-- <img src="@/static/images/students/Rectangle444.png" alt=""> -->
                                            <div class="box-edit">
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="15" cy="15" r="15" fill="white" fill-opacity="0.8" />
                                                    <path
                                                        d="M21.75 22.5H8.25C7.9425 22.5 7.6875 22.245 7.6875 21.9375C7.6875 21.63 7.9425 21.375 8.25 21.375H21.75C22.0575 21.375 22.3125 21.63 22.3125 21.9375C22.3125 22.245 22.0575 22.5 21.75 22.5Z"
                                                        fill="#979797" />
                                                    <path
                                                        d="M20.2649 8.61024C18.8099 7.15524 17.3849 7.11774 15.8924 8.61024L14.9849 9.51774C14.9099 9.59274 14.8799 9.71274 14.9099 9.81774C15.4799 11.8052 17.0699 13.3952 19.0574 13.9652C19.0874 13.9727 19.1174 13.9802 19.1474 13.9802C19.2299 13.9802 19.3049 13.9502 19.3649 13.8902L20.2649 12.9827C21.0074 12.2477 21.3674 11.5352 21.3674 10.8152C21.3749 10.0727 21.0149 9.35274 20.2649 8.61024Z"
                                                        fill="#979797" />
                                                    <path
                                                        d="M17.7073 14.6476C17.4898 14.5426 17.2798 14.4376 17.0773 14.3176C16.9123 14.2201 16.7548 14.1151 16.5973 14.0026C16.4698 13.9201 16.3198 13.8001 16.1773 13.6801C16.1623 13.6726 16.1098 13.6276 16.0498 13.5676C15.8023 13.3576 15.5248 13.0876 15.2773 12.7876C15.2548 12.7726 15.2173 12.7201 15.1648 12.6526C15.0898 12.5626 14.9623 12.4126 14.8498 12.2401C14.7598 12.1276 14.6548 11.9626 14.5573 11.7976C14.4373 11.5951 14.3323 11.3926 14.2273 11.1826C14.0896 10.8876 13.7024 10.8 13.4722 11.0302L9.25475 15.2476C9.15725 15.3451 9.06725 15.5326 9.04475 15.6601L8.63975 18.5326C8.56475 19.0426 8.70725 19.5226 9.02225 19.8451C9.29225 20.1076 9.66725 20.2501 10.0723 20.2501C10.1623 20.2501 10.2523 20.2426 10.3423 20.2276L13.2223 19.8226C13.3573 19.8001 13.5448 19.7101 13.6348 19.6126L17.8592 15.3882C18.0847 15.1626 18 14.7744 17.7073 14.6476Z"
                                                        fill="#979797" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="footer-box text-start">
                                            <svg width="187" height="91" viewBox="0 0 187 91" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_207_5271" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                    x="0" y="0" width="187" height="91">
                                                    <path
                                                        d="M187 76C187 84.2843 180.284 91 172 91H15C6.71573 91 0 84.2843 0 76V0L5.95919 15.0535C8.22399 20.7746 13.753 24.5324 19.9061 24.5324H172C180.284 24.5324 187 31.2481 187 39.5324V76Z"
                                                        fill="url(#paint0_linear_207_5271)" />
                                                </mask>
                                                <g mask="url(#mask0_207_5271)">
                                                    <path
                                                        d="M187 76C187 84.2843 180.284 91 172 91H15C6.71573 91 0 84.2843 0 76V0L5.95919 15.0535C8.22399 20.7746 13.753 24.5324 19.9061 24.5324H172C180.284 24.5324 187 31.2481 187 39.5324V76Z"
                                                        fill="url(#paint1_linear_207_5271)" />
                                                    <path
                                                        d="M120.126 97.4654C116.464 91.7571 116.888 84.0344 122.114 78.836C124.946 76.022 128.495 74.4548 132.445 73.7465C135.837 73.1388 139.285 73.449 142.685 72.9848C149.629 72.0313 155.317 68.9773 159.565 63.2795C162.912 58.7927 167.125 55.3697 172.501 53.5193C181.642 50.372 189.828 52.8542 197.334 58.088C211.843 68.211 217.538 82.6672 217.358 99.8994C217.269 108.232 216.092 116.281 211.461 123.451C205.738 132.317 196.612 135.997 187.227 133.314C183.851 132.352 181.016 130.39 178.443 128.137C168.207 119.193 156.102 114.233 143.057 111.144C137.724 109.881 132.338 108.703 127.666 105.5C124.915 103.615 122.685 101.31 120.13 97.4628L120.126 97.4654Z"
                                                        fill="white" fill-opacity="0.1" />
                                                </g>
                                                <defs>
                                                    <linearGradient id="paint0_linear_207_5271" x1="234" y1="8.46512"
                                                        x2="1.23236" y2="78.1328" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#4EAEEA" />
                                                        <stop offset="1" stop-color="#0056B1" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_207_5271" x1="234" y1="8.46512"
                                                        x2="1.23236" y2="78.1328" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#FF9685" />
                                                        <stop offset="1" stop-color="#FC4D32" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <strong class="title-box text-start w-100">{{ item?.tieu_de }}</strong>
                                        </div>
                                    </nuxt-link>
                                </div>
                            </div>
                            <!-- If we need pagination -->
                            <div class="swiper-pagination"></div>

                            <div class="swiper-scrollbar"></div>
                        </div>
                        <!--  -->
                    </div>
                </div>
                <!--  -->

                <div class="w-100 mt-7"  v-b-modal.my-modal>
                    <button-add>
                        <span class="icon-plus mdi mdi-plus"></span> Thêm Chương trình
                    </button-add>
                </div>


                <b-modal id="my-modal" ref="my-modal" hide-footer centered title="Thêm Chương trình học">
                <!-- <template #modal-header="{ close }">
                            <h5>Thông báo</h5>
                        </template> -->
                <template #default="{ hide }">
                    <form id="form" @submit="send_data">

                        <div class="my-4 pb-3">
                            <div class="d-flex justify-content-between mb-2">
                                <label>Ẩn hiện chương trình:</label>
                                <b-form-checkbox v-model="bat_chuong_trinh" switch size="lg"></b-form-checkbox>
                            </div>
                            <div>
                                <b-form-group>
                                    <label>Ảnh:</label>
                                    <b-form-file name="image" accept="image/*" v-model="file" ref="file-input"
                                        id="file-large"></b-form-file>
                                </b-form-group>
                            </div>
                            <div>
                                <b-form-group>
                                    <label>Tiêu đề:</label>
                                    <b-form-input name="tieu_de" v-model="tieu_de" placeholder="Nhập"></b-form-input>
                                </b-form-group>
                            </div>

                        </div>
                        <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                            <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                            <button class=" btn-delete ms-1" type="submit">Thêm</button>
                        </div>
                    </form>

                </template>
            </b-modal>
            </v-col>
        </v-row>

    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper';
import 'swiper/swiper.css';
// import 'swiper/css/pagination';
// import './style.css';
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import { Pagination } from 'swiper/modules';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Dịch vụ',
                previous: '/admin/lsm/students'
            },
            coBan: [],
            nangCao: [],
            data: null,
            data_service: null,
            file: null,
            image: null,
            bat_chuong_trinh: true,
            tieu_de: null,
            file: null,

        };
    },
    setup() {
        return {
            modules: [Pagination],
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
        }
    },
    methods: {
        async delete_img() {
            this.image = null;
            this.file = null;

            const formData = new FormData()
            formData.append('id', this.id)

            await api.post('dao-tao/delete-image-khoa-hoc', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data();
                }
            })
        },
        async handleFileChange(event) {
            const img = event.target.files[0];
            this.file = img;
            if (await img) {
                this.image = URL.createObjectURL(img);
            }

            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('image', this.file)

            await api.post('dao-tao/update-image-khoa-hoc', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.load_data();
                }
            })
        },
        clearFiles() {
            this.$refs['file-input'].reset()
        },
        create_new() {
            this.$router.push('/admin/lsm/teacher-training/' + this.id + '/create_course')
        },
        async load_data() {
            await api.get(`chuong-trinh-hoc/danh-sach?page=1&limit=&sort=1&dich_vu_id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data
            })

            await api.get(`dich-vu/chi-tiet?id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data_service = res?.data?.data
            })
        },
        async send_data(event) {
            event.preventDefault();
            const formData = new FormData()
            formData.append('tieu_de', this.tieu_de)
            formData.append('image', this.file)
            formData.append('dich_vu_id', this.id)
            formData.append('bat_chuong_trinh', this.bat_chuong_trinh == true ? 1 : 0)

            await api.post('chuong-trinh-hoc/tao-moi', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal'].hide()
                    this.clearFiles();
                    this.file = null;
                    this.tieu_de = null;
                    this.load_data();
                }
            })
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()

        const swiper = new Swiper('#sw1', {
            modules: [Pagination],
            slidesPerView: 2,
            spaceBetween: 25,
            freeMode: true,
        });

        const swiper1 = new Swiper('#sw2', {
            modules: [Pagination],
            slidesPerView: 2,
            spaceBetween: 25,
            freeMode: true,
        });
    },
}
</script>

<style lang="scss" scoped>
.text-view-p {
    color: #2d2d2d;
    font-family: SVN-Gilroy;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.img-box {
    width: 187px;
    height: 143px;
    border-radius: 15px 15px 0px 0px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.footer-box {
    position: absolute;
    bottom: -45px;
}

.title-box {
    position: absolute;
    color: #fff;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    top: 23px;
    padding: 10px 21px;
    left: 0;
}

.box-edit {
    position: absolute;
    position: absolute;
    top: 9px;
    right: 9px;
}

.max-box {
    max-height: 200px;
    max-width: 201px;
}

.swiper {
    width: 100%;
    height: 100%;
    padding-top: 7px;
    padding-bottom: 50px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-img {
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    padding: 15px;
    display: flex;
    justify-content: space-between;

    .box-img {
        width: 248px;
        height: 122px;
        border-radius: 10px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.span-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    i {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
    }
}
</style>