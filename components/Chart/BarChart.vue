<template>
    <div class="w-100 ">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <label class="chart-title">Tổng quan doanh thu</label>
            <b-form-select id="example-locales" v-model="arrange" :options="arranges" class="mb-2"></b-form-select>
            <!-- <div>
                <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="date" label="" class="month-picker" prepend-icon="mdi-calendar" readonly
                            v-bind="attrs" v-on="on"></v-text-field>
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
            </div> -->
        </div>

        <!-- <client-only> -->
        <div class="w-100 mt-4">
            <canvas class="w-100 h-100 min-height" id="myChart"></canvas>
        </div>
        <!-- </client-only> -->
    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    data() {
        return {
            value: '',
            date: new Date().toISOString().substr(0, 7),
            menu: false,
            modal: false,
            data: null,
            ctx: null,
            arrange: 0,
            arranges: [
                { value: '0', text: '7 ngày gần nhất' },
                { value: '1', text: '3 tháng gần nhất' },
                { value: '2', text: '3 năm gần nhất' },
            ],
        }
    },
    components: {},
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        getRandomColor() {
            // Implement logic to generate a random color
            return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        },
        async load_data() {
            await api.get('bao-cao/tong-quan-doanh-thu?type=' + this.arrange, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
                const datax = res?.data?.data

                console.log(datax[0].list)

                const transformedData = {
                    labels: datax[0].list.map(x => (x.created)),
                    datasets: datax.map(category => ({
                        label: category.name,
                        data: category.list.map(item => item.tong_tien),
                        fill: false,
                        borderColor: this.getRandomColor(),
                    })),
                };

                console.log(transformedData)


                const data = {
                    labels: [1, 2, 3, 4, 5, 6, 7],
                    datasets: [{
                        label: 'Bảo mẫu Pro',
                        data: [65, 99, 80, 181, 56, 55, 40],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                    }, {
                        // type: 'line',
                        label: 'Gia sư Pro',
                        data: [165, 259, 30, 41, 36, 155, 240],
                        borderColor: 'rgb(255, 99, 132)',
                        fill: false,
                        // backgroundColor: 'rgba(255, 99, 132, 0.2)'
                    }, {
                        // type: 'line',
                        label: 'Giáo dục sớm',
                        data: [85, 159, 36, 71, 236, 255, 140],
                        fill: false,
                        borderColor: 'rgb(54, 162, 235)'
                    }]
                };

                const config = {
                    type: 'line',
                    data: transformedData,
                };

                new Chart(this.ctx, config);
            })
        },
    },
    mounted() {
        this.ctx = document.getElementById('myChart');

        this.load_data()
    },
    watch: {
        arrange() {
            this.load_data();
        },
        date() {
            const originalDate = new Date(this.date); // Thời gian ban đầu (yyyy-MM)
            const month = originalDate.getMonth() + 1; // Lấy tháng (tính từ 0, nên cần cộng thêm 1)
            const year = originalDate.getFullYear();

            this.selected_date = `${month}/${year}`;
            this.load_data();
        },
    }
}
</script>

<style lang="scss" scoped>
.month-picker {
    width: 94px;
}

#example-locales {
    width: 200px;
}

.min-height {
    min-height: 200px;
}

.chart-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>