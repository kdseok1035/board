package com.example.vuebackboard.controller;

import com.example.vuebackboard.service.BoardService;
import com.example.vuebackboard.util.PagingVO;
import com.example.vuebackboard.util.Model;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.vuebackboard.dto.BoardDTO;
import com.example.vuebackboard.util.Utils;

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
        return service.boardContent(bseq);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/boardWrite")
    public void boardWrite(@RequestBody BoardDTO dto,HttpServletRequest req) {
        String clientIp = Utils.getIp(req);
        service.boardWrite(dto);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/boardDelete")
    public void boardDelete(@RequestParam(name = "bseq") Long bseq) {
        service.boardDelete(bseq);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/boardEdit")
    public void boardEdit(@RequestBody BoardDTO dto, @RequestParam(name = "bseq") Long bseq, HttpServletRequest req) {
        String clientIp = Utils.getIp(req);
        service.boardEdit(dto);
    }


}