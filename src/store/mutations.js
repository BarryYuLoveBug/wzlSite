import {
    CHANGE_MMACTIVE
} from './mutation-types'

export default {
    [CHANGE_MMACTIVE](state, mmActive) {
        state.mmActive = mmActive
    }
}