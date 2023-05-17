package com.example.vuebackboard.dao;

import java.util.List;

import com.example.vuebackboard.util.PagingVO;
import org.apache.ibatis.annotations.Mapper;

import com.example.vuebackboard.dto.BoardDTO;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface BoardDAO {


    BoardDTO boardContent(Long bseq);

    void boardWrite(BoardDTO dto);

    void boardDelete(Long bseq);

    void boardEdit(BoardDTO dto);

    List<BoardDTO> selectBoard(PagingVO vo);

    int countBoard();


    void boardEditInfo(BoardDTO dto);
}
