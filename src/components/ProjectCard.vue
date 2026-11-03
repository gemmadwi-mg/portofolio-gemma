<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
defineProps({ project: { type: Object, required: true }, featured: Boolean })

const open = ref(false)
const onKey = (e) => e.key === 'Escape' && (open.value = false)
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <article
    class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
    :class="featured ? 'md:col-span-2 md:grid md:grid-cols-5' : ''"
  >
    <button
      v-if="project.image"
      type="button"
      class="group relative block w-full overflow-hidden bg-slate-100 text-left dark:bg-slate-800"
      :class="featured ? 'md:col-span-3' : ''"
      :aria-label="`Perbesar gambar ${project.title}`"
      @click="open = true"
    >
      <img :src="project.image" :alt="`Tampilan ${project.title}`" loading="lazy"
        class="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
      <span class="absolute right-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
        Klik untuk memperbesar
      </span>
    </button>

    <div class="flex flex-col p-6" :class="featured ? 'md:col-span-2 md:justify-center' : ''">
      <span class="mb-3 w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
        {{ project.category }} · {{ project.year }}
      </span>
      <h3 class="text-xl font-bold leading-snug text-slate-900 dark:text-white">{{ project.title }}</h3>
      <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">{{ project.role }}</p>
      <p class="mt-3 text-slate-700 dark:text-slate-300">{{ project.summary }}</p>
      <ul class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
        <li v-for="h in project.highlights" :key="h" class="flex gap-2">
          <span class="mt-2 size-1.5 shrink-0 rounded-full bg-blue-500"></span><span>{{ h }}</span>
        </li>
      </ul>
      <ul class="mt-5 flex flex-wrap gap-2">
        <li v-for="s in project.stack" :key="s" class="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">{{ s }}</li>
      </ul>
      <div v-if="project.links.length" class="mt-5 flex gap-3">
        <a v-for="l in project.links" :key="l.url" :href="l.url" target="_blank" rel="noopener"
          class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">{{ l.label }}</a>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="open" class="fixed inset-0 z-50 grid place-items-center bg-slate-950/85 p-4" role="dialog" aria-modal="true" :aria-label="project.title" @click="open = false">
        <img :src="project.image" :alt="`Tampilan ${project.title}`" class="max-h-[88vh] max-w-full rounded-xl shadow-2xl" />
        <button type="button" class="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900" @click="open = false">Tutup</button>
      </div>
    </Teleport>
  </article>
</template>
