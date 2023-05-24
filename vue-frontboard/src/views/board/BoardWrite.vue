<template>
    <h2>글쓰기</h2>
    <div class="board-list">
        <table id="content">
            <tbody>
            <tr>
                <th>제목</th>
                <td colspan="3" id="title" class="data" align="center"><input type="text" v-model="btitle" name="btitle"
                                                                              id="btitle" required></td>
            </tr>
            <tr>
                <th>내용</th>
                <td colspan="3" id="content" class="data" align="center"><textarea v-model="bcontent" name="bcontent"
                                                                                   id="bcontent" cols="30"
                                                                                   rows="10" required></textarea></td>
            </tr>
            <tr>
                <th>작성자</th>
                <td id="author" class="data" align="center"><input type="text" v-model="bauthor" name="bauthor"
                                                                   id="bauthor"></td>
                <th>비밀번호</th>
                <td id="pw" class="data" align="center"><input type="password" v-model="bpw" name="bpw" id="bpw" required></td>
            </tr>
            </tbody>
        </table>

        <div class="button-save" align="right">
            <input type="button" value="작성" v-on:click="fnSave()">
        </div>
    </div>
</template>

<script src="../../assets/js/BoardWrite.js"/>

<style scoped src="../../assets/css/BoardWrite.css"/>