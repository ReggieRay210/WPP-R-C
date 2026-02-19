export type Invoice = {
  id: string;
  customer_id:string;
  date:string;
  status: 'pending'|'on-going'|'completed' ; 
}