package com.kwan.bookrentalmanagement;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.bumptech.glide.Glide;

public class Book_Detail_Activity extends AppCompatActivity {

    TextView detailTitle, detailAuthor, detailGenre, detailPrice, detailSumary, detailStock;
    ImageView detailThumbnail;

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
            detailSumary.setText(bundle.getString("sumary"));
            detailGenre.setText(bundle.getString("genre"));
            detailTitle.setText(bundle.getString("title"));
            detailStock.setText(bundle.getString("stock"));
            detailAuthor.setText(bundle.getString("author"));
            detailPrice.setText(bundle.getString("price"));
            Glide.with(this).load(bundle.getString("thumbnail"));
        }
    }
}
