<script setup>
import { ref, computed } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import { profile, skills, experience, education, achievements } from './data/profile'
import { projects } from './data/projects'

const categories = ['Semua', ...new Set(projects.map((p) => p.category))]
const active = ref('Semua')
const shown = computed(() => (active.value === 'Semua' ? projects : projects.filter((p) => p.category === active.value)))
const nav = [['Proyek', '#proyek'], ['Pengalaman', '#pengalaman'], ['Keahlian', '#keahlian'], ['Kontak', '#kontak']]
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 antialiased dark:bg-slate-950 dark:text-slate-200">
    <header class="sticky top-0 z-40 border-b border-slate-200 bg-slate-50/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" class="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">gemmadwi</a>
        <nav class="flex gap-5 text-sm font-medium" aria-label="Navigasi utama">
          <a v-for="[t, h] in nav" :key="h" :href="h" class="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">{{ t }}</a>
        </nav>
      </div>
    </header>

    <main id="top">
      <!-- HERO -->
      <section class="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-16 md:grid-cols-2 md:pt-24">
        <div>
          <p class="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300">
            <span class="size-2 rounded-full bg-emerald-500"></span> Terbuka untuk magang
          </p>
          <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">{{ profile.name }}</h1>
          <p class="mt-3 text-xl font-semibold text-blue-600 dark:text-blue-400">{{ profile.role }}</p>
          <p class="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">{{ profile.summary }}</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#proyek" class="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700">Lihat proyek</a>
            <a v-if="profile.cvFile" :href="profile.cvFile" download class="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold hover:border-blue-500 dark:border-slate-700 dark:bg-slate-900">Unduh CV</a>
            <a href="#kontak" class="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold hover:border-blue-500 dark:border-slate-700 dark:bg-slate-900">Hubungi saya</a>
          </div>
        </div>

        <figure class="overflow-hidden rounded-2xl bg-slate-900 font-mono text-sm text-slate-200 shadow-2xl ring-1 ring-slate-800" aria-label="Ringkasan profil dalam format respons API">
          <figcaption class="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span class="size-3 rounded-full bg-red-400"></span><span class="size-3 rounded-full bg-amber-400"></span><span class="size-3 rounded-full bg-emerald-400"></span>
            <span class="ml-3 text-slate-400"><b class="text-blue-400">GET</b> /api/gemma</span>
            <span class="ml-auto text-emerald-400">200 OK</span>
          </figcaption>
