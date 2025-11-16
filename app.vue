<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: '/style.css'
    },
    {
      rel: 'stylesheet',
      href: '/assets/fonts/unicons/unicons.css'
    }
  ],
  script: [
    { src: '/assets/js/plugins.js', body: true },
    { src: '/assets/js/theme.js', body: true }
  ]
})
</script>
