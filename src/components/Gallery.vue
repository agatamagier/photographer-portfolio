<template>
    <v-content class="mb-5 pb-5">
        <v-layout column wrap align-center>
            <v-flex>
                <h1 class="headline text-xs-center mt-5 pt-5">Gallery</h1>
                <v-divider class="primary my-5"></v-divider>
            </v-flex>
        </v-layout>
        <v-container class=" pt-5">
            <h2 class="text-xs-center">Preparation</h2>
            <v-carousel hide-delimiters cycle="false" class="mt-5 ">
                <v-carousel-item v-for="(image,i) in images" :key="i" :src="image.src">
                </v-carousel-item>
            </v-carousel>
        </v-container>
        <v-container class="mt-5 pt-5">
            <h2 class="text-xs-center">Wedding</h2>
            <v-carousel hide-delimiters cycle="false" class="mt-5 ">
                <v-carousel-item v-for="(image,i) in images" :key="i" :src="image.src">
                </v-carousel-item>
            </v-carousel>
        </v-container>
        <v-container class="my-5 py-5">
            <h2 class="text-xs-center">Family</h2>
            <v-carousel hide-delimiters cycle="false" class="mt-5 ">
                <v-carousel-item v-for="(image,i) in images" :key="i" :src="image.src">
                </v-carousel-item>
            </v-carousel>
        </v-container>
    </v-content>
</template>
<script>
    export default {
        name: 'Gallery',
        data() {
            return {
                images: [{
                        src: require('../assets/img/baby.jpg'),
                        caption: 'Little one',
                        group: "preparation"
                    },
                    {
                        src: require('../assets/img/people.jpg'),
                        caption: 'Parents in law',
                        group: "preparation"
                    },
                    {
                        src: require('../assets/img/hands.jpg'),
                        caption: 'Wedding rings',
                        group: "preparation"
                    },
                    {
                        src: require('../assets/img/gang.jpg'),
                        caption: 'Preparation',
                        group: "preparation"
                    },
                    {
                        src: require('../assets/img/church.jpg'),
                        caption: 'Church',
                        group: "preparation"
                    },
                    {
                        src: require('../assets/img/car.jpg'),
                        caption: 'Just married',
                        group: "preparation"
                    }
                ]
            }
        }
    }
</script>
<style scoped lang="scss">
    h1 {
        font-size: 2.7em !important;
        font-weight: lighter;
        line-height: 1.2em !important;
    }
    h2 {
        font-family: 'Sacramento', cursive !important;
        font-size: 3em !important;
        font-weight: lighter;
        border: 1px solid #22264b;
        padding: 10px 30px;
        max-width: 50%;
        margin: 0 auto;
        text-align: center;
        border-radius: 30%;

    }
</style>
