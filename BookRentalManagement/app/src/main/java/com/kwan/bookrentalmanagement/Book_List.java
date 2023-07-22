package com.kwan.bookrentalmanagement;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.GridLayout;
import androidx.appcompat.widget.SearchView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.navigation.NavigationBarView;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class Book_List extends AppCompatActivity {

    SearchView searchView;
    Book_List_Adapter adapter;
    RecyclerView recyclerView;
    List<BookData> dataList;
    DatabaseReference databaseReference;
    ValueEventListener eventListener;
    FloatingActionButton fab;
    BottomNavigationView bottomNavigationView;

    Toolbar toolbar;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.book_list);

        bottomNavigationView = findViewById(R.id.bottom_nav);

        bottomNavigationView.setSelectedItemId(R.id.bottom_nav_book_list);

        bottomNavigationView.setOnItemSelectedListener(item -> {
            switch (item.getItemId()) {
                case R.id.bottom_nav_book_list:
                    return true;
                case R.id.bottom_nav_order:
                    startActivity(new Intent(this, Order_screen.class));
                    overridePendingTransition(0,0);
                    finish();
                    return true;

            }
            return false;
        });

        toolbar = (Toolbar) findViewById(R.id.bookList_toolbar);
        toolbar.setTitle("");
        setSupportActionBar(toolbar);
        toolbar.setTitle("Book list");

        fab = findViewById(R.id.add_button);
        recyclerView = findViewById(R.id.book_list_recyclerView);

        recyclerView.setHasFixedSize(true);


        recyclerView.setLayoutManager(new GridLayoutManager(this, 2));

        AlertDialog.Builder builder = new AlertDialog.Builder(Book_List.this);
        builder.setCancelable(false);
        AlertDialog dialog = builder.create();
        dialog.show();

        dataList = new ArrayList<>();

        adapter = new Book_List_Adapter(Book_List.this, dataList);
        recyclerView.setAdapter(adapter);


        databaseReference = FirebaseDatabase.getInstance().getReference("Books");
        dialog.show();

        eventListener = databaseReference.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot snapshot) {
                dataList.clear();
                for(DataSnapshot itemSnapshot: snapshot.getChildren()) {
                    String bookID = itemSnapshot.getKey();

                    BookData bookData = itemSnapshot.getValue(BookData.class);
                    bookData.setKey(itemSnapshot.getKey());
                    dataList.add(bookData);
                }
                adapter.notifyDataSetChanged();
                dialog.dismiss();
            }

            @Override
            public void onCancelled(@NonNull DatabaseError error) {
                Log.e("Book_List", "Failed to read data from Firebase", error.toException());
                dialog.dismiss();
            }
        });

        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Book_List.this, Add_Booklist.class);
                startActivity(intent);
            }
        });

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu){
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.book_list_menu,menu);

        MenuItem.OnActionExpandListener onActionExpandListener = new MenuItem.OnActionExpandListener() {
            @Override
            public boolean onMenuItemActionExpand(@NonNull MenuItem item) {
                return true;
            }

            @Override
            public boolean onMenuItemActionCollapse(@NonNull MenuItem item) {
                return true;
            }
        };


        menu.findItem(R.id.search).setOnActionExpandListener(onActionExpandListener);
        searchView = (SearchView) menu.findItem(R.id.search).getActionView();

        searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String query) {
                return false;
            }

            @Override
            public boolean onQueryTextChange(String newText) {
                searchList(newText);
                return true;
            }
        });

        searchView.clearFocus();
        searchView.setQueryHint("Search...");

        return super.onCreateOptionsMenu(menu);


    }

    public void searchList(String text)
    {
        ArrayList<BookData> searchList = new ArrayList<>();
        for(BookData bookData: dataList)
        {
            if(bookData.getTitle().toLowerCase().contains(text.toLowerCase()) || bookData.getAuthor().toLowerCase().contains(text.toLowerCase())){
                searchList.add(bookData);
            }
        }
        adapter.searchDataList(searchList);
    }






}
