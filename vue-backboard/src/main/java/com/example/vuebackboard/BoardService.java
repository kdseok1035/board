package com.example.vuebackboard;

import java.util.List;

import com.example.vuebackboard.dto.BoardDTO;

public interface BoardService {
    List<BoardDTO> boardlist();

    BoardDTO boardcontent(Long bseq);

    void boardwrite(BoardDTO dto);

    void boarddelete(Long bseq);

    void boardedit(BoardDTO dto);

    int countBoard();

    List<BoardDTO> selectBoard(PagingVO vo);


    
}
