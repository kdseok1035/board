import axios from 'axios';


export default {
    name: "KaKaoMap",
    data() {
        return {
            blist: [],
            plist: []
        };
    }, mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement("script");
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src =
                "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ac7af8c16b409257f14a6b4f5f0b8683";
            document.head.appendChild(script);
        }
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
        initMap() {
            const container = document.getElementById("map");
            const options = {
                center: new kakao.maps.LatLng(37.52377854567079, 126.92689830450347),
                level: 1,
            };

            //지도 객체를 등록합니다.
            //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
            this.map = new kakao.maps.Map(container, options);
        }
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
