import {
  AudioIcon,
  FileTextIcon,
  LinkIcon,
  PlayIcon,
} from "@/components/icons";
import { KIND_LABELS, type ContentKind } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = {
  video: PlayIcon,
  document: FileTextIcon,
  audio: AudioIcon,
  link: LinkIcon,
};

export function KindBadge({
  kind,
  className,
}: {
  kind: ContentKind;
  className?: string;
}) {
  const Icon = icons[kind];

  return (
    <span className={cn("badge", className)}>
      <Icon className="size-3" />
      {KIND_LABELS[kind]}
    </span>
  );
}
