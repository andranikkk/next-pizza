"use client";

import { Api } from "@/shared/services/api-client";
import { IStory } from "@/shared/services/stories";
import React, { useEffect, useState } from "react";
import { Container } from "./container";
import { cn } from "@/shared/lib/utils";
import { X } from "lucide-react";
import ReactStories from "react-insta-stories";

interface Props {
  className?: string;
}

export const Stories: React.FC<Props> = ({ className }) => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<IStory>();

  useEffect(() => {
    async function fetchStories() {
      const data = await Api.stories.getAll();
      setStories(data);
    }

    fetchStories();
  }, []);

  const onClickStory = (story: IStory) => {
    setSelectedStory(story);

    if (story.items.length > 0) {
      setOpen(true);
    }
  };

  return (
    <Container
      className={cn("flex items-center justify-between gap-2 my-10", className)}
    >
      {stories.length === 0 && [
        ...Array(6).map((_, index) => (
          <div
            className="w-[200px] h-[250] bg-gray-200 rounded-md animate-pulse"
            key={index}
          />
        )),
      ]}

      {stories.map((story) => (
        <img
          key={story.id}
          className="rounded-md cursor-pointer"
          src={story.previewImageUrl}
          alt="Story"
          onClick={() => onClickStory(story)}
          height={250}
          width={200}
        />
      ))}

      {open && (
        <div className="absolute left-0 top-0 w-full h-full bg-black/80 flex items-center justify-center z-30">
          <div className="relative" style={{ width: 520 }}>
            <button>
              <X className="absolute top-0 right-0 w-8 h-8 to-white/50" />
            </button>

            <ReactStories
              onAllStoriesEnd={() => setOpen(false)}
              stories={
                selectedStory?.items.map((item) => ({
                  url: item.sourceUrl,
                })) || []
              }
              defaultInterval={3000}
              width={520}
              height={800}
            />
          </div>
        </div>
      )}
    </Container>
  );
};
