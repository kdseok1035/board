<template>
    <div class="board-list">
        <table id="list">
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>날짜</th>
                <th>작성자</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="list in blist" :key="list.bseq">
                <td>{{ list.bseq }}</td>
                <td>
                    <router-link :to="`/boardContent?bseq=${list.bseq}`">{{ list.btitle }}</router-link>
                </td>
                <td>{{ list.bdate }}</td>
                <td>{{ list.bauthor }}</td>
            </tr>
            </tbody>
        </table>
        <div class="write-button" align="right">
            <button type="button" @click="$router.push('/boardWrite')">글쓰기</button>
        </div>
    </div>
    <div class="btn-cover">
        <button :disabled="plist.nowPage == 1" @click="prevPage">
            이전
        </button>
        <span class="page-count">{{ plist.nowPage }} / {{ plist.lastPage }} 페이지</span>
        <button :disabled="plist.nowPage == plist.lastPage" @click="nextPage">
            다음
        </button>
    </div>
</template>

<script>


import axios from 'axios';

export default {
    data() {
        return {
            blist: [],
            plist: []
        };
    },
    created() {
        const nowPage = this.$route.query.nowPage;
        if (nowPage == null) {
            axios.get('http://localhost:8082/') // 백엔드 API 엔드포인트에 맞게 수정
                .then(response => {
                    this.blist = response.data.viewAll;
                    this.plist = response.data.paging;
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            axios.get(`http://localhost:8082/?nowPage=${nowPage}`) // 백엔드 API 엔드포인트에 맞게 수정
                .then(response => {
                    this.blist = response.data.viewAll;
                    this.plist = response.data.paging;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    methods: {
        nextPage() {
            const nextPage = this.plist.nowPage + 1;
            location.href = `/?nowPage=${nextPage}`
            //this.fetchData(nextPage);
        },
        prevPage() {
            const prevPage = this.plist.nowPage - 1;
            location.href = `/?nowPage=${prevPage}`
            //this.fetchData(prevPage);
        },
        // fetchData(page) {
        //   axios.get(`http://localhost:8082/?nowPage=${page}`)

        //     .then(response => {
        //       this.blist = response.data.viewAll;
        //       this.plist = response.data.paging;
        //       location.href=`/?nowPage=${page}`
        //     })
        //     .catch(error => {
        //       console.error(error);
        //     });
        // }
    }
};

</script>
<style scoped>
#list {
    margin: 0 auto;
    border-collapse: collapse;
    width: 50%
}

#list th,
#list td {
    border: 1px solid black;
}

/* #list thead tr th {
  width: 30%;
  
} */

.btn-cover {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
}

.btn-cover button {
    margin: 10px;
}

.write-button {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;

}

</style>