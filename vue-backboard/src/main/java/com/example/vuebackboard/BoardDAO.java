package com.example.vuebackboard;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.SqlSessionTemplate;

import com.example.vuebackboard.dto.BoardDTO;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface BoardDAO {

    List<BoardDTO> boardlist();

    BoardDTO boardcontent(Long bseq);

    void boardwrite(BoardDTO dto);

    void boarddelete(Long bseq);

    void boardedit(BoardDTO dto);

    List<BoardDTO> selectBoard(PagingVO vo);

    int countBoard();


}
