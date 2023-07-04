package com.kwan.bookrentalmanagement;

import java.util.List;

public class BookData {
    private String dataTitle;
    private String dataAuthor;
    private Integer dataPrice;
    private String dataSumary;
    private List<String> genre;

    public BookData(String dataTitle, String dataAuthor, Integer dataPrice, String dataSumary, List<String> genre) {
        this.dataTitle = dataTitle;
        this.dataAuthor = dataAuthor;
        this.dataPrice = dataPrice;
        this.dataSumary = dataSumary;
        this.genre = genre;
    }

    public String getDataTitle() {
        return dataTitle;
    }

    public String getDataAuthor() {
        return dataAuthor;
    }

    public Integer getDataPrice() {
        return dataPrice;
    }

    public String getDataSumary() {
        return dataSumary;
    }

    public List<String> getGenre() {
        return genre;
    }
}
