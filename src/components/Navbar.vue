<template>
  <nav
    class="navbar navbar-expand-sm navbar-light bg-white shadow-sm p-0 pt-2 pb-2 pb-sm-0"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand mr-2" to="/">
        <img
          src="/img/logo.png"
          width="32"
          height="32"
          alt="Logo"
          class="mb-0 mb-sm-1"
        />
      </router-link>
      <!-- <h4 class="d-sm-none m-0">mccrush.ru</h4> -->
      <span class="d-sm-none m-0 pt-1">
        <!-- <img
          src="img/whatsapp.svg"
          width="24"
          height="24"
          class="pb-1"
          alt="whatsapp"
        /> -->
        <strong>WA: 89069404069</strong>
      </span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-0">
          <li class="nav-item mt-1">
            <router-link to="/apps" tag="a" class="nav-link"
              >Приложения</router-link
            >
          </li>
          <!-- <li class="nav-item mt-1">
            <router-link to="/dev" tag="a" class="nav-link">Разработка</router-link>
          </li>-->
          <li class="nav-item mt-1">
            <router-link to="/gtd" tag="a" class="nav-link">GTD</router-link>
          </li>
        </ul>
      </div>
      <div class="d-none d-sm-flex justify-content-between">
        <div class="phone d-none d-sm-block pt-1 mr-2">
          <!-- <img
            src="img/whatsapp.svg"
            width="24"
            height="24"
            class="pb-1"
            alt="whatsapp"
          /> -->
          <strong>WA: 89069404069</strong>
        </div>

        <a
          class="mr-0 d-none d-sm-block"
          href="https://github.com/mccrush/"
          target="_blank"
        >
          <img
            src="/img/github_32.png"
            width="28"
            height="28"
            alt="Github/mccrush"
            title="Github/mccrush"
            class="mb-1"
          />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { Collapse } from 'bootstrap'
export default {}
</script>

<style scoped>
.nav-item a {
  color: #212529;
  text-decoration: none;
  /* margin-top: -20px;*/
  padding-bottom: 13px;
  border-bottom: 3px solid rgba(0, 0, 0, 0);
  transition: 0.5s;
}

.nav-item a:hover {
  color: #212529;
  text-decoration: none;
  border-bottom: 3px solid #ea5455 /*red*/;
}

.nav-item a.router-link-exact-active {
  color: #212529;
  border-bottom: 3px solid #ea5455;
}

.phone {
  width: 180px;
}
</style>