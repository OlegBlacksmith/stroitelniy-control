<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  title?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [boolean]
}>()

const close = () => emit('update:modelValue', false)
</script>

<template>
  <teleport to="body">
    <div v-if="props.modelValue" class="dialog-backdrop" @click.self="close">
      <div class="dialog">
        <header class="dialog-header">
          <h3>{{ props.title }}</h3>
          <button type="button" @click="close">×</button>
        </header>
        <div class="dialog-body">
          <slot />
        </div>
        <footer class="dialog-footer">
          <slot name="dialog-footer" />
        </footer>
      </div>
    </div>
  </teleport>
</template>