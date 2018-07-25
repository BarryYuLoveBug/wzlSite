<template>
<div class="layout">
    <div class="layout-header">
        <div class="container">
            <page-header></page-header>
        </div>
    </div>
    <div class="layout-nav">
        <main-menu></main-menu>
    </div>
    <div class="layout-content">
        <div class="content-expander">
            <router-view></router-view>
        </div>
    </div>
    <div class="layout-footer">
        <div class="container">
            <page-footer></page-footer>
        </div>
    </div>
</div>
</template>

<script>
import PageHeader from './components/home/PageHeader.vue'
import MainMenu from './components/home/MainMenu.vue'
import PageFooter from './components/home/PageFooter.vue'

export default {
    components: {
        PageHeader,
        MainMenu,
        PageFooter
    }
}
</script>

<style scoped>
.layout {
    min-height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
}
.layout-header {
    flex: 0 0 auto;
    padding: 6px;
}
.layout-nav {
    flex: 0 0 auto;
}
.layout-content {
    flex: 1 0 auto;
}
.content-expander {
	width: 100%;
}
.layout-footer {
    flex: 0 0 auto;
    padding: 6px;
    color: #9e9e9e;
    background-color: #3e3e3e;
}
</style>
<style>
    .np {
        margin-top: 24px;
    }
    .npTitle:after, .npTitle:before {
        content: url("/assets/images/title-p16.png")
    }
</style>