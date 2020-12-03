<template>
    <div class="loader" :style="`grid-row-end: span ${rowEnd}`">
        <div class="loader__info">
            <div class="loader__name"></div>
            <div class="loader__location"></div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        rowEnd: {
            type: Object,
            default() {
                return {};
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .loader{
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        position: relative;
        overflow: hidden;
        background-color: #f5f5f5;
        -webkit-animation: 1s linear infinite;
        animation: loading-glow 1s linear infinite;

        &__info{
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 100%;
            
        }
        &__name {
            width: 50%;
            height: 14px;
            margin-bottom: 10px;
            background-color: #e6e6e6;            

        }
        &__location {
            width: 35%;
            height: 14px;
            background-color: #e6e6e6;
        }
    }
</style>