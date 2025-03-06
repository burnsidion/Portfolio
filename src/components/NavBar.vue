<template>
  <nav class="bg-gray-800 shadow-md fixed top-0 w-full z-50">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between px-6">
        <img :src="Pentagram" alt="image of a pentagram" class="h-8 w-8 absolute left-0 ml-4" />
        <div class="flex space-x-4 absolute left-1/2 transform -translate-x-1/2 text-center">
          <router-link to="/about"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About
            Me</router-link>
          <router-link to="/"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</router-link>
          <router-link to="/projects"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Personal
            Projects</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import Pentagram from "../images/pentagram-svgrepo-com.svg"
</script>