<template>
    <div class="board-list">
        <table id="content">
            <tbody>
            <tr>
                <th>제목</th>
                <td colspan="3">{{ btitle }}</td>
            </tr>
            <tr>
                <th>내용</th>
                <td colspan="3">{{ bcontent }}</td>
            </tr>
            <tr>
                <th>작성자</th>
                <td>{{ bauthor }}</td>
                <th>날짜</th>
                <td>{{ bdate }}</td>
            </tr>
            </tbody>
        </table>
        <div class="buttons" align="right">
            <button type="button" @click="$router.push(`/boardEdit?bseq=${bseq}`)">수정</button>
            <input type="button" value="삭제" v-on:click="fnDelete()">
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            bseq: '',
            btitle: '',
            bcontent: '',
            bauthor: '',
            bdate: '',
            bpw: ''
        };
    },
    created() {
        const bseq = this.$route.query.bseq; // 라우터의 쿼리 파라미터에서 bseq 값을 받아옴

        axios.get(`http://localhost:8082/boardContent?bseq=${bseq}`)
            .then(response => {
                this.bseq = response.data.bseq;
                this.btitle = response.data.btitle;
                this.bcontent = response.data.bcontent;
                this.bauthor = response.data.bauthor;
                this.bdate = response.data.bdate;
                this.bpw = response.data.bpw;
            })
            .catch(error => {
                console.error(error);
            });
    },
    methods: {
        fnDelete() {

            const bseq = this.bseq;
            const bpw = this.bpw;

            var pw = prompt("비밀번호를 입력해주세요")

            if (pw == bpw) {

                //INSERT
                this.$axios.post(`http://localhost:8082/boarddelete?bseq=${bseq}`, bseq)
                    .then(() => {

                        alert('글이 삭제되었습니다.')
                        location.href = '/'
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            } else {
                alert("비밀번호가 일치하지 않습니다.")
            }


        }
    }
};
</script>
<style scoped>
#content {
    margin: 0 auto;
    border-collapse: collapse;
    width: 60%
}

#content th,
#content td {
    border: 1px solid black;
}

#content th {
    width: 10%;
}

.buttons {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
}
</style>