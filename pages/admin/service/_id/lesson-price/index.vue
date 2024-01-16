<template>
    <div class="content-mp">
        <div class="service-edit-lesson-price">

            <b-row>
                <b-col class="mt-0 pt-0" cols="12" sm="9" md="7">
                    <div class="mb-7 ">
                        <div class="d-flex align-items-center">
                            <span @click="updateFilter(item?.value)" v-for="(item, index) in trinhDo" :key="index">
                                <button-filter :active="selectedFilter === item?.value ? 'active' : ''">
                                    {{ item?.text }}
                                </button-filter>
                            </span>
                        </div>
                    </div>
                    <div v-for="(item, n) in todos" v-bind:key="n" class="">
                        <div class="d-flex align-items-end justify-content-between wow animate__animated animate__zoomIn">
                            <div class="flex-1">
                                <div class="mb-1">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.52 1.3335H5.48004C2.96004 1.3335 2.33337 2.00683 2.33337 4.6935V12.2002C2.33337 13.9735 3.30671 14.3935 4.48671 13.1268L4.49337 13.1202C5.04004 12.5402 5.87337 12.5868 6.34671 13.2202L7.02004 14.1202C7.56004 14.8335 8.43337 14.8335 8.97337 14.1202L9.64671 13.2202C10.1267 12.5802 10.96 12.5335 11.5067 13.1202C12.6934 14.3868 13.66 13.9668 13.66 12.1935V4.6935C13.6667 2.00683 13.04 1.3335 10.52 1.3335ZM9.89337 6.66016L9.56004 7.00016H9.55337L7.53337 9.02016C7.44671 9.10683 7.26671 9.20016 7.14004 9.2135L6.24004 9.34683C5.91337 9.3935 5.68671 9.16016 5.73337 8.84016L5.86004 7.9335C5.88004 7.80683 5.96671 7.6335 6.05337 7.54016L8.08004 5.52016L8.41337 5.18016C8.63337 4.96016 8.88004 4.80016 9.14671 4.80016C9.37337 4.80016 9.62004 4.90683 9.89337 5.18016C10.4934 5.78016 10.3 6.2535 9.89337 6.66016Z"
                                            fill="#0056B1" />
                                    </svg>
                                    <span class="span-title">
                                        {{ item?.so_buoi }} buổi
                                    </span>
                                </div>
                                <div class="position-relative">
                                    <input :value="item?.tong_tien" type="text" placeholder="350,000"
                                        class="form-control input-service" />
                                    <span class="end">đ</span>
                                </div>
                            </div>
                            <div class="mx-2 flex-1">
                                <div class="mb-1 ">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.3533 7.24643L13.34 6.23309C13.1667 6.05976 13.0267 5.71976 13.0267 5.47976V4.03976C13.0267 3.45309 12.5467 2.97309 11.96 2.97309H10.5267C10.2867 2.97309 9.94667 2.83309 9.77334 2.65976L8.76 1.64643C8.34667 1.23309 7.66667 1.23309 7.25334 1.64643L6.22667 2.65976C6.06 2.83309 5.72 2.97309 5.47334 2.97309H4.04C3.45334 2.97309 2.97334 3.45309 2.97334 4.03976V5.47309C2.97334 5.71309 2.83334 6.05309 2.66 6.22643L1.64667 7.23976C1.23334 7.65309 1.23334 8.33309 1.64667 8.74643L2.66 9.75976C2.83334 9.93309 2.97334 10.2731 2.97334 10.5131V11.9464C2.97334 12.5331 3.45334 13.0131 4.04 13.0131H5.47334C5.71334 13.0131 6.05334 13.1531 6.22667 13.3264L7.24 14.3398C7.65334 14.7531 8.33334 14.7531 8.74667 14.3398L9.76 13.3264C9.93334 13.1531 10.2733 13.0131 10.5133 13.0131H11.9467C12.5333 13.0131 13.0133 12.5331 13.0133 11.9464V10.5131C13.0133 10.2731 13.1533 9.93309 13.3267 9.75976L14.34 8.74643C14.7733 8.33976 14.7733 7.65976 14.3533 7.24643ZM5.33334 5.99976C5.33334 5.63309 5.63334 5.33309 6 5.33309C6.36667 5.33309 6.66667 5.63309 6.66667 5.99976C6.66667 6.36643 6.37334 6.66643 6 6.66643C5.63334 6.66643 5.33334 6.36643 5.33334 5.99976ZM6.35334 10.3531C6.25334 10.4531 6.12667 10.4998 6 10.4998C5.87334 10.4998 5.74667 10.4531 5.64667 10.3531C5.45334 10.1598 5.45334 9.83976 5.64667 9.64643L9.64667 5.64643C9.84 5.45309 10.16 5.45309 10.3533 5.64643C10.5467 5.83976 10.5467 6.15976 10.3533 6.35309L6.35334 10.3531ZM10 10.6664C9.62667 10.6664 9.32667 10.3664 9.32667 9.99976C9.32667 9.63309 9.62667 9.33309 9.99334 9.33309C10.36 9.33309 10.66 9.63309 10.66 9.99976C10.66 10.3664 10.3667 10.6664 10 10.6664Z"
                                            fill="#EB1B24" />
                                    </svg>
                                    <span class="span-title">
                                        Khuyến mãi
                                    </span>
                                </div>
                                <div class="position-relative">
                                    <input :value="item?.khuyen_mai" type="text" placeholder="15"
                                        class="form-control input-service" />
                                    <span class="end">%</span>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center align-items-end ">
                                <div class="btn-delete cp" v-b-tooltip.hover title="Xoá"
                                    @click="delete_item(item?.id, item?.tong_tien)">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="16" fill="white" />
                                        <g clip-path="url(#clip0_987_8373)">
                                            <path
                                                d="M16.0643 11.1534C18.197 11.1534 20.3328 11.1594 22.4655 11.1475C22.7975 11.1475 22.9232 11.1802 22.8783 11.5789C22.627 13.849 22.3638 16.1222 22.2112 18.4013C22.1245 19.6896 22.0198 20.9719 21.9151 22.2572C21.8553 22.9951 21.7925 23.4801 21.6609 24.2061C21.4904 25.1344 21.1075 26.0002 19.7555 25.9883C17.2817 25.9913 14.808 25.9645 12.3373 26.0002C11.3202 26.0151 10.5156 25.8038 10.2793 24.2061C10.0131 22.412 9.44475 14.1019 9.44475 14.1019L9.21742 11.7157C9.21742 11.7157 9.15461 11.1534 9.70798 11.1534C11.8288 11.1534 13.9465 11.1534 16.0673 11.1534H16.0643ZM16.5788 18.55C16.5788 17.2736 16.5788 15.9972 16.5788 14.7208C16.5788 14.2983 16.3634 14.0305 16.0284 14.0216C15.6545 14.0127 15.3853 14.3072 15.3853 14.7387C15.3853 17.2766 15.3853 19.8145 15.3883 22.3554C15.3883 22.8047 15.6366 23.1052 15.9985 23.1171C16.3365 23.129 16.5728 22.8107 16.5728 22.3376C16.5728 21.0761 16.5728 19.8115 16.5728 18.55H16.5788ZM19.4653 18.5411C19.4653 17.2498 19.4653 15.9556 19.4653 14.6643C19.4653 14.4977 19.4863 14.331 19.3158 14.212C19.1243 14.0781 18.9448 13.9591 18.6966 14.0692C18.3795 14.209 18.2838 14.453 18.2868 14.7803C18.2958 17.2944 18.2958 19.8115 18.3017 22.3257C18.3017 22.8017 18.5321 23.1082 18.882 23.1112C19.232 23.1171 19.4713 22.8017 19.4713 22.3376C19.4713 21.0731 19.4713 19.8086 19.4713 18.5441L19.4653 18.5411ZM13.6923 18.5708C13.6923 17.2528 13.6923 15.9347 13.6923 14.6167C13.6923 14.218 13.5218 14.0305 13.1598 14.0246C12.8458 14.0186 12.5915 14.2686 12.5915 14.6167C12.5885 17.2379 12.5885 19.8621 12.5915 22.4834C12.5915 22.8583 12.8667 23.1409 13.1838 23.1082C13.5517 23.0695 13.7042 22.8702 13.6983 22.4863C13.6803 21.1832 13.6923 19.877 13.6923 18.5738V18.5708Z"
                                                fill="#979797" />
                                            <path
                                                d="M15.9776 10.0553C13.7461 10.0553 11.5147 10.0553 9.28024 10.0553C8.58927 10.0553 8 9.51382 8 8.88008C8 8.29097 8.58628 7.72864 9.25631 7.72269C10.5844 7.71079 11.9125 7.70781 13.2406 7.72864C13.6085 7.73459 13.7222 7.63938 13.7042 7.26152C13.6713 6.59802 14.2786 6.01486 14.9576 6.00891C15.6366 6.00296 16.3156 6.04462 16.9916 5.99999C17.7035 5.95238 18.3436 6.6129 18.2868 7.23771C18.2509 7.63641 18.4124 7.73162 18.7893 7.72566C20.0755 7.70781 21.3617 7.74947 22.645 7.71674C23.5094 7.69591 24.3081 8.35048 23.8833 9.40076C23.7308 9.7816 23.312 10.0494 22.7616 10.0494C20.599 10.0494 18.4393 10.0494 16.2767 10.0494C16.178 10.0494 16.0793 10.0494 15.9806 10.0494L15.9776 10.0553Z"
                                                fill="#979797" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_987_8373">
                                                <rect width="16" height="20" fill="white" transform="translate(8 6)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <hr class="support-hr" />
                    </div>
                    <div v-if="todos == null || todos?.length == 0">
                        <b-alert class="wow animate__animated animate__bounce" show dismissible variant="primary">Danh sách
                            trống</b-alert>
                    </div>
                </b-col>
                <b-col class="mt-0 pt-0" cols="12" sm="9" md="7">
                    <div class="">
                        <button-add v-b-modal.my-modal>
                            <span class="mdi mdi-plus"></span> Thêm giá buổi học
                        </button-add>

                        <b-modal id="my-modal"  ref="my-modal" hide-footer centered title="Thêm giá buổi học">
                            <!-- <template #modal-header="{ close }">
                            <h5>Thông báo</h5>
                        </template> -->
                            <template #default="{ hide }">
                                <div class="w-100">
                                    <div class="mb-3">
                                        <b-form-select v-model="trinhDo_id" :options="trinhDo"></b-form-select>
                                    </div>
                                    <div class="mb-3">
                                        <b-form-select v-model="ca_id" :options="ca"></b-form-select>
                                    </div>
                                    <div class="mb-3">
                                        <b-form-select v-model="khung_gio_id" :options="khung_gio"></b-form-select>
                                    </div>
                                    <div class="mb-3">
                                        <b-form-input v-model="so_buoi" min="0" max="100000"
                                            placeholder="Nhập số buổi"></b-form-input>
                                    </div>
                                    <div class="mb-3">
                                        <b-form-input v-model="tong_tien" placeholder="Nhập giá tiền"></b-form-input>
                                    </div>
                                    <div class="mb-3">
                                        <b-form-input v-model="khuyen_mai" min="0" max="100"
                                            placeholder="Nhập khuyến mãi"></b-form-input>
                                    </div>
                                </div>
                                <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                    <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                    <button class=" btn-delete ms-1" @click="add_price()">Tạo</button>
                                </div>
                            </template>
                        </b-modal>
                    </div>
                    <div class="my-5">
                        <!-- <button-component>Lưu thay đổi</button-component> -->
                    </div>
                </b-col>
            </b-row>
        </div>

    </div>
