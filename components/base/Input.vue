<template>
  <div>
    <input
      :id="`base-input-${id}`"
      :value="modelValue"
      type="text"
      placeholder="region"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="p-4 dark:bg-black dark:text-emerald-400"
    />
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

defineProps<{
  modelValue?: string;
  id: number;
  type?: string;
}>();
</script>
