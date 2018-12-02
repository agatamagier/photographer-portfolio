<template>
    <v-content>
        <section>
            <v-layout column wrap align-center class="my-5">
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h1 class="headline px-3 my-4">Little bit about me and how I work.</h1>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md4>
                                <v-card hover color="accent lighten-4">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="accent--text mt-5">grade</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="title headline text-xs-center">Experience</div>
                                    </v-card-title>
                                    <v-divider class="accent mx-5 my-2"></v-divider>
                                    <v-card-text class="about_text px-4 py-5">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias elit. Molestias veritatis recusandae temporibus sequi deleniti vitae fugiat officiis unde reiciendis ex!
                                        <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi asperiores recusandae dolores perferendis quis id?
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card hover color="accent lighten-4">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="accent--text mt-5">grade</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="title headline text-xs-center">Passion</div>
                                    </v-card-title>
                                    <v-divider class="accent mx-5 my-2"></v-divider>
                                    <v-card-text class="about_text px-4 py-5">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit it. At velit omnis sed laboriosam! Dolor aperiam commodi nemo dolores harum odit autem minus? Lorem ipsum dolor sit amet.
                                        <br> Lorem ipsum dolor sit amet consectetur, Veritatis nulla iste.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card hover color="accent lighten-4">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="accent--text mt-5">grade</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="title headline text-xs-center">Innovation</div>
                                    </v-card-title>
                                    <v-divider class="accent mx-5 my-2"></v-divider>
                                    <v-card-text class="about_text px-4 py-5">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio vero nihil aliquam placeat quaerat eaque quam,minus?
                                        <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, reiciendis perspiciatis blanditiis ratione inventore laborum ullam tenetur sequi cumque nemo?
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>
        <section>
            <v-layout column wrap class="my-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">The best wedding photographer captures all the important moments...</h2>
                    </div>
                </v-flex>
            </v-layout>
        </section>
        <section>
            <v-parallax height="500" :src="require('@/assets/img/flowers2.jpg')"></v-parallax>
        </section>
        <section>
            <v-layout column wrap class="my-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">...all the important people...</h2>
                    </div>
                </v-flex>
            </v-layout>
        </section>
        <section>
            <v-parallax height="500" :src="require('@/assets/img/people.jpg')"></v-parallax>
        </section>
        <section>
            <v-layout column wrap align-center>
                <v-flex xs12 sm4 class="mb-5">
                    <div class="text-xs-center">
                        <h2 class="headline">...and beyond.<span>❤</span></h2>
                    </div>
                </v-flex>
            </v-layout>
        </section>
        <section>
            <v-parallax height="800" :src="require('@/assets/img/baby2.jpg')">
            </v-parallax>
        </section>
    </v-content>
</template>
<style scoped>
    .title {
        font-family: 'Sacramento', cursive !important;
        font-size: 2.6em !important;
        font-weight: bolder;
    }
    .about_text {
        text-indent: 2em;
        font-size: 1.4em;
        font-weight: lighter;
    }
    h1 {
        font-size: 2.7em !important;
        font-weight: lighter;
        line-height: 1.2em !important;
    }
    h2 {
        font-family: 'Sacramento', cursive !important;
        font-size: 3.5em !important;
        line-height: 1em !important;
        font-weight: lighter;
    }
    span {
        color: #e6cf8b;
    }
</style>
