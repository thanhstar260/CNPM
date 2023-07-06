package com.kwan.bookrentalmanagement;

import android.content.Context;
import android.content.Intent;
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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Book_List_Adapter extends RecyclerView.Adapter<MyViewHolder> {
    private Context context;
    private List<BookData> bookDataList;

    public void setSearchList(List<BookData> dataSearchList)
    {
        this.bookDataList = dataSearchList;
        notifyDataSetChanged();
    }

    public Book_List_Adapter(Context context, List<BookData> dataList)
    {
        this.context = context;
        this.bookDataList = dataList;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.book_list_recycler_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        String thumbnailUrl = bookDataList.get(position).getThumbnail();
        if (TextUtils.isEmpty(thumbnailUrl)) {
            // Nếu thumbnail trống, sử dụng ảnh mặc định thay thế
            Glide.with(context).load(R.drawable.no_image_available).into(holder.Thumbnail);
        } else {
            // Nếu có thumbnail, tải và hiển thị ảnh
            Glide.with(context).load(thumbnailUrl).into(holder.Thumbnail);
        }
        holder.bookTitle.setText(bookDataList.get(position).getTitle());
        HashMap<String, String> genres = bookDataList.get(position).getGenre();
        String genreText = TextUtils.join(", ", genres.values());
        holder.bookGenre.setText(genreText);
        holder.bookAuthor.setText(bookDataList.get(position).getTitle());
        holder.bookPrice.setText(bookDataList.get(position).getPrice());
        holder.bookStock.setText(bookDataList.get(position).getStock());

        holder.bookCard.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(context, Book_Detail_Activity.class);
                intent.putExtra("thumbnail", bookDataList.get(holder.getAdapterPosition()).getThumbnail());
                intent.putExtra("title", bookDataList.get(holder.getAdapterPosition()).getTitle());
                intent.putExtra("author", bookDataList.get(holder.getAdapterPosition()).getAuthor());
                intent.putExtra("price", bookDataList.get(holder.getAdapterPosition()).getPrice());
                intent.putExtra("genre", bookDataList.get(holder.getAdapterPosition()).getGenre());
                intent.putExtra("sumary", bookDataList.get(holder.getAdapterPosition()).getSumary());
                intent.putExtra("stock", bookDataList.get(holder.getAdapterPosition()).getStock());

                context.startActivity(intent);
            }
        });
    }

    @Override
    public int getItemCount() {
        return 0;
    }
}

class MyViewHolder extends RecyclerView.ViewHolder
{
    ImageView Thumbnail;
    TextView bookTitle, bookAuthor, bookPrice, bookGenre, bookStock;
    CardView bookCard;

    public MyViewHolder(@NonNull View itemView) {
        super(itemView);

        bookCard = itemView.findViewById(R.id.book_list_card);
        bookTitle = itemView.findViewById(R.id.book_title);
        bookAuthor = itemView.findViewById(R.id.book_author);
        bookGenre = itemView.findViewById(R.id.book_genre);
        bookPrice = itemView.findViewById(R.id.book_price);
        Thumbnail = itemView.findViewById(R.id.book_list_card_image);
        bookStock = itemView.findViewById(R.id.book_stock);
    }
}
