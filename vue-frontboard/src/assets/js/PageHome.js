import axios from 'axios';

export default {
    data() {
        return {
            blist: [],
            plist: []
        };
    },
    created() {
        const nowPage = this.$route.query.nowPage;
        if (nowPage == null) {
            axios.get('http://localhost:8082/') // 백엔드 API 엔드포인트에 맞게 수정
                .then(response => {
                    this.blist = response.data.viewAll;
                    this.plist = response.data.paging;
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            axios.get(`http://localhost:8082/?nowPage=${nowPage}`) // 백엔드 API 엔드포인트에 맞게 수정
                .then(response => {
                    this.blist = response.data.viewAll;
                    this.plist = response.data.paging;
                })
                .catch(error => {
                    console.error(error);
                });
        }
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
        },
        // fetchData(page) {
        //   axios.get(`http://localhost:8082/?nowPage=${page}`)

        //     .then(response => {
        //       this.blist = response.data.viewAll;
        //       this.plist = response.data.paging;
        //       location.href=`/?nowPage=${page}`
        //     })
        //     .catch(error => {
        //       console.error(error);
        //     });
        // }
    }
};
