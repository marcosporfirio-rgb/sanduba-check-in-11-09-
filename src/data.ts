export const adsMetrics = [
  { label: 'Investimento', value: 'R$ 1.926,64', icon: 'DollarSign' },
  { label: 'Alcance/Views', value: '277.448', icon: 'Eye' },
  { label: 'Impressões', value: '277.782', icon: 'MousePointerClick' },
  { label: 'Compras', value: '522', icon: 'ShoppingCart' },
  { label: 'Receita atribuída', value: 'R$ 29.269,55', icon: 'TrendingUp' },
  { label: 'Custo por compra', value: 'R$ 3,69', icon: 'Tag' },
  { label: 'ROAS', value: '15,19x', icon: 'Activity' },
  { label: 'Ticket médio', value: 'R$ 56,07', icon: 'Receipt' },
];

export const unitSales = [
  {
    name: 'São Lourenço',
    pedidos: 2137,
    faturamentoBruto: 139349.00,
    cancelamentos: 1670.44,
    faturamentoLiquido: 137678.56,
    crescimento: '29,85%',
    isPositive: true,
    canais: [
      { name: 'Mesa', value: 59157.60 },
      { name: 'Delivery', value: 62212.60 },
      { name: 'Balcão', value: 17871.80 },
    ]
  },
  {
    name: 'Camaragibe',
    pedidos: 378,
    faturamentoBruto: 29011.10,
    cancelamentos: 972.62,
    faturamentoLiquido: 28038.48,
    crescimento: '-5,40%',
    isPositive: false,
    canais: [
      { name: 'Mesa', value: 12689.60 },
      { name: 'Delivery', value: 13173.20 },
      { name: 'Balcão', value: 3148.30 },
    ]
  }
];

export const consolidatedMetrics = [
  { label: 'Pedidos', value: '2.515' },
  { label: 'Faturamento Bruto', value: 'R$ 168.360,10' },
  { label: 'Faturamento Líquido', value: 'R$ 165.717,04' },
  { label: 'Ticket Médio Bruto', value: 'R$ 66,94' },
];

export const participacaoUnidades = [
  { name: 'São Lourenço', value: 82.8, fill: '#ea580c' }, // orange-600
  { name: 'Camaragibe', value: 17.2, fill: '#fdba74' },  // orange-300
];

export const previousFestivalResults = [
  { day: 'Sexta', offer: 'Leve 2 Pague 1', spend: 'R$ 94,96', roas: '21,9x', purchases: 39, cpa: 2.43, status: 'success' },
  { day: 'Quinta', offer: 'Upgrade (+ batata/shake)', spend: 'R$ 89,50', roas: '17,0x', purchases: 30, cpa: 2.98, status: 'success' },
  { day: 'Terça', offer: 'Clone por R$ 41,90', spend: 'R$ 87,92', roas: '8,2x', purchases: 16, cpa: 5.50, status: 'warning' },
  { day: 'Quarta', offer: '2º Defumado por R$ 19,90', spend: 'R$ 88,53', roas: '7,2x', purchases: 9, cpa: 9.84, status: 'danger' },
];

export const secretFestivalOffers = [
  { day: 'Terça Secreta', name: 'O Clone Misterioso', goal: 'Melhorar a terça-feira baixando o CPA', mechanic: 'Clone de um sanduíche premium surpresa revelado só no dia. A ancoragem de valor deve ser maior que os R$ 41,90 anteriores.' },
  { day: 'Quarta Confidencial', name: 'A Senha de Quarta', goal: 'Reverter o mau resultado da última quarta (CPA R$ 9,84)', mechanic: 'Em vez de um 2º item caro, o cliente ganha 50% no 2º sanduíche se usar a senha secreta vazada nos stories.' },
  { day: 'Quinta do Acesso Negado', name: 'O Upgrade Vazado', goal: 'Escalar a oferta vencedora', mechanic: 'A mesma mecânica de upgrade por R$ 12,90 que já funcionou, embalada como um "erro do sistema" ou "código vazado" de 24h.' },
  { day: 'Sexta VIP', name: 'O Verdadeiro 2 por 1', goal: 'Estourar vendas com a melhor mecânica', mechanic: 'Leve 2 Pague 1. A pegadinha? A oferta não fica no cardápio, só tem acesso ao link quem estiver no grupo VIP do WhatsApp.' },
];

export const camaragibeBestPromo = [
  { label: 'Investimento aproximado', value: 'R$ 50,00', icon: 'DollarSign' },
  { label: 'Compras atribuídas', value: '22', icon: 'ShoppingCart' },
  { label: 'Receita atribuída', value: 'R$ 1.274,90', icon: 'TrendingUp' },
  { label: 'Custo médio por compra', value: 'R$ 2,34', icon: 'Tag' },
  { label: 'ROAS aproximado', value: '25,5x', icon: 'Activity' },
  { label: 'Ticket médio atribuído', value: 'R$ 57,95', icon: 'Receipt' },
];

export const camaragibePromoCalendar = [
  { week: 'Semana 1', promo: 'Festival em Dobro', goal: 'Aumentar pedidos e atrair novos clientes' },
  { week: 'Semana 2', promo: 'Combo Secreto', goal: 'Elevar o ticket médio' },
  { week: 'Semana 3', promo: 'Quinta do Segundo', goal: 'Recuperar movimento em dia mais fraco' },
  { week: 'Semana 4', promo: 'Festival Camaragibe', goal: 'Criar exclusividade para a unidade' },
];

export const camaragibeGoals = [
  { label: 'Faturamento mensal atual', value: 'Aprox. R$ 30 mil' },
  { label: 'Primeira meta mensal', value: 'R$ 35 mil' },
  { label: 'Meta posterior', value: 'R$ 40 mil' },
  { label: 'Custo por compra promocional', value: 'Até R$ 4,00' },
  { label: 'Ticket médio desejado', value: 'Acima de R$ 55,00' },
  { label: 'Frequência', value: 'Uma promoção forte/sem. ou quinzenal' },
];
