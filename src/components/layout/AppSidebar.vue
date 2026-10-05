<script setup>
import {
  Building2,
  ChartNoAxesCombined,
  Network,
  MapPinned,
  Building,
  MapPin,
  UsersRound,
  Settings,
  X,
} from 'lucide-vue-next'

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['close'])

const navigation = [
  {
    name: 'Dashboard',
    route: '/dashboard',
    icon: ChartNoAxesCombined,
  },
  {
    name: 'Dependencias',
    route: '/dependencias',
    icon: Network,
  },
  {
    name: 'Sedes',
    route: '/sedes',
    icon: MapPinned,
  },
  {
    name: 'Edificios',
    route: '/edificios',
    icon: Building,
  },
  {
    name: 'Ambientes',
    route: '/ambientes',
    icon: MapPin,
  },
  {
    name: 'Responsables',
    route: '/responsables',
    icon: UsersRound,
  },
  {
    name: 'Configuración',
    route: '/configuracion',
    icon: Settings,
  },
]
</script>

<template>
  <!-- Overlay móvil -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="open"
      class="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-[2px] lg:hidden"
      @click="$emit('close')"
    />
  </Transition>

  <!-- Sidebar -->
  <aside
    class="
      fixed inset-y-0 left-0 z-50
      flex w-[270px] flex-col
      bg-[#0b2545]
      text-white
      shadow-2xl
      transition-transform duration-300
      lg:translate-x-0
    "
    :class="open ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- Logo -->
    <div
      class="
        flex h-[88px] shrink-0
        items-center
        border-b border-white/10
        px-6
      "
    >
      <RouterLink
        to="/"
        class="flex min-w-0 items-center gap-3"
        @click="$emit('close')"
      >
        <div
          class="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-xl bg-blue-500/10
            text-blue-400
          "
        >
          <Building2 :size="32" :stroke-width="1.8" />
        </div>

        <div class="min-w-0">
          <div class="text-xl font-bold tracking-wide">
            SIGED
          </div>

          <div
            class="
              mt-0.5 max-w-[160px]
              text-[11px] leading-4
              text-slate-400
            "
          >
            Sistema de Gestión
            <br />
            de Dependencias
          </div>
        </div>
      </RouterLink>

      <button
        type="button"
        class="
          ml-auto flex h-9 w-9
          items-center justify-center
          rounded-lg
          text-slate-400
          transition
          hover:bg-white/10 hover:text-white
          lg:hidden
        "
        @click="$emit('close')"
      >
        <X :size="20" />
      </button>
    </div>

    <!-- Navegación -->
    <nav
      class="
        flex-1 overflow-y-auto
        px-3 py-6
      "
    >
      <div class="space-y-1.5">
        <RouterLink
          v-for="item in navigation"
          :key="item.route"
          :to="item.route"
          class="
            group flex h-12
            items-center gap-3
            rounded-xl
            px-4
            text-sm font-medium
            transition-all duration-200
          "
          :class="
            $route.path === item.route
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/20'
              : 'text-slate-300 hover:bg-white/8 hover:text-white'
          "
          @click="$emit('close')"
        >
          <component
            :is="item.icon"
            :size="21"
            :stroke-width="1.8"
            class="shrink-0"
            :class="
              $route.path === item.route
                ? 'text-white'
                : 'text-slate-400 group-hover:text-white'
            "
          />

          <span>
            {{ item.name }}
          </span>
        </RouterLink>
      </div>
    </nav>

    <!-- Pie sidebar -->
    <div class="px-5 pb-6">
      <div
        class="
          border-t border-white/10
          pt-5
        "
      >
        <div class="flex items-center gap-3">
          <div
            class="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              bg-white/5
              text-blue-400
            "
          >
            <Building2 :size="22" />
          </div>

          <div>
            <p class="text-sm font-medium text-slate-200">
              Universidad
            </p>

            <p class="text-xs leading-5 text-slate-500">
              Gestión eficiente
              <br />
              de infraestructura
            </p>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>