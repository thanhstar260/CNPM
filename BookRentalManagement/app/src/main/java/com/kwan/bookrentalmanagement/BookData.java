package com.kwan.bookrentalmanagement;

import java.util.HashMap;
import java.util.List;

public class BookData {
    private String title;
    private String author;
    private Integer price;
    private String sumary;
    private HashMap<String, String> genre;
    private String thumbnail;
    private Integer stock;

    public BookData(String title, String author, Integer price, String sumary, HashMap<String, String> genre, String thumbnail, Integer stock) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.sumary = sumary;
        this.genre = genre;
        this.thumbnail = thumbnail;
        this.stock = stock;
    }

    public BookData() {}

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getSumary() {
        return sumary;
    }

    public void setSumary(String sumary) {
        this.sumary = sumary;
    }

    public HashMap<String, String> getGenre() {
        return genre;
    }

    public void setGenre(HashMap<String, String> genre) {
        this.genre = genre;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
}
