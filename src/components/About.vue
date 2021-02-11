<template>
  <div class="container mb-3">
    <h1 class="is-size-3 mt-2 has-text-centered">About me</h1>
    <div class="columns is-marginless">
        <div class="column is-one-fifth-desktop">
            <div class="container">
              <div class="card has-shadow">
                <div class="card-image">
                  <figure class="image">
                    <img src="https://i.imgur.com/kQIEZDz.png" alt="My face">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="container has-text-centered">
                    <img src="../assets/logo.png" height="40" width="40"/>
                    <img src="../assets/react.png" height="40" width="50" class="ml-1"/>
                    <img src="../assets/node.png" height="40" width="40" class="ml-1"/>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div class="column is-four-fifths-desktop is-centered is-vcentered is-mobile" style="margin: auto">
        <div class="container">
          <div class="card has-shadow">
            <div class="card-header" style="background-color: #F7F7F7">
              <div class="card-header-icon" >
                <b-icon pack="fas" icon="circle" size="is-small" style="color: #ED4C5C"></b-icon>
                <b-icon pack="fas" icon="circle" size="is-small" style="color: #FDCB58" class="ml-1"></b-icon>
                <b-icon pack="fas" icon="circle" size="is-small" style="color: #78B159" class="ml-1"></b-icon>
              </div>
            </div>
            <div class="card-content has-text-centered">
              <div class="container ">
                <h1 class="title is-4">Hello!👋</h1>
                <p>I'm 24 years old developer who love coding! I'm close to graduate from University and i will gain my Bachelor of Engineering title.🎓
                  I have more than year of commercial experience with creating software of various types: starting from <strong>Front-End projects</strong>
                  and finishing up with <strong>Web Scrappers and Games</strong>.
                  <br>
                  If you are intrested on things i created, check them below!😁
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>