<pre class="overflow-x-auto p-5 leading-7">{
  "role": "{{ profile.role }}",
  "location": "{{ profile.location }}",
  "stack": ["Laravel", "Vue.js", "Python"],
  "database": ["MySQL", "PostgreSQL"],
  "deploy": ["Docker", "Nginx", "GitLab CI/CD"],
  "education": "S1 Informatika, IPK 3.77"
}</pre>
        </figure>
      </section>

      <!-- STATS -->
      <section class="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-3" aria-label="Sorotan">
        <div v-for="s in profile.stats" :key="s.label" class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p class="text-3xl font-extrabold text-blue-600 dark:text-blue-400">{{ s.value }}</p>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">{{ s.label }}</p>
        </div>
      </section>

      <!-- PROYEK -->
      <section id="proyek" class="mx-auto max-w-6xl px-5 py-20">
        <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">Proyek</h2>
        <p class="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">Klik gambar untuk memperbesar. Gambar saat ini berupa ilustrasi antarmuka; ganti dengan screenshot asli proyek.</p>
        <div class="my-6 flex flex-wrap gap-2" role="group" aria-label="Filter kategori">
          <button v-for="c in categories" :key="c" type="button" :aria-pressed="active === c" @click="active = c"
            class="rounded-full border px-4 py-1.5 text-sm font-medium transition"
            :class="active === c ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white hover:border-blue-500 dark:border-slate-700 dark:bg-slate-900'">{{ c }}</button>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <ProjectCard v-for="(p, i) in shown" :key="p.id" :project="p" :featured="i === 0" />
        </div>
      </section>

      <!-- PENGALAMAN -->
      <section id="pengalaman" class="mx-auto max-w-6xl px-5 pb-20">
        <h2 class="mb-8 text-3xl font-extrabold text-slate-900 dark:text-white">Pengalaman</h2>
        <article v-for="e in experience" :key="e.org" class="relative border-l-2 border-blue-500 pl-6">
          <span class="absolute -left-[9px] top-1 size-4 rounded-full border-4 border-slate-50 bg-blue-500 dark:border-slate-950"></span>
          <p class="text-sm font-semibold text-blue-600 dark:text-blue-400">{{ e.period }}</p>
          <h3 class="mt-1 text-xl font-bold text-slate-900 dark:text-white">{{ e.role }}</h3>
          <p class="text-slate-500 dark:text-slate-400">{{ e.org }}, {{ e.place }}</p>
          <ul class="mt-4 max-w-3xl space-y-2 text-slate-700 dark:text-slate-300">
            <li v-for="pt in e.points" :key="pt" class="flex gap-2"><span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue-500"></span>{{ pt }}</li>
          </ul>
        </article>
      </section>

      <!-- KEAHLIAN -->
      <section id="keahlian" class="mx-auto max-w-6xl px-5 pb-20">
        <h2 class="mb-8 text-3xl font-extrabold text-slate-900 dark:text-white">Keahlian</h2>
        <div class="grid gap-5 sm:grid-cols-2">
          <div v-for="g in skills" :key="g.group" class="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 class="mb-3 font-bold text-slate-900 dark:text-white">{{ g.group }}</h3>
            <ul class="flex flex-wrap gap-2">
              <li v-for="i in g.items" :key="i" class="rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-500/15 dark:text-blue-200">{{ i }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- PENDIDIKAN -->
      <section class="mx-auto grid max-w-6xl gap-10 px-5 pb-20 md:grid-cols-2">
        <div>
          <h2 class="mb-4 text-3xl font-extrabold text-slate-900 dark:text-white">Pendidikan</h2>
          <h3 class="text-lg font-bold">{{ education.degree }}</h3>
          <p>{{ education.school }}</p>
          <p class="text-slate-500 dark:text-slate-400">{{ education.place }}, {{ education.period }}, IPK {{ education.gpa }}</p>
        </div>
        <div>
          <h2 class="mb-4 text-3xl font-extrabold text-slate-900 dark:text-white">Pelatihan & pencapaian</h2>
          <ul class="space-y-2"><li v-for="a in achievements" :key="a" class="flex gap-2"><span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue-500"></span>{{ a }}</li></ul>
        </div>
      </section>

      <!-- KONTAK -->
      <section id="kontak" class="mx-auto max-w-6xl px-5 pb-20">
        <div class="rounded-3xl bg-slate-900 p-8 text-white sm:p-12 dark:bg-slate-900 dark:ring-1 dark:ring-slate-800">
          <h2 class="text-3xl font-extrabold">Mari bekerja sama</h2>
          <p class="mt-3 max-w-xl text-slate-300">Saya siap berkontribusi sebagai backend atau full-stack developer magang.</p>
          <div class="mt-7 flex flex-wrap gap-3">
            <a :href="`mailto:${profile.email}`" class="rounded-xl bg-blue-500 px-5 py-3 font-semibold hover:bg-blue-400">{{ profile.email }}</a>
            <a :href="`https://wa.me/${profile.phone.replace(/\D/g, '')}`" target="_blank" rel="noopener" class="rounded-xl bg-white/10 px-5 py-3 font-semibold hover:bg-white/20">WhatsApp</a>
            <a :href="profile.linkedin" target="_blank" rel="noopener" class="rounded-xl bg-white/10 px-5 py-3 font-semibold hover:bg-white/20">LinkedIn</a>
            <a :href="profile.github" target="_blank" rel="noopener" class="rounded-xl bg-white/10 px-5 py-3 font-semibold hover:bg-white/20">GitHub</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="mx-auto max-w-6xl px-5 pb-10 text-sm text-slate-500">© {{ new Date().getFullYear() }} {{ profile.name }}. Dibuat dengan Vue 3, Vite, dan Tailwind CSS.</footer>
  </div>
</template>
