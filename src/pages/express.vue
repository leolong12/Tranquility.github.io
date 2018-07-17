<template>
    <div id="exprss">
        <el-form ref="form" :model="form" label-width="80px" class="">
            <el-form-item label="快递公司">
                <el-select v-model="form.company" placeholder="请选择快递公司" class="width100" @change="company_click(form.company)">
                    <el-option label="顺丰快递S.F Express" value="SF"></el-option>
                    <el-option label="东风快递D.F Express" value="DF"></el-option>
                </el-select>
            </el-form-item>

            <div v-show="company == 'SF'">
                <el-form-item label="业务站点">
                    <!-- :disabled="form.company == 'DF'" -->
                    <el-select v-model="form.site" placeholder="请选择活动区域" class="width100" @change="site_click(form.site)">
                        <el-option :label="item.value" :value="item.value" v-for="item in site" v-bind:key="item.key"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="站点价格">
                    <div>{{price_value}}（每个合同运费最低5m）</div>
                </el-form-item>
                <el-form-item label="货物体积">
                    <el-input v-model="form.name" class="sf3" max="50000">
                        <template slot="append">m³</template>
                    </el-input>
                    <span> *{{price}} ISK</span>
                </el-form-item>
                <el-form-item label="即时配送">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
            </div>

            <div v-show="form.company == 'DF'">
                东风快递
            </div>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">结算</el-button>
                <el-button>取消</el-button>
            </el-form-item>

            {{form.name*price}} ISK
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                company: '',
                site: [{
                    text: "OSY-UD IX - Moon 16 - Serpentis Corporation Chemical Storage（空间站）",
                    value: 'OSY-UD',
                    price_value: 'JITA ——> OSY-UD：1200isk/m³',
                    price: 1200
                }, {
                    text: "1L-OEK - Friends For Ever（铁壁）",
                    value: '1L-OEK',
                    price_value: 'JITA ——> 1L-OEK：1200isk/m³',
                    price: 1200
                }, {
                    text: "0-6VZ5 - one must fight（铁壁）",
                    value: '0-6VZ5',
                    price_value: 'JITA ——> 0-6VZ5：1400isk/m³',
                    price: 1400
                }, {
                    text: "LK1K-5 - noraus guide on defending（铁壁）",
                    value: 'LK1K-5',
                    price_value: 'JITA ——> LK1K-5：1400isk/m³',
                    price: 1400
                }, {
                    text: "QRFJ-Q - we aint disbanding（星城）",
                    value: 'QRFJ-Q',
                    price_value: 'JITA ——> QRFJ-Q：1600isk/m³',
                    price: 1600
                }],
                price_value: '无',
                price: '0.00',
                form: {
                    name: '',
                    company: '',
                    site: '',
                    delivery: false,
                    Settlement: '0.00'
                }
            }
        },
        methods: {
            onSubmit() {
                console.log(this.form)
                // Settlement
                this.form.Settlement = this.form.name || '0.00'
            },
            // new
            getBusiness() {
                console.log("form")
            },
            company_click(company) {
                this.company = company
            },
            site_click(site) {
                this.site.forEach(element => {
                    if (element.value === site) {
                        this.price_value = element.price_value
                        this.price = element.price
                    }
                })
            }
        },
        mounted() {
            this.getBusiness()
        }
    }

</script>
<style>
    #exprss {
        width: 500px;
    }

    .width100 {
        width: 100%;

    }

    .sf3 {
        width: 200px;
    }

</style>
