<template>
	<el-form :model="bookmarkForm" :rules="rules" ref="bookmarkForm" label-width="120px">
		<el-form-item label="북마크 이름" prop="name">
			<el-input v-model="bookmarkForm.name" placeholder="최대 20자까지 작성 가능"></el-input>
		</el-form-item>

		<el-form-item label="북마크 URL" prop="url">
			<el-input v-model="bookmarkForm.url" placeholder="http://example.com 또는 https://example.com"></el-input>
		</el-form-item>

		<el-form-item label="북마크 설명" prop="memo">
			<el-input v-model="bookmarkForm.memo" placeholder="최대 200자까지 작성 가능."></el-input>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" icon="el-icon-edit-outline" @click="submitForm('bookmarkForm')">북마크 추가</el-button>
			<el-button icon="el-icon-delete" @click="resetForm('bookmarkForm')">리셋</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	name: 'BookmarkForm',
	data: () => ({
		bookmarkForm: {
			name: '',
			url: '',
			memo: '',
			isEdit: false
		},
		rules: {
			name: [
				{ required: true, message: '북마크 이름을 작성해 주세요.', trigger: 'change' },
				{ max: 20, message: '최대 20자까지 작성 가능합니다.', trigger: 'change' }
			],
			url: [
				{ required: true, pattern:'^https?:\/\/(.*)', message: 'http://, https:// 로 시작하는 올바른 URL을 작성해 주세요.', trigger: 'change' }
			],
			memo: [
				{ required: true, message: '북마크 설명을 작성해 주세요.', trigger: 'change' },
				{ max: 200, message: '최대 200자까지 작성 가능합니다.', trigger: 'change' }
			],
		},
	}),
	methods: {
		resetForm (formName) {
			this.bookmarkForm = { name: '', url: '', memo: '', isEdit: false }
			this.$refs[formName].resetFields()
		},
		submitForm (formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.updateItem()
					this.resetForm(formName)
				} else {
					return false
				}
			})
		},
		updateItem () {
			let bookmarks = []
			if (localStorage.getItem('bookmarks')) {
				bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
			}
			bookmarks.push(this.bookmarkForm)
			localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
		}
	}
}
</script>

<style>
.el-input-group__prepend {width:45px}
</style>