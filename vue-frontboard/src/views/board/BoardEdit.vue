<template>
    <h2>글쓰기</h2>
    <div class="board-list">
        <table id="content">
            <tbody>
            <tr>
                <th>제목</th>
                <td colspan="3"><input v-model="btitle" type="text" name="btitle" id="btitle"></td>
            </tr>
            <tr>
                <th>내용</th>
                <td colspan="3"><textarea v-model="bcontent" name="bcontent" id="bcontent" cols="30"
                                          rows="10"></textarea></td>
            </tr>
            <tr>
                <th>작성자</th>
                <td><input type="text" v-model="bauthor" name="bauthor" id="bauthor"></td>
                <th>비밀번호</th>
                <td><input type="password" v-model="bpwcheck" name="bpw" id="bpw"></td>
            </tr>
            </tbody>
        </table>
        <div class="button" align="right">
            <input type="button" value="작성" v-on:click="fnEdit()">
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
            bpw: '',
            bpwcheck: ''
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

        fnEdit() {
            if (this.bpwcheck === this.bpw) {

                this.form = {
                    "bseq": this.bseq,
                    "btitle": this.btitle,
                    "bcontent": this.bcontent,
                    "bauthor": this.bauthor
                }


                //INSERT
                this.$axios.post(`http://localhost:8082/boardEdit?bseq=${this.bseq}`, this.form)
                    .then(() => {
                        alert('글이 수정되었습니다.')
                        location.href = `/boardContent?bseq=${this.bseq}`
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            } else {
                alert("비밀번호가 일치하지 않습니다.")
                location.href = `/boardContent?bseq=${this.bseq}`
            }
        }
    }
}

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

#btitle {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 90%;
}

#bcontent {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 90%;
    height: 300px;
    resize: none;
}

#bauthor {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 90%;
}

#bpw {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 90%;
}

.button {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;

}
</style>