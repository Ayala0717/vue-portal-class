<template>
  <section
    v-if="props.text"
    class="min-h-dvh w-full m-auto flex items-center justify-center fadeInOutAnimation"
    :class="props.wrapperClasses"
  >
    <p class="text-5xl text-center" :class="props.textClasses">
      {{ props.text }}
    </p>
    <IconResolver
      v-if="props.requireLoader"
      icon-name="eos-icons:three-dots-loading"
      width="5rem"
      height="5rem"
    />
  </section>
</template>

<script lang="ts">
export default {
  name: 'LabelAnimated'
}
</script>

<script lang="ts" setup>
interface Props {
  text: string
  textClasses?: string
  wrapperClasses?: string
  requireLoader?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  textClasses: '',
  wrapperClasses: ''
})
</script>

<style lang="css">
.fadeInOutAnimation {
  -webkit-animation: fadeinout 4s linear forwards;
  animation: fadeinout 4s linear forwards;
}

@-webkit-keyframes fadeinout {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes fadeinout {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
