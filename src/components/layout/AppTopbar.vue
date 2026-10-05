<script setup>
import { ref } from 'vue'

import {
  Bell,
  ChevronDown,
  Menu,
  Search,
} from 'lucide-vue-next'

defineEmits(['toggle-sidebar'])

const search = ref('')
</script>

<template>
  <header
    class="
      sticky top-0 z-30
      h-[72px]
      border-b border-slate-200/80
      bg-white/90
      backdrop-blur-xl
    "
  >
    <div
      class="
        flex h-full items-center
        gap-3
        px-4 sm:px-6
        lg:px-8
      "
    >
      <!-- Botón menú móvil -->
      <button
        type="button"
        class="
          flex h-10 w-10 shrink-0
          items-center justify-center
          rounded-xl
          text-slate-600
          transition
          hover:bg-slate-100
          lg:hidden
        "
        @click="$emit('toggle-sidebar')"
      >
        <Menu :size="22" />
      </button>

      <!-- Buscador -->
      <div
        class="
          relative
          max-w-[560px]
          flex-1
        "
      >
        <Search
          :size="19"
          class="
            pointer-events-none
            absolute left-4 top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />

        <input
          v-model="search"
          type="search"
          placeholder="Buscar en SIGED..."
          class="
            h-11 w-full
            rounded-xl
            border border-transparent
            bg-slate-100/90
            pl-11 pr-4
            text-sm
            text-slate-700
            outline-none
            transition
            placeholder:text-slate-400
            hover:bg-slate-100
            focus:border-blue-200
            focus:bg-white
            focus:ring-4
            focus:ring-blue-50
          "
        />
      </div>

      <div class="ml-auto flex items-center gap-2 sm:gap-4">

        <!-- Notificaciones -->
        <button
          type="button"
          class="
            relative
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            text-slate-500
            transition
            hover:bg-slate-100
            hover:text-slate-800
          "
        >
          <Bell :size="21" />

          <span
            class="
              absolute right-[8px] top-[7px]
              h-2.5 w-2.5
              rounded-full
              border-2 border-white
              bg-red-500
            "
          />
        </button>

        <!-- Usuario -->
        <button
          type="button"
          class="
            flex items-center
            gap-3
            rounded-xl
            p-1.5
            transition
            hover:bg-slate-50
          "
        >
          <div
            class="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              bg-blue-600
              text-xs font-semibold
              text-white
              shadow-sm
            "
          >
            JM
          </div>

          <div class="hidden text-left sm:block">
            <p
              class="
                max-w-[160px]
                truncate
                text-sm font-semibold
                text-slate-800
              "
            >
              Juan Martínez
            </p>

            <p class="text-xs text-slate-400">
              Administrador
            </p>
          </div>

          <ChevronDown
            :size="16"
            class="hidden text-slate-400 sm:block"
          />
        </button>

      </div>
    </div>
  </header>
</template>