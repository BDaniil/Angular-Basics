export interface BookModel {
    ISBN: number;
    title: string;
    author: string;
    summary: string;
    image: string;
    price: PriceModel;
  }
  
interface PriceModel {
    currency: string;
    value: number;
    displayValue: string;
  }