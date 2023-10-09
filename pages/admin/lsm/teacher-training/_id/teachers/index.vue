<template>
    <div class="content-mp">
        <v-row>
            <v-col class="mt-0 pt-0" xs="12" sm="12" md="6" lg="6" xl="6" style="min-width: 373px;">
                <div>
                    <div class="card-teacher">
                        <div class="card-item mt-3" v-for="n in 9" v-bind:key="n">
                            <div class="d-flex">
                                <div class="box-img me-2">
                                    <img src="@/static/images/users/user1.png" alt="">
                                </div>
                                <div>
                                    <div class="user-id mb-2">
                                        <span class="blade-id"># 252</span>
                                    </div>
                                    <div class="user-name">
                                        Nguyễn Hoàng Anh Thư
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
                        <button-add>
                            <span class="mdi mdi-plus"></span> Gán giáo viên
                        </button-add>
                    </div>
                </div>
                <!--  -->
            </v-col>
        </v-row>

    </div>
</template>

<script>
import ButtonAdd from '~/components/button/ButtonAdd.vue';
export default {
    components: { ButtonAdd },
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Gán giáo viên',
                previous: '/admin/lsm/teacher-training/' + (this.id ?? 0)
            },
            panel: [0],
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
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
    },
    mounted() {
        this.title.previous = '/admin/lsm/teacher-training/' + (this.id ?? 0) + '/detail'
        this.$store.dispatch('title/set_title', this.title);
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