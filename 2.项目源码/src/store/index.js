const state = {
    username: '',
    password: '',
    isLoggedIn: false,
    selectedOption: '' // 添加一个状态属性用于存储选项的值,分类画作
};

const mutations = {
    SET_USERNAME(state, username) {
        state.username = username;
    },
    SET_PASSWORD(state, password) {
        state.password = password;
    },
    SET_LOGGED_IN(state, isLoggedIn) {
        state.isLoggedIn = isLoggedIn;
    },
    SET_SELECTED_OPTION(state, selectedOption) { // 分类画作
        state.selectedOption = selectedOption;
    }
};

const actions = {
    setUsername({ commit }, username) {
        commit('SET_USERNAME', username);
    },
    setPassword({ commit }, password) {
        commit('SET_PASSWORD', password);
    },
    setLoggedIn({ commit }, isLoggedIn) {
        commit('SET_LOGGED_IN', isLoggedIn);
    },
    setSelectedOption({commit}, selectedOption) { // 分类画作
        commit('SET_SELECTED_OPTION',selectedOption)
    }
};

const getters = {
    getUsername: (state) => state.username,
    getPassword: (state) => state.password,
    getIsLoggedIn: (state) => state.isLoggedIn,
    getSelectedOption: (state) => state.selectedOption
};

export default {
    state,
    mutations,
    actions,
    getters,
};