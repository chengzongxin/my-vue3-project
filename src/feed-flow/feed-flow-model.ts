export enum FeedFlowType {
  NORMAL = "normal",
  DYNAMIC = "dynamic",
  COMMENT = "comment",
}

export type FeedFlowModel = {
  type: FeedFlowType;
  user: {
    avatar: string;
    name: string;
    desc: string;
    identify: string;
  };
  info: {
    time: string;
    stage: string;
  };
  importantConent: string;
  content: string;
  imageList: FeedFlowImageList[];
  imageLimitCount: number;
  location: string;
  track?: {};
};

export type FeedFlowImageList = {
  imageUrl: string;
  thumbnailImageUrl: string;
  id: number;
};
