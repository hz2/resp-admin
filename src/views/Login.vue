<template>
  <div class="login">
    <el-card class="login-form">
      <el-form>
        <el-form-item>
          <el-input v-model="regForm.name" prefix-icon="el-icon-user" placeholder="请输入用户名" clearable />
        </el-form-item>
        <el-form-item>
          <el-input v-model="regForm.password" prefix-icon="el-icon-lock" placeholder="请输入密码" clearable />
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Login",
  setup() {
    const regForm = reactive({
      name: "",
      password: "",
    });
    return {
      regForm,
    };
  },
});
</script>
<style lang="less" scoped>
.login-form {
  width: 280px;
}
</style>