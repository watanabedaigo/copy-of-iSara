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

Vue.component('skill-component',{
    props:['skill'],
    template:`
        <div class="col-4" v-bind:id="skill.id">
            <figure>
                <img v-bind:src="skill.img" v-bind:alt="skill.alt">
                <figcaption v-html="skill.figcaption"></figcaption>  
            </figure>
        </div>
    `
})

const skills = new Vue({
    el:'#about',
    data:{
        skills:[
            {
                id:'skill',
                img:'img/skill.jpg',
                alt:'プログラミングスキル',
                figcaption:'基礎的な<br>プログラミングスキル',
            },
            {
                id:'sales',
                img:'img/sales.jpg',
                alt:'営業力',
                figcaption:'案件獲得に必要な<br>営業力',
            },
            {
                id:'document',
                img:'img/document.jpg',
                alt:'一連の知識',
                figcaption:'見積もり作成から<br>納品までの知識',
            },
            {
                id:'plusone',
                img:'img/plusone.jpg',
                alt:'付加価値',
                figcaption:'自分の付加価値を<br>高めるスキ',
            },
            {
                id:'connection',
                img:'img/connection.jpg',
                alt:'横のつながり',
                figcaption:'フリーランス同士の<br>横のつながり',
            },


        ],
    },
})