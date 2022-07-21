import { computed, watch } from 'vue'

export class BaseCommon {
  static getWatch = watch
  static getComputed = computed
  static initStatic = false
}
