package com.example.vuebackboard.controller;

import com.example.vuebackboard.service.BoardService;
import com.example.vuebackboard.util.PagingVO;
import com.example.vuebackboard.util.Model;
// import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.vuebackboard.dto.BoardDTO;
import com.example.vuebackboard.util.Utils;

import javax.servlet.http.HttpServletRequest;

@RestController
public class BoardController {

    @Autowired
    BoardService service;


    @CrossOrigin(origins = "*")
    @GetMapping("/")
    public Model boardList(@RequestParam(value = "nowPage", required = false, defaultValue = "1") String nowPage) {
        int total = service.countBoard();
        PagingVO vo = new PagingVO(total, Integer.parseInt(nowPage), 10);
        Model model = new Model();
        model.setPaging(vo);
        model.setViewAll(service.selectBoard(vo));
        return model;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/boardContent")
    public BoardDTO boardContent(@RequestParam(name = "bseq") Long bseq) {
        BoardDTO bdto = service.boardContent(bseq);
        //bdto.setBcontent(bdto.getBcontent().replaceAll("''", "'"));
        return bdto;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/boardWrite")
    public void boardWrite(@RequestBody BoardDTO dto, HttpServletRequest req) {
        //dto.setBcontent(dto.getBcontent().replaceAll("'", "''"));
        dto.setBwriter(dto.getBauthor());
        dto.setBwriteip(Utils.getIp(req));
        service.boardWrite(dto);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/boardDelete")
    public void boardDelete(@RequestParam(name = "bseq") Long bseq) {
        int count = service.editCheck(bseq);
        if (count >= 1) {
            service.editDelete(bseq);
        }
        service.boardDelete(bseq);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/boardEdit")
    public void boardEdit(@RequestBody BoardDTO dto, @RequestParam(name = "bseq") Long bseq, HttpServletRequest req) {
        dto.setBseq(String.valueOf(bseq));
        dto.setEediter(dto.getBauthor());
        dto.setEeditip(Utils.getIp(req));
        service.boardEdit(dto);
        service.boardEditInfo(dto);
    }

}