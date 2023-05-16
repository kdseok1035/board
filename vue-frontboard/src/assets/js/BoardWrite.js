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
