<template>
  <section class="min-h-dvh">
    <div class="w-full flex">
      <div
        class="flex basis-full flex-col items-center justify-center gap-4 border-none outline-[5rem] outline-black outline-solid min-h-dvh md:min-h-inherit md:basis-50% login-container"
      >
        <h1 class="text-5xl font-bold">{t('loginPage.title')}</h1>
        <p class="text-lg fw-400 op-30">{t('loginPage.description')}</p>
        <FormBox
          require-submit
          default-values="{defaultValues}"
          form-field="{formField}"
          form-schema="{formSchema}"
          on-submit="{handleSubmit}"
        />
      </div>
      <div
        class="hidden bg-black text-white min-h-dvh md:flex md:basis-50% md:flex-col"
      >
        <div class="flex items-center justify-end gap-3 p-8">
          <p class="text-xl font-bold">{t('title')}</p>
          <IconResolver
            icon-class="w-3rem h-3rem"
            icon-name="i-tdesign:logo-qq"
          />
        </div>
        <div class="mt-auto">
          <p class="p-5 text-lg font-bold op-50" style="opacity: 50%">
            { 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            delectus sint vitae veritatis fuga, natus tenetur mollitia possimus
            omnis enim laudantium distinctio reiciendis necessitatibus minus
            soluta at, inventore quibusdam qui.' }
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Login'
}
</script>

<style lang="css">
.login-container {
  outline-style: solid;
  outline-color: #000;
  outline-width: 5rem;
  border-top-right-radius: 5%;
  border-bottom-right-radius: 5%;
}
</style>

<route lang="yaml">
meta:
  authorize:
    - '*'
</route>
