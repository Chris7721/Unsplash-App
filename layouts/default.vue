<template>
  <div class="">
      <Nuxt />  
  </div>
</template>

<style>
</style>

<script>
export default {
  
}
</script>

<style lang="scss">
  $padding-lg: 30px;
  $padding-sm: 15px;
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,400&display=swap');
  html{
    font-family: 'Poppins', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  .header{
      background-color: #dde2e9;
      padding: 90px;
      border-radius: 2px;
      box-sizing: border-box;
      @include respond-phone {
          padding: 40px
      }

      &__search{
        h2{
          color: #263958;
          font-weight: bold;
          font-size: 2.2rem;
          @include respond-phone {
            font-size: 1.9rem;
          }
        }
        span{
          color: #6c7a91;
        }
        
      }

      &__input{
      position: relative;
      display: flex;
      align-items: center;

      form{
        width: 100%;
      }

      input {
            border-radius: 5px;
            background-color: #fff;
            box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.05);
            border: 0;
            width: 100%;
            font-size: 16px;
            padding: 20px;
            padding-left: 60px;
            box-sizing: border-box;
            outline: 0;
            transition: box-shadow .1s;
            color: #263958;

            &:focus{
              -webkit-box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.08);
              -moz-box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.08);
              box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.08);
            }

            &::placeholder{
              color: #263958;
              font-weight: 600;
            }
          }

      svg{
          position: absolute;
          width: 18px;
          margin-left: 20px;
          fill: #6c7a91
      }

      }
      
      
  }

  .container{
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 $padding-lg;
      padding-bottom: $padding-lg;
      @include respond-phone {
        padding: 0 $padding-sm;
        padding-bottom: $padding-sm;
      }
  }

  .content{
    max-width: 980px;
    margin: 0 auto;
    display: grid;
    margin-top: -$padding-lg;
    @include respond-phone {
      margin-top: $padding-sm;
    }
    grid-row-gap: $padding-lg;
    column-gap: $padding-lg;
    display: grid;
    // height: 650px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 40px;
      @include respond-phone {
      grid-row-gap: $padding-sm;
      column-gap: $padding-sm;
      grid-template-columns: 1fr;
    }
  }

  .error{
    // background-color: #0ff;
    // margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 238px);

    h2{
      color: #263958;
      font-size: 18px;

    }
    span{
      color: #6c7a91;
    }
    a:link, a:visited{
      text-align: center;
      display: block;
      width: 100%;
      margin-top: 10px;
      color: #6c7a91;
      text-decoration: none;

      &:hover{
        text-decoration: underline;
      }
    }
  }

  .image__loader{
    background-color: #f5f5f5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-animation: 1s linear infinite;
    animation: loading-glow 1s linear infinite;
  }
</style>