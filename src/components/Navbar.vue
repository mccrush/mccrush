<template>
  <nav class="navbar navbar-light p-0 pt-2 pb-2 pb-sm-0">
    <div class="container-fluid">
      <div class="navbar-brand me-2">
        <img
          src="/img/logo.png"
          width="32"
          height="32"
          alt="Logo mccrush.ru"
          class="mb-0 mb-sm-1"
        />
      </div>

      <div class="d-flex justify-content-between">
        <div class="phone d-block pt-2 me-2">
          <span class="fw-500">WA: 89069404069</span>
        </div>

        <a
          class="me-0 d-block"
          href="https://github.com/mccrush/"
          target="_blank"
        >
          <img
            src="/img/github_32_w.png"
            width="32"
            height="32"
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
.nav-item a.nav-link {
  /* color: #212529; */
  color: #fff;
  text-decoration: none;
  /* margin-top: -20px;*/
  padding-bottom: 13px;
  border-bottom: 3px solid rgba(0, 0, 0, 0);
  transition: 0.5s;
}

.nav-item a.nav-link:hover {
  color: #fff;
  text-decoration: none;
  /*border-bottom: 3px solid #ea5455 red*/
  border-bottom: 3px solid #fff;
}

.nav-item a.nav-link.router-link-exact-active {
  color: #fff;
  /* border-bottom: 3px solid #ea5455; */
  border-bottom: 3px solid #fff;
}

.phone {
  width: 180px;
}

.fw-500 {
  font-weight: 500;
}
</style>