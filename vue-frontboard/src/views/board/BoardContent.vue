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
                <td colspan="3">
                    <div v-if="bcontent.indexOf('<script')===-1">
                        <div v-html="bcontent"/>
                    </div>
                    <div v-else>
                        <div v-text="bcontent"/>
                    </div>
                </td>
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

<script src="../../assets/js/BoardContent.js"/>
<style scoped src="../../assets/css/BoardContent.css"/>