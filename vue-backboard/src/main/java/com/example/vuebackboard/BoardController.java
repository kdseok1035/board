package com.example.vuebackboard;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.vuebackboard.dto.BoardDTO;

import jakarta.servlet.http.HttpServletResponse;

@RestController
public class BoardController {

    @Autowired
    BoardService service;

    @CrossOrigin(origins = "*")
    @GetMapping("/")
    public Model boardlist(PagingVO vo,
            @RequestParam(value = "nowPage", required = false) String nowPage) {

        int total = service.countBoard();
        if (nowPage == null) {
            nowPage = "1";
        }
        vo = new PagingVO(total, Integer.parseInt(nowPage), 10);
        Model model = new Model();
        model.setPaging(vo);
        model.setViewAll(service.selectBoard(vo));
        return model;

        // List<BoardDTO> blist = service.boardlist();
        // return blist;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/content")
    public BoardDTO boardcontent(@RequestParam(name = "bseq") Long bseq) {
        BoardDTO dto = service.boardcontent(bseq);
        return dto;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/boardwrite")
    public void boardwrite(@RequestBody BoardDTO dto, HttpServletResponse response) throws IOException {
        dto.setBcontent(dto.getBcontent().replace("\n", "<br/>"));
        System.out.println(dto);
        service.boardwrite(dto);
        response.sendRedirect("/");

    }

    @CrossOrigin(origins = "*")
    @PostMapping("/boarddelete")
    public void boarddelete(@RequestParam(name = "bseq") Long bseq) {
        service.boarddelete(bseq);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/boardedit")
    public void boardedit(@RequestBody BoardDTO dto, @RequestParam(name = "bseq") Long bseq) {
        System.out.println(dto);
        System.out.println(bseq);
        dto.setBcontent(dto.getBcontent().replace("<br/>", "\n"));
        service.boardedit(dto);
    }


    public class Model {
        private PagingVO paging;
        private List<BoardDTO> viewAll;

        public PagingVO getPaging() {
            return paging;
        }

        public void setPaging(PagingVO paging) {
            this.paging = paging;
        }

        public List<BoardDTO> getViewAll() {
            return viewAll;
        }

        public void setViewAll(List<BoardDTO> viewAll) {
            this.viewAll = viewAll;
        }
    }

}

// String clientIp = req.getHeader("X-Forwarded-For");

// if (clientIp == null || clientIp.length() == 0 ||
// "unknown".equalsIgnoreCase(clientIp)) {
// clientIp = req.getHeader("Proxy-Client-IP");
// }
// if (clientIp == null || clientIp.length() == 0 ||
// "unknown".equalsIgnoreCase(clientIp)) {
// clientIp = req.getHeader("WL-Proxy-Client-IP");
// }
// if (clientIp == null || clientIp.length() == 0 ||
// "unknown".equalsIgnoreCase(clientIp)) {
// clientIp = req.getHeader("HTTP_CLIENT_IP");
// }
// if (clientIp == null || clientIp.length() == 0 ||
// "unknown".equalsIgnoreCase(clientIp)) {
// clientIp = req.getHeader("HTTP_X_FORWARDED_FOR");
// }
// if (clientIp == null || clientIp.length() == 0 ||
// "unknown".equalsIgnoreCase(clientIp)) {
// clientIp = req.getRemoteAddr();
// }

// String ip = req.getRemoteAddr();