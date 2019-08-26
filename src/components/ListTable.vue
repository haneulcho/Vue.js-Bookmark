<template>
	<el-table :data="bookmarkForm.filter(data => !search || data.name.includes(search))" height="640" :stripe="isTableStripe" :highlight-current-row="isHighlightCurrentRow" empty-text="데이터가 없습니다.">
		<el-table-column label="이름" prop="name">
			<template slot-scope="scope">
				<template v-if="!bookmarkForm[scope.$index].isEdit">
					{{ scope.row.name }}
				</template>
				<el-input v-else v-model="scope.row.name"></el-input>
			</template>
		</el-table-column>

		<el-table-column label="URL" prop="url">
			<template slot-scope="scope">
				<template v-if="!bookmarkForm[scope.$index].isEdit">
					{{ scope.row.url }}
				</template>
				<el-input v-else v-model="scope.row.url"></el-input>
			</template>
		</el-table-column>

		<el-table-column label="설명" prop="memo">
			<template slot-scope="scope">
				<template v-if="!bookmarkForm[scope.$index].isEdit">
					{{ scope.row.memo }}
				</template>
				<el-input v-else v-model="scope.row.memo"></el-input>
			</template>
		</el-table-column>

		<el-table-column align="right">
			<template slot="header">
				<el-input v-model="search" size="mini" placeholder="검색어를 입력하세요."/>
			</template>
			<template slot-scope="scope">
				<template v-if="!bookmarkForm[scope.$index].isEdit">
					<el-button size="mini" icon="el-icon-edit" @click="handleEditRow(scope.$index, scope.row)">수정</el-button>
					<el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDeleteRow(scope.$index, scope.row)">삭제</el-button>
				</template>
				<template v-else>
					<el-button size="mini" icon="el-icon-circle-close" @click="handleCancelRow(scope.$index)">취소</el-button>
					<el-button size="mini" type="primary" icon="el-icon-success" @click="updateRowItem(scope.$index)">완료</el-button>
				</template>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
export default {
	data: () => ({
		tempData: [],
		bookmarkForm: [],
		isTableStripe: true,
		isHighlightCurrentRow: true,
		search: ''
	}),
	mounted () {
		if (localStorage.getItem('bookmarks')) {
			this.bookmarkForm = JSON.parse(localStorage.getItem('bookmarks'))
		}
	},
	methods: {
		handleEditRow (idx, row) {
			this.bookmarkForm[idx].isEdit = true
			this.tempData[idx] = this.bookmarkForm[idx]
		},
		handleCancelRow (idx) {
			this.bookmarkForm[idx] = this.tempData[idx]
			this.bookmarkForm[idx].isEdit = false
		},
		handleDeleteRow (idx, row) {
			this.bookmarkForm.splice(idx, 1)
			localStorage.setItem('bookmarks', JSON.stringify(this.bookmarkForm))
		},
		updateRowItem (idx) {
			this.bookmarkForm[idx].isEdit = false
			localStorage.setItem('bookmarks', JSON.stringify(this.bookmarkForm))
		}
	}
}
</script>