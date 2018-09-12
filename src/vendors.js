//from cdn
import 'bootstrap'
import '@babel/polyfill'//IE10/11 不支持Promise，也不支持[if IE]判断（呵呵），暂时只好都加载这个文件。
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
//import Vuex from 'vuex'