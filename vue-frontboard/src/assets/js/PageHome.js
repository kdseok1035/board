import axios from 'axios';



export default {
    data() {
        return {
            blist: [],
            plist: []
        };
    },
    created() {
        let nowPage = 1;
        if(this.$route.query.nowPage>=1){nowPage=this.$route.query.nowPage;}
        axios.get(`http://125.133.65.171:8080/?nowPage=${nowPage}`) // 백엔드 API 엔드포인트에 맞게 수정
            .then(response => {
                this.blist = response.data.viewAll;
                this.plist = response.data.paging;
                console.log(this.blist);
                console.log(this.plist);
            })
            .catch(error => {
                console.error(error);
            });

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
        }

    }
};
