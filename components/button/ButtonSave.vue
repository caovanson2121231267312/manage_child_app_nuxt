<template>
    <div :class="computedClasses + ' hover'">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        addClass: {
            type: String,
            default: '', // Giá trị mặc định là chuỗi rỗng
        },
    },
    computed: {
        computedClasses() {
            // Sử dụng class được truyền vào nếu có, nếu không, sử dụng class mặc định
            return this.addClass + ' button';
        },
    },
}
</script>

<style lang="scss" scoped>
.button {
    color: #fff;
    text-align: center;
    border-radius: 42px;
    border: 1px solid #0056B1;
    background: #0056B1;
    padding: 10px;
    cursor: pointer;
}
.hover {
    transition: 0.3s;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;

    &:hover {
        background: #004691;
    }
}

.btn-header {
    padding: 8px 28px;
    display: inline;
}
</style>