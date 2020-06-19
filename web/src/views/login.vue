<template>
    <div id="father">
        <div class="child1"></div>
        <div class="child2"></div>
        <div class="child3"></div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
    #father{
        height: 100px;
        background-color: #ff0;
        display:flex;
    }
    div.child1{
        width: 100px;
        background-color: #369;
    }
    div.child2{
        width: 100px;
        background-color: #963;
        flex:1
        /*  这里的宽度是不起作用的 由于flex:1   */
    }
    div.child3{
        width: 100px;
        background-color: #339;
    }
</style>