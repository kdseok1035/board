package com.example.vuebackboard;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.example.vuebackboard.dto.BoardDTO;

@Repository
public class BoardDAOImpl implements BoardDAO{

    @Override
    public List<BoardDTO> boardlist(SqlSessionTemplate session) {
        return session.selectList("Board.boardlist");
    }

    @Override
    public BoardDTO boardcontent(SqlSessionTemplate session, Long bseq) {
        
        return session.selectOne("Board.boardcontent", bseq);
        //session.select("Board.boardcontent", bseq);
    }

    @Override
    public void boardwrite(SqlSessionTemplate session, BoardDTO dto) {
        

        session.insert("Board.boardwrite", dto);
    }

    @Override
    public void boarddelete(SqlSessionTemplate session, Long bseq) {
        
        session.delete("Board.boarddelete", bseq);
    }

    @Override
    public void boardedit(SqlSessionTemplate session, BoardDTO dto) {
        
        session.update("Board.boardedit", dto);
    }

    @Override
    public List<BoardDTO> selectBoard(SqlSessionTemplate session, PagingVO vo) {
        
        return session.selectList("Board.boardselect", vo);
    }

    @Override
    public int countBoard(SqlSessionTemplate session) {
        
        return session.selectOne("Board.boardcount");
    }
    
}
