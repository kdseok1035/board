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
                <td id="seq">{{ list.bseq }}</td>
                <td id="title">
                    <div @click="$router.push(`/boardContent?bseq=${list.bseq}`)"
                         style="cursor:pointer;">
                        <router-link :to="`/boardContent?bseq=${list.bseq}`" v-if="list.btitle.length>30">{{ list.btitle.slice(0,30)+"..." }}</router-link>
                        <router-link :to="`/boardContent?bseq=${list.bseq}`" v-if="list.btitle.length<=30">{{ list.btitle }}</router-link>


                    </div>
                </td>
                <td id="date">{{ list.bdate }}</td>
                <td id="author">{{ list.bauthor }}</td>
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

<script src="../assets/js/PageHome.js">
</script>
<style scoped src="../assets/css/PageHome.css"/>

