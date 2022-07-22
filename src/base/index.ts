import { computed, watch } from 'vue'
import * as Stores from '@/store/index'
type StoresKey = keyof typeof Stores
export class BaseCommon {
  static getWatch = watch
  static getComputed = computed
  static initStatic = false

  getStore = (StoreKey: StoresKey) => Stores[StoreKey]()
}
