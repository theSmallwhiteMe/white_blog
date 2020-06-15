<template>
    <div>
        <h3>register</h3>
    </div>
</template>

<script>
    import {POST} from "../library/request";

    export default {
        name: "register",
        mounted() {
            POST('/test',{test:1331})
        }
    }
</script>

<style scoped>

</style>