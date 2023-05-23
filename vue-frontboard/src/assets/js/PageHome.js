import axios from 'axios';



export default {
    data() {
        return {
            blist: [],
            plist: []
        };
    },
    created() {
        let nowPage = this.$route.query.nowPage;
        if(nowPage==null){nowPage=1;}
        axios.get(`http://125.133.65.171:8080/board2/?nowPage=${nowPage}`) // 백엔드 API 엔드포인트에 맞게 수정
            .then(response => {
                this.blist = response.data.viewAll;
                this.plist = response.data.paging;
            })
            .catch(error => {
                console.error(error);
            });

    },
    methods: {
        nextPage() {
            const nextPage = this.plist.nowPage + 1;
            location.href = `/dist/?nowPage=${nextPage}`
            //this.fetchData(nextPage);
        },
        prevPage() {
            const prevPage = this.plist.nowPage - 1;
            location.href = `/dist/?nowPage=${prevPage}`
            //this.fetchData(prevPage);
        },
        firstPage() {
            location.href = '/dist/'
            //this.fetchData(nextPage);
        },
        lastPage() {
            location.href = `/dist/?nowPage=${this.plist.lastPage}`
            //this.fetchData(prevPage);
        }

    }
};
