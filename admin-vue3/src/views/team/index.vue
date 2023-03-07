<template>
  <div>

    <el-button type="primary" @click="showAddForm = true">增加球队</el-button>
    <el-table :data="teamList" style="width: 100%" @cell-click="handleClickTeam">
      <el-table-column label="球队LOGO" width="180">
        <template #default="scope">
          <div>
            <el-avatar shape="square" size="default" :src="scope.row.logo" />
            <span>{{ scope.logo }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="球队名称"  width="180">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <div>name: {{ scope.row.cnName }}</div>
              <div>city: {{ scope.row.city }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.cnName }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="所属城市">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            {{ scope.row.city }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click.stop="handleEdit(scope.row)">Edit</el-button>
          <el-button size="small" type="danger" @click.stop="handleRemove(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新建球队 -->
    <el-dialog
      v-model="showAddForm"
      :close-on-click-modal="false"
      :show-close="false"
      width="70%"
      title="增加球队">
      <EditForm ref="addForm" />
      <template #footer>
        <el-button plain @click="resetForm(addForm)">重置</el-button>
        <el-button plain @click="showAddForm = false">取消</el-button>
        <el-button type="primary" @click="handleAddForm(addForm)">添加</el-button>
      </template>
    </el-dialog>
  
    <!-- 编辑球队 -->
    <el-dialog
      v-model="showEditForm"
      :close-on-click-modal="false"
      :show-close="false"
      :destroy-on-close="true"
      width="70%"
      title="编辑球队">
      <EditForm @buttonDisabled="buttonDisabled" ref="editForm" :model="editFormData" />
      <template #footer>
        <el-button plain @click="handleCancelUpdate">取消</el-button>
        <el-button type="primary" :disabled="updateButtonDisabled" @click="handleEditForm(editForm)">更新</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, unref, getCurrentInstance } from "vue";
import { useRouter } from 'vue-router';
import EditForm from "./EditForm.vue";
import { TeamApi } from "@service/team"
const {
  proxy: { $alert, $loading, $message, $confirm },
} = getCurrentInstance();

const routes = useRouter();
const showAddForm = ref(false);
const showEditForm = ref(false);
const addForm = ref();
const editForm = ref();
// 获取全部球队列表 => TODO: 分页
const teamList = ref([]);

const getAllTeams = () => {
  return TeamApi.getAllTeamUsingGET().then((res) => teamList.value = res)
}
getAllTeams();

const editFormData = ref({});

// 编辑球队
const handleEdit = (row) => {
  showEditForm.value = true;
  editFormData.value = { ...row };
}
const updateButtonDisabled = ref(true)
const buttonDisabled = (bool) => {
  updateButtonDisabled.value = bool;
}
const updateTeam = (form) => {
  const { id, ...data } = form;
  const loading = $loading({
    target: "#editForm",
  });
  return TeamApi.updateTeamUsingPOST({ id, data })
    .finally(() => {
      showEditForm.value = false;
      loading.close();
    })
    .catch((err) => {
      $message(`添加失败${err}`);
      return Promise.reject(`添加失败:${JSON.stringify(err)}`);
    });
}

const handleCancelUpdate = () => {
  showEditForm.value = false;
  updateButtonDisabled.value = true;
}

const handleEditForm = async (formEl) => {
  // 显示对话框
  try {
    const form = await formEl.getValue();
    await updateTeam(form);
    await getAllTeams();
  } catch (err) {
    console.warn(err);
  }
};

// 增加球队
const addConfirm = (form) => {
  return $alert(`确定增加球队${form?.cnName}?`, "提示", {
    confirmButtonText: "确认",
    draggable: true,
  }).catch((err) => {
    return Promise.reject(`取消:${JSON.stringify(err)}`);
  });
};

const addTeam = (form) => {
  const { id, ...data } = form;
  const loading = $loading({
    target: "#editForm",
  });
  return TeamApi.addTeamUsingPOST({data})
    .then(() => {
      $message({
        message: `添加成功`,
        type: `success`
      });
    })
    .finally(() => {
      showAddForm.value = false;
      loading.close();
    })
    .catch((err) => {
      $message(`添加失败${err}`);
      return Promise.reject(`添加失败:${JSON.stringify(err)}`);
    });
};

const resetForm = (formEl) => {
  formEl.resetFields();
};

const handleAddForm = async (formEl) => {
  try {
    const form = await formEl.getValue();
    await addConfirm(form);
    await addTeam(form);
    formEl.resetFields();
    await getAllTeams();
  } catch (err) {
    console.warn(err);
  }
};

// 删除球队
const removeConfirm = () => {
  return $confirm("球队会被永久删除，确定？", "警告", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  });
};
const handleRemove = async (row) => {
  try {
    const deleteId = row._id;
    await removeConfirm();
    await TeamApi.removeTeamUsingDELETE(deleteId);
    $message({
      message: "球队删除成功",
      type: "success",
    });
    await getAllTeams();
  } catch (err) {
    console.warn(err);
  }
};

// 点击行
const handleClickTeam = (row) => {
  const teamId = unref(row).teamId;
  routes.push({
    name: 'player',
    params: {
      teamId,
    },
  })
}

</script>

<style scoped>
.el-avatar {
  background: transparent;
}
</style>
