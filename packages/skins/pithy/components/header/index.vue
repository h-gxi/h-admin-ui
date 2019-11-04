<template>
  <section class="nm-header">
    <!--logo-->
    <section class="nm-header-logo">
      <img :src="sys.logo" class="nm-header-logo-img" :alt="sys.title" :title="sys.title" />
      <div class="nm-header-logo-text">{{sys.title}}</div>
    </section>
    <section class="nm-header-right">
      <!--工具栏-->
      <div class="nm-header-toolbar">
        <nm-toolbar/>
      </div>
    </section>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('app/system', { sys: state => state }),
    ...mapState('app/system', ['toolbar'])
  }
}
</script>
