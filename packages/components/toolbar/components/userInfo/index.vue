<template>
  <div class="nm-toolbar-item">
    <el-dropdown trigger="click">
      <nm-button class="nm-toolbar-button" type="text">
        <nm-icon name="user" />
      </nm-button>

      <el-dropdown-menu class="nm-header-userinfo-dropdown" slot="dropdown">
        <el-dropdown-item>
          <nm-button type="text" text="账户信息" icon="user" @click="openUserInfo" />
        </el-dropdown-item>
        <el-dropdown-item>
          <nm-button type="text" text="修改密码" icon="password" @click="updatePassword.visiable = true" />
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!--修改密码-->
    <nm-update-password :visible.sync="updatePassword.visiable" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import NmUpdatePassword from '../../../update-password'
export default {
  components: { NmUpdatePassword },
  data() {
    return {
      updatePassword: {
        visiable: false
      }
    }
  },
  computed: {
    ...mapState('app/account', { userName: 'name' }),
    ...mapState('app/system', ['userInfoPage'])
  },
  methods: {
    openUserInfo() {
      let routeName = this.userInfoPage || 'userinfo'
      console.log(routeName)
      this.$router.push({ name: routeName, query: { tn_: '账户信息' } })
    }
  }
}
</script>
