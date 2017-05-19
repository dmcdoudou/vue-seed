<template>
    <div>
        <div class="top">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-select v-model="SelVal" placeholder="请选择爬虫类型">
                        <el-option v-for="(value, key, index) in options" :key="value" :label="key" :value="value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="keywords" placeholder="请输入关键字"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-button @click="goSearch"><i class="el-icon-search"></i> 查询</el-button>
                </el-col>
                <el-col :span="6" class="add-btn">
                    <router-link :to="{ path: 'handleSeed', query: { type: 'add' }}">
                        <el-button type="primary"><i class="el-icon-plus"></i> 新增种子</el-button>
                    </router-link>
                </el-col>
            </el-row>
        </div>
        <div class="bottom" v-loading.body="loading" element-loading-text="拼命加载中">
            <el-table :data="tableData" style="width: 100%" stripe>
                <el-table-column prop="id" label="序号" width="100px" align="center"></el-table-column>
                <el-table-column prop="key" label="表达式" width="400px"></el-table-column>
                <el-table-column prop="parse_name" label="表达式类型" align="center"></el-table-column>
                <el-table-column prop="pageid" label="模板ID" align="center"></el-table-column>
                <el-table-column prop="spider_name" label="爬虫类型" align="center"></el-table-column>
                <el-table-column prop="status" label="种子状态" align="center"></el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <i class="el-icon-edit edit-btn" @click="handleEdit(scope.$index, scope.row)"></i>
                    </template>
                </el-table-column>
            </el-table>
            <div class="fen">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalNum">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import Mock from 'mockjs'
let debug = 0;
if (debug) {
    Mock.mock(/api\/spider\/type\/list/, {
        data: {
            advanced: 7,
            bbs: 4,
            media: 8,
            meta: 6,
            news: 1,
            search: 5,
            weibo: 3,
            weixin: 2
        },
        msg: "Success",
        status: "YQ-000"
    })
    Mock.mock(/api\/spider\/template\/list/, {
        "data": {
            "conf": {
                "page_index": 1,
                "page_size": 10,
                "total_num": 185,
                "total_page": 19
            },
            "list|10": [{
                "id": 1,
                "key": "http://www.qctsw.com/tousu/doTousu_search",
                "pageid": 2,
                "parse_name": "URL",
                "parser": 1,
                "spider_name": "news",
                "spider_type": 1,
                "status": 1
            }]
        },
        "msg": "Success",
        "status": "YQ-000"
    })
}

const GLOBAL_URL = {
    table_list: 'http://172.20.207.54:5000/api/spider/template/list',
    spider_list: 'http://172.20.207.54:5000/api/spider/type/list'
}

export default {
    name: 'list',
    data() {
        return {
            options: [],
            SelVal: '',
            keywords: '',
            tableData: [],
            currentPage: 1,
            pageSize: 10,
            totalNum: 0,
            loading: true
        }
    },

    created() {
        this.getSpiderTypeList();
        this.goSearch();
    },
    methods: {
        getSpiderTypeList() {
            this.$http.get(GLOBAL_URL.spider_list).then(res => {
                this.options = res.body.data;
            }, res => {})
        },
        goSearch() {
            this.loading = true;
            let f_name;

            if (this.$route.path.substring(1) === 'Seeds') {
                f_name = 'key'
            } else if (this.$route.path.substring(1) === 'Page') {
                f_name = 'name'
            } else {
                f_name = ''
            }

            this.$http.get(GLOBAL_URL.table_list, {
                params: {
                    type: this.$route.path.substring(1),
                    spider_type: this.SelVal,
                    filed_name: f_name,
                    value: this.keywords,
                    page_index: this.currentPage,
                    page_size: this.pageSize
                }
            }).then(res => {
                this.tableData = res.body.data.list;
                this.currentPage = res.body.data.conf.page_index;
                this.pageSize = res.body.data.conf.page_size;
                this.totalNum = res.body.data.conf.total_num;
                this.loading = false;
            }, res => {
                this.loading = false;
            })
        },
        handleEdit(index, row) {
            this.$router.push({
                path: 'handleSeed',
                query: {
                    type: 'edit',
                    data: JSON.stringify(row)
                }
            })
        },

        handleSizeChange(val) {
            this.pageSize = val;
            this.goSearch();
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.goSearch();
        }

    },

    // 专门对付重复路由渲染同一组件不刷新页面的问题
    watch: {
        '$route' (to, from) {
            this.goSearch();
        }
    }
}
</script>
<style scoped lang="less">
.top {
    margin: 5px 0 20px;
    .el-select {
        width: 100%;
    }
    .add-btn {
        text-align: right;
        a {
            color: #fff;
            text-decoration: none;
        }
    }
}

.edit-btn {
    &:hover {
        color: #4db3ff;
        cursor: pointer;
    }
}

.fen {
    margin-top: 10px;
    text-align: right;
}
</style>
