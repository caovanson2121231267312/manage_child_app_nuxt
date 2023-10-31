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


            </b-col>
        </b-row>




    </div>
</template>

<script>
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
            ]
        }
    },
    computed: {
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title)
    }
}
</script>

<style lang="scss" scoped></style>