<template>
  <section className="min-h-dvh">
    <div className="w-full flex">
      <div
        className="flex basis-full flex-col items-center justify-center gap-4 border-none outline-[5rem] outline-black outline-solid min-h-dvh md:(min-h-inherit basis-50% border-rd-r-[5%])"
      >
        <h1 className="text-5xl font-bold">{t('loginPage.title')}</h1>
        <p className="text-lg fw-400 op-30">{t('loginPage.description')}</p>
      </div>
      <div
        className="hidden bg-black text-white min-h-dvh md:(flex basis-50% flex-col)"
      >
        <div className="flex items-center justify-end gap-3 p-8">
          <p className="text-xl font-bold">{t('title')}</p>
          <IconResolver
            icon-class="w-3rem h-3rem"
            icon-name="i-tdesign:logo-qq"
          />
        </div>
        <div className="mt-auto">
          <p className="p-5 text-lg font-bold op-50">
            {{
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, delectus sint vitae veritatis fuga, natus tenetur mollitia possimus omnis enim laudantium distinctio reiciendis necessitatibus minus soluta at, inventore quibusdam qui.'
            }}
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

<route lang="yaml">
meta:
  authorize:
    - '*'
</route>
