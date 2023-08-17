<template>
    <div class="content-mp">
        <div class="d-flex align-items-center wmt-27">
            <h1 class="w-title d-inline w-h1">
                Tổng quan
            </h1>

            <div class="d-inline-block">
                <div>
                    <select class="w-form-selected ">
                        <option>Mới nhất</option>
                        <option>Cũ nhất</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="">
            <div class="row w-100 overflow-y-auto dashboard-alanysis flex-xs-nowrap m0-mobile">
                <div class="col-lg-3" v-for="n in 4" :key="n">
                    <b-card style="min-width: 245px;" class="mb-2">
                        <div class="d-flex justify-content-between align-center">
                            <div>
                                <div>Tổng doanh thu</div>
                                <h3 class="wh3-text">328,256,256</h3>
                                <div>
                                    <span class="me-1">
                                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.1827 3.85537C10.1254 3.71488 10.0108 3.59917 9.87164 3.54132C9.80615 3.51653 9.73247 3.5 9.6588 3.5H8.13616C7.81689 3.5 7.56312 3.7562 7.56312 4.07851C7.56312 4.40083 7.81689 4.65703 8.13616 4.65703H8.28351L6.55621 6.40083L5.72122 5.14463C5.62298 5.00413 5.47563 4.90496 5.30372 4.88843C5.12362 4.8719 4.96808 4.92975 4.84529 5.05372L2.40579 7.51653C2.18476 7.73967 2.18476 8.10331 2.40579 8.33471C2.5204 8.45041 2.65957 8.5 2.80692 8.5C2.95427 8.5 3.10162 8.44215 3.20804 8.33471L5.15637 6.36777L5.99136 7.62397C6.0896 7.76446 6.23695 7.86364 6.40886 7.88017C6.58896 7.89669 6.7445 7.83884 6.86729 7.71488L9.09395 5.46694V5.6157C9.09395 5.93802 9.34772 6.19421 9.66699 6.19421C9.98625 6.19421 10.24 5.93802 10.24 5.6157V4.07025C10.2236 3.99587 10.2155 3.92149 10.1827 3.85537Z"
                                                fill="#0056B1" />
                                        </svg>
                                    </span>
                                    <span>+14%</span>
                                </div>
                            </div>
                            <div>
                                <svg class="svg" width="87" height="86" viewBox="0 0 87 86" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="43.098" cy="42.9998" r="39.9998" stroke="#EDF1FB" stroke-width="6" />
                                    <path
                                        d="M54.4454 4.64392C60.9128 6.5573 66.7914 10.0749 71.5346 14.8698C76.2778 19.6646 79.7315 25.5809 81.5747 32.0687C83.418 38.5564 83.5908 45.4049 82.0772 51.9773C80.5635 58.5498 77.4126 64.6328 72.9173 69.6607C68.422 74.6887 62.7284 78.4984 56.3657 80.7356C50.0031 82.9727 43.178 83.5647 36.5252 82.4565C29.8724 81.3483 23.6078 78.5759 18.3139 74.3971C13.02 70.2182 8.86874 64.7686 6.24603 58.5549"
                                        stroke="#0056B1" stroke-width="6" stroke-linecap="round" />
                                </svg>

                            </div>
                        </div>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: null,
                previous: '/admin/dashboard'
            }
        }
    },
    computed: {
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title)
    }
}
</script>