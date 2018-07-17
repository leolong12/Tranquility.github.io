<template>
    <div id="frequentlyUsed">
        <div class="url1">
            <template>
                <el-table :data="tableData1" stripe style="width: 100%;text-align:left" @row-click="table_Click">
                    <el-table-column prop="name" label="网站工具" width="300">
                    </el-table-column>
                </el-table>
            </template>
        </div>
        <div class="url2">
            <template>
                <el-table :data="tableData2" stripe style="width: 100%;text-align:left" @row-click="table_Click">>
                    <el-table-column prop="name" label="姓名" width="300">
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
    <!-- 任务收益：LP及ISK兑换比例查询 任务百科：英文版-英文版 Eve联盟间声望查询 把文字装配复制到游戏里的教程 Eve船只装配查询 行星探索任务教程 Dscan扫描工具（星系船只 统计） Eve国服维基百科 Eve市场中心查询-支持中英文
Eve Over Mind Eve Gate Check 扫描结果汇总网站-无需翻墙 矿物产出查询网 wiki深渊攻略 -->
</template>

<script>
    // import quasar-logo.png
    export default {
        name: 'frequentlyUsed',
        data() {
            return {
                tableData1: [{
                    name: '旗舰跳跃计算工具网站',
                    address: '网站链接',
                    url: 'https://www.eve-icsc.com/jumptools/jumpplanner.php'
                }, {
                    name: 'DotlanMap',
                    address: '网站链接',
                    url: 'http://evemaps.dotlan.net/'
                }, {
                    name: 'Eve官网账号购买论坛',
                    address: '网站链接',
                    url: 'https://forums.eveonline.com/c/marketplace/character-bazaar'
                }, {
                    name: 'Eve中英文名词在线查询',
                    address: '网站链接',
                    url: 'https://eve.being.moe/trn/'
                }, {
                    name: 'Eve虫洞信息查询',
                    address: '网站链接',
                    url: 'http://www.eve-scout.com/thera/'
                }, {
                    name: 'Eve估价网址',
                    address: '网站链接',
                    url: 'http://evepraisal.com/'
                }, {
                    name: 'EveBoard：角色技能查询',
                    address: '网站链接',
                    url: 'http://eveboard.com/'
                }, {
                    name: 'Eve模拟配船软件pyfa下载',
                    address: '网站链接',
                    url: 'https://github.com/pyfa-org/Pyfa/releases'
                }, {
                    name: 'Eve击杀KB-ZKillBorad查询',
                    address: '网站链接',
                    url: 'https://zkillboard.com/'
                }],
                tableData2: [{
                    name: 'Eve主权进攻时间查询',
                    address: '网站链接',
                    url: 'https://timerboard.net/'
                }]
            }
        },
        methods: {
            table_Click(row) {
                window.open(row.url)
            }
        }
    }

</script>
<style>
    #frequentlyUsed {
        display: flex;

    }

    .url1 {
        width: 40%;
        margin-left: 5%;
    }

    .url2 {
        width: 40%;
        margin-left: 5%;
    }

</style>
