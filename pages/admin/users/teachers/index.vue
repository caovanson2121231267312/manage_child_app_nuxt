<template>
    <div class="content-mp">
        <div class="">
            <v-row>
                <v-col class="mt-0 pt-0" v-for="n in 12" :key="n" xs="12" sm="6" md="4" lg="4" xl="3">
                    <b-card style="min-width: 245px;" class="">
                        <nuxt-link class="block w-100 teachers" to="/admin/users/teachers/34">
                            <div class="d-flex align-center">
                                <div class="me-2 layout-user">
                                    <img src="@/static/images/teacher/Ellipse49.png" alt="">
                                </div>
                                <div>
                                    <div class="d-flex align-items-center">
                                        <span class="blade-id me-2"># {{ n + 200 }}</span>
                                        <span class="blade-rate">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10"
                                                viewBox="0 0 11 10" fill="none">
                                                <path
                                                    d="M4.46066 1.32835C4.85351 0.710079 5.75587 0.710078 6.14872 1.32835L7.01485 2.69149C7.16144 2.92219 7.39607 3.08284 7.66418 3.13605L9.203 3.44151C9.98137 3.59602 10.2783 4.55212 9.72438 5.12038L8.7729 6.09651C8.56414 6.31067 8.4622 6.60703 8.49504 6.9043L8.6476 8.28556C8.73067 9.03764 7.98069 9.60595 7.2791 9.32255L5.67923 8.67629C5.43897 8.57924 5.17041 8.57924 4.93015 8.67629L3.33027 9.32255C2.62869 9.60595 1.8787 9.03764 1.96178 8.28556L2.11434 6.9043C2.14717 6.60703 2.04523 6.31067 1.83647 6.09651L0.884995 5.12038C0.331079 4.55212 0.628003 3.59602 1.40638 3.44151L2.9452 3.13605C3.2133 3.08284 3.44794 2.92219 3.59452 2.69149L4.46066 1.32835Z"
                                                    fill="#FFB761" />
                                            </svg>
                                            <span class="span-text">5/5</span>
                                        </span>
                                    </div>
                                    <h3 class="name">
                                        Nguyễn Hoàng Anh Thư
                                    </h3>
                                    <p class="w-p p-0 m-0 position">
                                        Giáo viên
                                    </p>
                                </div>
                            </div>
                        </nuxt-link>
                    </b-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Danh sách Giáo viên',
                previous: '/admin/dashboard'
            },
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            selected: 'A',
            options: [
                { item: 'A', name: 'Option A' },
                { item: 'B', name: 'Option B' },
                { item: 'D', name: 'Option C', notEnabled: true },
                { item: { d: 1 }, name: 'Option D' }
            ]
        };
    },
    computed: {},
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>