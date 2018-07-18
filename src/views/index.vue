<template>
<div>
    <div class="container">
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">我跟你说，你这个样子是有问题的！</li>
            <li class="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
                我没有搞完！
                <span class="badge badge-primary badge-pill">?!</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">ABCDEFG, G！不是丁勾！</li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                如果哪天卢晨在公司座位上撸了一天，撸了一堆长得像代码的随机字符串，并且还提交了；
                而我却因为腹泻一直蹲在2号坑位里带薪拉屎直至脱肛。
                我不会有丝毫的愧疚。因为，屎，就是该拉在粪坑里，而不是push进版控服务器里！
            </li>
        </ul>
        <!--
        <div class="card" style="width: 14rem; margin-top: 1em;">
            <picture>
                <source srcset="/assets/images/home/wzlgreen.webp" type="image/webp">
                <source srcset="/assets/images/home/wzlgreen.jpg" type="image/jpeg">
                <img class="card-img-top" src="/assets/images/home/wzlgreen.jpg" alt="wzl green">
            </picture>
            <div class="card-body">
                <h4 class="card-title">中午吃什么</h4>
                <p class="card-text">中午吃啥？咖喱给谁？</p>
                <router-link :to="{name: 'lunch'}" class="btn btn-primary">Random!</router-link>
            </div>
        </div>
        -->
        <div style="text-align: center; margin-top: 0.3rem;">
            <router-link :to="{name: 'biography'}">
                <picture>
                    <source srcset="/assets/images/wzl001.webp" type="image/webp">
                    <source srcset="/assets/images/wzl001.jpg" type="image/jpeg">
                    <img src="/assets/images/wzl001.jpg" class="img-fluid img-thumbnail">
                </picture>
            </router-link>
        </div>
    </div>
</div>
</template>``

<script>

export default {

}
</script>

<style scoped>

</style>