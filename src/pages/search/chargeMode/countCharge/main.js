import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()


export default {
    config: {
        navigationBarTitleText: '费用统计',
        "enablePullDownRefresh": false,
        "navigationBarBackgroundColor":'#ffffff',
        "navigationBarTextStyle": 'black',
    }
}