<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import rootDashboard from './root'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard, rootDashboard },
  data() {
    return {
      currentRole: ''
    }
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  created() {
    console.log('token', this.token)
    if (this.token.includes('editor')) {
      this.currentRole = 'editorDashboard'
    } else if (this.token.includes('root')) {
      this.currentRole = 'rootDashboard'
    } else {
      this.currentRole = 'adminDashboard'
    }
  }
}
</script>
