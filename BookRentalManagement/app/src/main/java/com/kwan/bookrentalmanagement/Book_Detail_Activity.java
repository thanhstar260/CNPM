package com.kwan.bookrentalmanagement;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.bumptech.glide.Glide;

public class Book_Detail_Activity extends AppCompatActivity {

    TextView detailTitle, detailAuthor, detailGenre, detailPrice, detailSumary, detailStock;
    ImageView detailThumbnail;
    String imageUrl = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.book_detail);

        detailThumbnail = findViewById(R.id.bookDetail_thumbnail);
        detailGenre = findViewById(R.id.bookDetail_Genre);
        detailAuthor = findViewById(R.id.bookDetail_Author);
        detailPrice = findViewById(R.id.bookDetail_Price);
        detailStock = findViewById(R.id.bookDetail_stock);
        detailTitle = findViewById(R.id.bookDetail_Title);
        detailSumary = findViewById(R.id.book_detail_sumary);

        Bundle bundle = getIntent().getExtras();
        if(bundle != null)
        {
            detailSumary.setText(bundle.getString("Sumary"));
            detailGenre.setText("Genre: " + bundle.getString("Genre"));
            detailTitle.setText(bundle.getString("Title"));
            detailStock.setText("Stock:" + String.valueOf(bundle.getInt("Stock")));
            detailAuthor.setText("Author: " + bundle.getString("Author"));
            detailPrice.setText("Price: " + String.valueOf(bundle.getInt("Price")));
            imageUrl = bundle.getString("Image");
            Glide.with(this).load(bundle.getString("Image")).placeholder(R.drawable.no_image_available).into(detailThumbnail);
        }
    }
}
