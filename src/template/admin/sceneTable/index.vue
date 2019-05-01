<template>
	<div class="sceneTable">
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
		      prop="ename"
		      label="英文标题"
		      :show-overflow-tooltip="true"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="city_id"
		      label="所属城市id"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="imgUrl_l"
		      label="图片（左）路径"
		      :show-overflow-tooltip="true"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="imgUrl_rt"
		      label="图片（右上）路径"
		      :show-overflow-tooltip="true"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="imgUrl_rb"
		      label="图片（右下）路径"
		      :show-overflow-tooltip="true"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="context"
		      label="景点简介"
		      :show-overflow-tooltip="true"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="tele"
		      label="景点联系电话"
		      :show-overflow-tooltip="true"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="cost_time"
		      label="用时参考"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="ticket"
		      label="景点门票"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="open_time"
		      label="开放时间"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="traffic"
		      label="交通"
		      :show-overflow-tooltip="true"
		      >
		    </el-table-column>
		    <el-table-column
		      fixed="right"
		      label="操作"
		      :width="200"
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
		<el-dialog :title="isAdd?'新增景点信息':'更新景点信息'" :visible.sync="dialogFormVisible" :append-to-body="true" :center="true">
		  <el-form :model="form">
		    <el-form-item label="id" :label-width="formLabelWidth" v-if="!isAdd">
		      {{ form.id }}
		    </el-form-item>
		    <el-form-item label="标题" :label-width="formLabelWidth">
		    	<el-input v-model="form.title" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="英文标题" :label-width="formLabelWidth">
		    	<el-input v-model="form.ename" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="所属城市id" :label-width="formLabelWidth">
		    	<el-input v-model="form.city_id" autocomplete="off"></el-input>
		    </el-form-item>
		    <!-- <el-form-item label="" :label-width="formLabelWidth">
		    	<el-input v-model="form." autocomplete="off"></el-input>
		    </el-form-item> -->
		    <el-form-item label="图片(左）路径" :label-width="formLabelWidth">
		    	<el-input v-model="form.imgUrl_l" autocomplete="off"></el-input>
		    	<el-upload
				  class="upload-demo"
				  :action="uploadUrl"
				  :before-upload="beforeUpload"
				  :on-success="successUpload"
				  :show-file-list="false"
				  >
				  <el-button size="small" type="primary" @click="currUpload = 0">点击上传</el-button>
				</el-upload>
				<img :src="form.imgUrl_l" style="width: 200px;height: 200px">    	
		    </el-form-item>
		    <el-form-item label="图片(右上）路径" :label-width="formLabelWidth">
		    	<el-input v-model="form.imgUrl_rt" autocomplete="off"></el-input>
		    	<el-upload
				  class="upload-demo"
				  :action="uploadUrl"
				  :before-upload="beforeUpload"
				  :on-success="successUpload"
				  :show-file-list="false"
				  >
				  <el-button size="small" type="primary" @click="currUpload = 1">点击上传</el-button>
				</el-upload>
				<img :src="form.imgUrl_rt" style="width: 200px;height: 200px">    	
		    </el-form-item>
		    <el-form-item label="图片(右下）路径" :label-width="formLabelWidth">
		    	<el-input v-model="form.imgUrl_rb" autocomplete="off"></el-input>
		    	<el-upload
				  class="upload-demo"
				  :action="uploadUrl"
				  :before-upload="beforeUpload"
				  :on-success="successUpload"
				  :show-file-list="false"
				  >
				  <el-button size="small" type="primary" @click="currUpload = 2">点击上传</el-button>
				</el-upload>
				<img :src="form.imgUrl_rb" style="width: 200px;height: 200px">    	
		    </el-form-item>
		    <el-form-item label="景点简介" :label-width="formLabelWidth">
		    	<el-input type="textarea" v-model="form.context" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="景点联系电话" :label-width="formLabelWidth">
		    	<el-input v-model="form.tele" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="用时参考" :label-width="formLabelWidth">
		    	<el-input v-model="form.cost_time" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="景点门票" :label-width="formLabelWidth">
		    	<el-input v-model="form.ticket" autocomplete="off"></el-input>		    	
		    </el-form-item>
		    <el-form-item label="开放时间" :label-width="formLabelWidth">
		    	<el-input v-model="form.open_time" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="交通" :label-width="formLabelWidth">
		    	<el-input type="textarea" v-model="form.traffic" autocomplete="off"></el-input>
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
		name: 'sceneTable',
		data() {
			return {
				tableData: [],
				dialogFormVisible: false,
				formLabelWidth: '150px',
				form: {},
				isAdd: true,
				currUpload: 0,
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
				that.$axios.get(that.API+'/api/user/scene').then(res => {
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
					this.$axios.delete(this.API + '/api/admin/scene/' + tableData[index].id).then(res => {
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
					this.$axios.post(this.API + '/api/admin/scene', this.form).then(res => {
						this.$message(res.data.message)
						this.dialogFormVisible = false;
						this.getData();
					}).catch(err => {

					})
				}else{
					this.$axios.patch(this.API + '/api/admin/scene', this.form).then(res => {
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
				console.log('file-before-upload', this.currUpload)

			},
			successUpload(res, file, filelist) {
				// console.log('res', res)
				var str = '';
				switch(this.currUpload) {
					case 0: str = 'imgUrl_l';
							break;
					case 1: str = 'imgUrl_rt';
							break;
					case 2: str = 'imgUrl_rb';
							break;
				}
				this.$message({
					type: 'success',
					message: res.message
				})
				this.form[str] = res.imgUrl;
				this.$set(this.form, str, res.imgUrl)
				// console.log('form', this.form)
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