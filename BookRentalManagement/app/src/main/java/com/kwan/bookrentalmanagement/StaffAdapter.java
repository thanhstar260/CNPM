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
import java.util.List;

public class StaffAdapter extends RecyclerView.Adapter<MyViewHolder> {
    private Context context;
    private List<StaffData> staffList;

    public StaffAdapter(Context context, List<StaffData> staffList) {
        this.context = context;
        this.staffList = staffList;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.staff_recycler_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        Glide.with(context).load((staffList).get(position).getAvatar()).placeholder(R.drawable.no_image_available).into(holder.recImage);
        holder.recName.setText(staffList.get(position).getName());
        holder.recEmail.setText("Email:" + staffList.get(position).getEmail());
        holder.recPhone.setText("Phone Number:" + staffList.get(position).getPhone());
        holder.recGender.setText("Gender:" + staffList.get(position).getGender());

        holder.recCard.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(context, StaffDetail.class);
                intent.putExtra("Name", staffList.get(holder.getAdapterPosition()).getName());
                intent.putExtra("Email", staffList.get(holder.getAdapterPosition()).getEmail());
                intent.putExtra("Phone", staffList.get(holder.getAdapterPosition()).getPhone());
                intent.putExtra("Gender", staffList.get(holder.getAdapterPosition()).getGender());
                intent.putExtra("Avatar", staffList.get(holder.getAdapterPosition()).getAvatar());
                context.startActivity(intent);

            }
        });

    }

    @Override
    public int getItemCount() {
        return staffList.size();
    }

    public void searchStaffList(ArrayList<StaffData> searchList){
        staffList = searchList;
        notifyDataSetChanged();
    }
}

class MyViewHolder extends RecyclerView.ViewHolder{
    ImageView recImage;
    TextView recName, recEmail, recPhone, recGender;
    CardView recCard;
    public MyViewHolder(@NonNull View itemView) {
        super(itemView);
        recCard = itemView.findViewById(R.id.cardStaff);
        recImage = itemView.findViewById(R.id.cardImg);
        recName = itemView.findViewById(R.id.cardName);
        recEmail = itemView.findViewById(R.id.cardEmail);
        recPhone = itemView.findViewById(R.id.cardPhone);
        recGender = itemView.findViewById(R.id.cardGender);

    }
}
