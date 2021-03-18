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

Vue.component('step-component',{
    props:['step'],
    template:`
        <div class="step" v-bind:id="step.id">
            <p class="step-number">STEP.{{ step.id }}</p>
            <p class="step-date">{{ step.date }}</p>
            <p>{{ step.study }}</p>
        </div>
    `
})

const steps = new Vue({
    el:'#step',
    data:{
        steps:[
            {
                id:"1",
                date:"【バンコク渡航前１ヶ月】",
                study:"事前課題で基礎知識を学ぶ",
            },
            {
                id:"2",
                date:"【バンコク到着後】",
                study:"実践的に稼ぐことに特化した学習",
            },
            {
                id:"3",
                date:"【バンコク帰国後】",
                study:"講座実施後の案件獲得サポート",
            },
        ],
    },
})

Vue.component('study-component',{
    props:['study'],
    template:`
        <div class="col-3 study-contents" v-bind:id="study.id">
            <figure>
                <img v-bind:src="study.img" v-bind:alt="study.alt">
                <figcaption v-html="study.figcaption"></figcaption>
            </figure>
        </div>
    `
})

const studies = new Vue({
    el:'#study',
    data:{
        studies:[
            {
                id:'study-sales',
                img:'img/sales.jpg',
                alt:'営業力',
                figcaption:'案件獲得に必要な<br>営業力',
            },
            {
                id:'study-document',
                img:'img/document.jpg',
                alt:'一連の知識',
                figcaption:'見積もり作成から<br>納品までの知識',
            },
            {
                id:'study-plusone',
                img:'img/plusone.jpg',
                alt:'付加価値',
                figcaption:'自分の付加価値を<br>高めるスキ',
            },
            {
                id:'study-connection',
                img:'img/connection.jpg',
                alt:'横のつながり',
                figcaption:'フリーランス同士の<br>横のつながり',
            },

        ],
    },
})