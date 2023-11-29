<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="6" xl="6" style="min-width: 373px;">
                <div class="d-flex align-items-center justify-content-between wmt-27">
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.00781" cy="8" r="8" fill="#0056B1" />
                            <path
                                d="M10.5997 6.78514L6.47928 4.16485C5.50162 3.54199 4.43863 4.80059 4.93279 5.99476L5.50873 7.38652C5.66871 7.77312 5.66871 8.22845 5.50873 8.61505L4.93279 10.0068C4.43863 11.201 5.50162 12.4553 6.47928 11.8367L10.5997 9.21643C11.4103 8.70096 11.4103 7.30061 10.5997 6.78514Z"
                                fill="white" />
                        </svg>
                        <span class="span-h">
                            {{ data?.dichVu ?? 'Loading...' }}
                        </span>
                    </div>

                    <nuxt-link :to="'/admin/lsm/teacher-training/' + id + '/edit/' + id_lesson" class="btn-edit">
                        <svg class="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.7578 12.9814L13.98 13.8121C13.5674 14.2526 13.0079 14.5 12.4246 14.5C11.8412 14.5 11.2818 14.2526 10.8692 13.8121C10.4561 13.3725 9.8967 13.1257 9.31352 13.1257C8.73034 13.1257 8.17093 13.3725 7.7578 13.8121M0.757812 14.5H2.06024C2.44071 14.5 2.63095 14.5 2.80997 14.458C2.9687 14.4208 3.12043 14.3595 3.25961 14.2762C3.41659 14.1823 3.55111 14.051 3.82015 13.7883L13.5912 4.24962C14.2355 3.62061 14.2355 2.60077 13.5912 1.97176C12.9469 1.34275 11.9022 1.34275 11.2578 1.97176L1.48679 11.5105C1.21776 11.7731 1.08324 11.9044 0.98704 12.0577C0.90175 12.1936 0.838899 12.3417 0.800793 12.4966C0.757812 12.6714 0.757812 12.8571 0.757812 13.2286V14.5Z"
                                stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Chỉnh sửa
                    </nuxt-link>

                </div>
                <div class="my-2">
                    <title-header>
                        {{ data?.tieu_de ?? 'Loading...' }}
                    </title-header>
                </div>

                <div class="w-100">
                    <img v-if="data?.image" class="img-w" :src="data?.image" alt="">
                    <img v-else class="img-w" src="@/static/images/teacher-training/Rectangle4052.png" alt="">
                </div>

                <!--  -->
                <!-- <div>
                    <div class="mt-5">
                        <title-header>Danh sách bài học</title-header>
                    </div>

                    <div>
                        <div v-for="(item, n) in lesson" v-bind:key="n"
                            class="d-flex justify-content-between align-items-center card-lsm hover-card mt-4  wow animate__animated animate__zoomIn cp"
                            @click="lesson_show(item?.id)">
                            <div class="">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="12.2059" cy="12" rx="12.1029" ry="12" fill="#4EAEEA" />
                                    <path
                                        d="M10.7753 4.99796L6.3596 7.67751C4.94393 8.5366 4.94393 10.4593 6.3596 11.3184L10.7753 13.998C11.5675 14.4821 12.8731 14.4821 13.6653 13.998L18.059 11.3184C19.4674 10.4593 19.4674 8.54342 18.059 7.68433L13.6653 5.00478C12.8731 4.51387 11.5675 4.51387 10.7753 4.99796Z"
                                        stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M7.53321 12.1909L7.52588 15.3886C7.52588 16.2546 8.24472 17.1818 9.12492 17.4546L11.4648 18.1773C11.8682 18.3 12.5357 18.3 12.9465 18.1773L15.2864 17.4546C16.1666 17.1818 16.8854 16.2546 16.8854 15.3886V12.225"
                                        stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M19.1011 13.5001V9.40918" stroke="white" stroke-width="1.3"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="lesson mt-2"> {{ item?.tieu_de }}</span>
                            </div>
                            <div>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L5 5L1 1" stroke="#2D2D2D" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <b-modal id="my-modal-show" ref="my-modal-show" hide-footer centered :title="data_lesson?.tieu_de">
                        <template #default="{ hide }">
                            <div>

                                <div class="my-2">
                                    <div>
                                        <div>
                                            <strong>
                                                <span>Danh sách câu hỏi</span>
                                            </strong>
                                        </div>
                                        <div class="my-3 w-100 " v-for="(item, n) in data_lesson?.cauHoi" v-bind:key="n">
                                            <v-card>
                                                <v-card-text>
                                                    <div class="mt-0">
                                                        <div>
                                                            <strong>
                                                                <b>
                                                                    {{ item?.tieu_de }}
                                                                </b>
                                                            </strong>
                                                        </div>
                                                        <div class="mt-3">
                                                            <p>
                                                                <b>Giới thiệu bài học</b>
                                                            </p>
                                                            <p>
                                                                {{ item?.gioi_thieu }}
                                                            </p>
                                                        </div>
                                                        <div class="mt-3">
                                                            <p>
                                                                <b>Video bài học</b>
                                                            </p>
                                                            <a :href="item?.link" target="_blank">
                                                                {{ item?.link }}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <strong>
                                                <span>Bài Test</span>
                                            </strong>
                                        </div>
                                        <div class="my-3 w-100" v-for="(item, n) in data_lesson?.baiTest" v-bind:key="n">
                                            <v-card>
                                                <v-card-text>
                                                    <div class="mt-0">
                                                        <a :href="item?.link" target="_blank">
                                                            {{ item?.link }}
                                                        </a>
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </div>
                                    </div>

                                </div>
                                <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                    <button class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                    <button class=" btn-delete ms-1" @click="delete_leson(data_lesson?.id)">Xóa bài</button>
                                </div>
                            </div>

                        </template>
                    </b-modal>

                    <div class="my-7">
                        <nuxt-link class="d-block"
                            :to="'/admin/lsm/teacher-training/' + id + '/detail/' + id_lesson + '/create'">
                            <button-add>
                                <span class="mdi mdi-plus"></span> Thêm bài học
                            </button-add>
                        </nuxt-link>
                    </div>
                </div>

                <hr />

                <div>
                    <div class="mt-5">
                        <title-header>Danh sách giáo viên được gán</title-header>
                    </div>

                    <div class="card-teacher">
                        <div class="card-item mt-3  wow animate__animated animate__pulse" v-for="(item, n) in teachers"
                            v-bind:key="n">
                            <div class="d-flex">
                                <div class="box-img me-2">
                                    <img :src="item?.anh_nguoi_dung" alt="">
                                </div>
                                <div>
                                    <div class="user-id mb-2">
                                        <span class="blade-id"># {{ item?.id }}</span>
                                    </div>
                                    <div class="user-name">
                                        {{ item?.hoten ?? 'Chưa cập nhật tên' }}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="13" cy="13" r="12.5" fill="#0056B1" fill-opacity="0.15" stroke="#0056B1" />
                                    <path
                                        d="M16.2134 6.27344H9.78671C8.37338 6.27344 7.21338 7.43344 7.21338 8.84677V18.2401C7.21338 19.4401 8.07338 19.9468 9.12671 19.3668L12.38 17.5601C12.7267 17.3668 13.2867 17.3668 13.6267 17.5601L16.88 19.3668C17.9334 19.9534 18.7934 19.4468 18.7934 18.2401V8.84677C18.7867 7.43344 17.6334 6.27344 16.2134 6.27344ZM15.4134 11.0201L12.7467 13.6868C12.6467 13.7868 12.52 13.8334 12.3934 13.8334C12.2667 13.8334 12.14 13.7868 12.04 13.6868L11.04 12.6868C10.8467 12.4934 10.8467 12.1734 11.04 11.9801C11.2334 11.7868 11.5534 11.7868 11.7467 11.9801L12.3934 12.6268L14.7067 10.3134C14.9 10.1201 15.22 10.1201 15.4134 10.3134C15.6067 10.5068 15.6067 10.8268 15.4134 11.0201Z"
                                        fill="#0056B1" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="my-7">
                        <nuxt-link :to="'/admin/lsm/teacher-training/' + id + '/detail/' + id_lesson + '/teachers'">
                            <button-add>
                                <span class="mdi mdi-plus"></span> Gán giáo viên
                            </button-add>
                        </nuxt-link>
                    </div>
                </div> -->
                <!--  -->
            </v-col>
        </v-row>

    </div>
