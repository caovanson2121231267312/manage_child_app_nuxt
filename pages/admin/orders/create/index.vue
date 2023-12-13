<template>
    <div class="content-mp">

        <v-row>
            <v-col xs="12" sm="12" md="12" lg="7" xl="7">
                <v-card>
                    <v-card-text>
                        <div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.9759 14.6167C15.5146 14.5099 15.8331 13.9437 15.5468 13.475C14.9876 12.5596 14.1298 11.755 13.0419 11.1373C11.5955 10.3159 9.8232 9.87066 8 9.87066C6.17681 9.87066 4.40455 10.3159 2.95811 11.1373C1.87024 11.755 1.01239 12.5596 0.453174 13.475C0.1669 13.9437 0.485408 14.5099 1.02406 14.6167C5.62985 15.53 10.3702 15.53 14.9759 14.6167Z"
                                    fill="#EB1B24" />
                                <path
                                    d="M12.6009 4.37818C12.6009 6.79613 10.5409 8.75627 7.99966 8.75627C5.45848 8.75627 3.39844 6.79613 3.39844 4.37818C3.39844 1.96022 5.45848 7.74325e-05 7.99966 7.74325e-05C10.5409 7.74325e-05 12.6009 1.96022 12.6009 4.37818Z"
                                    fill="#EB1B24" />
                            </svg>
                            <span>Phụ huynh</span>
                        </div>

                        <div class="mt-2">
                            <v-autocomplete v-model="phu_huynh_id" :disabled="isUpdating" :items="phu_huynh" filled chips
                                color="blue-grey lighten-2" label="" item-text="name" item-value="name">
                                <template v-slot:selection="data">
                                    <div class="d-flex">
                                        <v-avatar left>
                                            <v-img :src="data.item.avatar"></v-img>
                                        </v-avatar>
                                        <div class="ms-2">
                                            <div class="mt-2">
                                                <b>{{ data.item.name }}</b>
                                            </div>
                                            <div>
                                                <span class="blade-id"># {{ data.item.group }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <v-chip v-bind="data.attrs" :input-value="data.selected" close @click="data.select"
                                        @click:close="remove(data.item)">
                                        <v-avatar left>
                                            <v-img :src="data.item.avatar"></v-img>
                                        </v-avatar>
                                        {{ data.item.name }}
                                    </v-chip> -->
                                </template>
                                <template v-slot:item="data">
                                    <template v-if="typeof data.item !== 'object'">
                                        <v-list-item-content v-text="data.item"></v-list-item-content>
                                    </template>
                                    <template v-else>
                                        <v-list-item-avatar>
                                            <img :src="data.item.avatar">
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title v-html="data.item.name"></v-list-item-title>
                                            <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                                        </v-list-item-content>
                                    </template>
                                </template>
                            </v-autocomplete>
                        </div>
                    </v-card-text>
                </v-card>
                <!--  -->

                <v-card class="mt-5">
                    <v-card-text>
                        <div>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.3789 7.85599L16.2471 7.67999C16.0166 7.40799 15.745 7.19199 15.4322 7.03199C15.0124 6.79998 14.5349 6.67999 14.041 6.67999H3.79232C3.29841 6.67999 2.82919 6.79998 2.40114 7.03199C2.08009 7.19999 1.79198 7.43199 1.55325 7.71999C1.08404 8.30399 0.861777 9.02399 0.935864 9.74399L1.24044 13.48C1.34746 14.608 1.4874 16 4.0969 16H13.7447C16.3542 16 16.4859 14.608 16.6011 13.472L16.9057 9.75199C16.9798 9.07999 16.7987 8.40799 16.3789 7.85599ZM10.8882 12.272H6.94513C6.62409 12.272 6.3689 12.016 6.3689 11.712C6.3689 11.408 6.62409 11.152 6.94513 11.152H10.8882C11.2092 11.152 11.4644 11.408 11.4644 11.712C11.4644 12.024 11.2092 12.272 10.8882 12.272Z"
                                    fill="#FC4D32" />
                                <path
                                    d="M15.9502 5.11567C15.998 5.49485 15.586 5.75354 15.2186 5.64842C14.8448 5.54148 14.454 5.48801 14.0495 5.48801H3.79261C3.38281 5.48801 2.97866 5.54563 2.5967 5.65606C2.23401 5.76092 1.8252 5.51186 1.8252 5.13431V3.728C1.8252 0.872001 2.72247 0 5.66125 0H6.63261C7.80976 0 8.1802 0.368001 8.65765 0.968001L9.64547 2.248C9.85127 2.52 9.8595 2.536 10.2217 2.536H12.1809C14.6858 2.536 15.705 3.17082 15.9502 5.11567Z"
                                    fill="#FC4D32" />
                            </svg>
                            <span>Chọn dịch vụ</span>
                        </div>
                        <div class="mt-2">
                            <b-form-select v-model="dich_vu_id" :options="dich_vu" aria-placeholder="Chọn"></b-form-select>
                        </div>
                    </v-card-text>
                </v-card>

                <!--  -->
                <v-card class="mt-5">
                    <v-card-text>
                        <div>
                            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M9.27368 18.2848C10.8697 17.4953 16.8504 14.1639 16.8504 8.57813C16.8504 4.33001 13.2847 0.88623 8.88614 0.88623C4.4876 0.88623 0.921875 4.33001 0.921875 8.57813C0.921875 14.1639 6.90258 17.4953 8.4986 18.2848C8.74592 18.4072 9.02637 18.4072 9.27368 18.2848ZM8.8858 11.8747C10.7709 11.8747 12.2991 10.3988 12.2991 8.57815C12.2991 6.75753 10.7709 5.28162 8.8858 5.28162C7.00071 5.28162 5.47254 6.75753 5.47254 8.57815C5.47254 10.3988 7.00071 11.8747 8.8858 11.8747Z"
                                    fill="#4EAEEA" />
                            </svg>
                            <span>Địa điểm</span>
                        </div>
                        <div class="mt-2">
                            <b-form-input id="input-1" v-model="dia_chi" type="text"
                                placeholder="Nhập thông tin rõ số nhà, tầng, tòa, đường..." required></b-form-input>
                        </div>
                    </v-card-text>
                </v-card>

                <!--  -->
                <v-card class="mt-5">
                    <v-card-text>
                        <div>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.1219 0H5.72188C2.52188 0 0.921875 1.6 0.921875 4.8V15.2C0.921875 15.64 1.28187 16 1.72188 16H12.1219C15.3219 16 16.9219 14.4 16.9219 11.2V4.8C16.9219 1.6 15.3219 0 12.1219 0ZM8.20987 11.728C8.00987 11.928 7.64188 12.112 7.36988 12.152L5.70587 12.384C5.64188 12.392 5.57788 12.4 5.52187 12.4C5.24188 12.4 4.98588 12.304 4.80187 12.12C4.57787 11.896 4.48187 11.568 4.53787 11.216L4.76988 9.552C4.80988 9.28 4.99388 8.904 5.19388 8.712L8.20987 5.696C8.25787 5.84 8.32188 5.984 8.39388 6.144C8.46588 6.288 8.53788 6.432 8.61788 6.568C8.68188 6.68 8.75388 6.792 8.81787 6.872C8.89787 6.992 8.97788 7.096 9.03388 7.152C9.06588 7.2 9.09787 7.232 9.10588 7.248C9.28187 7.448 9.46587 7.64 9.64188 7.784C9.68987 7.832 9.72188 7.856 9.72988 7.864C9.83388 7.944 9.92988 8.032 10.0259 8.088C10.1299 8.168 10.2419 8.24 10.3539 8.304C10.4899 8.384 10.6339 8.464 10.7859 8.536C10.9379 8.608 11.0819 8.664 11.2259 8.712L8.20987 11.728ZM12.5619 7.384L11.9379 8.008C11.8979 8.048 11.8419 8.072 11.7859 8.072C11.7699 8.072 11.7379 8.072 11.7219 8.064C10.3459 7.672 9.24988 6.576 8.85788 5.2C8.83388 5.128 8.85787 5.048 8.91388 4.992L9.54587 4.36C10.5779 3.328 11.5539 3.352 12.5619 4.36C13.0739 4.872 13.3299 5.368 13.3219 5.88C13.3219 6.384 13.0739 6.872 12.5619 7.384Z"
                                    fill="#4EAEEA" />
                            </svg>
                            <span>Ghi chú</span>
                        </div>
                        <div class="mt-2">
                            <b-form-textarea id="textarea" v-model="ghi_chu" placeholder="Nhập ghi chú..." rows="3"
                                max-rows="6"></b-form-textarea>
                        </div>
                    </v-card-text>
                </v-card>

                <!--  -->

                <div class="mt-8" @click="send_data()">
                    <button-component>Lưu thay đổi</button-component>
                </div>
            </v-col>
        </v-row>

    </div>
