<template>
  <section class="hero is-success is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <b-icon pack="fas" icon="code" size="is-large"></b-icon>
        <p class="title">
          Paweł Włodarczyk
        <p class="subtitle">
        <vue-typer
            text='Junior Fullstack Developer'
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
          <b-switch
              v-model="lightMode"
              passive-type='is-dark'
              type='is-warning'>
            {{ lightMode ? "☀️" : "🌙" }}
          </b-switch>
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      lightMode: true
    }
  },
  watch: {
    lightMode: function (val) {
      if(!val) {
        document.body.style.filter = "invert(1) hue-rotate(180deg)"
        document.body.style.transition = "color 300ms, background-color 300ms"
        let listOfImg = document.getElementsByTagName("img")
        for (let item of listOfImg){
          item.style.setProperty("filter", "invert(1) hue-rotate(180deg")
        }
      }
      if(val) {
        document.body.style.filter = null
        document.body.style.transition = null
        let listOfImg = document.getElementsByTagName("img")
        for (let item of listOfImg){
          item.style.setProperty("filter", null)
        }
      }
    }
  }
}


</script>

<style scoped>

</style>
