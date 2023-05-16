<template>
    <h2>글쓰기</h2>
    <div class="board-list">
        <table id="content">
            <tbody>
                <tr>
                    <th>제목</th>
                    <td colspan="3" id="title" class="data" align="center"><input type="text" v-model="btitle" name="btitle"
                            id="btitle"></td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td colspan="3" id="content" class="data" align="center"><textarea v-model="bcontent" name="bcontent"
                            id="bcontent" cols="30" rows="10"></textarea></td>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td id="author" class="data" align="center"><input type="text" v-model="bauthor" name="bauthor"
                            id="bauthor"></td>
                    <th>비밀번호</th>
                    <td id="pw" class="data" align="center"><input type="password" v-model="bpw" name="bpw" id="bpw"></td>
                </tr>
            </tbody>
        </table>
        <div class="button-save"  align="right">
            <input type="button" value="작성" v-on:click="fnSave()">
        </div>
    </div>
</template>
  
<script>

export default {
    data() { //변수생성
        return {
            btitle: '',
            bcontent: '',
            bauthor: '',
            bpw: ''
        }
    },
    methods: {
        fnSave() {
            this.form = {
                "btitle": this.btitle,
                "bcontent": this.bcontent,
                "bauthor": this.bauthor,
                "bpw": this.bpw
            }


            //INSERT
            this.$axios.post("http://localhost:8082/boardWrite", this.form)
                .then(() => {
                    alert('글이 저장되었습니다.')
                    location.href = '/'
                }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
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

.button-save{
  width:60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  
}
</style>