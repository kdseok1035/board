package com.example.vuebackboard.dto;

import org.apache.ibatis.type.Alias;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Alias("bdto")
@Getter
@Setter
@ToString
public class BoardDTO {
    private String bseq;
    private String btitle;
    private String bcontent;
    private String bauthor;
    private String bdate;
    private String bpw;
}
