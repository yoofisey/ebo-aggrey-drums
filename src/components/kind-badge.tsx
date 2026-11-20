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
    <span
      className={cn(
        "control inline-flex items-center gap-2 px-3 py-2 text-[12px] font-semibold text-line",
        className,
      )}
    >
      <Icon className="size-4" />
      {KIND_LABELS[kind]}
    </span>
  );
}
