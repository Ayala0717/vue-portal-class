<template>
  <span
    class="inline-block h-5rem w-5rem"
    :class="cn(props.wrapperClasses, props.iconClass, props.iconName)"
    data-inline="false"
  >
  </span>
</template>

<script lang="ts">
import { cn } from '@/lib/utils'

export default {
  name: 'IconResolver'
}
</script>

<script lang="ts" setup>
interface Props {
  iconClass?: string
  iconName?: string
  wrapperClasses?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconClass: '',
  iconName: '',
  wrapperClasses: ''
})
</script>
