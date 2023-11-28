<template>
    <div class="content-mp">

        <b-row>
            <b-col cols="12" sm="7">
                <!-- <div class="d-flex justify-content-between align-items-center wmt-27">
                    <title-header>Tổng quan doanh thu</title-header> -->

                    <!-- <div class="d-inline-block">
                        <div>
                            <select class="w-form-selected ">
                                <option>Mới nhất</option>
                                <option>Cũ nhất</option>
                            </select>
                        </div>
                    </div> -->
                <!-- </div> -->

                <div>
                    <sales-report></sales-report>
                </div>

                <div class="d-flex justify-content-between align-items-center mt-5">
                    <title-header>Báo cáo doanh thu</title-header>

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
                    <table class="table table-bordered table-hover table-striped">
                        <thead class="bg-primary">
                            <th>
                                <tr>
                                    <span class="text-light">Ngày đóng</span>
                                </tr>
                            </th>
                            <th>
                                <tr>
                                    <span class="text-light">Tên Phụ huynh</span>
                                </tr>
                            </th>
                            <th>
                                <tr>
                                    <span class="text-light">Số điện thoại</span>
                                </tr>
                            </th>
                        </thead>
                        <tbody>
                            <tr v-for="(item,n) in data" v-bind:key="n">
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
                                </td>
                                <td>
                                    <span></span>
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
                name: 'Báo cáo doanh thu',
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
            await api.get(`bao-cao/danh-sach-user?dien_thoai=&dia_chi=&dich_vu_id=&denNgay=&tuNgay=&page=1&limit=10&sort`, {
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

<style lang="scss" scoped></style>