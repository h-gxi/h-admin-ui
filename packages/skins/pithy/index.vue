<template>
  <div class="nm-wrapper">
    <div class="nm-container">
      <div>
        <nm-header />
      </div>
      <div class="nm-main-box">
        <nm-sidebar />
        <nm-main />
      </div>
    </div>
  </div>
</template>
<script>
import NmHeader from './components/header'
import NmSidebar from './components/sidebar'
import NmMain from './components/main'
export default {
  components: { NmHeader, NmSidebar, NmMain }
}
</script>
<style lang="scss">
@import "./styles/_index.scss";
</style>
