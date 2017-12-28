new Vue({
    el:"#app",
    data:{
        datas:[
            {id:1,title:"好好学习"},
            {id:2,title:"天天向上"},
            {id:3,title:"天道酬勤"}

        ],
        state:false,
        title:''
    },
    methods:{
        state1(){
            this.state=true;
        },
        state2(val){
            this.title=val;
            this.state=false;
        }
    }
})