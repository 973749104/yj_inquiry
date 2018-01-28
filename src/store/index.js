/*
 * @Author: LHX
 * @Date: 2018-01-27 14:33:28
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-01-28 20:26:54
 * @store
 */

import Vue from 'vue';
import Vuex from 'vuex';
import index from 'vuex';

Vue.use(Vuex);

const state = {
    // 购物车
    shoppingCart: [],
}

const getters = {
    getCart: state => state.shoppingCart
}

const mutations = {
    // 添加商品
    'ADDCART': (state, goods) => {
        state.shoppingCart.push(goods);
    },
    // 清空购物车
    'CLEARCART': (statr) => {
        state.shoppingCart = [];
    }
}

const actions = {
    addCart: ({ commit }, goods) => {
        commit('ADDCART', goods);
    },
    clearCart: ({ commit }) => {
        commit('CLEARCART');
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})