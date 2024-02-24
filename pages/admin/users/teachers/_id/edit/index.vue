<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="6" xl="6">
                <div class="edit-teacher">
                    <div class="box-img">
                        <img v-if="image" :src="image" alt="" />
                        <img v-else :src="data?.anh_nguoi_dung" alt="" />
                        <input type="file" hidden @change="handleFileChange" id="img11" />
                    </div>
                    <div class="my-5">
                        <b class="teacher-name">
                            {{ data?.hoten ?? 'Chưa cập nhật tên' }}
                        </b>
                    </div>

                    <div class="d-flex w-100 justify-content-between">
                        <label @click="delete_img()" class="flex-1">
                            <button-web addClass="flex-1">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.16667 1.5H8.83333M1.5 3.66667H12.5M11.2778 3.66667L10.8492 11.2639C10.7849 12.4038 10.7528 12.9737 10.5445 13.4058C10.3611 13.7863 10.0844 14.0921 9.75102 14.2831C9.37231 14.5 8.889 14.5 7.92238 14.5H6.07762C5.111 14.5 4.62769 14.5 4.24898 14.2831C3.91557 14.0921 3.63894 13.7863 3.45555 13.4058C3.24723 12.9737 3.21508 12.4038 3.15079 11.2639L2.72222 3.66667M5.77778 6.91667V10.5278M8.22222 6.91667V10.5278"
                                        stroke="#2D2D2D" stroke-width="1.3" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span class="ms-2 text-btn">Xóa ảnh</span>
                            </button-web>
                        </label>

                        <label class="flex-1" for="img11">
                            <button-web addClass="active">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.94444 6.38889C3.37613 6.38889 3.09197 6.38889 2.85883 6.45136C2.22616 6.62088 1.73199 7.11505 1.56247 7.74772C1.5 7.98086 1.5 8.26502 1.5 8.83333V9.56667C1.5 10.5934 1.5 11.1068 1.69982 11.499C1.87559 11.8439 2.15605 12.1244 2.50102 12.3002C2.89319 12.5 3.40657 12.5 4.43333 12.5H9.56667C10.5934 12.5 11.1068 12.5 11.499 12.3002C11.8439 12.1244 12.1244 11.8439 12.3002 11.499C12.5 11.1068 12.5 10.5934 12.5 9.56667V8.83333C12.5 8.26502 12.5 7.98086 12.4375 7.74772C12.268 7.11505 11.7738 6.62088 11.1412 6.45136C10.908 6.38889 10.6239 6.38889 10.0556 6.38889M9.44444 3.94444L7 1.5M7 1.5L4.55556 3.94444M7 1.5V8.83333"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="ms-2 text-btn">Tải ảnh lên</span>
                            </button-web>
                        </label>
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">CMND/CCCD</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <input v-model="cmnd_cccd" class="form-control input-teacher" type="text" placeholder="nhập nội dung" />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Họ và tên</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <input v-model="hoten" class="form-control input-teacher" type="text" placeholder="nhập họ tên" />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Ngày sinh</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <input v-model="ngay_sinh" class="form-control input-teacher" type="date" placeholder="vd: 20/11/2024" />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Email</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <input v-model="email" class="form-control input-teacher" type="text"  />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Trình độ</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <input v-model="trinh_do" class="form-control input-teacher" type="text"  />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Chuyên ngành</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <input v-model="chuyen_nganh" class="form-control input-teacher" type="text"  />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Trường đào tạo</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <input v-model="truong_dao_tao" class="form-control input-teacher" type="text"  />
                    </div>
                </div>

                <div class="input-teacher-group">
                    <div class="mb-2">
                        <span class="input-text">Chứng chỉ/ Chứng nhận</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <b-form-file multiple v-model="files"></b-form-file>
                    </div>
                    <!-- <div>
                        <div class="card-certificate">
                            <div class="card-certificate-body">
                                <div class="box-certificate">
                                    <img src="@/static/images/teacher/certificate.png" />
                                </div>

                                <div class="d-flex flex-column">
                                    <a href="" v-b-tooltip.hover title="Xoá ảnh">
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.8335" cy="16" r="16" fill="#F2F2F2" />
                                            <g clip-path="url(#clip0_992_9847)">
                                                <path
                                                    d="M16.8979 11.1534C19.0306 11.1534 21.1663 11.1594 23.2991 11.1475C23.6311 11.1475 23.7567 11.1802 23.7118 11.5789C23.4606 13.849 23.1974 16.1222 23.0448 18.4013C22.9581 19.6896 22.8534 20.9719 22.7487 22.2572C22.6889 22.9951 22.626 23.4801 22.4944 24.2061C22.3239 25.1344 21.941 26.0002 20.589 25.9883C18.1153 25.9913 15.6416 25.9645 13.1708 26.0002C12.1538 26.0151 11.3492 25.8038 11.1129 24.2061C10.8466 22.412 10.2783 14.1019 10.2783 14.1019L10.051 11.7157C10.051 11.7157 9.98816 11.1534 10.5415 11.1534C12.6623 11.1534 14.7801 11.1534 16.9009 11.1534H16.8979ZM17.4124 18.55C17.4124 17.2736 17.4124 15.9972 17.4124 14.7208C17.4124 14.2983 17.197 14.0305 16.862 14.0216C16.4881 14.0127 16.2189 14.3072 16.2189 14.7387C16.2189 17.2766 16.2189 19.8145 16.2219 22.3554C16.2219 22.8047 16.4701 23.1052 16.8321 23.1171C17.1701 23.129 17.4064 22.8107 17.4064 22.3376C17.4064 21.0761 17.4064 19.8115 17.4064 18.55H17.4124ZM20.2989 18.5411C20.2989 17.2498 20.2989 15.9556 20.2989 14.6643C20.2989 14.4977 20.3198 14.331 20.1493 14.212C19.9579 14.0781 19.7784 13.9591 19.5301 14.0692C19.2131 14.209 19.1173 14.453 19.1203 14.7803C19.1293 17.2944 19.1293 19.8115 19.1353 22.3257C19.1353 22.8017 19.3656 23.1082 19.7156 23.1112C20.0656 23.1171 20.3049 22.8017 20.3049 22.3376C20.3049 21.0731 20.3049 19.8086 20.3049 18.5441L20.2989 18.5411ZM14.5258 18.5708C14.5258 17.2528 14.5258 15.9347 14.5258 14.6167C14.5258 14.218 14.3553 14.0305 13.9934 14.0246C13.6793 14.0186 13.4251 14.2686 13.4251 14.6167C13.4221 17.2379 13.4221 19.8621 13.4251 22.4834C13.4251 22.8583 13.7003 23.1409 14.0173 23.1082C14.3852 23.0695 14.5378 22.8702 14.5318 22.4863C14.5139 21.1832 14.5258 19.877 14.5258 18.5738V18.5708Z"
                                                    fill="#979797" />
                                                <path
                                                    d="M16.8111 10.0548C14.5796 10.0548 12.3482 10.0548 10.1137 10.0548C9.42277 10.0548 8.8335 9.51333 8.8335 8.87959C8.8335 8.29048 9.41977 7.72815 10.0898 7.7222C11.4179 7.7103 12.746 7.70732 14.0741 7.72815C14.442 7.7341 14.5557 7.63889 14.5377 7.26103C14.5048 6.59754 15.1121 6.01438 15.7911 6.00843C16.4701 6.00247 17.1491 6.04413 17.8251 5.9995C18.537 5.95189 19.1771 6.61241 19.1203 7.23723C19.0844 7.63592 19.2459 7.73113 19.6228 7.72518C20.909 7.70732 22.1952 7.74898 23.4785 7.71625C24.3429 7.69542 25.1416 8.34999 24.7168 9.40027C24.5643 9.78111 24.1455 10.0489 23.5951 10.0489C21.4325 10.0489 19.2728 10.0489 17.1102 10.0489C17.0115 10.0489 16.9128 10.0489 16.8141 10.0489L16.8111 10.0548Z"
                                                    fill="#979797" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_992_9847">
                                                    <rect width="16" height="20" fill="white"
                                                        transform="translate(8.8335 6)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>

                                    <a class="mt-2" href="" v-b-tooltip.hover title="Tải ảnh lên">
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.8335" cy="16" r="16" fill="#F2F2F2" />
                                            <path
                                                d="M10.8335 11.3846L16.8335 6M16.8335 6L22.8335 11.3846M16.8335 6L16.8335 13"
                                                stroke="#979797" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M15.8335 15V18.9375C15.8335 19.4898 16.2812 19.9375 16.8335 19.9375C17.3858 19.9375 17.8335 19.4898 17.8335 18.9375V15H23.8335C24.9381 15 25.8335 15.8954 25.8335 17V22C25.8335 23.1046 24.9381 24 23.8335 24H9.8335C8.72893 24 7.8335 23.1046 7.8335 22V17C7.8335 15.8954 8.72893 15 9.8335 15H15.8335Z"
                                                fill="#979797" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Mật khẩu mới</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <input v-model="password" class="form-control input-teacher" type="password" placeholder="nhập nội dung" />
                    </div>
                </div>

                <div class="input-teacher-group mt-5 mb-4">
                    <div class="mb-2">
                        <span class="input-text">Xác nhận mật khẩu</span> <span class="text-danger">*</span>
                    </div>
                    <div>
                        <input v-model="password_confirm" class="form-control input-teacher" type="password" placeholder="nhập nội dung" />
                    </div>
                </div>

                <div class="mt-8" @click="send_data">
                    <button-component>Lưu thay đổi</button-component>
                </div>
            </v-col>

        </v-row>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Chỉnh sửa thông tin',
                previous: '/admin/users/teachers/' + this.id
            },
            chungNhan: null,
            data: null,
            file: null,
            files: null,
            name: null,
            image: null,
            cmnd_cccd: null,
            password_confirm: null,
            password: null,
            hoten: null,
            ngay_sinh: null,
            email: null,
            trinh_do: null,
            chuyen_nganh: null,
            truong_dao_tao: null,
        };
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            console.log(this.$route.params.id)
            return this.$route.params.id
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key;
        },
    },
    methods: {
        async delete_img() {
            this.image = null;
            this.file = null;
        },
        async handleFileChange(event) {
            const img = event.target.files[0];
            this.file = img;
            if (img) {
                this.image = URL.createObjectURL(img);
            }
        },
        async load_data() {
            await api.get('giao-vien/chi-tiet?id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data.user
                this.chungNhan = res?.data?.data.chungNhan
                this.cmnd_cccd = res?.data?.data.user?.cmnd_cccd
                this.hoten = res?.data?.data.user?.hoten
                this.ngay_sinh = res?.data?.data.user?.ngay_sinh
                this.email = res?.data?.data.user?.email
                this.image = res?.data?.data.user?.anh_nguoi_dung
                this.data = user
                // this.hoten = user?.hoten
                // this.dien_thoai = user?.dien_thoai
                // this.selected = user?.vai_tro
            })
        },
        async send_data(event) {
            // event.preventDefault();
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('anh_nguoi_dung', this.file)
            formData.append('cmnd_cccd', this.cmnd_cccd)
            formData.append('chung_chi', this.files)
            formData.append('password', this.password)
            formData.append('password_confirm', this.password_confirm)
            formData.append('hoten', this.hoten)
            formData.append('ngay_sinh', this.ngay_sinh)
            formData.append('email', this.email)
            formData.append('bang_cap[trinh_do]', this.trinh_do)
            formData.append('bang_cap[chuyen_nganh]', this.chuyen_nganh)
            formData.append('bang_cap[truong_dao_tao]', this.truong_dao_tao)

            await api.post('giao-vien/sua', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    // this.$router.push('admin/users/teachers/' + this.id);
                }
            })
        },
    },
    mounted() {
        this.title.previous = '/admin/users/teachers/' + this.id

        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
}
</script>


<style lang="scss" scoped>
.input-teacher-group {
    .input-teacher {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 10px;
        border: 1px solid #E5E5E5;
        background: #FFF;
    }

    .input-text {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
}

.text-btn {
    text-align: center;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.teacher-name {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.edit-teacher {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .box-img {
        width: 108px;
        height: 108px;
        overflow: hidden;
        border-radius: 50%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.card-certificate {
    border-radius: 5px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    padding: 10px;
    overflow: hidden;
    width: 100%;

    .card-certificate-body {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .box-certificate {
            height: 100px;

            img {
                // width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

.td-first {
    width: 100px;

    span {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}
</style>