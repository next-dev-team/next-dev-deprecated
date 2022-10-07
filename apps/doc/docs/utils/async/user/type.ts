export interface IBlog {
  id: number;
  status: string;
  user_created: string;
  date_created: string;
  user_updated?: any;
  date_updated?: any;
  title: string;
  photo: string;
  iframeUr: string;
  short_description: string;
  description?: any;
}
