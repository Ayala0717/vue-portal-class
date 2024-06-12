<template>
  <h1>{{ props.msg }}</h1>

  <UiButton>Click me</UiButton>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld'
}
</script>
<script lang="ts" setup>
interface Props {
  msg: string
}

const props = defineProps<Props>()
</script>
