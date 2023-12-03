<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="8" lg="8" xl="8">
                <!-- <div class="d-flex justify-content-between align-items-center mb-5">
                    <title-header>Tổng lương theo tháng</title-header>

                    <div class="d-inline-block">
                        <div>
                            <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="date" label="" class="month-picker" prepend-icon="mdi-calendar"
                                        readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker v-model="date" type="month" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="modal = false">
                                        Cancel
                                    </v-btn>
                                    <v-btn text color="primary" @click="$refs.dialog.save(date)">
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </div>
                    </div>
                </div> -->


                <div>
                    <div class="card">
                        <div class="card-header bg-primary text-light text-center">
                            <b>PHIẾU LƯƠNG</b>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <tr>
                                    <td colspan="2">
                                        <div class="text-center">
                                            <b>{{ data?.thoi_gian }}</b>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Họ và tên</b>
                                    </td>
                                    <td>
                                        <b>{{ data?.hoten }}</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Mã đối tác</b>
                                    </td>
                                    <td>
                                        <b>{{ data?.id }}</b>
                                    </td>
                                </tr>
                            </table>

                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <td><b>Chi tiết khoản mục</b></td>
                                        <td><b>Ngày công thực tế</b></td>
                                        <td><b>Đơn giá</b></td>
                                    </tr>
                                </thead>
                                <!--  -->
                                <tr>
                                    <td colspan="3">
                                        <b>1. Thông tin tính lương</b>
                                    </td>
                                </tr>
                                <tr v-for="(item,n) in data?.donDichVu" v-bind:key="n">
                                    <td>
                                        <div>Mã đơn dịch vụ</div>
                                        <div class="text-primary">{{ item?.ma_don_hang }}</div>
                                    </td>
                                    <td>
                                        <span>{{ item?.so_buoi }}</span>
                                    </td>
                                    <td>
                                        <span>{{ formatCurrency(item?.tong_tien) }}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>Làm thêm giờ</div>
                                    </td>
                                    <td>
                                        <span>-</span>
                                    </td>
                                    <td>
                                        <span>{{ formatCurrency(data?.themGio) }}</span>
                                    </td>
                                </tr>
                                <!--  -->
                                <tr>
                                    <td colspan="2">
                                        <b>2. Tổng lương theo ngày công thực tế</b>
                                    </td>
                                    <td>
                                        <b>{{ formatCurrency(data?.tongThucTe) }}</b>
                                    </td>
                                </tr>
                                <!--  -->
                                <tr>
                                    <td colspan="2">
                                        <b>3. Thu nhập bổ sung</b>
                                    </td>
                                    <td>
                                        <b>{{ formatCurrency(data?.tongPhuPhi) }}</b>
                                    </td>
                                </tr>
                                <tr v-for="(item,n) in data?.phuPhiKhac" v-bind:key="n">
                                    <td colspan="2">
                                        <span>{{ item?.name }}</span>
                                    </td>
                                    <td>
                                        <span>{{ formatCurrency(item?.so_tien) }}</span>
                                    </td>
                                </tr>
                                <!--  -->
                                <tr>
                                    <td colspan="2">
                                        <b>4. Các khoản giảm trừ</b>
                                    </td>
                                    <td>
                                        <b>{{ formatCurrency(data?.tongGiamTru) }}</b>
                                    </td>
                                </tr>
                                <tr v-for="(item,n) in data?.giamTru" v-bind:key="n">
                                    <td colspan="2">
                                        <span>{{ item?.name }}</span>
                                    </td>
                                    <td>
                                        <span>{{ formatCurrency(item?.so_tien) }}</span>
                                    </td>
                                </tr>
                                <!--  -->
                                <tr>
                                    <td colspan="2">
                                        <b>Thành tiền</b>
                                    </td>
                                    <td>
                                        <b>{{ formatCurrency(data?.thanhTien) }}</b>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>


            </v-col>
        </v-row>

    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Tạo phiếu lương',
                previous: '/admin/dashboard/salary'
            },
            data: null,
            date: new Date().toISOString().substr(0, 7),
            month: 1,
            menu: false,
            modal: false,
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
        async load_data() {
            await api.get('chi-luong/tao-phieu-luong?thang=11/2023&id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data
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
                }
            })
        },
    },
    mounted() {
        this.title.previous = '/admin/dashboard/salary/' + this.id
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
}
</script>


<style lang="scss" scoped>
.blade-id {
    display: initial;
}

.box-img {
    width: 55px;
    height: 55px;
    overflow: hidden;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>