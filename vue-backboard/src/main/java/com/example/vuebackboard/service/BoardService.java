package com.example.vuebackboard.service;

import java.util.List;

import com.example.vuebackboard.util.PagingVO;
import com.example.vuebackboard.dto.BoardDTO;

public interface BoardService {

    BoardDTO boardContent(Long bseq);

    void boardWrite(BoardDTO dto);

    void boardDelete(Long bseq);

    void boardEdit(BoardDTO dto);

    int countBoard();

    List<BoardDTO> selectBoard(PagingVO vo);


}
