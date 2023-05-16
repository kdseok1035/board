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

<script src="../../assets/js/BoardEdit.js"/>
<style scoped>
@import "../../assets/css/BoardEdit.css";
</style>