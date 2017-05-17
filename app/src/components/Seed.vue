<template>
    <div>
        <div class="top">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-select v-model="value" placeholder="请选择爬虫类型">
                        <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
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
        <div class="bottom">
            <el-table :data="tableData" style="width: 100%" stripe>
                <el-table-column prop="id" label="序号" width="100px"></el-table-column>
                <el-table-column prop="key" label="表达式" width="400px"></el-table-column>
                <el-table-column prop="parser" label="表达式类型"></el-table-column>
                <el-table-column prop="pageid" label="模板ID"></el-table-column>
                <el-table-column prop="type" label="爬虫类型"></el-table-column>
                <el-table-column prop="status" label="种子状态"></el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <i class="el-icon-edit edit-btn" @click="handleEdit(scope.$index, scope.row)"></i>
                    </template>
                </el-table-column>
            </el-table>
            <div class="fen">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import Mock from 'mockjs'
let debug = 1;
if (debug) {
    Mock.mock(/spidertypelist/, {
        "code": 0,
        "msg": '',
        "status": true,
        "data|5": [{
            id: '@integer(1,9)',
            name: '@first'
        }]
    })
    Mock.mock(/tabledata/, {
        "code": 0,
        "msg": '',
        "status": true,
        "data|10": [{
            id: '@integer(1,9)',
            key: '@url',
            parser: '@integer(1,9)',
            pageid: '@integer(1,9)',
            type: '@integer(1,9)',
            'status|1': [0, 1]
        }]
    })
}

export default {
    name: 'seed',
    data() {
        return {
            options: [],
            value: '',
            keywords: '',
            tableData: [],
            currentPage: 1
        }
    },
    created() {
        this.getSpiderTypeList();
        this.goSearch();
    },
    methods: {
        getSpiderTypeList() {
            this.$http.get('spidertypelist').then(res => {
                this.options = res.body.data;
            }, res => {
                console.log(res)
            })
        },
        goSearch() {
            this.$http.post('gettabledata', {
                param: {
                    type: this.value,
                    keywords: this.keywords
                }
            }).then(res => {
                this.tableData = res.body.data;
            }, res => {
                console.log(res)
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
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
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
