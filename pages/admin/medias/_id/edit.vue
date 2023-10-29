<template>
    <div class="content-mp">
        <div class="medias">
            <v-row class="">
                <v-col class="" xs="12" sm="12" md="7" lg="7" xl="7">
                    <div style="min-width: 245px;" class="">
                        <div>
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <div class="label-status">
                                    <span class="me-2">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.3263 6.4735C14.0997 6.38016 13.7997 6.3335 13.4263 6.3335H9.90634C8.74634 6.3335 8.33301 6.74683 8.33301 7.92016V13.0802C8.33301 13.4668 8.37967 13.7668 8.47967 14.0002C8.68634 14.4802 9.12634 14.6668 9.90634 14.6668H13.4263C14.5863 14.6668 14.9997 14.2468 14.9997 13.0802V7.92016C14.9997 7.12683 14.813 6.68016 14.3263 6.4735ZM12.333 13.1668H10.9997C10.9863 13.1668 10.9663 13.1668 10.953 13.1602C10.853 13.1535 10.7663 13.1202 10.693 13.0535C10.573 12.9668 10.4997 12.8268 10.4997 12.6668C10.4997 12.3935 10.7263 12.1668 10.9997 12.1668H12.333C12.6063 12.1668 12.833 12.3935 12.833 12.6668C12.833 12.9402 12.6063 13.1668 12.333 13.1668Z"
                                                fill="#0056B1" />
                                            <path
                                                d="M14.3262 4.12683V4.66683C14.3262 5.0335 14.0262 5.3335 13.6595 5.3335H9.90618C8.19952 5.3335 7.33285 6.20683 7.33285 7.92016V14.0002C7.33285 14.3668 7.03285 14.6668 6.66618 14.6668H5.36618C5.09952 14.6668 4.88618 14.4535 4.88618 14.1935C4.88618 13.9268 5.09952 13.7202 5.36618 13.7202H6.66618V11.1668H4.33285C2.85285 11.0935 1.67285 9.8735 1.67285 8.3735V4.12683C1.67285 2.58683 2.92618 1.3335 4.47285 1.3335H11.5329C13.0729 1.3335 14.3262 2.58683 14.3262 4.12683Z"
                                                fill="#0056B1" />
                                        </svg>
                                    </span>
                                    Ẩn/Hiện
                                </div>
                                <b-form-checkbox v-model="status" switch size="lg"></b-form-checkbox>
                            </div>
                        </div>
                        <div>
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.5588 6.87422L12.4518 6.72022C12.2645 6.48222 12.0438 6.29322 11.7896 6.15321C11.4485 5.95021 11.0606 5.84521 10.6593 5.84521H2.33224C1.93094 5.84521 1.5497 5.95021 1.2019 6.15321C0.941053 6.30022 0.706959 6.50322 0.512996 6.75522C0.131757 7.26622 -0.0488293 7.89622 0.0113663 8.52622L0.258837 11.7952C0.345786 12.7822 0.459489 14.0002 2.57971 14.0002H10.4185C12.5387 14.0002 12.6457 12.7822 12.7394 11.7882L12.9869 8.53322C13.047 7.94522 12.8999 7.35722 12.5588 6.87422ZM8.09764 10.7382H4.89389C4.63305 10.7382 4.42571 10.5142 4.42571 10.2482C4.42571 9.98222 4.63305 9.75822 4.89389 9.75822H8.09764C8.35848 9.75822 8.56582 9.98222 8.56582 10.2482C8.56582 10.5212 8.35848 10.7382 8.09764 10.7382Z"
                                                fill="#FC4D32" />
                                            <path
                                                d="M12.1928 4.34012C12.2477 4.72504 11.8181 4.98641 11.4405 4.89386C11.1906 4.83262 10.932 4.80201 10.6662 4.80201H2.33241C2.06049 4.80201 1.79162 4.83564 1.53314 4.9006C1.16025 4.99432 0.733887 4.74232 0.733887 4.35783V3.262C0.733887 0.763001 1.46292 0 3.85068 0H4.63991C5.59635 0 5.89733 0.322 6.28525 0.847001L7.08786 1.967C7.25507 2.205 7.26176 2.219 7.55605 2.219H9.14789C11.1279 2.219 11.9654 2.74472 12.1928 4.34012Z"
                                                fill="#FC4D32" />
                                        </svg>
                                    </span>
                                    Tên chủ đề*
                                </div>
                                <b-form-input v-model="tieu_de" placeholder="Nhập Tên chủ đề"></b-form-input>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.5588 6.87422L12.4518 6.72022C12.2645 6.48222 12.0438 6.29322 11.7896 6.15321C11.4485 5.95021 11.0606 5.84521 10.6593 5.84521H2.33224C1.93094 5.84521 1.5497 5.95021 1.2019 6.15321C0.941053 6.30022 0.706959 6.50322 0.512996 6.75522C0.131757 7.26622 -0.0488293 7.89622 0.0113663 8.52622L0.258837 11.7952C0.345786 12.7822 0.459489 14.0002 2.57971 14.0002H10.4185C12.5387 14.0002 12.6457 12.7822 12.7394 11.7882L12.9869 8.53322C13.047 7.94522 12.8999 7.35722 12.5588 6.87422ZM8.09764 10.7382H4.89389C4.63305 10.7382 4.42571 10.5142 4.42571 10.2482C4.42571 9.98222 4.63305 9.75822 4.89389 9.75822H8.09764C8.35848 9.75822 8.56582 9.98222 8.56582 10.2482C8.56582 10.5212 8.35848 10.7382 8.09764 10.7382Z"
                                                fill="#FFB761" />
                                            <path
                                                d="M12.1928 4.34012C12.2477 4.72504 11.8181 4.98641 11.4405 4.89386C11.1906 4.83262 10.932 4.80201 10.6662 4.80201H2.33241C2.06049 4.80201 1.79162 4.83564 1.53314 4.9006C1.16025 4.99432 0.733887 4.74232 0.733887 4.35783V3.262C0.733887 0.763001 1.46292 0 3.85068 0H4.63991C5.59635 0 5.89733 0.322 6.28525 0.847001L7.08786 1.967C7.25507 2.205 7.26176 2.219 7.55605 2.219H9.14789C11.1279 2.219 11.9654 2.74472 12.1928 4.34012Z"
                                                fill="#FFB761" />
                                        </svg>
                                    </span>
                                    Phân loại*
                                </div>
                                <b-form-select v-model="selected" :options="type" class="mb-3"></b-form-select>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.5068 3.90016L9.54678 1.6135C8.90011 1.24016 8.10011 1.24016 7.44678 1.6135L3.49344 3.90016C2.84678 4.2735 2.44678 4.96683 2.44678 5.72016V10.2802C2.44678 11.0268 2.84678 11.7202 3.49344 12.1002L7.45344 14.3868C8.10011 14.7602 8.90011 14.7602 9.55344 14.3868L13.5134 12.1002C14.1601 11.7268 14.5601 11.0335 14.5601 10.2802V5.72016C14.5534 4.96683 14.1534 4.28016 13.5068 3.90016ZM10.0001 8.9335L9.30678 9.3335L8.61344 9.7335C7.72678 10.2468 7.00011 9.82683 7.00011 8.80016V8.00016V7.20016C7.00011 6.1735 7.72678 5.7535 8.61344 6.26683L9.30678 6.66683L10.0001 7.06683C10.8868 7.58016 10.8868 8.42016 10.0001 8.9335Z"
                                                fill="#FC4D32" />
                                        </svg>
                                    </span>
                                    Gắn đường dẫn*
                                </div>
                                <b-form-input v-model="link" placeholder="http://youtube.com/AFHS-N3561..."></b-form-input>
                            </b-form-group>
                        </div>
                        <div>
                            <b-form-group>
                                <div class="label">
                                    <span class="me-2">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.0202 1.3335H5.98016C3.46016 1.3335 2.8335 2.00683 2.8335 4.6935V12.2002C2.8335 13.9735 3.80683 14.3935 4.98683 13.1268L4.9935 13.1202C5.54016 12.5402 6.3735 12.5868 6.84683 13.2202L7.52016 14.1202C8.06016 14.8335 8.9335 14.8335 9.4735 14.1202L10.1468 13.2202C10.6268 12.5802 11.4602 12.5335 12.0068 13.1202C13.1935 14.3868 14.1602 13.9668 14.1602 12.1935V4.6935C14.1668 2.00683 13.5402 1.3335 11.0202 1.3335ZM10.3935 6.66016L10.0602 7.00016H10.0535L8.0335 9.02016C7.94683 9.10683 7.76683 9.20016 7.64016 9.2135L6.74016 9.34683C6.4135 9.3935 6.18683 9.16016 6.2335 8.84016L6.36016 7.9335C6.38016 7.80683 6.46683 7.6335 6.5535 7.54016L8.58016 5.52016L8.9135 5.18016C9.1335 4.96016 9.38016 4.80016 9.64683 4.80016C9.8735 4.80016 10.1202 4.90683 10.3935 5.18016C10.9935 5.78016 10.8002 6.2535 10.3935 6.66016Z"
                                                fill="#00C092" />
                                        </svg>
                                    </span>
                                    Nội dung
                                </div>
                                <textarea v-model="noi_dung" id="sample"></textarea>
                            </b-form-group>
                        </div>


                        <div class="mt-6">
                            <form @submit="send_data">
                                <button-component typeBtn="submit">Lưu</button-component>
                            </form>
                        </div>

                        <div class="mt-6">
                            <div @click="delete_item(id, data?.tieu_de)">
                                <button-component addClass="silver">
                                    <svg class="me-2" width="16" height="18" viewBox="0 0 16 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.66667 1H10.3333M1 3.66667H15M13.4444 3.66667L12.899 13.0171C12.8172 14.42 12.7762 15.1215 12.5111 15.6533C12.2777 16.1216 11.9256 16.498 11.5013 16.7331C11.0193 17 10.4042 17 9.17394 17H6.82607C5.59582 17 4.98069 17 4.49871 16.7331C4.07437 16.498 3.72229 16.1216 3.48888 15.6533C3.22375 15.1215 3.18284 14.42 3.101 13.0171L2.55556 3.66667M6.44444 7.66667V12.1111M9.55556 7.66667V12.1111"
                                            stroke="#2D2D2D" stroke-width="1.3" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    Xóa bài viết
                                </button-component>
                            </div>
                        </div>

                    </div>
                </v-col>

            </v-row>
        </div>
    </div>
