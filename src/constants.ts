export const EVENT_INFO = {
  // ==========================================
  // INFORMAÇÕES DO EVENTO (EDITÁVEIS)
  // ==========================================
  name: "Matilde Fontoura Crespo",
  date: new Date("2026-09-03T12:00:00"),
  dateDisplay: "3 de Setembro de 2026",
  dayOfWeek: "Quinta-feira",
  time: "12:00",

  // URL da Foto de Capa (Matilde). 
  // Pode colocar o link de uma foto real aqui. Se deixar vazio (""), 
  // o sistema exibirá uma moldura elegante vintage de ilustração aquarela perolada.
  mainPhotoUrl: "", 

  ceremony: {
    name: "Igreja da Afurada",
    address: "R. da Igreja 11, 4400-410 Vila Nova de Gaia",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Igreja+da+Afurada+Gaia",
    image: "/images/igreja-afurada-3.png",
  },
  reception: {
    name: "Quinta do Alferes de Castro",
    address: "R. do Alferes de Castro, 4405-595 Gulpilhares",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Quinta+do+Alferes+de+Castro",
    image: "/images/quinta-alferes.jpg",
  },
  whatsapp: {
    // Número do WhatsApp com o DDI (Exemplo: 351 para Portugal + número)
    number: "351917433465", 
    // Mensagem automática enviada pelo convidado
    message: "Olá! Gostaria de confirmar a minha presença no batismo da Matilde. Somos [Número] pessoas.",
  },
  menu: {
    welcome: ["Canapés Variados", "Sumos Naturais", "Espumante de Boas-vindas"],
    main: ["Bacalhau com Broa e Batata a Murro", "Vitela Assada à Moda de Lafões"],
    dessert: ["Mesa de Doces Tradicionais", "Frutas Laminadas", "Bolo de Batismo"],
  }
};

