<template>
    <div class="content-mp review-lesson web-form-reivew teacher-training material">
        <!-- <div class="d-flex align-items-center wmt-27 ">
            <h4>Danh sách giáo cụ</h4>
            <nuxt-link class="btn btn-add-form-review" to="/admin/teacher-training/create">
                <span class="icon-plus mdi mdi-plus"></span> Thêm mới
            </nuxt-link>
        </div> -->

        <div class="d-flex justify-content-between align-items-center wmt-27 ">
            <h1 class="w-title d-inline w-h1">
                Danh sách giáo cụ
            </h1>

            <nuxt-link class="btn btn-add-form-review" to="/admin/teacher-training/create">
                <span class="icon-plus mdi mdi-plus"></span> Thêm mới
            </nuxt-link>
        </div>

        <div class="mb-11">
            <div class="card-material">
                <div class="card-material-header">
                    <strong>
                        Gói giáo cụ
                    </strong>
                    <span class="blade-card">MS023</span>
                </div>
                <div class="card-material-body">
                    <div class="svg-card">
                        <svg width="168" height="226" viewBox="0 0 168 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M167 211C167 219.284 160.284 226 152 226H15C6.71573 226 0 219.284 0 211V0L5.85588 13.9798C8.19149 19.5556 13.6459 23.1845 19.6911 23.1845H152C160.284 23.1845 167 29.9002 167 38.1845V211Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div class="main-card">
                        <div class="img-box-card-main">
                            <img src="@/static/images/material/Rectangle4043.png" />
                        </div>

                        <div>
                            <div>
                                <div class="d-flex">
                                    <span>
                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.64339 3.20109L5.81728 5.65521C5.66324 5.75426 5.46945 5.75426 5.31044 5.65521L1.48433 3.20109C1.21104 3.02501 1.14147 2.61232 1.35017 2.3537C1.49427 2.17212 1.65824 2.02355 1.83216 1.919L4.52534 0.268248C5.10174 -0.0894159 6.03591 -0.0894159 6.61231 0.268248L9.3055 1.919C9.47941 2.02355 9.64339 2.17762 9.78749 2.3537C9.98625 2.61232 9.91668 3.02501 9.64339 3.20109Z"
                                                fill="#FC4D32" />
                                            <path
                                                d="M5.28044 6.67868V10.4314C5.28044 10.8496 4.89783 11.1247 4.55994 10.9431C3.53633 10.3874 1.8121 9.3474 1.8121 9.3474C1.20588 8.96773 0.708984 8.01029 0.708984 7.22343V4.38413C0.708984 3.94944 1.12141 3.67431 1.4593 3.88891L5.03199 6.18346C5.18106 6.288 5.28044 6.47509 5.28044 6.67868Z"
                                                fill="#FC4D32" />
                                            <path
                                                d="M5.84668 6.67868V10.4314C5.84668 10.8496 6.22929 11.1247 6.56718 10.9431C7.59079 10.3874 9.31502 9.3474 9.31502 9.3474C9.92124 8.96773 10.4181 8.01029 10.4181 7.22343V4.38413C10.4181 3.94944 10.0057 3.67431 9.66782 3.88891L6.09513 6.18346C5.94606 6.288 5.84668 6.47509 5.84668 6.67868Z"
                                                fill="#FC4D32" />
                                        </svg>
                                        <span>Tổng</span>
                                    </span>
                                    <span class="span2">10 bộ</span>
                                </div>
                                <div class="d-flex">
                                    <span>
                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.64339 3.20109L5.81728 5.65521C5.66324 5.75426 5.46945 5.75426 5.31044 5.65521L1.48433 3.20109C1.21104 3.02501 1.14147 2.61232 1.35017 2.3537C1.49427 2.17212 1.65824 2.02355 1.83216 1.919L4.52534 0.268248C5.10174 -0.0894159 6.03591 -0.0894159 6.61231 0.268248L9.3055 1.919C9.47941 2.02355 9.64339 2.17762 9.78749 2.3537C9.98625 2.61232 9.91668 3.02501 9.64339 3.20109Z"
                                                fill="#FC4D32" />
                                            <path
                                                d="M5.28044 6.67868V10.4314C5.28044 10.8496 4.89783 11.1247 4.55994 10.9431C3.53633 10.3874 1.8121 9.3474 1.8121 9.3474C1.20588 8.96773 0.708984 8.01029 0.708984 7.22343V4.38413C0.708984 3.94944 1.12141 3.67431 1.4593 3.88891L5.03199 6.18346C5.18106 6.288 5.28044 6.47509 5.28044 6.67868Z"
                                                fill="#FC4D32" />
                                            <path
                                                d="M5.84668 6.67868V10.4314C5.84668 10.8496 6.22929 11.1247 6.56718 10.9431C7.59079 10.3874 9.31502 9.3474 9.31502 9.3474C9.92124 8.96773 10.4181 8.01029 10.4181 7.22343V4.38413C10.4181 3.94944 10.0057 3.67431 9.66782 3.88891L6.09513 6.18346C5.94606 6.288 5.84668 6.47509 5.84668 6.67868Z"
                                                fill="#FC4D32" />
                                        </svg>
                                        <span>Tồn kho</span>
                                    </span>
                                    <span class="span2">2 bộ</span>
                                </div>
                            </div>
                            <nuxt-link to="/admin/material" class="read-more mt-2">
                                <span>Xem thêm</span>
                                <span class="mdi mdi-chevron-right"></span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
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
                name: 'Quản lý giáo cụ',
                previous: '/admin/dashboard'
            },
        };
    },
    computed: {},
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
    },
    components: { CardItem }
}
</script>