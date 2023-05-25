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
        fnCount(){
            if(this.bcontent.length>5000){
                this.bcontent=this.bcontent.slice(0,5000);
                alert("5000자 이상 입력할 수 없습니다.");
            }

        },
        fnSave() {
            this.form = {
                "btitle": this.btitle,
                "bcontent": this.bcontent,
                "bauthor": this.bauthor,
                "bpw": this.bpw
            }
            if (this.btitle.length > 30) {
                alert("제목은 30글자 이내로 작성되어야합니다.");
            } else if (this.bcontent.length === 0) {
                alert("내용은 반드시 작성해야합니다.")
            } else if (this.bpw.length === 0) {
                alert("비밀번호는 반드시 작성해야합니다.")
            } else if (this.bpw.length > 4) {
                alert("비밀번호는 4글자 이내로 작성해야합니다.")
            } else if (this.bauthor.length > 4) {
                alert("작성자 이름은 4글자 이내로 작성해야합니다.")
            } else {
                //INSERT
                this.$axios.post("http://125.133.65.171:8080/board2/boardWrite", this.form)
                    .then(() => {
                        alert('글이 저장되었습니다.')
                        location.href = '/dist/'
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            }
        }
    }
}
