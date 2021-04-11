<template>
  <div class="col-12 p-0">
    <nav class="navbar">
      <div id="navbar-container" class="container-lg pt-1">
        <div class="cursor-def navbar-brand">
          <img
            src="/img/logo_2021.png"
            width="32"
            height="32"
            alt="Logo mccrush.ru"
            class="mb-0 me-2"
          />
          <span class="fw-500">mccrush apps</span>
        </div>

        <div class="d-flex justify-content-between">
          <div class="text-end pt-2 me-3" title="Пишите нам в WhatsApp">
            <span class="cursor-def fw-500">WA: 89069404069</span>
          </div>

          <a
            class="me-0 d-block"
            href="https://github.com/mccrush/"
            target="_blank"
          >
            <img
              src="/img/github_32.png"
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
  </div>
</template>

<style scoped>
#navbar-container {
  max-width: 960px;
}

.cursor-def {
  cursor: default;
}
</style>