<template>
    <div class="content-mp">
        <div class="service-edit">
            <div class="mb-7 d-none d-sm-block ">
                <div class="d-flex justify-content-between align-items-center">
                    <title-header>
                        Tổng quan dịch vụ
                    </title-header>
                    <!-- <button-add :addClass="'btn-header'">
                        <span class="mdi mdi-plus"></span> Thêm banner
                    </button-add> -->
                </div>
            </div>
            <b-row>
                <b-col class="mt-0 pt-0" cols="12" sm="9" md="7">
                    <div class="w-100">

                        <div class="mt-2 d-flex justify-content-between align-items-center">
                            <span>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.8263 6.4735C14.5997 6.38016 14.2997 6.3335 13.9263 6.3335H10.4063C9.24634 6.3335 8.83301 6.74683 8.83301 7.92016V13.0802C8.83301 13.4668 8.87967 13.7668 8.97967 14.0002C9.18634 14.4802 9.62634 14.6668 10.4063 14.6668H13.9263C15.0863 14.6668 15.4997 14.2468 15.4997 13.0802V7.92016C15.4997 7.12683 15.313 6.68016 14.8263 6.4735ZM12.833 13.1668H11.4997C11.4863 13.1668 11.4663 13.1668 11.453 13.1602C11.353 13.1535 11.2663 13.1202 11.193 13.0535C11.073 12.9668 10.9997 12.8268 10.9997 12.6668C10.9997 12.3935 11.2263 12.1668 11.4997 12.1668H12.833C13.1063 12.1668 13.333 12.3935 13.333 12.6668C13.333 12.9402 13.1063 13.1668 12.833 13.1668Z"
                                        fill="#FC4D32" />
                                    <path
                                        d="M14.8262 4.12683V4.66683C14.8262 5.0335 14.5262 5.3335 14.1595 5.3335H10.4062C8.69952 5.3335 7.83285 6.20683 7.83285 7.92016V14.0002C7.83285 14.3668 7.53285 14.6668 7.16618 14.6668H5.86618C5.59952 14.6668 5.38618 14.4535 5.38618 14.1935C5.38618 13.9268 5.59952 13.7202 5.86618 13.7202H7.16618V11.1668H4.83285C3.35285 11.0935 2.17285 9.8735 2.17285 8.3735V4.12683C2.17285 2.58683 3.42618 1.3335 4.97285 1.3335H12.0329C13.5729 1.3335 14.8262 2.58683 14.8262 4.12683Z"
                                        fill="#FC4D32" />
                                </svg>
                                <span class="service-title">Khóa dịch vụ</span>
                            </span>
                            <span>
                                <b-form-checkbox switch size="lg"></b-form-checkbox>
                            </span>
                        </div>

                        <hr class="support-hr" />

                        <div class="mt-3 mb-6">
                            <div class="mb-2">
                                <strong class="service-title">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.22003 12.6735L2.2067 12.6868C2.0267 12.2935 1.91337 11.8468 1.8667 11.3535C1.91337 11.8402 2.04003 12.2802 2.22003 12.6735Z"
                                            fill="#FFB761" />
                                        <path
                                            d="M6.5 6.91992C7.37629 6.91992 8.08666 6.20954 8.08666 5.33325C8.08666 4.45696 7.37629 3.74658 6.5 3.74658C5.6237 3.74658 4.91333 4.45696 4.91333 5.33325C4.91333 6.20954 5.6237 6.91992 6.5 6.91992Z"
                                            fill="#FFB761" />
                                        <path
                                            d="M11.2934 1.3335H5.70671C3.28004 1.3335 1.83337 2.78016 1.83337 5.20683V10.7935C1.83337 11.5202 1.96004 12.1535 2.20671 12.6868C2.78004 13.9535 4.00671 14.6668 5.70671 14.6668H11.2934C13.72 14.6668 15.1667 13.2202 15.1667 10.7935V9.26683V5.20683C15.1667 2.78016 13.72 1.3335 11.2934 1.3335ZM14.08 8.3335C13.56 7.88683 12.72 7.88683 12.2 8.3335L9.42671 10.7135C8.90671 11.1602 8.06671 11.1602 7.54671 10.7135L7.32004 10.5268C6.84671 10.1135 6.09337 10.0735 5.56004 10.4335L3.06671 12.1068C2.92004 11.7335 2.83337 11.3002 2.83337 10.7935V5.20683C2.83337 3.32683 3.82671 2.3335 5.70671 2.3335H11.2934C13.1734 2.3335 14.1667 3.32683 14.1667 5.20683V8.40683L14.08 8.3335Z"
                                            fill="#FFB761" />
                                    </svg>
                                    <span>Hình ảnh</span>
                                </strong>
                                <i class="img-note">(Tối thiểu không quá 2mb)</i>
                            </div>

                            <div class="input-grop">
                                <div class="box-x d-flex justify-content-between p-2">
                                    <div class="box-img">
                                        <img src="@/static/images/teacher-training/Rectangle4052.png" alt="">
                                    </div>
                                    <div class="action">
                                        <div class="mb-3 btn-service-delete" v-b-tooltip.hover title="Xoá ảnh">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="16" r="16" fill="#F2F2F2" />
                                                <g clip-path="url(#clip0_207_5736)">
                                                    <path
                                                        d="M16.0639 11.1534C18.1966 11.1534 20.3323 11.1594 22.4651 11.1475C22.7971 11.1475 22.9227 11.1802 22.8779 11.5789C22.6266 13.849 22.3634 16.1222 22.2108 18.4013C22.1241 19.6896 22.0194 20.9719 21.9147 22.2572C21.8549 22.9951 21.7921 23.4801 21.6604 24.2061C21.4899 25.1344 21.1071 26.0002 19.755 25.9883C17.2813 25.9913 14.8076 25.9645 12.3368 26.0002C11.3198 26.0151 10.5152 25.8038 10.2789 24.2061C10.0127 22.412 9.44433 14.1019 9.44433 14.1019L9.21699 11.7157C9.21699 11.7157 9.15418 11.1534 9.70755 11.1534C11.8283 11.1534 13.9461 11.1534 16.0669 11.1534H16.0639ZM16.5784 18.55C16.5784 17.2736 16.5784 15.9972 16.5784 14.7208C16.5784 14.2983 16.363 14.0305 16.028 14.0216C15.6541 14.0127 15.3849 14.3072 15.3849 14.7387C15.3849 17.2766 15.3849 19.8145 15.3879 22.3554C15.3879 22.8047 15.6361 23.1052 15.9981 23.1171C16.3361 23.129 16.5724 22.8107 16.5724 22.3376C16.5724 21.0761 16.5724 19.8115 16.5724 18.55H16.5784ZM19.4649 18.5411C19.4649 17.2498 19.4649 15.9556 19.4649 14.6643C19.4649 14.4977 19.4858 14.331 19.3153 14.212C19.1239 14.0781 18.9444 13.9591 18.6961 14.0692C18.3791 14.209 18.2834 14.453 18.2864 14.7803C18.2953 17.2944 18.2953 19.8115 18.3013 22.3257C18.3013 22.8017 18.5316 23.1082 18.8816 23.1112C19.2316 23.1171 19.4709 22.8017 19.4709 22.3376C19.4709 21.0731 19.4709 19.8086 19.4709 18.5441L19.4649 18.5411ZM13.6918 18.5708C13.6918 17.2528 13.6918 15.9347 13.6918 14.6167C13.6918 14.218 13.5213 14.0305 13.1594 14.0246C12.8453 14.0186 12.5911 14.2686 12.5911 14.6167C12.5881 17.2379 12.5881 19.8621 12.5911 22.4834C12.5911 22.8583 12.8663 23.1409 13.1833 23.1082C13.5513 23.0695 13.7038 22.8702 13.6978 22.4863C13.6799 21.1832 13.6918 19.877 13.6918 18.5738V18.5708Z"
                                                        fill="#979797" />
                                                    <path
                                                        d="M15.9776 10.0553C13.7461 10.0553 11.5147 10.0553 9.28024 10.0553C8.58927 10.0553 8 9.51382 8 8.88008C8 8.29097 8.58628 7.72864 9.25631 7.72269C10.5844 7.71079 11.9125 7.70781 13.2406 7.72864C13.6085 7.73459 13.7222 7.63938 13.7042 7.26152C13.6713 6.59802 14.2786 6.01486 14.9576 6.00891C15.6366 6.00296 16.3156 6.04462 16.9916 5.99999C17.7035 5.95238 18.3436 6.6129 18.2868 7.23771C18.2509 7.63641 18.4124 7.73162 18.7893 7.72566C20.0755 7.70781 21.3617 7.74947 22.645 7.71674C23.5094 7.69591 24.3081 8.35048 23.8833 9.40076C23.7308 9.7816 23.312 10.0494 22.7616 10.0494C20.599 10.0494 18.4393 10.0494 16.2767 10.0494C16.178 10.0494 16.0793 10.0494 15.9806 10.0494L15.9776 10.0553Z"
                                                        fill="#979797" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_207_5736">
                                                        <rect width="16" height="20" fill="white"
                                                            transform="translate(8 6)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div class="btn-service-upload" v-b-tooltip.hover title="Tải ảnh lên ảnh">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="16" r="16" fill="#F2F2F2" />
                                                <path d="M10 11.3846L16 6M16 6L22 11.3846M16 6L16 13" stroke="#979797"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M15 15V18.9375C15 19.4898 15.4477 19.9375 16 19.9375C16.5523 19.9375 17 19.4898 17 18.9375V15H23C24.1046 15 25 15.8954 25 17V22C25 23.1046 24.1046 24 23 24H9C7.89543 24 7 23.1046 7 22V17C7 15.8954 7.89543 15 9 15H15Z"
                                                    fill="#979797" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="support-hr" />

                        <div class="mt-4 mb-6">
                            <div class="mb-2">
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <title-header>
                                            Quyền lợi
                                        </title-header>
                                        <button-add :addClass="'btn-add-more-law'">
                                            <span class="mdi mdi-plus"></span>
                                        </button-add>
                                    </div>
                                </div>
                            </div>

                            <div class="input-group-service" v-for="n in 3" v-bind:key="n">
                                <div class="service-title mb-2">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.1667 3.23329V11.16C15.1667 11.8066 14.64 12.4 13.9933 12.48L13.7867 12.5066C12.6933 12.6533 11.1533 13.1066 9.91333 13.6266C9.48 13.8066 9 13.48 9 13.0066V3.73329C9 3.48662 9.14 3.25995 9.36 3.13995C10.58 2.47995 12.4267 1.89329 13.68 1.78662H13.72C14.52 1.78662 15.1667 2.43329 15.1667 3.23329Z"
                                            fill="#FC4D32" />
                                        <path
                                            d="M7.63999 3.13995C6.41999 2.47995 4.57333 1.89329 3.31999 1.78662H3.27333C2.47333 1.78662 1.82666 2.43329 1.82666 3.23329V11.16C1.82666 11.8066 2.35333 12.4 2.99999 12.48L3.20666 12.5066C4.29999 12.6533 5.83999 13.1066 7.07999 13.6266C7.51333 13.8066 7.99333 13.48 7.99333 13.0066V3.73329C7.99333 3.47995 7.85999 3.25995 7.63999 3.13995ZM3.83333 5.15995H5.33333C5.60666 5.15995 5.83333 5.38662 5.83333 5.65995C5.83333 5.93995 5.60666 6.15995 5.33333 6.15995H3.83333C3.55999 6.15995 3.33333 5.93995 3.33333 5.65995C3.33333 5.38662 3.55999 5.15995 3.83333 5.15995ZM5.83333 8.15995H3.83333C3.55999 8.15995 3.33333 7.93995 3.33333 7.65995C3.33333 7.38662 3.55999 7.15995 3.83333 7.15995H5.83333C6.10666 7.15995 6.33333 7.38662 6.33333 7.65995C6.33333 7.93995 6.10666 8.15995 5.83333 8.15995Z"
                                            fill="#FC4D32" />
                                    </svg>
                                    <span>Chương trình {{ n }}</span>
                                </div>
                                <div class="d-block position-relative">
                                    <input type="text" placeholder="Nhập đường dẫn" class="form-control form-benefits" />

                                    <div class="text-center action-benefits">
                                        <v-menu offset-y open-on-hover transition="scale-transition">
                                            <template v-slot:activator="{ on, attrs }">
                                                <div v-bind="attrs" v-on="on">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="18"
                                                        viewBox="0 0 4 18" fill="none">
                                                        <path
                                                            d="M2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10Z"
                                                            stroke="#979797" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                                                            stroke="#979797" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17Z"
                                                            stroke="#979797" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </template>
                                            <v-list>
                                                <v-list-item>
                                                    <v-list-item-title>Sửa quyền lợi</v-list-item-title>
                                                </v-list-item>
                                                <v-list-item>
                                                    <v-list-item-title>Xóa</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="support-hr" />

                        <div class="mt-4 mb-6">
                            <div class="mb-2">
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <title-header>
                                            Giá trị
                                        </title-header>
                                    </div>
                                </div>
                            </div>

                            <div class="">
                                <!-- <textarea v-model="value" id="value"></textarea> -->
                                <client-only placeholder="Loading...">
                                    <suneditor :value="value"></suneditor>
                                </client-only>
                            </div>
                        </div>

                        <div class="mt-3">
                            <nuxt-link to="" class="btn-add-service">
                                <span class="mdi mdi-plus"></span>
                                <span>Thêm dịch vụ</span>
                            </nuxt-link>
                        </div>


                        <div class="w-100 teacher-detail-info-nav mt-6 pt-5" style="min-width: 300px;">
                            <h3>Tùy chỉnh khác</h3>
                            <div class="w-100">
                                <div>
                                    <b-card style="min-width: 245px;" class="teacher-nav">
                                        <nuxt-link class="block w-100 teachers " to="/admin/service/edit/3/lesson-price">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="">
                                                    <span class="me-2">
                                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="15" cy="15.5" r="15" fill="#FC4D32"
                                                                fill-opacity="0.1" />
                                                            <path
                                                                d="M8.61905 17.6396C6.61952 17.6396 5 19.2864 5 21.3196C5 22.0096 5.19 22.6628 5.52476 23.2148C6.14905 24.282 7.2981 24.9996 8.61905 24.9996C9.94 24.9996 11.089 24.282 11.7133 23.2148C12.0481 22.6628 12.2381 22.0096 12.2381 21.3196C12.2381 19.2864 10.6186 17.6396 8.61905 17.6396ZM10.4014 21.016L8.47429 22.8284C8.34762 22.948 8.17571 23.0124 8.01286 23.0124C7.84095 23.0124 7.66905 22.948 7.53333 22.81L6.63762 21.8992C6.37524 21.6324 6.37524 21.1908 6.63762 20.924C6.9 20.6572 7.33429 20.6572 7.59667 20.924L8.03095 21.3656L9.47857 20.004C9.75 19.7464 10.1843 19.7648 10.4376 20.0408C10.691 20.3168 10.6729 20.7584 10.4014 21.016Z"
                                                                fill="#FC4D32" />
                                                            <path
                                                                d="M23.5475 15.3398H21.2856C20.2904 15.3398 19.4761 16.1678 19.4761 17.1798C19.4761 18.1918 20.2904 19.0198 21.2856 19.0198H23.5475C23.8008 19.0198 23.9999 18.8174 23.9999 18.5598V15.7998C23.9999 15.5422 23.8008 15.3398 23.5475 15.3398Z"
                                                                fill="#FC4D32" />
                                                            <path
                                                                d="M19.051 8.80828C19.3225 9.07507 19.0963 9.48907 18.7163 9.48907L11.2248 9.47987C10.7905 9.47987 10.5734 8.94628 10.881 8.63348L12.4644 7.01429C13.8034 5.6619 15.9658 5.6619 17.3048 7.01429L19.0148 8.77148C19.0239 8.78068 19.042 8.79908 19.051 8.80828Z"
                                                                fill="#FC4D32" />
                                                            <path
                                                                d="M23.8825 21.0074C23.3306 22.9026 21.7382 24.0802 19.5668 24.0802H13.6858C13.333 24.0802 13.1068 23.6846 13.2515 23.3534C13.523 22.7094 13.6949 21.9826 13.6949 21.3202C13.6949 18.5326 11.4601 16.2602 8.71868 16.2602C8.03106 16.2602 7.36154 16.4074 6.7463 16.6834C6.41154 16.8306 6.00439 16.6006 6.00439 16.2326V14.8802C6.00439 12.3779 7.4882 10.6299 9.79535 10.3355C10.0215 10.2987 10.2658 10.2803 10.5192 10.2803H19.5668C19.802 10.2803 20.0282 10.2895 20.2453 10.3263C22.073 10.5379 23.3939 11.6695 23.8825 13.353C23.973 13.6566 23.7558 13.9602 23.4482 13.9602H21.3763C19.413 13.9602 17.8568 15.7818 18.282 17.8518C18.5806 19.3606 19.9558 20.4002 21.4668 20.4002H23.4482C23.7649 20.4002 23.973 20.713 23.8825 21.0074Z"
                                                                fill="#FC4D32" />
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        Cài đặt giá buổi học
                                                    </span>
                                                </div>
                                                <div>
                                                    <div class="web-icon">
                                                        <span class="mdi mdi-chevron-right"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </nuxt-link>
                                    </b-card>

                                    <b-card style="min-width: 245px;" class="teacher-nav">
                                        <nuxt-link class="block w-100 teachers " to="/admin/service/edit/3/lesson-content">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="">
                                                    <span class="me-2">
                                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="15" cy="15.5" r="15" fill="#FFB761"
                                                                fill-opacity="0.2" />
                                                            <path
                                                                d="M19.4789 18.3919C20.1695 17.9349 21.0767 18.4334 21.0767 19.2642V20.604C21.0767 21.9229 20.0561 23.3353 18.8294 23.7507L15.541 24.8516C14.9637 25.0489 14.0256 25.0489 13.4586 24.8516L10.1701 23.7507C8.9331 23.3353 7.92285 21.9229 7.92285 20.604V19.2539C7.92285 18.4334 8.83001 17.9349 9.51038 18.3815L11.634 19.7731C12.4484 20.3236 13.4792 20.5936 14.5101 20.5936C15.541 20.5936 16.5718 20.3236 17.3862 19.7731L19.4789 18.3919Z"
                                                                fill="#FFB761" />
                                                            <path
                                                                d="M22.5685 10.2485L16.5196 6.50696C15.429 5.83101 13.6315 5.83101 12.5409 6.50696L6.46173 10.2485C4.51276 11.4386 4.51276 14.1329 6.46173 15.3324L8.07746 16.3226L12.5409 19.0645C13.6315 19.7404 15.429 19.7404 16.5196 19.0645L20.9528 16.3226L22.3363 15.4657V18.379C22.3363 18.7693 22.6796 19.093 23.0936 19.093C23.5077 19.093 23.851 18.7693 23.851 18.379V13.6949C24.2549 12.4668 23.8409 11.0387 22.5685 10.2485Z"
                                                                fill="#FFB761" />
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        Cài đặt nội dung buổi học
                                                    </span>
                                                </div>
                                                <div>
                                                    <div class="web-icon">
                                                        <span class="mdi mdi-chevron-right"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </nuxt-link>
                                    </b-card>

                                    <b-card style="min-width: 245px;" class="teacher-nav">
                                        <nuxt-link class="block w-100 teachers " to="/admin/service/edit/3/sale">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="">
                                                    <span class="me-2">
                                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="15" cy="15.5" r="15" fill="#00C092"
                                                                fill-opacity="0.2" />
                                                            <path
                                                                d="M24.5299 14.8783L23.0095 13.356C22.7494 13.0956 22.5394 12.5849 22.5394 12.2243V10.0611C22.5394 9.17977 21.8192 8.45869 20.939 8.45869H18.7884C18.4283 8.45869 17.9182 8.24837 17.6581 7.98798L16.1378 6.4657C15.5176 5.84477 14.4974 5.84477 13.8772 6.4657L12.3368 7.98798C12.0868 8.24837 11.5766 8.45869 11.2065 8.45869H9.05601C8.17579 8.45869 7.45561 9.17977 7.45561 10.0611V12.2143C7.45561 12.5749 7.24556 13.0856 6.98549 13.346L5.46512 14.8683C4.84496 15.4892 4.84496 16.5108 5.46512 17.1317L6.98549 18.654C7.24556 18.9144 7.45561 19.4251 7.45561 19.7857V21.9389C7.45561 22.8202 8.17579 23.5413 9.05601 23.5413H11.2065C11.5666 23.5413 12.0768 23.7516 12.3368 24.012L13.8572 25.5343C14.4774 26.1552 15.4976 26.1552 16.1178 25.5343L17.6381 24.012C17.8982 23.7516 18.4083 23.5413 18.7684 23.5413H20.919C21.7992 23.5413 22.5194 22.8202 22.5194 21.9389V19.7857C22.5194 19.4251 22.7294 18.9144 22.9895 18.654L24.5098 17.1317C25.16 16.5208 25.16 15.4992 24.5299 14.8783ZM10.9965 13.0055C10.9965 12.4547 11.4466 12.004 11.9967 12.004C12.5469 12.004 12.997 12.4547 12.997 13.0055C12.997 13.5563 12.5569 14.007 11.9967 14.007C11.4466 14.007 10.9965 13.5563 10.9965 13.0055ZM12.5269 19.5453C12.3768 19.6955 12.1868 19.7656 11.9967 19.7656C11.8067 19.7656 11.6166 19.6955 11.4666 19.5453C11.1765 19.2549 11.1765 18.7742 11.4666 18.4837L17.4681 12.4747C17.7582 12.1843 18.2383 12.1843 18.5284 12.4747C18.8184 12.7651 18.8184 13.2459 18.5284 13.5363L12.5269 19.5453ZM17.9982 20.016C17.4381 20.016 16.988 19.5653 16.988 19.0145C16.988 18.4637 17.4381 18.013 17.9882 18.013C18.5384 18.013 18.9885 18.4637 18.9885 19.0145C18.9885 19.5653 18.5484 20.016 17.9982 20.016Z"
                                                                fill="#00C092" />
                                                        </svg>


                                                    </span>
                                                    <span>
                                                        Cài đặt khuyến mãi
                                                    </span>
                                                </div>
                                                <div>
                                                    <div class="web-icon">
                                                        <span class="mdi mdi-chevron-right"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </nuxt-link>
                                    </b-card>

                                </div>
                            </div>
                        </div>

                        <div class="mt-8">
                            <button class="btn btn-save-pass">Lưu thay đổi</button>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>

    </div>
