/**
 * ------------
 * ストア用 DBテーブル型
 * ------------
 */
/** todo */
export interface Todo {
  id: number;
  text: string;
  isEdit: boolean;
  order: number;
  status: number;
  fade: boolean;
}