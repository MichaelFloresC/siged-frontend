<script setup>
import { ref } from 'vue'

import AppSidebar from '../components/layout/AppSidebar.vue'
import AppTopbar from '../components/layout/AppTopbar.vue'

const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-[#f4f7fb]">

    <!-- Sidebar -->
    <AppSidebar
      :open="sidebarOpen"
      @close="closeSidebar"
    />

    <!-- Zona derecha -->
    <div class="min-h-screen lg:pl-[270px]">

      <!-- Topbar -->
      <AppTopbar
        @toggle-sidebar="toggleSidebar"
      />

      <!-- Contenido -->
      <main class="p-4 sm:p-6 lg:p-8">
        <RouterView />
      </main>

    </div>
  </div>
</template>