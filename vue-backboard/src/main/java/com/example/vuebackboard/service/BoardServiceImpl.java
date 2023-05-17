package com.example.vuebackboard.service;

import java.util.List;

import com.example.vuebackboard.dao.BoardDAO;
import com.example.vuebackboard.util.PagingVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.vuebackboard.dto.BoardDTO;

@Primary
@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    BoardDAO dao;


    @Override
    public BoardDTO boardContent(Long bseq) {

        return dao.boardContent(bseq);
    }


    @Override
    public void boardWrite(BoardDTO dto) {
        dao.boardWrite(dto);
    }


    @Override
    public void boardDelete(Long bseq) {

        dao.boardDelete(bseq);
    }


    @Override
    public void boardEdit(BoardDTO dto) {

        dao.boardEdit(dto);
    }


    @Override
    public int countBoard() {

        return dao.countBoard();
    }


    @Override
    public List<BoardDTO> selectBoard(PagingVO vo) {

        return dao.selectBoard(vo);
    }

    @Override
    public void boardEditInfo(BoardDTO dto) {
        dao.boardEditInfo(dto);
    }


}
