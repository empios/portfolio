<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item>
        <img
            style="max-height: 10rem !important;"
            width="150"
            height="30"
            src="../assets/logo.svg"
            alt="My own logo"
        >
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons is-justify-content-center">
          <a class="button is-normal is-dark" href="http://www.github.com/empios">
            <strong>GitHub</strong>
          </a>
          <a class="button is-normal is-info" href="https://www.linkedin.com/in/pawe%C5%82-w%C5%82odarczyk-22ab99185/">
            LinkedIn
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>

</style>
