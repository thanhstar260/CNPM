package com.kwan.bookrentalmanagement;

import android.content.Context;
import android.content.Intent;
import android.provider.ContactsContract;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.google.firebase.database.FirebaseDatabase;

import com.firebase.ui.database.FirebaseRecyclerAdapter;
import com.firebase.ui.database.FirebaseRecyclerOptions;


import java.util.ArrayList;
import java.util.List;

public class Book_List_Adapter extends RecyclerView.Adapter<Book_List_Adapter.MyViewHolder> {

    private Context context;
    private List<BookData> dataList;
    public Book_List_Adapter(Context context, List<BookData> dataList)
    {
        this.context = context;
        this.dataList = dataList;
    }



    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.book_list_recycler_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        Glide.with(context).load((dataList).get(position).getThumbnail()).placeholder(R.drawable.no_image_available).into(holder.bookThumbnail);
        holder.bookTitle.setText(dataList.get(position).getTitle());
        holder.bookAuthor.setText("author:" + dataList.get(position).getAuthor());
        holder.bookStock.setText("stock: " + String.valueOf(dataList.get(position).getStock()));
        List<String> genres = dataList.get(position).getGenre();
        StringBuilder genreString = new StringBuilder();
        for (String genre : genres) {
            genreString.append(genre).append(", ");
        }
        if (genreString.length() > 0) {
            genreString.deleteCharAt(genreString.length() - 1); // Xóa dấu ',' cuối cùng
        }
        holder.bookGenre.setText("genre: " + genreString.toString());
        holder.bookPrice.setText("price: " + String.valueOf(dataList.get(position).getPrice()));

        holder.bookCard.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(context, Book_Detail_Activity.class);
                intent.putExtra("Image", dataList.get(holder.getAdapterPosition()).getThumbnail());
                intent.putExtra("Title", dataList.get(holder.getAdapterPosition()).getTitle());
                intent.putExtra("Author", dataList.get(holder.getAdapterPosition()).getAuthor());
                intent.putExtra("Stock", dataList.get(holder.getAdapterPosition()).getStock());
                List<String> genres = dataList.get(holder.getAdapterPosition()).getGenre();
                String genreString = TextUtils.join(", ", genres);
                intent.putExtra("Genre", genreString);
                intent.putExtra("Price", dataList.get(holder.getAdapterPosition()).getPrice());
                intent.putExtra("Sumary", dataList.get(holder.getAdapterPosition()).getSumary());
                intent.putExtra("Key", dataList.get(holder.getAdapterPosition()).getKey());

                context.startActivity(intent);

            }
        });

    }

    @Override
    public int getItemCount() {
        return dataList.size();
    }

    public void searchDataList(ArrayList<BookData> searchList)
    {
        dataList = searchList;
        notifyDataSetChanged();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder
    {
        ImageView bookThumbnail;
        TextView bookTitle, bookAuthor, bookPrice, bookStock, bookGenre;
        CardView bookCard;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            bookCard = itemView.findViewById(R.id.book_list_card);
            bookTitle = itemView.findViewById(R.id.book_title);
            bookAuthor = itemView.findViewById(R.id.book_author);
            bookPrice = itemView.findViewById(R.id.book_price);
            bookThumbnail = itemView.findViewById(R.id.book_list_card_image);
            bookStock = itemView.findViewById(R.id.book_stock);
            bookGenre = itemView.findViewById(R.id.book_genre);
        }
    }
}

