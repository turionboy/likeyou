<template>
	<div class="storyTable">
		<div class="btn">
			<el-button type="primary" @click="add">新增</el-button>	
		</div>
		<el-table
			    :data="tableData"
			    style="width: 100%"
			    :max-height="800">
		    <el-table-column
		      type="selection"
		      width="55">
		    </el-table-column>
		    <el-table-column
		      prop="id"
		      label="id"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="title"
		      label="标题"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="scenes_id"
		      label="所属景点id"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="context"
		      label="内容"
		      :show-overflow-tooltip="true"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="imgUrl"
		      label="图片路径"
		      :show-overflow-tooltip="true"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="start_time"
		      label="出发时间"
		      :show-overflow-tooltip="true"
		      >
		      <template slot-scope="scope">
		      	<span>{{ scope.row.start_time | timeFormat }}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      prop="days"
		      label="出行天数"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="company"
		      label="人物"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="time"
		      label="发布时间"
		      :show-overflow-tooltip="true"
		      >
		      <template slot-scope="scope">
		      	<span>{{ scope.row.time | timeFormat }}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      prop="cost"
		      label="人均费用"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="liked"
		      label="点赞人数"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="watched"
		      label="浏览人数"
		      >
		    </el-table-column>
		    <el-table-column
		      fixed="right"
		      :width="200"
		      label="操作"
		      >
		      <template slot-scope="scope">
		        <el-button
		          @click.native.prevent="updateRow(scope.$index, tableData)"
		          size="small">
		          更新
		        </el-button>
		        <el-button
		          @click.native.prevent="deleteRow(scope.$index, tableData)"
		          type="danger"
		          size="small"">
		          删除
		        </el-button>
		      </template>
		    </el-table-column>
		</el-table>
		<el-dialog :title="isAdd?'新增旅行故事信息':'更新旅行故事信息'" :visible.sync="dialogFormVisible" :append-to-body="true" :center="true">
		  <el-form :model="form">
		    <el-form-item label="id" :label-width="formLabelWidth" v-if="!isAdd">
		      {{ form.id }}
		    </el-form-item>
		    <el-form-item label="标题" :label-width="formLabelWidth">
		    	<el-input v-model="form.title" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="所属景点id" :label-width="formLabelWidth">
		    	<el-input v-model="form.scenes_id" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="内容" :label-width="formLabelWidth">
		    	<el-input type="textarea" v-model="form.context" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="发布时间" :label-width="formLabelWidth">
		    	<el-input v-model="form.time" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="出发时间" :label-width="formLabelWidth">
		    	<el-input v-model="form.start_time" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="出行天数" :label-width="formLabelWidth">
		    	<el-input v-model="form.days" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="人物" :label-width="formLabelWidth">
		    	<el-input v-model="form.company" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="人均费用" :label-width="formLabelWidth">
		    	<el-input v-model="form.cost" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="浏览人数" :label-width="formLabelWidth">
		    	<el-input v-model="form.watched" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="点赞人数" :label-width="formLabelWidth">
		    	<el-input v-model="form.liked" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="图片路径" :label-width="formLabelWidth">
		    	<el-input v-model="form.imgUrl" autocomplete="off"></el-input>
		    	<el-upload
				  class="upload-demo"
				  :action="uploadUrl"
				  :before-upload="beforeUpload"
				  :on-success="successUpload"
				  :show-file-list="false"
				  >
				  <el-button size="small" type="primary">点击上传</el-button>
				</el-upload>
				<img :src="form.imgUrl" style="width: 200px;height: 200px">    	
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="submit">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	export default({
		name: 'storyTable',
		data() {
			return {
				tableData: [],
				dialogFormVisible: false,
				formLabelWidth: '150px',
				form: {},
				isAdd: true,
				uploadUrl: '',

			}
		},
		filters: {
			'timeFormat': function(val){
				return val.slice(0,10)+ ' ' + val.slice(11,19)
			}
		},
		created: function(){
			this.uploadUrl = this.API + '/uploads';
		},
		mounted: function(){
			this.getData();
		},
		methods: {
			getData() {
				var that = this;
				that.$axios.get(that.API+'/api/user/story').then(res => {
					// console.log(res.data)
					that.tableData = res.data.result;
				}).catch(err => {

				})
			},
			add() {
				this.isAdd = true;
				this.dialogFormVisible = true;
				this.form = {};
			},
			updateRow(index, tableData) {
				this.form = JSON.parse(JSON.stringify(this.tableData[index]));
				this.form.time = this.form.time.slice(0,10)+ ' ' + this.form.time.slice(11,19);
				this.form.start_time = this.form.start_time.slice(0,10)+ ' ' + this.form.start_time.slice(11,19);			
				this.isAdd = false;
				this.dialogFormVisible = true;
				
				// console.log(tableData[index])
			},
			deleteRow(index, tableData){
				this.$confirm('此操作将永久删除该条信息，请确认是否删除', '提示').then(() => {
					this.$axios.delete(this.API + '/api/admin/story/' + tableData[index].id).then(res => {
						this.$message({
							type: 'success',
							message: res.data.message
						})
						this.getData();
					})	
				}).catch(() => {
					this.$message('已取消删除')
				})
				
			},
			submit() {
				if(this.isAdd){
					this.$axios.post(this.API + '/api/admin/story', this.form).then(res => {
						this.$message(res.data.message)
						this.dialogFormVisible = false;
						this.getData();
					}).catch(err => {

					})
				}else{
					this.$axios.patch(this.API + '/api/admin/story', this.form).then(res => {
						this.$message({
							type: 'success',
							message: res.data.message
						})
						this.dialogFormVisible = false;
						this.getData();
					}).catch(err => {})
				}
			},
			beforeUpload(file) {
				console.log('file-before-upload', file)
			},
			successUpload(res, file, filelist) {
				// console.log('res', res)

				this.$message({
					type: 'success',
					message: res.message
				})
				this.form.imgUrl = res.imgUrl;
				this.$set(this.form, 'imgUrl', res.imgUrl)
				console.log('form', this.form)
			}
		}
	})
</script>

<style scoped>
	.btn{display: flex;justify-content: flex-end;background: #fff;margin-bottom: 20px;}
	.file{z-index: 10;opacity: 1;}
</style>

<style>
	.el-table .cell{text-align: center;}
</style>