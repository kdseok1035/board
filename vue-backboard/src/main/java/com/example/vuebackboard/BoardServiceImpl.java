package com.example.vuebackboard;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.vuebackboard.dto.BoardDTO;

@Service
public class BoardServiceImpl implements BoardService{

    @Autowired
    BoardDAO dao;

    @Autowired
    SqlSessionTemplate session;


    @Override
    public List<BoardDTO> boardlist() {
        
        return dao.boardlist(session);
    }


    @Override
    public BoardDTO boardcontent(Long bseq) {
        
        return dao.boardcontent(session, bseq);
    }


    @Override
    public void boardwrite(BoardDTO dto) {
        dao.boardwrite(session, dto);
    }


    @Override
    public void boarddelete(Long bseq) {
        
        dao.boarddelete(session, bseq);
    }


    @Override
    public void boardedit(BoardDTO dto) {
        
        dao.boardedit(session, dto);
    }


    @Override
    public int countBoard() {
        
        return dao.countBoard(session);
    }


    @Override
    public List<BoardDTO> selectBoard(PagingVO vo) {
        
        return dao.selectBoard(session, vo);
    }


    
}
