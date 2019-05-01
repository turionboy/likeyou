<template>
	<div class="hotelTable">
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
		      label="名称"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="scenes_id"
		      label="所属景点id"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="description"
		      label="酒店描述"
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
		      prop="tele"
		      label="预约电话"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="roomType"
		      label="床型"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="check_time"
		      label="离店/入住时间"
		      >
		    </el-table-column>
		    <el-table-column
		      fixed="right"
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
		<el-dialog :title="isAdd?'新增酒店信息':'更新酒店信息'" :visible.sync="dialogFormVisible" :append-to-body="true" :center="true">
		  <el-form :model="form">
		    <el-form-item label="id" :label-width="formLabelWidth" v-if="!isAdd">
		      {{ form.id }}
		    </el-form-item>
		    <el-form-item label="酒店名称" :label-width="formLabelWidth">
		    	<el-input v-model="form.title" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="所属景点id" :label-width="formLabelWidth">
		    	<el-input v-model="form.scenes_id" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="酒店简介" :label-width="formLabelWidth">
		    	<el-input type="textarea" v-model="form.description" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="预约电话" :label-width="formLabelWidth">
		    	<el-input v-model="form.tele" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="床型" :label-width="formLabelWidth">
		    	<el-input v-model="form.roomType" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="离店/入住时间" :label-width="formLabelWidth">
		    	<el-input v-model="form.check_time" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="图片" :label-width="formLabelWidth">
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
		name: 'hotelTable',
		data() {
			return {
				tableData: [],
				dialogFormVisible: false,
				formLabelWidth: '150px',
				form: {},
				isAdd: true,
				uploadUrl: ''

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
				that.$axios.get(that.API+'/api/user/hotel').then(res => {
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
				this.isAdd = false;
				this.dialogFormVisible = true;
				
				// console.log(tableData[index])
			},
			deleteRow(index, tableData){
				this.$confirm('此操作将永久删除该条信息，请确认是否删除', '提示').then(() => {
					this.$axios.delete(this.API + '/api/admin/hotel/' + tableData[index].id).then(res => {
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
					this.$axios.post(this.API + '/api/admin/hotel', this.form).then(res => {
						this.$message(res.data.message)
						this.dialogFormVisible = false;
						this.getData();
					}).catch(err => {

					})
				}else{
					this.$axios.patch(this.API + '/api/admin/hotel', this.form).then(res => {
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