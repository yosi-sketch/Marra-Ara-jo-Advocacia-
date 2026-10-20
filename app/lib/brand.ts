// Dados fornecidos pelo cliente em 20/10/2026; WhatsApp confirmado na conversa.
export const brand = {
  name: "Dra. Fernanda Marra",
  businessName: "Marra Araújo Advocacia",
  phone: "(31) 2601-0969",
  phoneDigits: "553126010969",
  whatsappDigits: "553126010969",
  address: "R. Coletor José Viêira, 30 — Centro, Sabará — MG, 34505-450",
  location: "Sabará · MG",
  logo: "/marra-araujo-logo.png",
  portrait: "/fernanda-marra-institucional.png",
  institutionalPhoto: "/fernanda-marra-institucional.png",
  googleReviewCount: 26,
  googleRating: 5,
  googleReviewsProvidedOn: "20/10/2026",
  instagram: "https://www.instagram.com/marraaraujo.adv/",
  instagramHandle: "@marraaraujo.adv",
};
export function whatsappFor(subject?: string) {
  const message = subject
    ? `Olá, Dra. Fernanda! Gostaria de informações sobre ${subject}.`
    : "Olá, Dra. Fernanda! Gostaria de agendar um atendimento no Marra Araújo Advocacia.";
  return `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
export const whatsapp = whatsappFor();
export const contact = whatsapp;
export const telephone = `tel:+${brand.phoneDigits}`;
export const maps = "https://www.google.com/maps?cid=17189140807822723012";
export const reviews = maps;
