<template>
    <div>
        <header class="header">
            <div class="header__search">
                <h2>{{ headerText }} for <span>{{ query }}</span></h2>
            </div>
        </header>

        <div class="container">
            <div v-if="status !== statuses.ERROR" class="content">
                <template v-if="status===statuses.LOADING || status===statuses.IDLE">
                    <template v-for="x in 6">
                        <CardLoader :rowEnd="generateSpan()" :key="x" />
                    </template>                
                </template>
                
                
                <template v-else-if="status === statuses.SUCCESS && photos.length > 0">
                    <template v-for="(photo, index) in photos">
                        <AppCard :key="index" :photo="photo" />
                    </template>                                   
                </template>
                
            </div>

            <template v-if="status === statuses.SUCCESS && photos.length < 1">
                <div class="error">
                    <div class="msg">
                        <h2>No result found for <span>{{ query }} </span><span role="img" aria-label="sad face">😐</span></h2>
                        <nuxt-link to="/">Back to homepage</nuxt-link>
                    </div>
                </div>
            </template>
            
            <template v-if="status == statuses.ERROR">
                <div class="error">
                        <div class="msg">
                            <h2>{{ error }} <span role="img" aria-label="sad face">😐</span></h2>
                            <nuxt-link to="/">Back to homepage</nuxt-link>
                        </div>
                    </div>
            </template>
        </div>       
        
    </div>

</template>

<script>
import AppCards from "~/components/Cards/AppCard.vue";
import CardLoader from "~/components/Loaders/CardLoader.vue";
import { statuses } from "~/utils/index.js";
export default {
  data(){
    return{
      searching: true,
      photos: [],
      query: '',
      statuses: {},
      status: statuses.IDLE,
      error: ''
    }
  },
  computed: {
      headerText(){
          if(this.status === statuses.IDLE || this.status === statuses.LOADING){
            return 'Searching'
          }
          else{
            return `Result${this.photos.length > 1 ? 's' : ''}`
          }
          
      }
  },
  components: {
    AppCards,
    CardLoader,
  },
  async created(){
      try {          
        this.statuses = statuses
        this.status= this.statuses.LOADING
        this.query = this.$route.query.query
        const photos = await this.$axios.$get(`search/photos?query=${this.query}`, {
            headers: {
            Authorization: `Client-ID ${process.env.ACCESS_KEY}`
            }
        })
        photos.results.map(photo => {
            photo.rowEnd = this.generateSpan()
        })
        this.photos = photos.results
        this.status = this.statuses.SUCCESS
        } catch (err) {
            this.error=err.message
            this.status = this.statuses.ERROR
        }
  },
  methods: {
      
  }
}
</script>

<style lang="scss">

</style>
