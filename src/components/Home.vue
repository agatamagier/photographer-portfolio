<template>
  <v-content>
    <section>
      <v-parallax :src="require('@/assets/img/gang.jpg')" height="650">
        <v-layout column align-center justify-center class="white--text">
          <h1 id="logo" class="text-xs-center"><span>MP</span>hoto<span>V</span>ideo</h1>
          <h5 class="underlogo">Wedding photography</h5>
          <v-btn raised large color="#e6cf8b" router to="/offer" class="btn mt-5">My offer</v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline px-3 my-4 mt-5 primary--text">The best wedding photographer captures...</h2>
          </div>
          <v-divider class="primary mx-5 my-5"></v-divider>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="card elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="accent--text text--darken-1">cake</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <h3 class="card__title text-xs-center">All the important moments...</h3>
                  </v-card-title>
                  <v-card-text class="card__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi molestiae in tempore dolores architecto corrupti, quam laboriosam, rem officia consequatur laborum magnam cupiditate eveniet reprehenderit vel soluta beatae tempora cum.
                  </v-card-text>
                </v-card>
                <v-divider vertical></v-divider>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="card elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="accent--text text--darken-1">people_outline</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <h3 class="card__title text-xs-center">...all the important people...</h3>
                  </v-card-title>
                  <v-card-text class="card__text">
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse
                    potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="card elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="accent--text text--darken-1">child_friendly</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <h3 class="card__title text-xs-center">...and beyond.</h3>
                  </v-card-title>
                  <v-card-text class="card__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit obcaecati dicta laboriosam totam? Fuga aut magni a ea reprehenderit explicabo modi! Cumque, explicabo dolorum vel nulla possimus vero accusamus quibusdam expedita, mollitia magnam
                    quia?
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <v-parallax :src="require('@/assets/img/flowers2.jpg')" height="650">
    </v-parallax>
  </v-content>
  <!-- <v-content>
                    <section>
                        <v-parallax height="500" :src="require('@/assets/img/confetti.jpg')">
                            <v-layout column align-center justify-center class="my-5 py-5">
                                <h1>home</h1>
                            </v-layout>
                        </v-parallax>
                    </section>
                </v-content> -->
</template>
<style lang="scss" scoped>
  #logo {
    font-family: 'Sacramento', cursive;
    font-size: 4.2em;
    cursor: pointer;
    color: #e8edf3;
    text-decoration: none;
    font-weight: 100;
  }
  .underlogo {
    margin-top: -15px;
    letter-spacing: 6px;
    font-weight: lighter;
    font-size: 1.2em;
  }
  .btn {
    background-color: #e6cf8b;
    color: #22264b;
    text-transform: none;
    padding: 1em 1.5em;
    font-size: 3em;
    font-family: 'Sacramento', cursive;
  }
  h2 {
    font-size: 2.7em !important;
    font-weight: lighter;
    line-height: 1.2em !important;
  }
  .card {
    &__title {
      font-family: 'Sacramento', cursive !important;
      font-size: 3em !important;
      font-weight: lighter;
    }
    &__text {
      text-indent: 2em;
      font-size: 1.2em;
      font-weight: lighter;
    }
  }
</style>
.