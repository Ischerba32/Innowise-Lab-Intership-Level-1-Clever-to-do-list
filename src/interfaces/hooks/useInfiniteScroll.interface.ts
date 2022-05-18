import { MutableRefObject } from "react";

export default interface IUseInfiniteScroll {
  loadMoreRef: MutableRefObject<null>;
  month: number;
}