</template>

<script>
import Suneditor from '~/components/inputField/Suneditor.vue';
// import SUNEDITOR from 'suneditor'
// import plugins from 'suneditor/src/plugins'
// import 'suneditor/dist/css/suneditor.min.css'

export default {
    components: { Suneditor },
    layout: 'admin',
    head: {
        title: 'Chi tiết dịch vụ',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Home page description'
            }
        ],
    },
    data() {
        return {
            title: {
                name: 'Bảo mẫu Pro',
                previous: '/admin/service'
            },
            suneditorInstance: null,
            value: 'Nhập nội dung',
        };
    },
    validate({ params }) {
        return /^[0-9]{0,2}$/.test(params.id)
    },
    computed: {
        id() {
            return this.$route.params.id
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);

        // const editor = SUNEDITOR.create((document.getElementById('value') || 'value'), {
        //     toolbarContainer: '#toolbar_container',
        //     showPathLabel: false,
        //     charCounter: true,
        //     maxCharCount: 720,
        //     width: 'auto',
        //     height: 'auto',
        //     minHeight: '300px',
        //     maxHeight: '250px',
        //     plugins: plugins,
        //     buttonList: [
        //         ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
        //         ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
        //         ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
        //         ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
        //     ],
        //     callBackSave: function (contents, isChanged) {
        //         this.value = contents
        //         console.log(contents);
        //     },
        // });
        // this.suneditorInstance = editor;

        // this.suneditorInstance.onChange = async (contents, core) => {
        //     this.value = contents;
        //     await console.log(this.value)
        // };

        // this.suneditorInstance.setContents(this.value);
    },
}
</script>

<style lang="scss" scoped>
.service-title {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.support-hr {
    margin: 15px 0px 15px 0px;
}

.img-note {
    color: #2D2D2D;
    font-family: SVN-Gilroy;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
}

.box-x {
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;

    .box-img {
        overflow: hidden;
        height: 109px;
        border-radius: 10px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.input-group-service {
    margin-bottom: 24px;
}

.btn-service-upload {
    cursor: pointer;
}

.btn-service-delete {
    cursor: pointer;
}

.action-benefits {
    position: absolute;
    top: 7px;
    right: 4px;
    cursor: pointer;

    div {
        width: 32px;
    }
}

.form-benefits {
    height: calc(1.6em + 1rem + 2px);
    padding: 0.575rem 0.75rem;
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    color: #0056B1;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>