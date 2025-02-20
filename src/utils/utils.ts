import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatCreatedAtDate(date: string) {
  const timeAgo = formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR,
  });

  return timeAgo;
}
