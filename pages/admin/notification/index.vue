<template>
    <div class="content-mp">
        <div class="notification">
            <v-row class="">
                <v-col class="w-100" xs="12" sm="12" md="7" lg="7" xl="7">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <title-header>Thông báo đã gửi</title-header>
                        <nuxt-link to="/admin/notification/create">
                            <button-add addClass="btn-header">
                                <span class="mdi mdi-plus"></span> Tạo thông báo
                            </button-add>
                        </nuxt-link>
                    </div>
                    <div class="d-flex flex-wrap">
                        <!-- <button class="btn btn-type active">Tất cả</button> -->
                        <div class="btn btn-type" :class="{ active: selectedFilter === '' }" @click="updateFilter('')">
                            Tất cả
                        </div>
                        <div class="btn btn-type" v-for="(item, index) in types" :key="index"
                            :class="{ active: selectedFilter === item?.id }" @click="updateFilter(item?.id)">
                            {{ item?.name }}
                        </div>
                    </div>
                </v-col>

                <template v-for="(item, index) in data">
                    <v-col class="w-100" v-bind:key="index" xs="12" sm="12" md="7" lg="7" xl="7">
                        <div style="min-width: 245px;" class="d-flex w-100">
                            <div class="time">{{ item?.date }}</div>
                            <div class="br-bt"></div>
                        </div>

                        <div v-for="(i, n) in item?.data" v-bind:key="n" style="min-width: 245px;"
                            class="mt-3 card-notification hover-card wow animate__animated animate__zoomIn">
                            <div class="me-3">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24" cy="24" r="24" fill="#FFB761" fill-opacity="0.2" />
                                    <path opacity="0.4"
                                        d="M29.6233 12.3334H18.3766C15.8916 12.3334 13.8733 14.3634 13.8733 16.8367V33.275C13.8733 35.375 15.3783 36.2617 17.2216 35.2467L22.915 32.085C23.5216 31.7467 24.5016 31.7467 25.0966 32.085L30.79 35.2467C32.6333 36.2734 34.1383 35.3867 34.1383 33.275V16.8367C34.1266 14.3634 32.1083 12.3334 29.6233 12.3334Z"
                                        fill="#FFA02F" />
                                    <path
                                        d="M26.9166 23.3H21.0833C20.6049 23.3 20.2083 22.9034 20.2083 22.425C20.2083 21.9467 20.6049 21.55 21.0833 21.55H26.9166C27.3949 21.55 27.7916 21.9467 27.7916 22.425C27.7916 22.9034 27.3949 23.3 26.9166 23.3Z"
                                        fill="#FFA02F" />
                                </svg>
                            </div>
                            <div class="w-100">
                                <div class="notification-title">{{ i?.tieu_de }} !</div>
                                <div class="time mt-2">{{ i?.created }}</div>
                                <hr class="my-1" />
                                <div>
                                    <span class="span1">Nội dung:</span>
                                    <span class="ms-1 span2">{{ i?.noi_dung }}</span>
                                </div>
                                <div>
                                    <span class="span1">Bởi:</span>
                                    <span class="ms-1 span2">{{ i?.user?.hoten }}</span>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </template>

            </v-row>
        </div>
    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Quản lý thông báo',
                previous: '/admin/dashboard'
            },
            data: null,
            types: null,
            selectedFilter: '',
        };
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async load_type() {
            await api.get('thong-bao/get-type', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.types = res?.data?.data
            })
        },
        async load_data() {
            await api.get(`thong-bao/danh-sach?type=${this.selectedFilter}&page=1&limit=30&sort=1&tuKhoa`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data
            })
        },
        async updateFilter(filter) {
            this.selectedFilter = await filter ?? '';
            await this.load_data()
        }
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_type()
        this.load_data()
    },
    components: {}
}
</script>

<style lang="scss" scoped>
.notification {
    .card-notification {
        border-radius: 10px;
        background: #FFF;
        width: 100%;
        padding: 15px;
        display: flex;

        .notification-title {
            color: #2D2D2D;
            font-family: SVN-Gilroy;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        .span1 {
            color: rgba(45, 45, 45, 0.80);
            font-family: SVN-Gilroy;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
        }

        .span2 {
            color: rgba(45, 45, 45, 0.80);
            font-family: SVN-Gilroy;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
        }
    }

    .time {
        color: #7D7D7D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        flex: 1;
        min-width: fit-content;
    }

    .br-bt {
        width: 100%;
        border-bottom: 1px solid #E5E5E5;
    }

    .btn-type {
        border-radius: 46px;
        background: #E5E5E5;
        display: flex;
        padding: 10px 28px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        color: #2D2D2D;
        text-align: center;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        margin-right: 10px;
        margin-bottom: 10px;
        line-height: normal;
        transition: 0.3s;

        &:hover {
            background: #FC4D32;
            color: white;
        }
    }

    .active {
        background: #FC4D32;
        color: white;
    }

    @media (max-width: 600px) {
        .btn-type {
            padding: 8px 25px;
            margin-right: 7px;
            margin-bottom: 7px;
        }
    }
}
</style>