export interface TweetModel {
  contentText: string;
  Images: [string];
  Videos: [string];
  _id: string;
  publisher: {
    id: string;
    icon: string;
    name: string;
  };
}
