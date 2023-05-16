package com.example.vuebackboard;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.vuebackboard.dto.BoardDTO;
@Primary
@Service
public class BoardServiceImpl implements BoardService{

    @Autowired
    BoardDAO dao;


    @Override
    public List<BoardDTO> boardlist() {
        
        return dao.boardlist();
    }


    @Override
    public BoardDTO boardcontent(Long bseq) {
        
        return dao.boardcontent(bseq);
    }


    @Override
    public void boardwrite(BoardDTO dto) {
        dao.boardwrite(dto);
    }


    @Override
    public void boarddelete(Long bseq) {
        
        dao.boarddelete(bseq);
    }


    @Override
    public void boardedit(BoardDTO dto) {
        
        dao.boardedit(dto);
    }


    @Override
    public int countBoard() {
        
        return dao.countBoard();
    }


    @Override
    public List<BoardDTO> selectBoard(PagingVO vo) {
        
        return dao.selectBoard(vo);
    }


    
}
