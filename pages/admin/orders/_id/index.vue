<template>
    <div class="content-mp">

        <v-row>
            <v-col xs="12" sm="12" md="12" lg="7" xl="7">


                <detail-service-info :data="data" :status="data?.trang_thai" :load_data="load_data"></detail-service-info>

                <!-- xac nhan thanh toan -->
                <div class="mt-4">
                    <v-card
                        v-if="data?.trang_thai == 'Chưa có GV' || data?.trang_thai == 'Đang khảo sát' || data?.trang_thai == 'Đang dạy'">
                        <v-card-text>
                            <div>
                                <b-form-checkbox v-model="xac_nhan_thanh_toan" size="lg">
                                    <span class="text-dark">
                                        Xác nhận thanh toán
                                    </span>
                                </b-form-checkbox>
                            </div>
                        </v-card-text>

                        <v-divider class="m-0 p-0"></v-divider>

                        <v-card-text>
                            <!-- <table class="table table-borderless">
                                <tr v-for="(item, n) in data?.phuPhi" v-bind:key="n">
                                    <td>
                                        <span>
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                            </svg>
                                        </span>
                                        <span class="ms-1 span-text">
                                            {{ item?.tieu_de }}
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-bold span-2 cp" v-b-popover.hover.right="item?.ghi_chu"
                                            :title="item?.tieu_de">
                                            <b>{{ formatCurrency(item?.tong_tien) }}</b>
                                        </span>
                                    </td>
                                </tr>
                            </table> -->
                            <b-button class="w-100 text-primary rounded-pill" variant="outline-primary"
                                v-b-modal.my-modal-them-phu-phi>
                                <span class="mdi mdi-plus-circle-outline"></span>
                                <span>
                                    Thêm phụ phí
                                </span>
                            </b-button>
                        </v-card-text>
                    </v-card>

                    <v-card v-else>
                        <v-card-text>
                            <div>
                                <b-form-checkbox disabled v-model="xac_nhan_thanh_toan" size="lg">
                                    <span class="text-dark">
                                        Xác nhận thanh toán
                                    </span>
                                </b-form-checkbox>
                            </div>
                        </v-card-text>

                        <v-divider class="m-0 p-0"></v-divider>

                        <v-card-text>
                            <!-- <table class="table table-borderless">
                                <tr v-for="(item, n) in data?.phuPhi" v-bind:key="n">
                                    <td>
                                        <span>
                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                            </svg>
                                        </span>
                                        <span class="ms-1 span-text">
                                            {{ item?.tieu_de }}
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-danger fw-bold span-2 cp" v-b-popover.hover.right="item?.ghi_chu"
                                            :title="item?.tieu_de">
                                            <b>{{ formatCurrency(item?.tong_tien) }}</b>
                                        </span>
                                    </td>
                                </tr>
                            </table> -->
                            <b-button class="w-100 text-secondary rounded-pill" variant="outline-secondary">
                                <span class="mdi mdi-plus-circle-outline"></span>
                                <span>
                                    Thêm phụ phí
                                </span>
                            </b-button>
                        </v-card-text>
                    </v-card>
                </div>


                <!-- Thông tin quản lý  -->
                <div v-if="data?.trang_thai == 'Đang khảo sát'">
                    <div class="mt-6">
                        <div>
                            <h5>
                                Thông tin quản lý
                            </h5>
                        </div>
                        <v-card>
                            <v-card-text>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="me-3 layout-user">
                                            <img :src="data?.leaderKD?.anh_nguoi_dung" alt="">
                                        </div>
                                        <div>
                                            <b-badge pill variant="success">
                                                {{ data?.leaderKD?.vai_tro ?? 'Chưa cập nhật' }}
                                            </b-badge>
                                            <h6 class="text-dark mt-1">
                                                {{ data?.leaderKD?.hoten }}
                                            </h6>
                                        </div>
                                    </div>

                                    <div class="d-flex">
                                        <div class="me-2 cp" v-b-tooltip.hover.top="data?.leaderKD?.dien_thoai">
                                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.1" />
                                                <path
                                                    d="M11.6796 9.84669L12.8192 8.70711C13.2097 8.31658 13.8429 8.31658 14.2334 8.70711L17.2403 11.7139C17.6308 12.1045 17.6308 12.7376 17.2403 13.1282L15.1847 15.1837C14.8544 15.514 14.7725 16.0187 14.9814 16.4365C16.1892 18.8521 18.1479 20.8108 20.5635 22.0186C20.9813 22.2275 21.486 22.1456 21.8163 21.8153L23.8718 19.7597C24.2624 19.3692 24.8955 19.3692 25.2861 19.7597L28.2929 22.7666C28.6834 23.1571 28.6834 23.7903 28.2929 24.1808L27.1533 25.3204C25.042 27.4317 21.6994 27.6693 19.3107 25.8777L17.2602 24.3398C15.5166 23.0322 13.9678 21.4834 12.6602 19.7399L11.1223 17.6893C9.33072 15.3006 9.56827 11.958 11.6796 9.84669Z"
                                                    fill="#0056B1" />
                                            </svg>
                                        </div>
                                        <div class="cp">
                                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.1" />
                                                <path opacity="0.4"
                                                    d="M29 13.25V18.35C29 19.62 28.58 20.69 27.83 21.43C27.09 22.18 26.02 22.6 24.75 22.6V24.41C24.75 25.09 23.99 25.5 23.43 25.12L22.46 24.48C22.55 24.17 22.59 23.83 22.59 23.47V19.4C22.59 17.36 21.23 16 19.19 16H12.4C12.26 16 12.13 16.01 12 16.02V13.25C12 10.7 13.7 9 16.25 9H24.75C27.3 9 29 10.7 29 13.25Z"
                                                    fill="#0056B1" />
                                                <path
                                                    d="M22.59 19.4V23.47C22.59 23.83 22.55 24.17 22.46 24.48C22.09 25.95 20.87 26.87 19.19 26.87H16.47L13.45 28.88C13 29.19 12.4 28.86 12.4 28.32V26.87C11.38 26.87 10.53 26.53 9.94 25.94C9.34 25.34 9 24.49 9 23.47V19.4C9 17.5 10.18 16.19 12 16.02C12.13 16.01 12.26 16 12.4 16H19.19C21.23 16 22.59 17.36 22.59 19.4Z"
                                                    fill="#0056B1" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </div>
                </div>

                <div class="mt-6">
                    <div v-if="data?.giaoVien == null || data?.giaoVien?.length == 0">
                        <div v-if="data?.trang_thai != 'Chưa có GV'">
                            <div>
                                <h5>
                                    Thông tin Giáo viên
                                </h5>
                            </div>
                            <v-card>
                                <v-card-text>
                                    <div>
                                        Chưa có giáo viên
                                    </div>
                                    <div class="mt-3">
                                        <b-button class="w-100 text-light rounded-pill" variant="primary"
                                            v-b-modal.my-modal-teacher>
                                            Điều giáo viên
                                        </b-button>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </div>
                    </div>

                    <!--  -->

                    <div v-else>
                        <div>
                            <h5>
                                Thông tin Giáo viên
                            </h5>
                        </div>
                        <v-card>
                            <v-card-text>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="me-3 layout-user">
                                            <img :src="data?.giaoVien?.anh_nguoi_dung" alt="">
                                        </div>
                                        <div>
                                            <h6 class="text-dark mt-1">
                                                {{ data?.giaoVien?.hoten }}
                                            </h6>
                                            <div>
                                                <span class="me-5">
                                                    Giáo viên
                                                </span>
                                                <span class="text-warning text-star blade-start">
                                                    <span class="mdi mdi-star me-1"></span>
                                                    <span class="text-dark">{{ data?.giaoVien?.danh_gia }}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex">
                                        <div class="me-2 cp" v-b-tooltip.hover.top="data?.giaoVien?.dien_thoai">
                                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.1" />
                                                <path
                                                    d="M11.6796 9.84669L12.8192 8.70711C13.2097 8.31658 13.8429 8.31658 14.2334 8.70711L17.2403 11.7139C17.6308 12.1045 17.6308 12.7376 17.2403 13.1282L15.1847 15.1837C14.8544 15.514 14.7725 16.0187 14.9814 16.4365C16.1892 18.8521 18.1479 20.8108 20.5635 22.0186C20.9813 22.2275 21.486 22.1456 21.8163 21.8153L23.8718 19.7597C24.2624 19.3692 24.8955 19.3692 25.2861 19.7597L28.2929 22.7666C28.6834 23.1571 28.6834 23.7903 28.2929 24.1808L27.1533 25.3204C25.042 27.4317 21.6994 27.6693 19.3107 25.8777L17.2602 24.3398C15.5166 23.0322 13.9678 21.4834 12.6602 19.7399L11.1223 17.6893C9.33072 15.3006 9.56827 11.958 11.6796 9.84669Z"
                                                    fill="#0056B1" />
                                            </svg>
                                        </div>
                                        <div class="cp">
                                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="19" cy="19" r="19" fill="#0056B1" fill-opacity="0.1" />
                                                <path opacity="0.4"
                                                    d="M29 13.25V18.35C29 19.62 28.58 20.69 27.83 21.43C27.09 22.18 26.02 22.6 24.75 22.6V24.41C24.75 25.09 23.99 25.5 23.43 25.12L22.46 24.48C22.55 24.17 22.59 23.83 22.59 23.47V19.4C22.59 17.36 21.23 16 19.19 16H12.4C12.26 16 12.13 16.01 12 16.02V13.25C12 10.7 13.7 9 16.25 9H24.75C27.3 9 29 10.7 29 13.25Z"
                                                    fill="#0056B1" />
                                                <path
                                                    d="M22.59 19.4V23.47C22.59 23.83 22.55 24.17 22.46 24.48C22.09 25.95 20.87 26.87 19.19 26.87H16.47L13.45 28.88C13 29.19 12.4 28.86 12.4 28.32V26.87C11.38 26.87 10.53 26.53 9.94 25.94C9.34 25.34 9 24.49 9 23.47V19.4C9 17.5 10.18 16.19 12 16.02C12.13 16.01 12.26 16 12.4 16H19.19C21.23 16 22.59 17.36 22.59 19.4Z"
                                                    fill="#0056B1" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </v-card-text>
                            <v-divider class="m-0 p-0"></v-divider>
                            <v-card-text>
                                <div v-if="data?.trang_thai == 'Đang dạy'" class="d-flex align-items-center justify-content-between">
                                    <div class="w-100 btn btn-doi text- rounded-pill" variant="outline-danger"
                                        v-b-modal.my-modal-teacher>
                                        Đổi giáo viên
                                    </div>
                                    <div class="w-100 btn btn-dieu-lai rounded-pill ms-4" variant="outline-primary"
                                        v-b-modal.my-modal-teacher>
                                        Điều lại
                                    </div>
                                </div>
                                <div v-else class="d-flex align-items-center justify-content-between">
                                    <div class="w-100 btn btn-deactive rounded-pill">
                                        Đổi giáo viên
                                    </div>
                                    <div class="w-100 btn btn-deactive rounded-pill ms-4" >
                                        Điều lại
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>

                    </div>
                </div>

                <b-modal id="my-modal-teacher" ref="my-modal-teacher" hide-footer centered title="Điều giáo viên">
                    <template #default="{ hide }">
                        <div>
                            <span>Có <b class="text-primary">{{ teachers?.length ?? 0 }}</b> giáo viên nhận lịch</span>
                        </div>
                        <div>

                            <div class="my-2">
                                <div v-for="(item, n) in teachers" v-bind:key="n">
                                    <div :class="'card-teacher ' + (teacher_id == item?.id ? ' active' : '')">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center">
                                                <div class="me-3 layout-user">
                                                    <img :src="item?.anh_nguoi_dung" alt="">
                                                </div>
                                                <div class="ps-2" style="margin-left: 5px;">
                                                    <div>
                                                        <b-badge pill variant="danger">
                                                            # {{ item?.id }}
                                                        </b-badge>
                                                        <b-badge pill variant="success">
                                                            Đang trống ca
                                                        </b-badge>
                                                    </div>
                                                    <strong>
                                                        <span class="user-name">
                                                            {{ item?.hoten }}
                                                        </span>
                                                    </strong>
                                                    <p class="w-p p-0 m-0">
                                                        {{ item?.trinh_do }}
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="">
                                                <b-button @click="set_teacher(item?.id)" size="sm"
                                                    style="min-width: 130px;padding: 0.325rem 0.75rem !important;"
                                                    :class="'w-100 rounded-pill ' + (teacher_id == item?.id ? 'text-light' : 'text-primary')"
                                                    :variant="teacher_id == item?.id ? 'primary' : 'outline-primary'">
                                                    Chọn
                                                </b-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-5">
                                    <b-form-input class="w-100" v-model.lazy="tuKhoa"
                                        placeholder="Gán giáo viên cụ thể"></b-form-input>
                                </div>

                            </div>
                            <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                <button type="button" class=" btn-delete ms-1" @click="add_teacher()">Điều giáo
                                    viên</button>
                            </div>
                        </div>

                    </template>
                </b-modal>


                <!-- duyệt đơn -->

                <div class="mt-6"
                    v-if="data?.trang_thai == 'Chưa có GV' || data?.trang_thai == 'Đang khảo sát' || data?.trang_thai == 'Đang dạy'">
                    <div class="d-flex">
                        <div class="w-100 text-light rounded-pill btn btn-cancel-order" variant="danger"
                            v-b-modal.my-modal-cancel>
                            Hủy đơn
                        </div>
                        <div class="w-100 text-light rounded-pill mx-4 btn btn-hoan" variant="info"
                            v-b-modal.my-modal-rollback>
                            Hoàn tiền
                        </div>
                        <div class="w-100 text-light rounded-pill btn btn-chuong" variant="warning">
                            Chương trình
                        </div>
                    </div>

                    <div class="mt-4" v-if="data?.trang_thai == 'Chưa có GV'">
                        <b-button class="w-100 text-light rounded-pill" variant="primary" v-b-modal.my-modal>
                            Duyệt đơn
                        </b-button>

                        <b-modal id="my-modal" ref="my-modal" hide-footer centered title="Duyệt đơn này">
                            <template #default="{ hide }">
                                <form>

                                    <div class="my-2">
                                        <div>
                                            <b-form-group>
                                                <label>Gán leader KD:</label>
                                                <b-form-select v-model="kds_id" :options="kds"
                                                    aria-placeholder="Chọn"></b-form-select>
                                            </b-form-group>
                                        </div>

                                    </div>
                                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                                        <button type="button" class=" btn-delete ms-1" @click="duyet_don()">Đồng ý</button>
                                    </div>
                                </form>

                            </template>
                        </b-modal>
                    </div>
                </div>

                <!-- // đơn đã huỷ -->
                <div class="mt-6" v-if="data?.trang_thai == 'Đã huỷ' || data?.trang_thai == 'Đã hủy'">
                    <div class="mb-3">
                        <div>
                            <b>Lý do hủy</b>
                        </div>
                        <b-form-textarea id="textarea" :value="data?.ghi_chu" placeholder="Lý do hủy" rows="3"
                            max-rows="6"></b-form-textarea>
                    </div>
                    <div class="d-flex">
                        <div disabled class="w-100 rounded-pill btn btn-deactive" variant="danger">
                            Hủy đơn
                        </div>
                        <div disabled class="w-100 rounded-pill mx-4 btn btn-deactive" variant="info">
                            Hoàn tiền
                        </div>
                        <div disabled class="w-100 rounded-pill btn btn-deactive" variant="warning">
                            Chương trình
                        </div>
                    </div>

                    <div class="mt-4">
                        <div class="w-100 text-light rounded-pill btn btn-canceled" variant="danger">
                            <span class="mdi mdi-close-circle-outline"></span>
                            <span>Đơn đã hủy</span>
                        </div>
                    </div>
                </div>

                <!-- // Đã hoàn thành -->
                <div class="mt-6" v-if="data?.trang_thai == 'Đã hoàn thành'">
                    <div class="d-flex">
                        <b-button disabled class="w-100 text-light rounded-pill" variant="danger">
                            Hủy đơn
                        </b-button>
                        <b-button disabled class="w-100 text-light rounded-pill mx-4" variant="info">
                            Hoàn tiền
                        </b-button>
                        <b-button disabled class="w-100 text-light rounded-pill" variant="warning">
                            Chương trình
                        </b-button>
                    </div>

                    <div class="mt-4">
                        <b-button class="w-100 text-light rounded-pill" variant="success">
                            <span class="mdi mdi-check-circle"></span>
                            <span>Đơn đã hoàn thành</span>
                        </b-button>
                    </div>
                </div>

                <!-- // Đơn hoàn -->
                <div class="mt-6" v-if="data?.trang_thai == 'Đơn hoàn'">
                    <div class="d-flex">
                        <div disabled class="w-100 rounded-pill btn btn-deactive" variant="danger">
                            Hủy đơn
                        </div>
                        <div disabled class="w-100 rounded-pill mx-4 btn btn-deactive" variant="info">
                            Hoàn tiền
                        </div>
                        <div disabled class="w-100 rounded-pill btn btn-deactive" variant="warning">
                            Chương trình
                        </div>
                    </div>

                    <div class="mt-4">
                        <b-button class="w-100 text-light rounded-pill btn btn-hoaned" variant="primary">
                            <span class="mdi mdi-check-circle"></span>
                            <span>Đơn hoàn</span>
                        </b-button>
                    </div>
                </div>


            </v-col>
        </v-row>

        <b-modal id="my-modal-cancel" ref="my-modal-cancel" hide-footer centered title="Xác nhận hủy?">
            <template #default="{ hide }">
                <form>

                    <div class="my-2">
                        <div>
                            <b-form-group>
                                <label>Lý do hủy:</label>
                                <b-form-textarea id="textarea" v-model="li_do_huy" placeholder="Lý do hủy..." rows="3"
                                    max-rows="6"></b-form-textarea>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                        <button type="button" class=" btn-delete ms-1" @click="huy_don()">Đồng ý</button>
                    </div>
                </form>

            </template>
        </b-modal>

        <b-modal id="my-modal-rollback" ref="my-modal-rollback" hide-footer centered title="Hoàn tiền">
            <template #default="{ hide }">
                <form>

                    <div class="my-2">
                        <div>
                            <b-form-group>
                                <label>Số lượng buổi hoàn:</label>
                                <b-form-input v-model="so_buoi_hoan" type="number"
                                    placeholder="Số lượng buổi hoàn"></b-form-input>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form-group>
                                <label>Số tiền:</label>
                                <b-form-input v-model="so_tien_hoan" type="number" placeholder="Số tiền"></b-form-input>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                        <button type="button" class=" btn-delete ms-1" @click="confirm_hoan()">Đồng ý</button>
                    </div>
                </form>

            </template>
        </b-modal>


        <!-- them-phu-phi -->
        <b-modal id="my-modal-them-phu-phi" ref="my-modal-them-phu-phi" hide-footer centered title="Thêm phụ phí">
            <template #default="{ hide }">
                <form>

                    <div class="my-2">
                        <div>
                            <b-form-group>
                                <label>Nhập số tiền:</label>
                                <b-form-input v-model="phu_phi_tien" type="number"
                                    placeholder="Nhập số tiền"></b-form-input>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form-group>
                                <label>Loại phí:</label>
                                <b-form-select v-model="nap_tien_id" :options="nap_tien"
                                    aria-placeholder="Chọn"></b-form-select>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form-group>
                                <label>Nhập ghi chú:</label>
                                <b-form-textarea id="textarea" v-model="phu_phi_li_do" placeholder="Nhập ghi chú..."
                                    rows="3" max-rows="6"></b-form-textarea>
                            </b-form-group>
                        </div>

                    </div>
                    <div class="mt-4 pb-3 d-flex justify-content-between align-items-center w-100">
                        <button type="button" class=" btn-cancel me-1" @click="hide()">Hủy</button>
                        <button type="button" class=" btn-delete ms-1" @click="add_phu_phi()">Thêm phụ phí</button>
                    </div>
                </form>

            </template>
        </b-modal>

    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import DetailServiceInfo from '~/components/service/DetailServiceInfo.vue';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Chi tiết đơn',
                previous: '/admin/orders'
            },
            data: null,
            file: null,
            image: null,
            kds: null,
            kds_id: null,
            teachers: null,
            teacher_id: null,
            li_do_huy: null,
            phu_phi_li_do: null,
            phu_phi_tien: null,
            xac_nhan_thanh_toan: false,
            per_page: 0,
            current_page: 1,
            total: 0,
            nap_tien: null,
            nap_tien_id: null,
            so_buoi_hoan: 0,
            so_tien_hoan: 0,
            tuKhoa: null,
            timeOut: null,
            timer: 400,
        };
    },
    components: {
        DetailServiceInfo
    },
    validate({ params }) {
        return /^\d+$/.test(params.id);
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        clearFiles() {
            this.$refs['file-input'].reset()
        },
        set_teacher(id) {
            if (this.teacher_id == id) {
                this.teacher_id = null
            } else {
                this.teacher_id = id
            }
            console.log(this.teacher_id)
        },
        async confirm_hoan() {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('so_buoi_hoan', this.so_buoi_hoan)
            formData.append('so_tien_hoan', this.so_tien_hoan)

            await api.post('don-dich-vu/hoan-don', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-rollback'].hide()
                    this.so_buoi_hoan = 0
                    this.so_tien_hoan = 0
                    this.load_data();
                }
            })
        },
        async add_teacher() {
            if (!this.teacher_id) {
                toastr.error('Chọn giáo viên để tiếp tục');
                return
            }
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('giao_vien_id', this.teacher_id)

            await api.post('don-dich-vu/dieu-giao-vien', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-teacher'].hide()
                    this.teacher_id = null
                    this.load_data();
                }
            })
        },
        async load_kd() {
            await api.get('don-dich-vu/leader-kinh-doanh', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.kds = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.hoten
                    };
                })
            })

            await api.get(`don-dich-vu/danh-sach-giao-vien?tuKhoa=${this.tuKhoa ?? ''}&page=1&limit=100&id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.teachers = res?.data?.data
            })
        },
        async load_data() {
            await api.get(`don-dich-vu/chi-tiet?id=` + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                console.log(res)
                this.data = res?.data?.data
            })

            await api.get(`giao-vien/loai-giao-dich-nap-tien`, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.nap_tien = res?.data?.data.map(item => {
                    return {
                        value: item?.id,
                        text: item?.name ?? (item?.id + ' - Chưa cập nhật')
                    };
                })
                this.nap_tien_id = this.nap_tien[0].value
            })
        },
        async add_phu_phi() {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('tong_tien', this.phu_phi_tien)
            formData.append('ghi_chu', this.phu_phi_li_do)
            formData.append('type_id', this.nap_tien_id)

            await api.post('don-dich-vu/them-phu-phi', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-them-phu-phi'].hide()
                    this.phu_phi_tien = null
                    this.phu_phi_li_do = null
                    this.load_data();
                }
            })
        },
        async duyet_don() {
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('leader_kd_id', this.kds_id)
            // formData.append('noi_dung_khao_sat', this.noi_dung_khao_sat)
            formData.append('xac_nhan_thanh_toan', this.xac_nhan_thanh_toan ? 1 : 0)

            await api.post('don-dich-vu/duyet-don', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal'].hide()
                    this.kds_id = null
                    this.load_data();
                }
            })
        },
        async huy_don() {
            if (this.li_do_huy == '' || this.li_do_huy == null) {
                toastr.error('Vui lòng nhập lý do huỷ đơn');
                return
            }
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('li_do_huy', this.li_do_huy)

            await api.post('don-dich-vu/huy-don', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal-cancel'].hide()
                    this.li_do_huy = null
                    this.load_data();
                }
            })
        },
        async send_data(event) {
            event.preventDefault();
            const formData = new FormData(document.getElementById('form'))
            await api.post('dao-tao/tao-moi', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$refs['my-modal'].hide()
                    this.clearFiles();
                    this.name = null
                    this.load_data();
                }
            })
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
        this.load_kd()
    },
    watch: {
        tuKhoa() {
            clearTimeout(this.timeOut);
            console.log(this.tuKhoa)

            this.timeOut = setTimeout(() => {
                this.load_kd()
                // this.load_kd()

            }, this.timer);
        },
    }
}
</script>

<style lang="scss" scoped>
table {
    margin: 0 !important;
    padding: 0 !important;
}

button:hover {
    span {
        color: white;
    }
}

button {
    transition: 0.3s;

    span {
        transition: 0.3s;
    }
}

.btn {
    padding: 0.575rem 0.75rem !important;
}

.card-teacher {
    border-radius: 10px;
    background: #FFF;
    border: 1px solid #c9c8c8;
    padding: 10px;
    margin-bottom: 10px;
}

.card-teacher.active {
    border-radius: 10px;
    border: 1px solid #4EAEEA;

    background: #E7F6FF;
}
</style>