<template>
  <el-affix target=".main" :offset="0">
    <!-- <el-button type="primary">Target container</el-button> -->
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item
        >
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </el-affix>
</template>
<style lang="scss" scoped>
  .header {
    height: 50px;

  }
</style>