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

                <div class="d-flex justify-content-center mt-4">
                    <b-pagination v-model="current_page" :total-rows="total" :per-page="per_page" first-text="First"
                        prev-text="Prev" next-text="Next" last-text="Last"></b-pagination>

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
    components: { SalesReport },
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
            per_page: 0,
            current_page: 1,
            total: 0,
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
            await api.get(`chi-luong/danh-sach?tuKhoa=&dien_thoai=&leader_kd_id=&dia_chi=&dich_vu_id=&page=${this.current_page}&limit=8&sort=1&thang=`, {
                // await api.get('chi-luong/danh-sach?tuKhoa=&dien_thoai=&leader_kd_id=&dia_chi=&dich_vu_id=&page=1&limit=&sort=1&thang=' + (this.month ?? ''), {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
                this.per_page = res?.data?.per_page ?? 0
                this.current_page = res?.data?.current_page ?? 0
                this.total = res?.data?.total
            })
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title)
        this.load_data()
    },
    watch: {
        current_page() {
            this.load_data()
        }
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