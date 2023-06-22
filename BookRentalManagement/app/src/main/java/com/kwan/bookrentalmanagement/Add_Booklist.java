package com.kwan.bookrentalmanagement;

import androidx.activity.result.ActivityResult;
import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.app.Dialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ServerValue;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.StorageReference;
import com.google.firebase.storage.UploadTask;
import com.google.android.gms.auth.api.signin.internal.Storage;
import com.google.android.material.card.MaterialCardView;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class Add_Booklist extends AppCompatActivity {

    MaterialCardView genreSelectCard;
    TextView tvGenre;
    boolean [] selectedGenre;
    ArrayList<Integer> genreList = new ArrayList<>();
    String [] genreArray = {"Fiction ","Non-fiction", "Mystery", "Science Fiction", "Fantasy", "Romance", "Horror", "Thriller", "Biography", "Autobiography", "History", "Self-help", "Business", "Psychology", "Philosophy", "Travel", "Science", "Technology", "Art", "Poetry"};

    Button saveButton;
    EditText addTitle, addSummary, addAuthor, addPrice;

    // Firebase
    private DatabaseReference databaseReference;
    private DatabaseReference genreReference;
    private StorageReference storageReference;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_booklist);

        // Firebase initialization
        databaseReference = FirebaseDatabase.getInstance().getReference("Books");
        genreReference = FirebaseDatabase.getInstance().getReference("genres");
        storageReference = FirebaseStorage.getInstance().getReference("book_covers");

        genreSelectCard = findViewById(R.id.genreCard);
        tvGenre = findViewById(R.id.tvGenre);
        selectedGenre = new boolean[genreArray.length];

        genreSelectCard.setOnClickListener(v -> {
            showGenreDialog();
        });
        addTitle = findViewById(R.id.addTitle);
        addSummary = findViewById(R.id.addSumary);
        addAuthor = findViewById(R.id.addAuthor);
        addPrice = findViewById(R.id.addPrice);
        saveButton = findViewById(R.id.add_book_confirm);

        ActivityResultLauncher<Intent> activityResultLauncher = registerForActivityResult(
                new ActivityResultContracts.StartActivityForResult(),
                new ActivityResultCallback<ActivityResult>() {
                    @Override
                    public void onActivityResult(ActivityResult result) {
                        if (result.getResultCode() == Activity.RESULT_OK ){
                            Intent data = result.getData();
                        }
                    }
                }
        );
        saveButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                uploadData();
            }
        });
    }

    private void uploadData() {
        String title = addTitle.getText().toString().trim();
        String summary = addSummary.getText().toString().trim();
        String author = addAuthor.getText().toString().trim();
        String priceString = addPrice.getText().toString().trim();

        if (title.isEmpty() || summary.isEmpty() || author.isEmpty() || priceString.isEmpty()) {
            Toast.makeText(this, "Please fill in all the fields.", Toast.LENGTH_SHORT).show();
            return;
        }

        double price = Double.parseDouble(priceString);

        // Generate a unique key for the book
        String bookId = databaseReference.push().getKey();

        // Create a map to store book data
        Map<String, Object> bookData = new HashMap<>();
        bookData.put("title", title);
        bookData.put("summary", summary);
        bookData.put("author", author);
        bookData.put("price", price);


        ArrayList<String> genres = new ArrayList<>();
        for (Integer genreIndex : genreList) {
            String genre = genreArray[genreIndex];
            genres.add(genre);
        }
        bookData.put("genres", genres);

        // Upload book data to the database
        databaseReference.child(bookId).setValue(bookData)
                .addOnSuccessListener(aVoid -> {
                    // Book data uploaded successfully
                    Toast.makeText(Add_Booklist.this, "Book added successfully", Toast.LENGTH_SHORT).show();
                    addTitle.setText("");
                    addSummary.setText("");
                    addAuthor.setText("");
                    addPrice.setText("");
                    genreList.clear();
                    tvGenre.setText("");
                })
                .addOnFailureListener(e -> {
                    // Error occurred while uploading book data
                    Toast.makeText(Add_Booklist.this, "Failed to add book: " + e.getMessage(), Toast.LENGTH_SHORT).show();
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
                Arrays.fill(selectedGenre, false);
                genreList.clear();
                tvGenre.setText("");
            }
        });

        alertDialog.show();
    }
}
