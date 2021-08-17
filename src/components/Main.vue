<template>
  <section class="hero is-dark is-fullheight-with-navbar">
    <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        linesColor="#ffffff"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="5"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="particles-js"
    >
    </vue-particles>
    <div class="hero-body">
      <div class="container has-text-centered">
        <b-icon pack="fas" icon="code" size="is-large"></b-icon>
        <p class="title">
          Paweł Włodarczyk
        <p class="subtitle">
        <vue-typer
            text='Fullstack Developer and Linux enthusiast'
            :repeat='Infinity'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :pre-erase-delay='2000'
            :erase-delay='250'
            erase-style='backspace'
            :erase-on-complete='false'
            caret-animation='blink'
            style="color: white"
        ></vue-typer>
        </p>
        <b-field>
          <b-button icon-left="download" @click="resume" class="is-info is-rounded">Resume</b-button>
         </b-field>
       </div>
     </div>
   </section>
 </template>

 <script>
 export default {
   name: "Main",
   methods: {
     resume(){
       window.open('https://pdfhost.io/v/wNxfTDpGZ_Resume.pdf', '_blank')
     }
   }
 }

 </script>

 <style scoped>
 .particles-js {
   background-size: cover;
   position: absolute;
   top: 5em;
   left: 0;
   width: 100%;
   height: 100%;
 }
 </style>
