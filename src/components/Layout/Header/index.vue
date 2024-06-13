<template>
  <section className="flex justify-between p-5">
    <div className="flex items-center justify-center gap-5">
      <IconResolver icon-class="w-3rem h-3rem" icon-name="i-tdesign:logo-qq" />
      <p className="text-xl font-bold">{t('title')}</p>
    </div>
    <div className="flex gap-5">
      <div>
        <Button size="icon" variant="outline">
          <IconResolver icon-name="i-typcn:plus" />
        </Button>
      </div>
      <div>
        <Avatar>
          <AvatarImage
            alt="User Logo"
            src="https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg?fmt=webp&h=350"
          />
          <AvatarFallback>
            {{ 'LI' }}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  </section>
  <hr className="min-w-dvw" />
  <slot />
</template>

<script lang="ts">
export default {
  name: 'LayoutHeader'
}
</script>
