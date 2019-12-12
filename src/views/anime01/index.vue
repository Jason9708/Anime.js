<template>
    <div class="box"></div>
</template>

<script>
import anime from 'animejs'
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.initAnime()
    },
    methods:{
        initAnime:function(){
            const Anime = anime({
                targets:'.box',
                translateX:250,
                borderRadius:['0','20%'],
                easing:'easeInOutQuad',  // 时间曲线
                rotate:90,  // 旋转
                scale:0.5, // 缩放
                // skew:180, // 倾斜
                duration: 2000, // 持续时间
                delay: 1000, // 延迟
                direction: 'alternate',  // normal 正常反向 reverse 反方向   alternate 往返
                loop:true, // 循环次数 Number表示次数， true 为无限次 
                autoplay:false,  // 是否自动播放，false是可以调用play来执行
                width:['50px',0],   // Array 可以设定动画初始值   from 50px to 0px
                height:['50px',0]
            })
            setTimeout(()=> {
                Anime.play()
            },1000)
        }
    }
}
</script>

<style lang="less" scoped>
.box{
    width:50px;
    height:50px;
    background:lightcyan;
}
</style>