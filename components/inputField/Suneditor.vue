<template>
    <div class="">
        <div>
            <textarea v-model="contents" :id="app"></textarea>
        </div>
    </div>
</template>

<script>
import SUNEDITOR from 'suneditor'
import plugins from 'suneditor/src/plugins'

export default {
    props: {
        app: {
            type: String,
            default: '',
        },
        contents: {
            type: String,
            default: 'Nhập nội dung',
        },
    },
    data: () => ({
        suneditorInstance: null,
    }),
    mounted() {
        this.$store.dispatch('title/set_title', this.title);

        const editor = SUNEDITOR.create((document.getElementById(app) || app), {
            toolbarContainer: '#toolbar_container',
            showPathLabel: false,
            charCounter: true,
            maxCharCount: 720,
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
};
</script>
