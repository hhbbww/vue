Vue.component('custom-input',{
    props:["title"],
    template:`
    <div class="input">
        <input type="text" @focus="focus" v-model="title">
    </div>
    `,
    methods:{
        focus(){
            this.$emit("changestate")
        }
    }
})



Vue.component('custom-list',{
    props:["customData","state"],
    template:`
    <ul class="list" v-show="state==true">
        <li v-for="item in customData" @click="click(item.title)">{{item.title}}</li>
    </ul>
    `,
    methods:{
        click(val){
            this.$emit("changestate",val)
        }
    }
})