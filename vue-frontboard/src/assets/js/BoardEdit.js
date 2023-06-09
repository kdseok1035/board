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
        console.log(bseq);

        axios.get(`http://125.133.65.171:8080/board2/boardContent?bseq=${bseq}`)
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
        fnCount() {
            if (this.bcontent.length > 5000) {
                this.bcontent = this.bcontent.slice(0, 5000);
                alert("5000자 이상 입력할 수 없습니다.");
            }

        },
        fnEdit() {
            let bseq = this.bseq;
            if (this.bpwcheck === this.bpw) {

                this.form = {
                    "bseq": this.bseq,
                    "btitle": this.btitle,
                    "bcontent": this.bcontent,
                    "bauthor": this.bauthor
                }
                if (this.btitle.length > 30) {
                    alert("제목은 30글자 이내로 작성해야합니다.");
                    location.href = `/dist/boardEdit?bseq=${this.bseq}`;
                } else if (this.bcontent == null) {
                    alert("내용은 반드시 작성해야합니다.");
                    location.href = `/dist/boardEdit?bseq=${this.bseq}`;
                } else if (this.bauthor.length > 4) {
                    alert("작성자 이름은 4글자 이내로 작성해야합니다.");
                    location.href = `/dist/boardEdit?bseq=${this.bseq}`;
                } else {
                    //INSERT
                    this.$axios.post(`http://125.133.65.171:8080/board2/boardEdit?bseq=${this.bseq}`, this.form)
                        .then(() => {

                            alert('글이 수정되었습니다.')
                            location.href = '/dist/boardContent?bseq=' + bseq
                        }).catch((err) => {
                        if (err.message.indexOf('Network Error') > -1) {
                            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                        }
                    })

                }

            } else {
                alert("비밀번호가 일치하지 않습니다.")
                location.href = '/dist/boardContent?bseq=' + bseq
            }
        }
    }
}
