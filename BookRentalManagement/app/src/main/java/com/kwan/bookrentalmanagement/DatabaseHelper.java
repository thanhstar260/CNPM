package com.kwan.bookrentalmanagement;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class DatabaseHelper extends SQLiteOpenHelper {
    private static final String DATABASE_NAME = "bookstore.db";
    private static final int DATABASE_VERSION = 1;

    // Constructor
    public DatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    // Phương thức onCreate() sẽ được gọi khi cơ sở dữ liệu chưa tồn tại
    @Override
    public void onCreate(SQLiteDatabase db) {
        // Tạo các bảng trong cơ sở dữ liệu
        db.execSQL("CREATE TABLE Orders (" +
                "order_id INTEGER PRIMARY KEY," +
                "user_id INTEGER," +
                "staff_id INTEGER," +
                "order_status TEXT," +
                "pick_up_date TEXT," +
                "return_date TEXT," +
                "verify_date TEXT," +
                "FOREIGN KEY (user_id) REFERENCES Users(user_id)," +
                "FOREIGN KEY (staff_id) REFERENCES Staff(staff_id))");

        db.execSQL("CREATE TABLE Books (" +
                "book_id INTEGER PRIMARY KEY," +
                "title TEXT," +
                "author TEXT," +
                "summary TEXT," +
                "price REAL," +
                "stock INTEGER)");

        db.execSQL("CREATE TABLE Users (" +
                "user_id INTEGER PRIMARY KEY," +
                "username TEXT," +
                "password TEXT," +
                "email TEXT," +
                "first_name TEXT," +
                "last_name TEXT," +
                "phone_num TEXT," +
                "address TEXT)");

        db.execSQL("CREATE TABLE Staff (" +
                "staff_id INTEGER PRIMARY KEY," +
                "username TEXT," +
                "password TEXT," +
                "email TEXT," +
                "first_name TEXT," +
                "last_name TEXT," +
                "phone_num TEXT," +
                "address TEXT)");

        db.execSQL("CREATE TABLE Categories (" +
                "cate_id INTEGER PRIMARY KEY," +
                "name TEXT)");

        db.execSQL("CREATE TABLE Book_Categories (" +
                "book_id INTEGER," +
                "cate_id INTEGER," +
                "FOREIGN KEY (book_id) REFERENCES Books(book_id)," +
                "FOREIGN KEY (cate_id) REFERENCES Categories(cate_id))");

        db.execSQL("CREATE TABLE Order_Books (" +
                "order_id INTEGER," +
                "book_id INTEGER," +
                "FOREIGN KEY (order_id) REFERENCES Orders(order_id)," +
                "FOREIGN KEY (book_id) REFERENCES Books(book_id))");
    }

    // Phương thức onUpgrade() sẽ được gọi khi phiên bản cơ sở dữ liệu được nâng cấp
    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        // Xóa các bảng cũ nếu tồn tại
        db.execSQL("DROP TABLE IF EXISTS Orders");
        db.execSQL("DROP TABLE IF EXISTS Books");
        db.execSQL("DROP TABLE IF EXISTS Users");
        db.execSQL("DROP TABLE IF EXISTS Staff");
        db.execSQL("DROP TABLE IF EXISTS Categories");
        db.execSQL("DROP TABLE IF EXISTS Book_Categories");
        db.execSQL("DROP TABLE IF EXISTS Order_Books");

        // Tạo lại cơ sở dữ liệu
        onCreate(db);
    }
}