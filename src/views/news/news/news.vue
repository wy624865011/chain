<template>
  <div class="app-container">
    <el-row>
      <router-link to='/newsManage/news/add'>
        <el-button type="primary" size="small" class="nav-button">{{$t('Add')}}</el-button>
      </router-link>
    </el-row>

    <div class="search-box">
      <el-row>
        <el-col :span="2">
          <div class="search-box-label">新闻标题</div>
        </el-col>
        <el-col :span="6">
          <el-input :placeholder="$t('PleaseWrite')" v-model="searchParam.title">
          </el-input>
        </el-col>
        <el-col :span="2">
          <div class="search-box-label">推荐状态</div>
        </el-col>
        <el-col :span="3">
          <el-select filterable :placeholder="$t('PleaseSelect')" v-model="searchParam.commend">
            <el-option :label="item" :value="index" v-for="(item,index) in commendStatus"
                       :key="index"></el-option>
          </el-select>
        </el-col>
        <el-col :span="2">
          <div class="search-box-label">类型</div>
        </el-col>
        <el-col :span="3">
          <el-select filterable :placeholder="$t('PleaseSelect')" v-model="searchParam.type">
            <el-option :label="newsType[item]" :value="item" v-for="item in Object.keys(newsType)"
                       :key="item"></el-option>
          </el-select>
        </el-col>
        <el-col :span="1"><br></el-col>
        <el-col :span="5">
          <el-button type="primary" size="small" @click="search()">{{$t('Search')}}</el-button>
          <el-button size="small" @click="reset()">{{$t('Reset')}}</el-button>
        </el-col>
      </el-row>
    </div>

  </div>
</template>
<script>
  import { delNews, editNews } from '@/api/news'
  import { isvalidatePhone, isvalidateEmail } from '@/utils/validate'
  import { setStore } from '@/utils/index'
  import global, { enums } from '@/utils/global'

  export default {
    data () {
      return {
        newsType: enums.newsType,
        commendStatus: enums.commendStatus,
        carouselStatus: enums.carouselStatus,
        jumpUrl: global.jumpUrl,
        searchParam: {
          title: '',
          commend: '',
          type: ''
        }
      }
    },
    components: {
    },
    created () {
    },
    methods: {
      reset () {
        this.searchParam = {
          title: '',
          commend: '',
          type: ''
        }
        this.search()
      },
      del (id) {
        this.$confirm('确认删除？', this.$t('Prompt'), {
          confirmButtonText: this.$t('Confirm'),
          cancelButtonText: this.$t('Cancel'),
          type: 'warning'
        }).then(() => {
          delNews(id).then(respones => {
            this.$notify({
              title: this.$t('Success'),
              message: this.$t('DeleteSuccess'),
              type: 'success',
              duration: 3000
            })
            this.reset()
          }).catch(() => {
            this.$message.error(this.$('DeletFail'))
          })
        }).catch(() => {

        })
      },
      search (){
        this.$refs.table.fetchData()
      },
      edit (id) {
        this.$router.push({path: '/organizationManage/edit'})
        setStore('editId', id)
      },
      changeState (id, type) {
        let params = {
          paperId: id,
          publish: type
        }
        editNews(params).then(res => {
          this.$notify({
            title: this.$t('Success'),
            message: type === 0 ? '撤回成功' : '发布成功',
            type: 'success',
            duration: 3000
          })
          this.$refs.table.fetchData()
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
