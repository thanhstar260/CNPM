package com.kwan.bookrentalmanagement;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Dialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.widget.EditText;
import android.text.TextWatcher;
import android.text.Editable;
import android.widget.TextView;

import com.google.android.material.card.MaterialCardView;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Locale;

public class Add_Booklist extends AppCompatActivity {

    MaterialCardView genreSelectCard;
    TextView tvGenre;
    boolean [] selectedGenre;
    ArrayList<Integer> genreList = new ArrayList<>();
    String [] genreArray = {"Fiction ","Non-fiction", "Mystery", "Science Fiction", "Fantasy", "Romance", "Horror", "Thriller", "Biography", "Autobiography", "History", "Self-help", "Business", "Psychology", "Philosophy", "Travel", "Science", "Technology", "Art", "Poetry"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_booklist);

        genreSelectCard = findViewById(R.id.genreCard);
        tvGenre = findViewById(R.id.tvGenre);
        selectedGenre = new boolean[genreArray.length];

        genreSelectCard.setOnClickListener(v -> {
            showGenreDialog();
        });
    }

    private void showGenreDialog() {
        AlertDialog.Builder builder = new AlertDialog.Builder(Add_Booklist.this);
        builder.setTitle("Select genre");
        builder.setCancelable(false);

        builder.setMultiChoiceItems(genreArray, selectedGenre, new DialogInterface.OnMultiChoiceClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which, boolean isChecked) {
                if (isChecked) {
                    genreList.add(which);
                } else {
                    genreList.remove(Integer.valueOf(which));
                }
            }
        }).setPositiveButton("OK", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                // Create string builder
                StringBuilder stringBuilder = new StringBuilder();
                for (int i = 0; i < genreList.size(); i++) {
                    stringBuilder.append(genreArray[genreList.get(i)]);
                    if (i != genreList.size() - 1) {
                        stringBuilder.append(", ");
                    }
                }
                tvGenre.setText(stringBuilder.toString());
            }
        }).setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                for (int i = 0; i < selectedGenre.length; i++) {
                    selectedGenre[i] = false;
                }
                genreList.clear();
                tvGenre.setText("");
            }
        });

        AlertDialog alertDialog = builder.create();
        alertDialog.setOnCancelListener(new DialogInterface.OnCancelListener() {
            @Override
            public void onCancel(DialogInterface dialog) {
                for (int i = 0; i < selectedGenre.length; i++) {
                    selectedGenre[i] = false;
                }
                genreList.clear();
                tvGenre.setText("");
            }
        });

        alertDialog.show();
    }

}