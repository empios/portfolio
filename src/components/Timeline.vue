<template>
  <div class="is-fullwidth" style="background-color: #0F77EA">
    <h1 class="title is-3 has-text-white has-text-centered pt-6 pb-3">My experience</h1>
    <div class="container pt-2 pb-6 pl-2">
      <vue-timeline-update
          :date="new Date('2019-08-30')"
          title="TRAINEE - IGNIBIT"
          description="Working mostly with C# Code, Learning about GitFlow and Scrum-based work daily basis."
          category="C#, Unity3D"
          icon="code"
          color="red"
      />
      <vue-timeline-update
          :date="new Date('2020-08-01')"
          title="Junior Web Developer"
          description="Working mostly with closed software, Tech stack: Git, Asana, Slack, VS Code, PHP, Jquery, HTML, CSS, MySQL"
          category="PHP, Jquery, HTML, CSS"
          icon="code"
          color="turquoise"
      />
      <vue-timeline-update
          :date="new Date('now')"
          title="Freelancer"
          description="Now i'm working mostly with creating SPA (Single Page Application) and Landing Pages for clients."
          category="Vue.js, React"
          icon="code"
          color="white"
          is-last
      />
      <vue-timeline-update
          :date="new Date('now')"
          title="Junior Full-Stack Developer"
          description="Creating landing-pages with back-end logic. Tech stack: Laravel, React, Vue, Next.JS, Node"
          category="Vue.js, React, Laravel"
          icon="code"
          color="black"
          is-last
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline"
}
</script>

<style scoped>

</style>
