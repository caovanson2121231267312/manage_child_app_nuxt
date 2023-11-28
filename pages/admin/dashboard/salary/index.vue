<template>
    <div class="content-mp">

        <b-row>
            <b-col cols="12" sm="7">
                <div class="d-flex justify-content-between align-items-center mt-5">
                    <title-header>Báo cáo lương nhân sự</title-header>

                    <div class="d-inline-block">
                        <div>
                            <select class="w-form-selected ">
                                <option>Mới nhất</option>
                                <option>Cũ nhất</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="w-100 mt-3">
                    <button-add>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.60841 16.4166C6.29175 15.6833 7.33342 15.7416 7.93342 16.5416L8.77508 17.6666C9.45008 18.5583 10.5417 18.5583 11.2167 17.6666L12.0584 16.5416C12.6584 15.7416 13.7001 15.6833 14.3834 16.4166C15.8667 18 17.0751 17.475 17.0751 15.2583V5.86663C17.0834 2.50829 16.3001 1.66663 13.1501 1.66663H6.85008C3.70008 1.66663 2.91675 2.50829 2.91675 5.86663V15.25C2.91675 17.475 4.13341 17.9916 5.60841 16.4166Z"
                                stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.66675 5.83337H13.3334" stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M7.5 9.16663H12.5" stroke="#4EAEEA" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Tạo phiếu lương
                    </button-add>
                </div>

                <div class="mt-6">
                    <table class="table table-bordered table-hover table-striped table-salary">
                        <thead class="bg-primary">
                            <th>
                                <tr>
                                    <span class="text-light">Tên Giáo viên</span>
                                </tr>
                            </th>
                            <th>
                                <tr>
                                    <span class="text-light">Tổng lương</span>
                                </tr>
                            </th>
                        </thead>
                        <tbody>
                            <tr v-for="(item, n) in data" v-bind:key="n">
                                <td>
                                    <nuxt-link class="d-block" :to="'/admin/dashboard/salary/' + item?.id">
                                        <div class="d-flex align-items-center">
                                            <div class="box-img me-2">
                                                <img :src="item?.anh_nguoi_dung" />
                                            </div>
                                            <div>
                                                <div class="blade blade-id"># {{ item?.id }}</div>
                                                <div class="user-name">
                                                    {{ item?.hoten ?? 'Chưa cập nhật tên' }}
                                                </div>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </td>
                                <td>
                                    <nuxt-link class="d-block" :to="'/admin/dashboard/salary/' + item?.id">
                                        <div class="salary">
                                            {{ formatCurrency(item?.tong_tien) }}
                                        </div>
                                    </nuxt-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </b-col>
        </b-row>




    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import SalesReport from '~/components/Report/SalesReport.vue';

export default {
    layout: 'admin',
    components: {SalesReport},
    data() {
        return {
            title: {
                name: 'Báo cáo chi lương',
                previous: '/admin/dashboard'
            },
            date: new Date().toISOString().substr(0, 7),
            menu: false,
            modal: false,
            selected: 0,
            options: [
                { value: 0, text: 'Tất cả' },
                { value: 1, text: 'Giáo viên' },
            ],
            data: null,
        }
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async load_data() {
            await api.get('chi-luong/danh-sach?tuKhoa=&dien_thoai=&leader_kd_id=&dia_chi=&dich_vu_id=&page=1&limit=15&sort=1&thang=', {
                // await api.get('chi-luong/danh-sach?tuKhoa=&dien_thoai=&leader_kd_id=&dia_chi=&dich_vu_id=&page=1&limit=&sort=1&thang=' + (this.month ?? ''), {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
            })
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title)
        this.load_data()
    }
}
</script>

<style lang="scss" scoped>
.table-salary {
    tr {
        td {
            .blade-id {
                display: initial;
            }

            .user-name {
                color: #0056B1;
                font-family: SVN-Gilroy;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-decoration-line: underline;
            }

            .box-img {
                width: 35px;
                height: 35px;
                overflow: hidden;
                border-radius: 50%;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .salary {
                color: #0056B1;
                font-family: SVN-Gilroy;
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                display: flex;
                height: 100%;
                align-items: center;
            }

            .span {
                color: #2D2D2D;
                font-family: SVN-Gilroy;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }
    }

    margin-top: 10px;
    border-radius: 10px !important;
    border: 1px solid var(--Stroke-Color, #EFF0F6);
    background: #FFF;
    box-shadow: 0px 2px 48px 0px rgba(0, 0, 0, 0.06);
    overflow: hidden;
}
</style>