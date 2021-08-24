import { useActions as actionPlugin } from '@/plugins/vuex/useActions'
import { useGetters as getterPlugin } from '@/plugins/vuex/useGetters'
import { useMutations as mutationsPlugin } from '@/plugins/vuex/useMutations'
import { useModule as modulePlugin } from '@/plugins/vuex/vuex-setup-module'

export const useActions = actionPlugin
export const useGetters = getterPlugin
export const useMutations = mutationsPlugin
export const useModule = modulePlugin
