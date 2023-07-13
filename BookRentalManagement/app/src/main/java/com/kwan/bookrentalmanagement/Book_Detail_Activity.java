package com.kwan.bookrentalmanagement;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.bumptech.glide.Glide;
import com.github.clans.fab.FloatingActionButton;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.StorageReference;

public class Book_Detail_Activity extends AppCompatActivity {

    TextView detailTitle, detailAuthor, detailGenre, detailPrice, detailSumary, detailStock;
    ImageView detailThumbnail;
    String imageUrl = "";
    FloatingActionButton deleteButton;
    String key = "";

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
        deleteButton = findViewById(R.id.book_deleteButton);

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
            key = bundle.getString("Key");
            Glide.with(this).load(bundle.getString("Image")).placeholder(R.drawable.no_image_available).into(detailThumbnail);
        }
        deleteButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final DatabaseReference reference = FirebaseDatabase.getInstance().getReference("Books");
                reference.child(key).removeValue().addOnSuccessListener(new OnSuccessListener<Void>() {
                    @Override
                    public void onSuccess(Void unused) {
                        Toast.makeText(Book_Detail_Activity.this, "Deleted", Toast.LENGTH_SHORT).show();
                        startActivity(new Intent(getApplicationContext(), Book_List.class));
                    }
                });
            }
        });
    }
}
