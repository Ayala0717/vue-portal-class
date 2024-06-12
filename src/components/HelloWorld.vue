<template>
  <h1>{{ props.msg }}</h1>

  <Button>Click me</Button>
</template>

<script lang="ts">
import { Button } from './ui/button'

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
