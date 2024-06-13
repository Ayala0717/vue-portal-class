<template>
  <iconify-icon
    v-if="props.iconName"
    class="aspect-square"
    :class="props.iconClass"
    :icon="props.iconName"
    :width="props.width"
    :height="props.height"
  />
</template>

<script lang="ts">
export default {
  name: 'IconResolver'
}
</script>

<script lang="ts" setup>
interface Props {
  iconName: string
  iconClass?: string
  width?: string
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: '2rem',
  height: '2rem',
  iconClass: ''
})
</script>