</template>

<script>
import SUNEDITOR from 'suneditor'
import plugins from 'suneditor/src/plugins'
import 'suneditor/dist/css/suneditor.min.css'
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Chỉnh sửa bài viết',
                previous: '/admin/medias'
            },
            type: null,
            selected: 1,
            options: [
                { value: 0, text: 'Mới nhất' },
                { value: 1, text: 'Hướng dẫn' },
                { value: 2, text: 'Giới thiệu' },
                { value: 3, text: 'Hoạt động' }
            ],
            suneditorInstance: null,
            noi_dung: 'Nhập nội dung',
            tieu_de: '',
            status: true,
            link: '',
            // noi_dung: '',
        };
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
        async load_type() {
            await api.get('tin-tuc/get-loai-tin-tuc', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.type = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.name
                    };
                })
                this.selected = this.type[0].value
            })
        },
        async load_data() {
            await api.get('tin-tuc/chi-tiet?id=' + this.id, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                const user = res?.data?.data?.tinTuc
                this.data = user
                this.tieu_de = user?.tieu_de
                this.status = user?.status == 1 ? true : false;
                // this.selected = user?.vai_tro
                this.selected = user?.type
                this.link = user?.link
                this.noi_dung = user?.noi_dung

                this.suneditorInstance.setContents(user?.noi_dung);

            })
        },
        async send_data(event) {
            event.preventDefault();
            const formData = new FormData()
            formData.append('id', this.id)
            formData.append('tieu_de', this.tieu_de)
            formData.append('status', this.status ? 1 : 0)
            formData.append('type', this.selected)
            formData.append('noi_dung', this.noi_dung)
            formData.append('link', this.link)

            await api.post('tin-tuc/sua', formData, {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                if (res?.status == 200) {
                    toastr.success(res?.data?.message);
                    this.$router.push('/admin/medias');
                }
            })
        },
        async delete_item(user_id, name) {
            const formData = new FormData();
            formData.append('id', user_id)

            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: `Xoá bài viết ${name}!`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có xoá nó!',
                cancelButtonText: 'Huỷ'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.post('tin-tuc/xoa', formData, {
                        'Content-Type': 'multipart/form-data',
                        Authorization: 'Bearer ' + this.token
                    }).then(res => {
                        if (res?.status == 200) {
                            // toastr.success(res?.data?.message);
                            Swal.fire(
                                'Deleted!',
                                res?.data?.message,
                                'success'
                            )
                            this.$router.push('/admin/medias');
                        } else {
                            toastr.error(res?.data?.message);
                        }
                    })

                }
            })
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);

        const editor = SUNEDITOR.create((document.getElementById('sample') || 'sample'), {
            toolbarContainer: '#toolbar_container',
            showPathLabel: false,
            charCounter: true,
            width: 'auto',
            height: 'auto',
            minHeight: '300px',
            maxHeight: '250px',
            plugins: plugins,
            buttonList: [
                ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
                ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'table'],
                ['link', 'image', 'video', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save']
            ],
            callBackSave: function (noi_dung, isChanged) {
                this.noi_dung = noi_dung
                console.log(noi_dung);
            },
        });
        this.suneditorInstance = editor; // Store the Suneditor instance in a component property

        this.suneditorInstance.onChange = async (noi_dung, core) => {
            this.noi_dung = noi_dung;
            await console.log(this.noi_dung)
        };

        this.load_type()
        this.load_data()
    },
    components: {}
}
</script>

<style lang="scss" scoped>
.medias {
    i {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
        margin-left: 7px;
    }

    .label {
        color: #2D2D2D;
        font-family: SVN-Gilroy;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
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