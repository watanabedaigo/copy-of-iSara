Vue.component('recruitment-component',{
    props:['recruitment'],
    template:`
        <div v-bind:id="recruitment.id" class="recruitment-container">
            <p>{{ recruitment.id }} : {{ recruitment.date }}</p>
            <p>＊{{ recruitment.status }}</p>
        </div>
    `
})

const recruitments = new Vue({
    el:'#recruitment',
    data:{
        recruitments:[
            {
                id:'第６期生',
                date:'2019年11月25日〜2019年12月14日',
                status:'締め切りました',
            },
            {
                id:'第７期生',
                date:'2020年2月17日〜2020年3月7日',
                status:'締め切りました',
            },
            {
                id:'第８期生',
                date:'2021年内に開催予定',
                status:'資料請求受付中です',
            },
        ],
    },
})