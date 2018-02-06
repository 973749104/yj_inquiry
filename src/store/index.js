/*
 * @Author: LHX
 * @Date: 2018-01-27 14:33:28
 * @Last Modified by: LHX
 * @Last Modified time: 2018-02-06 18:00:28
 * @store
 */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
    // 购物车
    shoppingCart: [],
    userName: '',
    userPoints: ''
}

const getters = {
    getCart: state => state.shoppingCart,
    getUserName: state => state.userName,
    getUserPoint: state => state.userPoints
}

const mutations = {
    // 添加商品
    'ADDCART': (state, goods) => {
        state.shoppingCart.push(goods);
    },
    // 清空购物车
    'CLEARCART': (state) => {
        state.shoppingCart = [];
    },
    // 获取用户积分
    'GETUSERPONIT': (state, ponit) => {
        state.userPoints = ponit
    }
}

const actions = {
    addCart: ({ commit }, goods) => {
        commit('ADDCART', goods);
    },
    clearCart: ({ commit }) => {
        commit('CLEARCART');
    },
    getUserPoint: ({ commit }, userName) => {
        axios.post('/api/user/getUserPoint.php', {
            userName: userName
        }).then((res) => {
            commit('GETUSERPONIT', res.data);
        });

    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})