<template>
    <div v-lazyload class="appcard"
    :style="`grid-row-end: span ${photo.rowEnd}`" 
    >
        <img 
        :data-url="photo.urls.small"
         :alt="photo.alt_description"       
         >
        <div class="image__loader"></div>
        <div class="overlay" @click="openContent()"></div>
        <div class="appcard__info">
            <h3>{{ photo.user.name }}</h3>
            <p>{{ photo.user.location }}</p>
        </div>
        <template v-if="showModal">
            <ImageModal @close-modal="closeModal()"  ref="imageModal" :selectedContent="photo" />
        </template>        
    </div>
</template>

<script>
import ImageModal from "~/components/Modals/ImageModal.vue";

export default {
    props: {
        photo: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data(){
    return{
        showModal: false,
      selectedContent: {}
    }
  },
  components: {
    ImageModal
  },
  methods: {
      openModal(){
          this.showModal=true
          console.log('lmaooo just been clicked')

      },
      closeModal(){
          console.log(this.showModal)
          this.showModal=false
          console.log(this.showModal)
      },
      openContent(){
          this.openModal();
      }
  }
}
</script>

<style lang="scss" scoped>
    .appcard{
        background-color: #f5f5f5;
        position: relative;
        // height: 300px;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;   
        display: block; 
        height: 100%;
        width: 100%;
        // z-index: 88;

        &.loaded {
            img {
                visibility: visible;
                opacity: 1;
            }
            &.image__loader {
                display: none;
                width: 100%;
            }
        }

        img{
            position: relative;
            z-index: 22;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: 500ms all;
            opacity: 0;
            visibility: hidden;
            &:hover {
                transform: scale(1.05);
            }
        }

        &__info{
            position: absolute;
            bottom: 20px;
            left: 20px;
            z-index: 33;
            // background-color: #f00;
            color: #fff;
            h3{
                font-size: 20px;
                margin-bottom: 10px;
            }
            p{
                font-size: 15px;
                opacity: 0.7;
            }
        }
        .overlay {
           position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 33;
            background-image: linear-gradient(
                rgba(black, 0.04),
                rgba(black, 0.2),
                rgba(black, 0.2),
                rgba(black, 0.95)
            );
        }
        
    }
</style>