<template>
  <div>
    <LabelAnimated
      v-if="state.loading"
      require-loader
      text="bienvenido lorem ipsum"
      wrapper-classes="flex-col gap-5"
    />

    <header v-else>
      <LayoutHeader />
      <nav class="max-w-content right-border">
        <ul>
          <li>
            <div
              class="flex-center gap-2 rounded-r-full bg-gray-500/50 p-2 pl-5"
            >
              <IconResolver
                icon-class="w-2rem h-2rem "
                icon-name="eos-icons:three-dots-loading"
              />

              <span class="font-bold">{'Lorem ipsum dolor'}</span>
            </div>
          </li>
          <li>
            <div class="flex-center gap-2 rounded-r-full p-2">
              <IconResolver
                icon-class="w-2rem h-2rem "
                icon-name="i-material-symbols:calendar-today-outline-rounded"
              />
              <span class="font-bold">{'Lorem ipsum dolor'}</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'

export default {
  name: 'Home'
}
</script>

<script lang="ts" setup>
const state = reactive({
  loading: true
})

setTimeout(() => {
  state.loading = false
}, 4000)
</script>

<style lang="css">
.right-border {
  padding: 1rem 2rem 1rem 0;
  border-right-width: 1px;
  border-right-color: #e3e9f0;
  min-height: calc(100dvh - 89px);
}
</style>
