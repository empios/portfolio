<template>
  <div class="container mt-5 pt-5 pb-5">
    <h1 class="is-3 title has-text-centered">Projects</h1>
    <div class="columns mt-2">
      <div class="column">
        <div class="card has-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/pizzashare.png"/></figure>
          </div>
          <div class="card-content">
            <h1 class="title is-5">PizzaShare</h1>
            <div class="container has-text-centered">
              <img src="../assets/laravel.png" height="40" width="40"/>
              <img src="../assets/logo.png" height="40" width="40" class="ml-2"/>
              <img src="../assets/php.svg" height="40" width="40" class="ml-2"/>
            </div>
            <div class="container mt-4">
                <nav class="level">
                  <div class="level-item">
                    <b-button class="button is-dark" icon-left="code-branch" @click="clicked('https://github.com/empios/PizzaShare')" >GitHub</b-button>
                  </div>
                </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card has-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://i.imgur.com/pUQ5MUm.png"/></figure>
          </div>
          <div class="card-content">
            <h1 class="title is-5">PizzaChecker</h1>
            <div class="container has-text-centered">
              <img src="../assets/react.png" height="40" width="40" class="ml-2"/>
            </div>
            <div class="container mt-4">
              <nav class="level">
                <div class="level-item">
                  <b-button class="is-info" icon-left="arrow-up" @click="clicked('https://pizzachecker.vercel.app/')">Live</b-button>
                </div>
                <div class="level-item">
                  <b-button class="is-dark" icon-left="code-branch" @click="clicked('https://github.com/empios/pizzachecker')">GitHub</b-button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card has-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://cdn.pixabay.com/photo/2015/12/09/15/51/code-1084923_960_720.png"/></figure>
          </div>
          <div class="card-content">
            <h1 class="title is-5">Pizza-Price Api</h1>
            <div class="container has-text-centered">
              <img src="../assets/python.png" height="40" width="40"/>
              <img src="../assets/fastapi.webp" height="40" width="40" class="ml-2"/>
            </div>
            <div class="container mt-4">
              <nav class="level">
                <div class="level-item">
                  <b-button class="is-info" icon-left="arrow-up" @click="clicked('https://elblagpizzaapi.herokuapp.com/')">Live</b-button>
                </div>
                <div class="level-item">
                  <b-button class="is-dark" icon-left="code-branch" @click="clicked('https://github.com/empios/elblagaveragepizzapriceapi')">GitHub</b-button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="columns mt-2">
      <div class="column">
        <div class="card has-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/bykowski.jpg"/></figure>
          </div>
          <div class="card-content">
            <h1 class="title is-5">Bykowski Landing Page</h1>
            <div class="container has-text-centered">
              <img src="../assets/html.png" height="40" width="40"/>
              <img src="../assets/css.png" height="40" width="40" class="ml-2"/>
            </div>
            <div class="container mt-4">
              <nav class="level">
                <div class="level-item">
                  <b-button class="is-info" icon-left="arrow-up" @click="clicked('https://empios.github.io/Bykowski/')">Live</b-button>
                </div>
                <div class="level-item">
                  <b-button class="is-dark" icon-left="code-branch" @click="clicked('https://github.com/empios/Bykowski')">GitHub</b-button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card has-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/portfolio.png"/></figure>
          </div>
          <div class="card-content">
            <h1 class="title is-5">Portfolio</h1>
            <div class="container has-text-centered">
              <img src="../assets/logo.png" height="40" width="40" class="ml-2"/>
            </div>
            <div class="container mt-4">
              <nav class="level">
                <div class="level-item">
                  <b-button class="is-info" icon-left="arrow-up" @click="clicked('https://pawelvlodarczyk.netlify.app/')">Live</b-button>
                </div>
                <div class="level-item">
                  <b-button class="is-dark" icon-left="code-branch" @click="clicked('https://github.com/empios/portfolio')">GitHub</b-button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card has-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
             <img src="../assets/firma.png"/></figure>
          </div>
          <div class="card-content">
            <h1 class="title is-5">Car-renting Landing Page</h1>
            <div class="container has-text-centered">
              <img src="../assets/react.png" height="40" width="40"/>
            </div>
            <div class="container mt-4">
              <nav class="level">
                <div class="level-item">
                  <b-button class="is-info" icon-left="arrow-up" @click="clicked('https://main-page.vercel.app/')">Live</b-button>
                </div>
                <div class="level-item">
                  <b-button class="is-dark" icon-left="code-branch" @click="clicked('https://github.com/empios/MainPage')">GitHub</b-button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="columns mt-2">
      <div class="column">
        <div class="card has-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/randomquote.png"/></figure>
          </div>
          <div class="card-content">
            <h1 class="title is-5">Random Quote Application</h1>
            <div class="container has-text-centered">
              <img src="../assets/logo.png" height="40" width="40"/>
            </div>
            <div class="container mt-4">
              <nav class="level">
                <div class="level-item">
                  <b-button class="is-info" icon-left="arrow-up" @click="clicked('https://empios.github.io/Random-Quote-Machine/')">Live</b-button>
                </div>
                <div class="level-item">
                  <b-button class="is-dark" icon-left="code-branch" @click="clicked('https://github.com/empios/Random-Quote-Machine')">GitHub</b-button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card has-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/gnome.png"/></figure>
          </div>
          <div class="card-content">
            <h1 class="title is-5">GNOME Extension</h1>
            <div class="container has-text-centered">
              <img src="../assets/node-logo.png" height="40" width="40" class="ml-2"/>
            </div>
            <div class="container mt-4">
              <nav class="level">
                <div class="level-item">
                  <b-button class="is-info" icon-left="arrow-up" @click="clicked('https://extensions.gnome.org/extension/4378/kill-port/')">Live</b-button>
                </div>
                <div class="level-item">
                  <b-button class="is-dark" icon-left="code-branch" @click="clicked('https://github.com/empios/kill-port-extension')">GitHub</b-button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card has-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://cdn.pixabay.com/photo/2015/12/09/15/51/code-1084923_960_720.png"/></figure>
          </div>
          <div class="card-content">
            <h1 class="title is-5">Command Reader</h1>
            <div class="container has-text-centered">
              <img src="../assets/node-logo.png" height="30" width="30"/>
            </div>
            <div class="container mt-4">
              <nav class="level">
                <div class="level-item">
                  <b-button class="is-dark" icon-left="code-branch" @click="clicked('https://github.com/empios/Command-Reader')">GitHub</b-button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="columns mt-2">
      <div class="column">
        <div class="card has-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/karty.png"/></figure>
          </div>
          <div class="card-content">
            <h1 class="title is-5">TCG Card Game Online</h1>
            <div class="container has-text-centered">
              <img src="../assets/node-logo.png" height="40" width="40"/>
            </div>
            <div class="container mt-4">
              <nav class="level">
                <div class="level-item">
                  <b-button class="is-info" icon-left="arrow-up" @click="clicked('https://card.mgrabiec.pl/')">Live</b-button>
                </div>
                <div class="level-item">
                  <b-button class="is-dark" icon-left="code-branch" @click="clicked('https://github.com/empios/phaser-card-game')">GitHub</b-button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card has-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/currency.png"/></figure>
          </div>
          <div class="card-content">
            <h1 class="title is-5">Currency application</h1>
            <div class="container has-text-centered">
              <img src="../assets/react.png" height="40" width="40" class="ml-2"/>
            </div>
            <div class="container mt-4">
              <nav class="level">
                <div class="level-item">
                  <b-button class="is-info" icon-left="arrow-up" @click="clicked('https://currency-psi.vercel.app/')">Live</b-button>
                </div>
                <div class="level-item">
                  <b-button class="is-dark" icon-left="code-branch" @click="clicked('https://github.com/empios/currency')">GitHub</b-button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card has-shadow">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://cdn.pixabay.com/photo/2015/12/09/15/51/code-1084923_960_720.png"/></figure>
          </div>
          <div class="card-content">
            <h1 class="title is-5">PHP Crud with register/login system</h1>
            <div class="container has-text-centered">
              <img src="../assets/php.svg" height="30" width="30"/>
              <img src="../assets/docker.png" height="30" width="30" class="ml-2"/>
              <img src="../assets/mysql.png" height="30" width="30" class="ml-2"/>
            </div>
            <div class="container mt-4">
              <nav class="level">
                <div class="level-item">
                  <b-button class="is-dark" icon-left="code-branch" @click="clicked('https://github.com/empios/article-project')">GitHub</b-button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Project",
  methods:{
    clicked(link) {
      window.open(link, "_blank");
    }
  }
}
</script>

<style scoped>

</style>
