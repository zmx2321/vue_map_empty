/**
 * 公共信息
 */
 export default {
    state: {
        title: title, // 标题
        viewer: [], // 地图对象
    },

    mutations: {
        SET_VIEWER_INFO(state, viewer) {
            state.viewer = viewer
        },
    },

    actions: {
        Set_Viewer_info({commit}, viewer) {
            commit('SET_VIEWER_INFO', viewer)
        },
    }
}