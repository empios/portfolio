<template>
  <div id="app">
    <Nav />
    <Main />
    <About />
    <Timeline />
    <Project />
    <Skill />
    <Contact />
    <Footer />
  </div>
</template>

<script>

import Main from "./components/Main";
import Nav from "./components/Nav";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Main,
    Nav,
    About,
    Timeline,
    Project,
    Skill,
    Contact,
    Footer
  }
}
</script>

<style>
.vue-typer .custom.char.typed {
  color: rgba(255, 255, 255, 0.9);
}
.vue-typer .custom.char.selected {
  color: rgba(255, 255, 255, 0.9);
}
.vue-typer .custom.caret.typing {
  background-color: rgba(255, 255, 255, 0.9);
}

</style>
