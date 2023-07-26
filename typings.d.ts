export interface ProductData {
    ID: string;
    ProductID: string;
    ProductName: string;
    Category: string;
    Description: string;
    Price: string;
}

export interface ReviewData {
    item_id: string;
    user_id: string;
    rating: string;
    review_summary: string;
    category: string;
    age: string;
    review_date: date;
}

export interface Clothing {
    item_id: string;
    user_id: string;
    user_name: string;
    prediction: string;
    category: string;
}