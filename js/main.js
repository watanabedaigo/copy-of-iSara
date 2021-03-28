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

Vue.component('merit-component',{
    props:['merit'],
    template:`
        <div class="merit-contents" v-bind:id="merit.id">
            <img v-bind:src="merit.img" v-bind:alt="merit.alt">
            <p class="merit-overview text-center">{{ merit.overview }}</p>
            <p class="merit-show">{{ merit.show }}</p>
        </div>
    `
})

const merits = new Vue({
    el:'#merit',
    data:{
        merits:[
            {
                id:'merit1',
                img:'img/merit1.png',
                alt:'メリット1',
                overview:'現役フリーランスから学べる',
                show:'他のプログラミングスクールとは違い、実際にフリーランスとして活動しているエンジニアが直接講師を勤めます。',
            },
            {
                id:'merit2',
                img:'img/merit2.png',
                alt:'メリット2',
                overview:'実践を通じて学べる',
                show:'フリーランスにとって最短の学習方法は「実践」。iSaraでは実案件を通して学びます。現役フリーランサーの案件サポートに加え、クラウドソーシングを活用。初心者の自分じゃ無理と思うかもですが、現役フリーランスがサポートしますので大丈夫。',
            },
            {
                id:'merit3',
                img:'img/merit3.png',
                alt:'メリット3',
                overview:'授業料が実質０円',
                show:'講座費用258,000円以上の金額が稼げるまで「永久サポート延長」があります。',
            },
        ],
    },
})

Vue.component('member-component',{
    props:['member'],
    template:`
        <div class="member-contents" id="member.id">
            <img v-bind:src="member.img" v-bind:alt="member.alt">
            <div class="member-about">
                <p class="member-position">{{ member.position }}</p>
                <p class="member-name">{{ member.name }}</p>
                <p class="member-show" v-html="member.show"></p>
            </div>
        </div>
    `
})

const members = new Vue({
    el:'#member',
    data:{
        members:[
            {
                id:'member1',
                img:'img/keisuke_someya.jpg',
                alt:'メンバー１',
                position:'フリーランス講師',
                name:'染谷 佳佑',
                show:'ISARA (THAILAND) CO.,LTD.の代表です。学生起業の後にリクルートへ就職、その後独立し、海外移住しました。今はフリーランスとしてリモートワークで日本円を稼ぎ、外国通貨に変えて使い、海外を旅してます。営業、ブログPVアップ(最高月間150万PV)、ビジネス構築が専門です。',
            },
            {
                id:'member2',
                img:'img/yuki.png',
                alt:'メンバー2',
                position:'フリーランス講師',
                name:'成田　雄輝',
                show:'バンコクのシェアハウスのオーナーをやりながら一年の大半をタイで過ごしています。 大学時代から今に至るまでネットだけで生計を立てているので、自由歴だけは講師陣の中で最長です！ 母親がタイ人という事もありタイには精通してますので、こちらでの生活のサポートはお任せください！',
            },
            {
                id:'member3',
                img:'img/manabu.png',
                alt:'メンバー3',
                position:'フリーランスエンジニア',
                name:'坂内　学',
                show:'アドバイザーとして参画しました。新卒で海外就職して１１ヶ月後に退職。今は日本にいたり海外にいたりでゆるくフリーランスをしています。<br><br>お仕事はWebマーケティングとプログラミングが専門領域です。',
            },
            
        ],
    },
})