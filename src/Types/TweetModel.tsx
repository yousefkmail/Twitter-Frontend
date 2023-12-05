export interface TweetModel {
  contentText: string;
  isLiked: boolean;
  Images: [string];
  Videos: [string];
  likesCount: number;
  superTweet: string;
  createdAt: Date;
  _id: string;
  publisher: {
    id: string;
    icon: string;
    name: string;
  };
}
