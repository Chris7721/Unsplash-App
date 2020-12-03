<template>
  <div>
    <header class="header">
      <div class="header__input">
        <SearchIcon />
        <form @submit.prevent="searchPhoto" autocomplete="off">
          <input type="text" 
            placeholder="Search for a photo"
            @keyup.enter="searchPhoto()"
            v-model="searchQuery"
            />
        </form>
        
      </div>
    </header>

    <div class="container">

        <div v-if="status !== statuses.ERROR" class="content">
            <template v-if="status===statuses.LOADING || status===statuses.IDLE">
                <template v-for="x in 6">
                    <CardLoader :rowEnd="generateSpan()" :key="x" />
                </template>                
            </template>
            
            
            <template v-else-if="status === statuses.SUCCESS">
                <template v-if="photos.length > 0">
                    <template v-for="(photo, index) in photos">
                        <AppCard :key="index" :photo="photo" />
                    </template>
                </template>                
            </template>            
        </div>
        <template v-if="status == statuses.ERROR">
          <div class="error">
              <div class="msg">
                  <h2>{{ error }} <span role="img" aria-label="sad face">😐</span></h2>
              </div>
          </div>
        </template>
    </div>
    
  </div>

</template>

<script>
import AppCards from "~/components/Cards/AppCard.vue";
import CardLoader from "~/components/Loaders/CardLoader.vue";
import SearchIcon from "~/components/Icons/SearchIcon";
import { statuses } from "~/utils/index.js";
export default {
  data(){
    return{
      photos: [],
      searchQuery: '',
      statuses: {},
      status: statuses.IDLE,
      error: ''
    }
  },
  components: {
    AppCards,
    CardLoader,
    SearchIcon
  },
  async created(){
    try {
      this.statuses = statuses
      this.status= this.statuses.LOADING
      const photos = await this.$axios.$get(`search/photos?query=African`, {
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
    searchPhoto() {
      if (this.searchQuery.length > 0) {
        this.$router.push(`/search?query=${this.searchQuery}`)
      }
    },
    
  }
}
</script>

<style lang="scss">

</style>
