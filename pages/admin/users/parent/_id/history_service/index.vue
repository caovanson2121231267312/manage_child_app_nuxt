<template>
    <div class="content-mp history-course">
        <div class="d-flex align-items-center justify-content-between mb-5">
            <div class="mb-2">
                <TitleHeader>Danh sách đơn dịch vụ</TitleHeader>
            </div>

            <div>
                <b-form-select id="example-locales" v-model="arrange" :options="arranges" class="mb-2"></b-form-select>
            </div>
        </div>

        <v-row>
            <v-col v-for="n in 9" :key="n" xs="12" sm="6" md="4" lg="4" xl="3">
                <card-service :status="generateRandomNumber()"></card-service>
            </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Lịch sử đăng ký dịch vụ',
                previous: '/admin/users/parent/' + this.id ?? 0
            },
            value: '',
            arrange: 1,
            arranges: [
                { value: '0', text: 'Mới nhất' },
                { value: '1', text: 'Cũ nhất' },
            ],
            status: [
                'doing',
                'done',
            ]
        };
    },
    validate({ params }) {
        return /^[0-9]{0,2}$/.test(params.id)
    },
    components: {},
    computed: {
        id() {
            console.log(this.$route.params.id)
            return this.$route.params.id
        }
    },
    methods: {
        generateRandomNumber() {
            const result = this.status[Math.floor(Math.random() * 2)]
            console.log(result)
            return result;
        }
    },
    mounted() {
        this.title.previous = '/admin/users/parent/' + this.id ?? 0
        this.$store.dispatch('title/set_title', this.title);
    },
}
</script>

<style lang="scss" scoped>
.hover-card {
    transition: 0.2s;
}

.hover-card:hover {
    box-shadow: 0 0 25px -5px #9e9c9e;
}
</style>