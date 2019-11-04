<script>
import { mixins } from '../../../../../packages'
export default {
  mixins: [mixins.select],
  data() {
    return {
      action: $api.admin.menu.getTargetSelect
    }
  }
}
</script>
