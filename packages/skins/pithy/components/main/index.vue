<template>
  <section :class="['nm-main', fontSize]">
    <div class="nm-main-right-top">
      <nm-tabnav>
        <template v-slot:before>
          <div class="nm-sidebar-toggle-btn">
            <a @click.prevent="sidebarToggle">
              <nm-icon :name="sidebarCollapse ? 'indent-left' : 'indent-right'"></nm-icon>
            </a>
          </div>
        </template>
      </nm-tabnav>
    </div>
    <section class="nm-content">
      <transition name="fade-transverse">
        <keep-alive :include="keepAlive">
          <router-view :key="$route.path" />
        </keep-alive>
      </transition>
    </section>
  </section>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('app/skins/pithy/sidebar', { sidebarCollapse: 'collapse' }),
    ...mapState('app/page', ['keepAlive'])
  },
  methods: {
    ...mapActions('app/skins/pithy/sidebar', { sidebarToggle: 'toggle' })
  }
}
</script>
