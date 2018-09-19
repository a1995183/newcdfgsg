<template>
    <label class="checkbox-com">
        <input type="checkbox" value="998" class="checkbox-com-input" v-model="currentValue">
        <span class="box-wrap"></span>
    </label>
</template>
<script>
export default {
    name:"checkbox-com",
    props:{
        value:{
            type:[String,Number]
        }
    },
    data(){
        return{
            currentValue:this.value
        }
    },
    watch: {
        currentValue(newValue){
            this.$emit('input',newValue)
            this.$emit('change',newValue)
        },
        value(){
            this.currentValue=this.value
        }
    }
}
</script>
<style scoped>
.checkbox-com{
    display:inline-block;
    width:50px;
    height:50px;
    border:1px solid #a1a1a1;
    border-radius:4px;
}
.box-wrap{
    transform:scale(0);
    position:relative;
    display: inline-block;
    width: 100%;
    height: 100%;
}
.checkbox-com-input:checked+.box-wrap{
    transition:transform .1s ease;
    transform:scale(1);
    background:#409eff;
}
.checkbox-com-input:checked+.box-wrap::after{
    content:'';
    position:absolute;
    left:50%;
    top:38%;
    width: 30px;
    height: 14px;
display: block;
/* border-top:20px solid transparent; */
border-left:4px solid #fff;
border-bottom: 4px solid #fff;
/* border-right:16px solid transparent; */
transform:translate(-50% ,-50%) rotate(-45deg);
}
.checkbox-com-input{
   width: 50px;
   height: 50px;
   display: none;
}
</style>
