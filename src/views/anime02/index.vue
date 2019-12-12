<template>
    <div class='wrapper'>
        <div class='animeBox'></div>
        <div class='word' @click = 'read'>{{status}}</div>
    </div>    
</template>

<script>
import anime from 'animejs'
export default {
    data(){
        return{
            status:'未阅',
            anime:{}
        }
    },
    mounted(){
        this.initAnime()
    },
    methods:{
        initAnime:function(){
            const anmieList = document.querySelector('.animeBox')
            const fragment = document.createDocumentFragment();

            for(let i = 0; i < 300; i++){
                fragment.appendChild(document.createElement('div'))
            }

            anmieList.appendChild(fragment);
        
            this.anime = anime.timeline({
                targets: '.animeBox div',
                easing: 'easeInOutSine',
                delay: anime.stagger(1),
                autoplay: false,
                translateX: (el,i) => anime.random(-10 * i, 0),
                translateY: (el,i) => anime.random(-10 * i, 0),
                opacity:0,
                backgroundColor: '#DB59B4',
            }).add({
                borderRadius: ['0%', '50%'],
            })
        },
        read:function(){
            this.status = '已阅'
            document.querySelector('.wrapper').style.overflow = 'visible'
            this.anime.play()
        }
    }
}
</script>

<style lang="less" scoped>
.wrapper{
    position: relative;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    background: #2F2929;
    width:150px;
    height:50px;
    overflow: hidden;
    .word{
        position: absolute;
        font-size:12px;
        color:#fff;
        z-index:2;
    }
}
.animeBox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap:wrap;
    z-index:1;
    flex-direction: column;
}
/deep/ .animeBox div{
    width:5px;
    height:5px;
    background: #D0E3CC;
}
</style>