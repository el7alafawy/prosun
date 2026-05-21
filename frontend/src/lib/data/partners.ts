import type { Partner } from "@/lib/types";

export const partners: Partner[] = [
  {
    name: "المدارس المتقدمة",
    icon: "fa-solid fa-building-columns",
    promo: {
      title: "شراكة استراتيجية",
      description: "تعاون طويل المدى في تطوير القطاع التعليمي والاستثماري.",
    },
  },
  { name: "القطاع التعليمي", icon: "fa-solid fa-school" },
  { name: "حضانات معتمدة", icon: "fa-solid fa-baby" },
  { name: "رياض الأطفال", icon: "fa-solid fa-children" },
  {
    name: "مراكز الضيافة",
    icon: "fa-solid fa-house-medical",
    promo: {
      title: "برنامج التطوير المؤسسي",
      description: "دعم خاص لمراكز الضيافة الناشئة في رفع جاهزيتها التشغيلية.",
    },
  },
  { name: "شركاء الاستثمار", icon: "fa-solid fa-handshake-angle" },
];
