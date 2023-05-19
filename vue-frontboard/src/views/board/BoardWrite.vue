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
                                                                                   id="bcontent" cols="30"
                                                                                   rows="10"></textarea></td>
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
        <div id="map">
            <input type="button" value="지도 추가하기" v-on:click="displayMap()">
        </div>
        <div class="button-save" align="right">
            <input type="button" value="작성" v-on:click="fnSave()">
        </div>
    </div>
</template>

<script src="../../assets/js/BoardWrite.js"/>

<style scoped src="../../assets/css/BoardWrite.css"/>