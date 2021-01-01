<template>
  <Map />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Map from '@c/Map.vue'

export default defineComponent({
  name: 'App',
  components: {
    Map
  }
})
</script>
