<template>
  <div class="layout">
    <Sidebar />
    <div class="main">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>
<script setup>
import AppMain from './components/AppMain.vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  min-height: 100vh;
}
.main {
  margin-left: 200px;
  padding-left: 20px;
  flex: 1;
  overflow-x: hidden;
}
</style>