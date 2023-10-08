<template>
    <div class="content-mp">
        <div class="medias">
            <v-row class="">
                <v-col class="" xs="12" sm="12" md="7" lg="7" xl="7">
                    <div style="min-width: 245px;" class="">
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
                                <b-form-input placeholder="Nhập Tên chủ đề"></b-form-input>
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
                                <b-form-select v-model="selected" :options="options" class="mb-3"></b-form-select>
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
                                <b-form-input placeholder="http://youtube.com/AFHS-N3561..."></b-form-input>
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
                                <textarea v-model="contents" id="sample"></textarea>
                            </b-form-group>
                        </div>


                        <div class="mt-6">
                            <button-component>Lưu</button-component>
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

export default {
    layout: 'admin',
    data() {
        return {
            title: {
                name: 'Thêm bài viết',
                previous: '/admin/medias'
            },
            selected: 1,
            options: [
                { value: 0, text: 'Mới nhất' },
                { value: 1, text: 'Hướng dẫn' },
                { value: 2, text: 'Giới thiệu' },
                { value: 3, text: 'Hoạt động' }
            ],
            suneditorInstance: null,
            contents: 'Nhập nội dung',
        };
    },
    computed: {},
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
            callBackSave: function (contents, isChanged) {
                this.contents = contents
                console.log(contents);
            },
        });
        this.suneditorInstance = editor; // Store the Suneditor instance in a component property

        this.suneditorInstance.onChange = async (contents, core) => {
            this.contents = contents;
            await console.log(this.contents)
        };

        this.suneditorInstance.setContents(this.contents);
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
}</style>