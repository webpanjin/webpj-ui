<template>
  <div id="app">
    <pj-button type="success" @click="visible=true">显示登录框</pj-button>
    <pj-dialog title="用户登录" :visible.sync="visible" width="30%">
      <pj-form :model="model" label-width="80px">
        <pj-form-item label="用户名">
          <pj-input v-model="model.username" placeholder="请输入用户名" clearable></pj-input>
        </pj-form-item>
        <pj-form-item label="用户密码">
          <pj-input v-model="model.password" placeholder="请输入用户密码" show-password></pj-input>
        </pj-form-item>
        <pj-form-item label="即时配送">
          <pj-switch v-model="model.soon" active-color="green" inactive-color="red"></pj-switch>
        </pj-form-item>
        <pj-form-item label="爱好">
          <pj-checkbox-group v-model="model.hobby">
            <pj-checkbox label="篮球"></pj-checkbox>
            <pj-checkbox label="足球"></pj-checkbox>
            <pj-checkbox label="乒乓球"></pj-checkbox>
          </pj-checkbox-group>
        </pj-form-item>
        <pj-form-item label="性别">
          <pj-radio-group v-model="model.gender">
            <pj-radio label="1">男</pj-radio>
            <pj-radio label="0">女</pj-radio>
          </pj-radio-group>
        </pj-form-item>
      </pj-form>
      <template v-slot:footer>
        <pj-button type="primary" @click="login">登录</pj-button>
        <pj-button @click="visible=false">取消</pj-button>
      </template>
    </pj-dialog>
  </div>
</template>