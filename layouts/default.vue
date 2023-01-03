<template>
  <div class="flex h-full">
    <!-- SIDEBAR -->
    <div class="w-1/2 border-r border-gray-300 flex flex-col">
      <div class="flex items-center">
        <RenderIcons icon-name="logo" />
        <h3>PetsPaw</h3>
      </div>

      <div class="flex-grow p-5">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="{ name: item.name }"
          :class="[
            'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
          ]"
          active-class="bg-gray-100 text-gray-900"
        >
          {{ item.meta?.pageLabel }}
        </NuxtLink>
      </div>
    </div>

    <div class="flex-grow flex flex-col">
      <!-- MAIN -->
      <main class="flex-grow p-5">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()

const navigation = router.options.routes.slice()
  .filter((route) => route.meta?.pageLabel)
  .sort((a, b) => a.meta.navOrder - b.meta.navOrder)
</script>
