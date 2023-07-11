package com.kwan.bookrentalmanagement;

import java.util.HashMap;
import java.util.List;

public class BookData {
    private String title;
    private String author;
    private Integer price;
    private List<String> genre;
    private String sumary;
    private String thumbnail;
    private Integer stock;

    public BookData(String title, String author, Integer price, String sumary, List<String> genre, String thumbnail , Integer stock) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.sumary = sumary;
        this.thumbnail = thumbnail;
        this.stock = stock;
        this.genre = genre;
    }

    public BookData() {}

    public String getTitle() {
        return title;
    }

    public List<String> getGenre() {
        return genre;
    }

    public String getAuthor() {
        return author;
    }

    public Integer getPrice() {
        return price;
    }

    public String getSumary() {
        return sumary;
    }


   public String getThumbnail() {
        return thumbnail;
    }

    public Integer getStock() {
        return stock;
    }
}
