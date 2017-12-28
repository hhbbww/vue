
Vue.directive('focus',{
    inserted:function (val) {
        val.focus();
    }
})

new Vue({
    el:"#app",
    data:{
        all:localStorage.todo?JSON.parse(localStorage.todo):[],
        con:"",
        status:"all"
    },
    methods:{
        add(){
            if(!this.con){
                alert("请输入事项");
                return;
            }
            var  obj = {}
            obj.title = this.con;
            obj.id=Math.random()+ new Date().getTime();
            obj.status = 0;
            obj.edit=true;
            this.all.push(obj);
            localStorage.todo=JSON.stringify(this.all)
            this.con = "";
        },
        del(id){
            this.all = this.all.filter(ele=>{
                return ele.id != id;
            })
            localStorage.todo=JSON.stringify(this.all)
        },
        changestatus(val){
            this.status = val;

        },
        changesta(obj){
            if(obj.status == 0){
                obj.status = 1;
            }else{
                obj.status = 0;
            }
            localStorage.todo=JSON.stringify(this.all)
        },
        edit(obj){
            obj.edit = !obj.edit;
            localStorage.todo=JSON.stringify(this.all)

        }

    },
    computed:{
        datas(){
            return this.all.filter((element)=>{
                if(this.status=="all"){
                    return element;
                }else{
                    return element.status==this.status;
                }
            })
        }
    }
})