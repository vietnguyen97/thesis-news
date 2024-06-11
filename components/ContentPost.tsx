"use client";

import { getRandomInt } from "@/lib/format";
import DOMPurify from "dompurify";

const ContentPost: React.FC<{ data: string; images: any }> = ({
  data,
  images,
}) => {
  const dataFormat = data.split("\n");
  let indexRandom: any;
  if (images && images.length > 0) {
    indexRandom = images.map(() => getRandomInt(dataFormat.length));
  }

  if (indexRandom?.length > 0) {
    indexRandom?.map((el: any, index: number) => {
      if (index === 1 || index === 3 || index === 5) {
        dataFormat.splice(
          el,
          0,
          `<img alt="image" src=${images[index]?.url || ""} />`
        );
      }
    });
  }

  const rawHTML = `${dataFormat.join('<p class="mb-3" />')}`;
  return (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} />
  );
};

export default ContentPost;