</template>

<script>
import ButtonAdd from '~/components/button/ButtonAdd.vue';
import ButtonComponent from '~/components/button/ButtonComponent.vue';
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    components: { ButtonAdd, ButtonComponent },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Học phí và khuyến mãi',
                previous: '/admin/service/' + this.id + '/edit'
            },
            selectedFilter: '',
            todos: [],
            data: null,
            trinhDo_id: 1,
            trinhDo: [],
            khung_gio_id: 0,
            khung_gio: [],
            ca_id: 0,
            ca: [],
            giaBuoiHoc: [],
            so_buoi: null,
            tong_tien: null,
            khuyen_mai: null,
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
            await api.get('dich-vu/get-do-tuoi', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.do_tuoi = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.do_tuoi_id = this.do_tuoi[0].value
            })

            await api.get('dich-vu/get-ca', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.ca = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.ca_id = this.ca[0].value
            })
        },
        async load_data() {
            await api.get(`dich-vu/danh-sach-gia-buoi-hoc?trinh_do=${this.selectedFilter}&page=1&limit=40&sort=0&dich_vu_id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data.dichVu
                this.data = user

                this.trinhDo = res?.data?.data?.trinhDo.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })

                this.trinhDo_id = this.trinhDo[0].value
                if (this.selectedFilter == null || this.selectedFilter == '') {
                    this.selectedFilter = this.trinhDo[0].value
                }

                this.todos = res?.data?.data?.giaBuoiHoc

            })
        },
        async add_price(event) {
            // event.preventDefault();
            const formData = new FormData()
            formData.append('dich_vu_id', this.id)
            formData.append('trinh_do', this.trinhDo_id)
            formData.append('so_buoi', this.so_buoi)
            formData.append('tong_tien', this.tong_tien)
            formData.append('khuyen_mai', this.khuyen_mai)
            formData.append('khung_gio_id', this.khung_gio_id)

            await api.post('dich-vu/them-gia-buoi-hoc', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    this.load_data()
                    toastr.success(res?.data?.message);
                    this.so_buoi = '';
                    this.tong_tien = '';
                    this.khuyen_mai = '';
                    this.$refs['my-modal'].hide()
                    // this.$router.push('/admin/service/' + this.id + '/edit');
                }
            })
        },
        async delete_item(id, name) {
            const formData = new FormData();
            formData.append('id', id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá lựa chọn này!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có xoá nó!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('dich-vu/xoa-gia-buoi-hoc', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            // toastr.success(res?.data?.message);
                            Swal.fire(
                                'Deleted!',
                                res?.data?.message,
                                'success'
                            )
                            this.load_data()
                            // this.load_role()
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })

        },
        async updateFilter(filter) {
            this.selectedFilter = await filter ?? '';
            console.log(this.selectedFilter)
            // await this.load_data()
        }
    },
    mounted() {
        this.load_role()
        this.load_data()
        this.title.previous = '/admin/service/' + this.id + '/edit'
        this.$store.dispatch('title/set_title', this.title);
    },
    watch: {
        selectedFilter () {
            this.load_data()
        },
        ca_id() {
            api.get('dich-vu/get-khung-thoi-gian?type=' + this.ca_id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.khung_gio = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.khung_gio_id = this.khung_gio[0].value
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.support-hr {
    margin: 25px 0px 25px 0px;
}

.end {
    position: absolute;
    color: rgba(45, 45, 45, 0.60);
    text-align: right;
    font-family: SVN-Gilroy;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    top: 10px;
    right: 12px;
}

.input-service {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    padding: 13px 9px;
}

.flex-1 {
    flex: 1;
}

.span-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
</style>