<script setup>
import {
  ArrowRight,
  Building2,
  Building,
  MapPin,
  Network,
} from 'lucide-vue-next'

const modules = [
  {
    name: 'Dependencias',
    description: 'Gestiona facultades, oficinas y unidades organizacionales.',
    icon: Network,
    route: '/dependencias',
  },
  {
    name: 'Sedes',
    description: 'Administra las sedes institucionales de la universidad.',
    icon: Building2,
    route: '/sedes',
  },
  {
    name: 'Edificios',
    description: 'Registra y organiza los edificios pertenecientes a cada sede.',
    icon: Building,
    route: '/edificios',
  },
  {
    name: 'Ambientes',
    description: 'Administra aulas, oficinas, laboratorios y otros ambientes.',
    icon: MapPin,
    route: '/ambientes',
  },
]
</script>

<template>
  <div class="mx-auto max-w-[1500px]">

    <!-- Breadcrumb -->
    <div class="mb-5 text-sm text-slate-400">
      SIGED
      <span class="mx-2 text-slate-300">/</span>
      Inicio
    </div>

    <!-- Bienvenida -->
    <section
      class="
        relative overflow-hidden
        rounded-3xl
        border border-slate-200/80
        bg-white
        shadow-sm
      "
    >
      <div
        class="
          absolute
          -right-20 -top-20
          h-72 w-72
          rounded-full
          bg-blue-100/70
          blur-3xl
        "
      />

      <div
        class="
          absolute
          -bottom-32 right-40
          h-64 w-64
          rounded-full
          bg-sky-100/50
          blur-3xl
        "
      />

      <div
        class="
          relative z-10
          grid
          gap-10
          px-6 py-10
          sm:px-10
          lg:grid-cols-[1fr_auto]
          lg:px-12
          lg:py-14
        "
      >
        <div class="max-w-3xl">
          <div
            class="
              mb-5
              inline-flex items-center
              gap-2
              rounded-full
              bg-blue-50
              px-3 py-1.5
              text-xs font-semibold
              text-blue-700
            "
          >
            <span
              class="
                h-2 w-2
                rounded-full
                bg-blue-600
              "
            />

            Sistema institucional
          </div>

          <h1
            class="
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-4xl
            "
          >
            Bienvenido a
            <span class="text-blue-600">
              SIGED
            </span>
          </h1>

          <p
            class="
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
            "
          >
            Sistema de Gestión de Dependencias de la Universidad Nacional
            de San Agustín. Administra de manera centralizada la estructura
            organizacional, sedes, edificios y ambientes institucionales.
          </p>

          <RouterLink
            to="/dashboard"
            class="
              mt-7
              inline-flex h-11
              items-center gap-2
              rounded-xl
              bg-blue-600
              px-5
              text-sm font-semibold
              text-white
              shadow-lg shadow-blue-600/20
              transition
              hover:bg-blue-700
            "
          >
            Ir al dashboard

            <ArrowRight :size="17" />
          </RouterLink>
        </div>

        <!-- Imagen / isotipo -->
        <div
          class="
            hidden
            items-center
            justify-center
            lg:flex
          "
        >
          <div
            class="
              flex h-44 w-44
              items-center justify-center
              rounded-[2.5rem]
              border border-blue-100
              bg-gradient-to-br
              from-blue-50
              to-white
              shadow-xl
              shadow-blue-100/60
            "
          >
            <Building2
              :size="82"
              :stroke-width="1.3"
              class="text-blue-600"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Accesos rápidos -->
    <section class="mt-8">
      <div class="mb-5">
        <h2 class="text-lg font-bold text-slate-800">
          Gestión institucional
        </h2>

        <p class="mt-1 text-sm text-slate-400">
          Accede rápidamente a los principales módulos de SIGED.
        </p>
      </div>

      <div
        class="
          grid
          gap-4
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        <RouterLink
          v-for="module in modules"
          :key="module.route"
          :to="module.route"
          class="
            group
            rounded-2xl
            border border-slate-200
            bg-white
            p-5
            shadow-sm
            transition-all duration-200
            hover:-translate-y-1
            hover:border-blue-200
            hover:shadow-lg
            hover:shadow-slate-200/70
          "
        >
          <div
            class="
              flex h-11 w-11
              items-center justify-center
              rounded-xl
              bg-blue-50
              text-blue-600
              transition
              group-hover:bg-blue-600
              group-hover:text-white
            "
          >
            <component
              :is="module.icon"
              :size="22"
              :stroke-width="1.8"
            />
          </div>

          <h3
            class="
              mt-5
              font-semibold
              text-slate-800
            "
          >
            {{ module.name }}
          </h3>

          <p
            class="
              mt-2
              text-sm
              leading-6
              text-slate-400
            "
          >
            {{ module.description }}
          </p>

          <div
            class="
              mt-5
              flex items-center gap-1.5
              text-sm font-medium
              text-blue-600
            "
          >
            Gestionar

            <ArrowRight
              :size="15"
              class="
                transition-transform
                group-hover:translate-x-1
              "
            />
          </div>
        </RouterLink>
      </div>
    </section>

  </div>
</template>