</template>

<script>
import ButtonAdd from '~/components/button/ButtonAdd.vue';
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    components: { ButtonAdd },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Chi tiết chương trình',
                previous: '/admin/lsm/teacher-training/' + (this.id ?? 0)
            },
            panel: [0],
            data: null,
            teachers: null,
            lesson: null,
            data_lesson: null,
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        id_lesson() {
            return this.$route.params.id_lesson
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        async delete_leson(id_delete) {
            const formData = new FormData();
            formData.append('bai_hoc_id', id_delete)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá bài học đã chọn!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có xoá nó!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('dao-tao/delete-bai-hoc', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            Swal.fire(
                                'Deleted!',
                                res?.data?.message,
                                'success'
                            )
                            this.$refs['my-modal-show'].hide()
                            this.load_data()
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
        async lesson_show(id_lesson) {
            await api.get(`dao-tao/chi-tiet-bai-hoc?bai_hoc_id=` + id_lesson, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data_lesson = res?.data?.data
                this.$refs['my-modal-show'].show()
            })
        },
        async load_data() {
            await api.get(`chuong-trinh-hoc/chi-tiet-chinh-sua?id=` + this.id_lesson, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.data = res?.data?.data
                this.title.name = res?.data?.data?.dichVu
                this.title.previous = '/admin/lsm/students/' + (this.id ?? 0)
                this.$store.dispatch('title/set_title', this.title);
            })

            await api.get(`dao-tao/danh-sach-bai-hoc?page=1&limit=1000&sort=1&tuKhoa=&hoc_phan_id=` + this.id_lesson, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.lesson = res?.data?.data
            })

        },
    },
    mounted() {
        this.load_data()



    },
}
</script>

<style lang="scss" scoped>
.blade-id {
    color: #FC4D32;
    font-family: SVN-Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 3px 11px;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 17px;
    background: #FFEEEB;
}

.card-item {
    border-radius: 10px;
    background: #FFF;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-name {
        color: #0056B1;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration-line: underline;
    }

    .box-img {
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.card-lsm {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(0, 86, 177, 0.15);
    padding: 10px 15px;
}

.lesson {
    color: #2D2D2D;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
}

table {
    margin-top: 10px;

    tr {
        td {
            padding-bottom: 7px;
            padding-left: 20px;
        }
    }
}

.span1 {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.span2 {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.img-w {
    max-width: 100%;
}

.span-h {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.btn-edit {
    color: #2D2D2D !important;
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 46px;
    background: #E5E5E5;
    cursor: pointer;
    display: flex;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
}
</style>