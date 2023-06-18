package com.kwan.bookrentalmanagement;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

public class Order_WaitingList extends Fragment {

    public static final String TITLE = "title";

    public Order_WaitingList() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_order_waiting_list, container, false);
    }

    public void onViewCreate(@NonNull View view, @Nullable Bundle savedInstanceState)
    {
        super.onViewCreated(view, savedInstanceState);
        ((TextView)view.findViewById(R.id.tabs_name)).setText(getArguments().getString(TITLE));

    }

}