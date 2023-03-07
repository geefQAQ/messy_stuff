<template>
  <el-table :data="playerList" style="width: 100%" @cell-click="handleClickPlayer">
    <el-table-column label="名字" width="200" header-align="center">
      <template #default="scope">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <el-avatar shape="square" size="default" :src="scope.row.logo" />
          <div style="width: 100px; text-align: center;">{{ scope.row.cnName }}</div>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="号码">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          {{ scope.row.jerseyNum }}
        </div>
      </template>
    </el-table-column>
    <el-table-column label="位置" prop="position"></el-table-column>
    <el-table-column label="身高(cm)" prop="height"></el-table-column>
    <el-table-column label="体重(kg)" prop="weight"></el-table-column>
    <el-table-column label="经验(年)" prop="years"></el-table-column>
  </el-table>
</template>
<script setup>
import { ref, unref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { PlayerApi } from '@service/player';

const playerList = ref([]);
const router = useRouter();
const route = useRoute();
const { teamId } = route.params;

PlayerApi.getPlayersByTeamIdUsingGET(teamId).then(res => playerList.value = res)
const handleClickPlayer = (row) => {
  const playerId = unref(row)._id;
  router.push({
    name: 'playerDetail',
    params: {
      playerId
    }
  })

}
</script>
<style scoped>
.test {
  display: flex;
  flex-direction: column;
}
</style>