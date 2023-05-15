package com.example.vuebackboard;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;

import com.example.vuebackboard.dto.BoardDTO;

public interface BoardDAO {
    
    List<BoardDTO> boardlist(SqlSessionTemplate session);

    BoardDTO boardcontent(SqlSessionTemplate session, Long bseq);

    void boardwrite(SqlSessionTemplate session, BoardDTO dto);

    void boarddelete(SqlSessionTemplate session, Long bseq);

    void boardedit(SqlSessionTemplate session, BoardDTO dto);

    List<BoardDTO> selectBoard(SqlSessionTemplate session, PagingVO vo);

    int countBoard(SqlSessionTemplate session);


}
