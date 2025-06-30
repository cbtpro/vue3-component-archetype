<template>
  <div>
    up-dropdown-menu
  </div>
</template>

<script lang="ts" setup name="up-dropdown-menu">
import { dropdownMenuProps } from './types'

defineOptions({
  name: 'up-dropdown-menu'
})

defineProps(dropdownMenuProps)
</script>

<style scoped lang="scss">
.up-dropdown-menu {
}
</style>
