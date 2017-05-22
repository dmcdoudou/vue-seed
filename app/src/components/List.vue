<template>
    <div>
        <div class="top">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-select v-model="SelVal" clearable placeholder="请选择爬虫类型">
                        <el-option v-for="(value, key, index) in options" :key="value" :label="key" :value="value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="6">
                    <div v-if="flag === 'Seeds' || flag === 'Page'">
                        <el-input v-model="keywords" placeholder="请输入关键字"></el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <el-button @click="goSearch"><i class="el-icon-search"></i> 查询</el-button>
                </el-col>
                <div v-if="flag === 'Seeds'">
                    <el-col :span="6" class="add-btn">
                        <router-link :to="{ path: 'handleSeeds', query: { type: 'add' }}">
                            <el-button type="primary"><i class="el-icon-plus"></i> 新增种子</el-button>
                        </router-link>
                    </el-col>
                </div>
                <div v-if="flag === 'Page'">
                    <el-col :span="6" class="add-btn">
                        <router-link :to="{ path: 'handlePage', query: { type: 'add' }}">
                            <el-button type="primary"><i class="el-icon-plus"></i> 新增模板</el-button>
                        </router-link>
                    </el-col>
                </div>
                <div v-if="flag === 'Link'">
                    <el-col :span="12" class="add-btn">
                        <router-link :to="{ path: 'handleLink', query: { type: 'add' }}">
                            <el-button type="primary"><i class="el-icon-plus"></i> 新增链接</el-button>
                        </router-link>
                    </el-col>
                </div>
                <div v-if="flag === 'Field'">
                    <el-col :span="12" class="add-btn">
                        <router-link :to="{ path: 'handleField', query: { type: 'add' }}">
                            <el-button type="primary"><i class="el-icon-plus"></i> 新增表单</el-button>
                        </router-link>
                    </el-col>
                </div>
            </el-row>
        </div>
        <div class="bottom" v-loading.body="loading" element-loading-text="拼命加载中">
            <div v-if="flag === 'Seeds'">
                <el-table :data="tableData" style="width: 100%" stripe key="111">
                    <el-table-column prop="id" label="序号" width="100px" align="center"></el-table-column>
                    <el-table-column prop="key" label="表达式" width="400px"></el-table-column>
                    <el-table-column prop="parse_name" label="表达式类型" align="center"></el-table-column>
                    <el-table-column prop="pageid" label="模板ID" align="center"></el-table-column>
                    <el-table-column prop="spider_name" label="爬虫类型" align="center"></el-table-column>
                    <el-table-column prop="status" label="种子状态" align="center"></el-table-column>
                    <el-table-column label="操作">
                        <template scope="scope">
                            <i class="el-icon-edit edit-btn" @click="handleEdit(flag, scope.row)"></i>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div v-else-if="flag === 'Page'">
                <el-table :data="tableData" style="width: 100%" stripe key="222">
                    <el-table-column prop="id" label="序号" align="center" width="100px"></el-table-column>
                    <el-table-column prop="name" label="模板名称" align="center"></el-table-column>
                    <el-table-column prop="demo_url" label="实例页URL" width="400px"></el-table-column>
                    <el-table-column prop="downloader_type_name" label="下载方式" align="center"></el-table-column>
                    <el-table-column prop="spider_name" label="爬虫类型" align="center"></el-table-column>
                    <el-table-column label="操作">
                        <template scope="scope">
                            <i class="el-icon-edit edit-btn" @click="handleEdit(flag, scope.row)"></i>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div v-else-if="flag === 'Link'">
                <el-table :data="tableData" style="width: 100%" stripe key="333">
                    <el-table-column prop="id" label="序号" align="center" width="100px"></el-table-column>
                    <el-table-column prop="include" label="包含字符串" align="center"></el-table-column>
                    <el-table-column prop="exclude" label=" 不包含字符串"></el-table-column>
                    <el-table-column prop="area" label="xpath表达式" width="350px"></el-table-column>
                    <el-table-column prop="pageid" label="模板ID" align="center"></el-table-column>
                    <el-table-column prop="extractor_list" label="抽取器列表"></el-table-column>
                    <el-table-column prop="type" label="字段类型" align="center"></el-table-column>
                    <el-table-column prop="spider_name" label="爬虫类型" align="center"></el-table-column>
                    <el-table-column label="操作">
                        <template scope="scope">
                            <i class="el-icon-edit edit-btn" @click="handleEdit(flag, scope.row)"></i>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div v-else="flag === 'Field'">
                <el-table :data="tableData" style="width: 100%" stripe key="444">
                    <el-table-column prop="id" label="序号" align="center"></el-table-column>
                    <el-table-column prop="name" label="字段名称" align="center"></el-table-column>
                    <el-table-column prop="type_name" label="字段类型"></el-table-column>
                    <el-table-column prop="extractor_type_name" label="抽取器类型" align="center"></el-table-column>
                    <!-- <el-table-column prop="spider_name" label="爬虫类型" align="center"></el-table-column> -->
                    <el-table-column label="操作">
                        <template scope="scope">
                            <i class="el-icon-edit edit-btn" @click="handleEdit(flag, scope.row)"></i>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
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

const ROOT_URL = 'http://172.20.207.28:5000';
const GLOBAL_URL = {
    table_list: `${ROOT_URL}/api/spider/template/list`,
    spider_list: `${ROOT_URL}/api/spider/type/list`
}

export default {
    name: 'list',
    data() {
        return {
            flag: this.$route.path.substring(1),
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

            if (this.flag === 'Seeds') {
                f_name = 'key'
            } else if (this.flag === 'Page') {
                f_name = 'name'
            } else {
                f_name = ''
            }

            this.$http.get(GLOBAL_URL.table_list, {
                params: {
                    type: this.flag,
                    spider_type: this.SelVal,
                    Field_name: f_name,
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
        handleEdit(type, row) {
            this.$router.push({
                path: `handle${type}`,
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
        },
        resetPage() {
            this.flag = this.$route.path.substring(1)
            this.SelVal = ''
            this.keywords = ''
            this.tableData = []
            this.currentPage = 1
            this.pageSize = 10
            this.totalNum = 0
            this.loading = true
        }

    },

    // 专门对付重复路由渲染同一组件不刷新页面的问题
    watch: {
        '$route' (to, from) {
            this.resetPage();
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
