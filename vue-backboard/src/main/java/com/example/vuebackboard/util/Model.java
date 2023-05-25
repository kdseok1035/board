package com.example.vuebackboard.util;

import com.example.vuebackboard.dto.BoardDTO;

import java.util.List;

public class Model {
    private PagingVO paging;
    private List<BoardDTO> viewAll;

    public void setPaging(PagingVO paging) {
        this.paging = paging;
    }

    public void setViewAll(List<BoardDTO> viewAll) {
        this.viewAll = viewAll;
    }

    public PagingVO getPaging() {
        return paging;
    }

    public List<BoardDTO> getViewAll() {
        return viewAll;
    }
}