</template>

<script>
import api from '@/store/axios'
import Swal from 'sweetalert2'
import toastr from 'toastr';
import ButtonComponent from '~/components/button/ButtonComponent.vue'

export default {
    layout: 'admin',
    data() {
        const srcs = {
            1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        }

        return {
            title: {
                name: 'Tạo đơn hàng',
                previous: '/admin/orders'
            },
            ghi_chu: null,
            dia_chi: null,
            dich_vu_id: null,
            dich_vu: null,
            phu_huynh_id: null,
            phu_huynh: [],
            data: null,
            file: null,
            image: null,
            autoUpdate: true,
            friends: 'Sandra Adams',
            isUpdating: false,
            name: 'Midnight Crew',
            people: [
                { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
                { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
                { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
                { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
                { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
                { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
                { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
                { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },
            ],
        };
    },
    components: {
        ButtonComponent
    },
    computed: {
        token() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            return storedUser.auth_key
        }
    },
    methods: {
        clearFiles() {
            this.$refs['file-input'].reset()
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
        async load_data() {
            await api.get('dich-vu/danh-sach?page=1&limit=1000&sort=1&tuKhoa=', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.dich_vu = res?.data?.data.map(item => {
                    return {
                        value: item.id,
                        text: item.ten_dich_vu
                    };
                })
                this.dich_vu_id = this.dich_vu[0].value
            })

            await api.get('don-dich-vu/danh-sach-phu-huynh', {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + this.token
            }).then(res => {
                this.phu_huynh = res?.data?.data.map(item => {
                    return {
                        group: item?.id,
                        name: item?.hoten ?? (item?.id + ' - Chưa cập nhât tên'),
                        avatar: item?.anh_nguoi_dung,
                    };
                })
                this.phu_huynh_id = this.phu_huynh[0].name
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
        remove(item) {
            const index = this.friends.indexOf(item.name)
            if (index >= 0) this.friends.splice(index, 1)
        },
    },
    mounted() {
        this.$store.dispatch('title/set_title', this.title);
        this.load_data()
    },
    watch: {
        isUpdating(val) {
            if (val) {
                setTimeout(() => (this.isUpdating = false), 3000)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.blade-id {
    border-radius: 17px;
    background: #FFEEEB;
    padding: 3px 4px;
    color: #FC4D32;
    font-family: SVN-Gilroy;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>