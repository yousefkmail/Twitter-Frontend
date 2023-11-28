export interface TweetModel {
  contentText: string;
  isLiked: boolean;
  Images: [string];
  Videos: [string];
  likesCount: number;
  _id: string;
  publisher: {
    id: string;
    icon: string;
    name: string;
  };
}
