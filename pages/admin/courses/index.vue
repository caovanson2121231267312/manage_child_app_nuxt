<template>
    <div class="content-mp">
        <div class="d-flex justify-content-between align-items-center wmt-27 ">
            <h1 class="w-title d-inline w-h1">
                Danh sách khóa học
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
            <v-row>
                <v-col v-for="n in 4" :key="n" xs="12" sm="6" md="4" lg="4" xl="3">
                    <CardItem />
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import CardItem from '../../../components/card/CardItem.vue';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Quản lý đơn dịch vụ',
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
    components: { CardItem }
}
</script>