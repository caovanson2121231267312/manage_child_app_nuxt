<template>
    <div class="w-100 ">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <label class="chart-title">Tổng quan đơn hàng</label>
            <div>
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
            </div>
        </div>

        <!-- <client-only> -->
        <div class="w-100">
            <canvas class="w-100 h-100" id="myChart"></canvas>
        </div>
        <!-- </client-only> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            date: new Date().toISOString().substr(0, 7),
            menu: false,
            modal: false,
        }
    },
    components: {},
    computed: {
    },
    mounted() {
        const ctx = document.getElementById('myChart');

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
            data: data,
        };

        new Chart(ctx, config);
    }
}
</script>

<style lang="scss" scoped>
.month-picker {
    width: 94px;
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