import { computed, watch } from 'vue'
import * as Stores from '@/store/index'
type StoresKey = keyof typeof Stores
// type StoresT = typeof Stores

export class BaseCommon {
  static getWatch = watch
  static getComputed = computed
  static initStatic = false
  // static St = Stores
  getStore<Key extends StoresKey>(key: Key) {
    return Stores[key]
  }

  watch = BaseCommon.getWatch
}
