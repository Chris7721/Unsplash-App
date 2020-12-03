<template>
    <div class="modal">
        <div class="modal__body">
            <div v-lazyload class="modal__image">
                <div class="image__loader"></div>
                <img :data-url="selectedContent.urls.regular" :alt="selectedContent.alt_description">
            </div>
            
            <div class="modal__info">
                <h3>{{ selectedContent.user.name }}</h3>
                <p>{{ selectedContent.user.location }}</p>
            </div>
        </div>
        <div class="modal__close" @click="$emit('close-modal')">
            <CloseIcon />
        </div>        
    </div>
</template>

<script>
import CloseIcon from '~/components/Icons/CloseIcon.vue'
export default{
    props: {
        selectedContent: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data(){
        return{
            modalOpen: false,
            content: {}
        }
    },
    methods: {
    },
    components: {
        CloseIcon
    }
}
</script>
    
<style lang="scss" scoped>
.modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);
    width: 100%;
    height: 100vh;
    z-index: 99;
    padding: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    @include respond-phone {
        padding: 5px;
      }

    &__body{
        max-width: 900px;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow: hidden;
        background-color: #dde2e9;
        position: relative;
        animation: modalAnim .1s ease-out forwards;
        @include respond-phone {
            border-radius: 0;
        }        

        .modal__image{
            height: 80%;
            position: relative;
            @include respond-phone {
                height: 85%
            }

            &.loaded {
                img{
                    visibility: visible;
                    opacity: 1;
                }
                .image__loader {
                display: none;
                width: 100%;
                    }
                    
            }
        }

        img{
            visibility: hidden;
            opacity: 0;
            width: 100%;
            height: 100%;            
            object-fit: cover;
            transition: all 250ms;
            // object-position: top;            
        }

    }
    &__info{
        display: flex;        
        justify-content: center;
        flex-direction: column;
        padding: 20px;
        padding-left: 40px;
        flex: 1;
        background-color: #fff;
        

            h3{
                margin-bottom: 10px;
                font-size: 20px;
                color: #2a3d5b;
                font-weight: 600;
            }
            p{
                font-size: 15px;
                color: #7d889c;
            }
        }
        &__close{
            position: absolute;
            top: 35px;
            right: 35px;            
            padding: 3px;
            cursor: pointer;
            z-index: 999;
            // background-color: rgba($color: #000000, $alpha: 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 500rem;
            @include respond-tablet {
                background-color: rgba($color: #000000, $alpha: 0.5);
            }
            @include respond-phone {
                right: 10px;
                top: 10px;
                background-color: rgba($color: #000000, $alpha: 0.5);
            }

            svg{
                fill: #C5C5C7;
                width: 25px;
                height: 25px;
                display: block;
            }
        }
        
}
</style>