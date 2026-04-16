'use client';

import { MessageCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';

const WHATSAPP_NUMBER = '27795228493';
const DEFAULT_MESSAGE =
  'Hello Sala Investments, I am interested in your vehicle sourcing services.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

export default function WhatsAppButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_24px_rgba(37,211,102,0.4)] active:scale-95 [padding-bottom:env(safe-area-inset-bottom)]"
        >
          <MessageCircle className="size-6 fill-white" />
        </a>
      </TooltipTrigger>
      <TooltipContent
        side="left"
        sideOffset={8}
        className="bg-[#0B1D35] text-white"
      >
        Chat with us on WhatsApp
      </TooltipContent>
    </Tooltip>
  );
}
