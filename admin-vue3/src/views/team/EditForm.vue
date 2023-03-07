<template>
    <el-form
      ref="editForm"
      :model="form"
      :rules="rules"
      label-position="left"
      id="editForm"
      >
      <el-form-item label-width="100px" prop="logo" label="LOGO(url):">
        <el-input v-model="form.logo" />
      </el-form-item>
      <el-form-item
        label-width="100px"
        label="球队名称:"
        prop="cnName">
        <el-input v-model="form.cnName" />
      </el-form-item>
      <el-form-item label-width="100px" prop="venue" label="球馆:">
        <el-input v-model="form.venue" />
      </el-form-item>
      <el-form-item label-width="100px" prop="city" label="所属城市:">
        <el-input v-model="form.city" />
      </el-form-item>
      <el-form-item label-width="100px" prop="coach" label="教练:">
        <el-input v-model="form.coach" />
      </el-form-item>
    </el-form>
</template>

<script setup>
import { ref, unref, watch, reactive } from 'vue';
import _ from 'lodash';
const form = reactive({
  logo: props.model?.logo ?? '',
  cnName: props.model?.cnName ?? '',
  venue: props.model?.venue ?? '',
  city: props.model?.city ?? '',
  coach: props.model?.coach ?? '',
  id: props.model?._id ?? '',
})

const props = defineProps({
  model: {
    type: Object,
    default: null
  }
})
const emit = defineEmits([
  'buttonDisabled',
])

// 校验信息
const validateTeamName = (rule, value, callback) => {
  if(!value) {
    return callback(new Error('请输入球队名称'))
  } else {
    callback();
  }
}

const rules = reactive({
  cnName: [{
    validator: validateTeamName, trigger: 'blur', required: true,
  }]
})
const editForm = ref();


const getValue = () => {
  const formEl = editForm.value;
  if(!formEl) { return Promise.reject(`请传入元素实例`); }
  return formEl
    .validate()
    .then(() => {
      return Promise.resolve({...form})
    })
    .catch(err => {
      return Promise.reject(`校验失败:${JSON.stringify(err)}`);
    });
}

const resetFields = () => {
  const formEl = editForm.value;
  if(!formEl) { return Promise.reject(`请传入元素实例`); }
  return formEl.resetFields();
  // form.logo = '';
  // form.cnName = '';
  // form.venue = '';
  // form.city = '';
  // form.coach = '';
}

defineExpose({getValue, resetFields})

const originForm = _.cloneDeep({...form});
watch(form, (newForm) => {
  const disabled = _.isEqual(originForm, {...newForm})
  emit('buttonDisabled', disabled);
})
</script>