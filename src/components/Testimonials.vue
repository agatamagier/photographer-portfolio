<template>
    <v-content class="mb-5 pb-5">
        <v-container>
            <v-layout column wrap align-center class="my-5 ">
                <v-flex xs12 sm4 class="my-2 text-xs-center">
                    <div>
                        <h1 class="headline px-3 my-4">Testimonials</h1>
                    </div>
                    <v-divider class="primary mx-5 mt-4"></v-divider>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="mb-5 pb-5" justify-center align-center>
                <v-flex xs12 sm10 offset-sm-1 md5  lg4 offset-lg-1 v-for="(testimonial, i) in testimonials" :key="i">
                    <v-card>
                        <v-container fluid fill-height>
                            <v-layout justify-center align-center>
                                <v-flex xs12>
                                    <v-img v-bind:src="testimonial.imageSrc" height="550px" class="testimonial__img">
                                        <v-container fluid fill-height px-4 py-4 >
                                            <v-layout justify-center align-center>
                                                <v-flex xs12 >
                                                    <figure class="testimonial  px-1  py-4">
                                                        <blockquote class="testimonial__text pt-3 text-xs-center">{{ testimonial.text }}</blockquote>
                                                        <figcaption class="testimonial__author">{{ testimonial.author }}</figcaption>
                                                    </figure>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-img>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
            <!-- <v-layout row wrap class="mb-5 pb-3">
                        <v-flex xs12 class="mb-5">
                            <v-carousel  class="mt-2 mb-5" hide-delimiters height="75vh">
                                <v-carousel-item height="75vh" class="testimonial__img"
                                v-for="(testimonial, i) in testimonials"
                                v-bind:src="testimonial.imageSrc" :key="i">
                                    <figure class="testimonial  px-5  pt-5">
                                            <blockquote class="testimonial__text pt-5 text-xs-center">{{ testimonial.text }}</blockquote>
                                            <figcaption class="testimonial__author">{{ testimonial.author }}</figcaption>
                                    </figure>
                                </v-carousel-item>
                            </v-carousel>
                        </v-flex>
                    </v-layout> -->
        </v-container>
    </v-content>
</template>
<script>
    export default {
        data() {
            return {
                testimonials: [
                    {
                        imageSrc: require('../assets/gallery/car.jpg'),
                        text: 'Some awesome text Contrary to popular belief,  of classical Latin literature  Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum  ',
                        author: 'Amy and John Thompson'
                    },
                    {
                        imageSrc: require('../assets/gallery/church.jpg'),
                        text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum  the years, sometimes by accident, sometimes on purpose injected humour and the like.',
                        author: 'Sylvia and John Snow'
                    },
                    {
                        imageSrc: require('../assets/img/hands.jpg'),
                        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or o use a passage of Lorem Ipsum, you need to be sure there is not anything .',
                        author: 'Katy and Cody Cattner'
                    },
                    {
                        imageSrc: require('../assets/gallery/prep_5.jpg'),
                        text: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. model sentence structures, to generate Lorem r.',
                        author: 'Sarah and Bill Mitchel'
                    },
                    {
                        imageSrc: require('../assets/gallery/wed_cake.jpg'),
                        text: 'The standard chunk of Lorem Ipsum used since  et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
                        author: 'Steve and Sally Wiliams'
                    },
                    {
                        imageSrc: require('../assets/img/confetti.jpg'),
                        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.',
                        author: 'Lily and Andrew Dawson'
                    },
                    {
                        imageSrc: require('../assets/img/wed_car.jpg'),
                        text: 'Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. by Cicero. ',
                        author: 'John and Pauline Henderson'
                    },
                    {
                        imageSrc: require('../assets/img/people.jpg'),
                        text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .',
                        author: 'Kate and Kim Smiths'
                    },
                    {
                        imageSrc: require('../assets/gallery/car.jpg'),
                        text: 'Some awesome text Contrary to popular belief,  of classical Latin literature  Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum  ',
                        author: 'Amy and John Thompson'
                    },
                    {
                        imageSrc: require('../assets/gallery/wed_1.jpg'),
                        text: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. model sentence structures, to generate Lorem r.',
                        author: 'Sarah and Bill Mitchel'
                    },
                    {
                        imageSrc: require('../assets/img/wed_3.jpg'),
                        text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .',
                        author: 'Kate and Kim Smiths'
                    },
                    {
                        imageSrc: require('../assets/gallery/car.jpg'),
                        text: 'Some awesome text Contrary to popular belief,  of classical Latin literature  Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum  ',
                        author: 'Amy and John Thompson'
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
    .testimonial {
        height: 100%;
        background-color: rgba(232, 237, 243, .8);
       
        &__text {
            position: relative;
            font-size: 1.35rem;
            text-align: center;
            color: #22264b;
            font-family: 'Nunito', sans-serif;
            font-weight: lighter;
            width: 85%;
            max-width: 100%;
            margin: 0 auto;
            padding: 30px 20px 40px 25px;
            text-indent: 20px;
            &::before,
            &::after {
                font-family: Georgia, serif;
                z-index: 1;
                position: absolute;
                color: rgba(34, 38, 75, .6);
                font-size: 3rem;
                font-style: normal;
                font-weight: 700;
            }
            &::before {
                content: "“";
                top: 0;
                left: 0;
                line-height: 1;
            }
            &::after {
                content: "”";
                bottom: 0;
                right: 0;
                line-height: 0;
            }
        }
        &__author {
            color: #22264b;
            font-family: 'Sacramento', cursive;
            font-size: 2.2em;
            text-align: right;
            margin-right: 65px;
            padding-top: 20px;
        }
    }
</style>