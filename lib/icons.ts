import {
  Layout,
  Database,
  Server,
  Smartphone,
  Brain,
  Clock,
  Code,
  RefreshCw,
  Plug,
  WifiOff,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  "plug": Plug,
  "layout": Layout,
  "wifi-off": WifiOff,
  "server": Server,
  "refresh-cw": RefreshCw,
  "bar-chart-3": BarChart3,
  "clock": Clock,
  "brain": Brain,
  "smartphone": Smartphone,
  "code": Code,
  "database": Database,
};

export function resolveIcon(iconId: string): LucideIcon | undefined {
  return ICON_MAP[iconId];
}
