import React from 'react';
import { 
  TrendingUp, DollarSign, Eye, MousePointerClick, ShoppingCart, Tag, Activity, Receipt, 
  AlertCircle, CheckCircle2, ArrowRight, Store, MapPin, Calendar, Gift, ChevronRight, Target, Flame, Megaphone
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, Label
} from 'recharts';
import { 
  adsMetrics, unitSales, consolidatedMetrics, participacaoUnidades, secretFestivalOffers, previousFestivalResults,
  camaragibeBestPromo, camaragibePromoCalendar, camaragibeGoals
} from './data';

const Icons: Record<string, React.ElementType> = {
  DollarSign, Eye, MousePointerClick, ShoppingCart, TrendingUp, Tag, Activity, Receipt
};

function MetricCard({ label, value, icon: IconName }: { label: string, value: string | React.ReactNode, icon?: string }) {
  const Icon = IconName ? Icons[IconName] : null;
  return (
    <div className="p-5 bg-white rounded-2xl border border-neutral-100 shadow-sm flex flex-col items-start gap-4">
      {Icon && <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl"><Icon size={24} strokeWidth={2} /></div>}
      <div>
        <p className="text-sm text-neutral-500 font-medium mb-1">{label}</p>
        <p className="text-2xl font-bold text-neutral-900 tracking-tight">{value}</p>
      </div>
    </div>
  );
}

function Section({ title, children, id, icon: Icon }: { title: string, children: React.ReactNode, id?: string, icon?: React.ElementType }) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        {Icon && <div className="p-2 bg-neutral-900 text-white rounded-lg"><Icon size={20} /></div>}
        <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>
      </div>
      <div className="bg-white rounded-3xl shadow-sm border border-neutral-200 overflow-hidden">
        {children}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800">
      {/* Header */}
      <header className="bg-neutral-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <Flame size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Check-in — Sanduba Secreto</h1>
              <p className="text-neutral-400 text-sm font-medium">Agosto 2026</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12 max-w-3xl">
          <p className="text-xl text-neutral-600 leading-relaxed">
            Estruturei o check-in com uma leitura gerencial dos dados, os principais pontos de atenção e os próximos passos comerciais.
          </p>
        </div>

        {/* 1. Visão geral de campanhas */}
        <Section title="1. Visão geral de campanhas — Meta Ads" icon={Target}>
          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {adsMetrics.map((metric, i) => (
                <MetricCard key={i} {...metric} />
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Campanhas que geraram resultado
                </h3>
                <div className="space-y-4">
                  <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100">
                    <p className="font-bold text-neutral-900 mb-1">Campanha de vendas São Lourenço</p>
                    <p className="text-neutral-600">289 compras, com <span className="font-semibold text-neutral-900">R$ 16.347,24</span> em receita atribuída.</p>
                  </div>
                  <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100">
                    <p className="font-bold text-neutral-900 mb-1">Campanha Festival</p>
                    <p className="text-neutral-600">233 compras, com <span className="font-semibold text-neutral-900">R$ 12.922,31</span> em receita atribuída.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Activity size={20} className="text-blue-600" />
                  Análise
                </h3>
                <div className="prose prose-neutral">
                  <p>
                    O resultado geral de mídia foi <strong>positivo</strong>, principalmente pelo ROAS de 15,19x e pelo custo por compra de R$ 3,69. Isso mostra que as campanhas continuam gerando vendas com boa eficiência.
                  </p>
                  <p>
                    Entretanto, os resultados estão concentrados em <strong>apenas duas campanhas</strong> e em promoções que já foram utilizadas anteriormente. A repetição excessiva pode provocar desgaste da comunicação e reduzir a capacidade de chamar atenção ao longo dos próximos meses.
                  </p>
                  <p className="text-sm bg-blue-50 p-4 rounded-xl border border-blue-100 mt-4 text-blue-900">
                    <strong>Atenção:</strong> O valor atribuído pelo Meta não representa necessariamente faturamento incremental. A plataforma pode atribuir compras de clientes que já comprariam da marca. Por isso, a análise deve sempre cruzar mídia, faturamento real e evolução dos pedidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Visão geral de vendas */}
        <Section title="2. Visão geral de vendas" icon={Store}>
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
            {/* São Lourenço */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <MapPin size={20} className="text-orange-500" />
                  São Lourenço
                </h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">
                  +29,85%
                </span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-end border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Pedidos</span>
                  <span className="font-bold text-lg">2.137</span>
                </div>
                <div className="flex justify-between items-end border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Fat. Bruto</span>
                  <span className="font-bold text-lg">R$ 139.349,00</span>
                </div>
                <div className="flex justify-between items-end border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Cancelamentos</span>
                  <span className="font-bold text-lg text-red-600">R$ 1.670,44</span>
                </div>
                <div className="flex justify-between items-end pb-2">
                  <span className="text-neutral-900 font-medium">Fat. Líquido</span>
                  <span className="font-bold text-xl text-green-700">R$ 137.678,56</span>
                </div>
              </div>

              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={unitSales[0].canais} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={60} />
                    <RechartsTooltip cursor={{fill: '#f5f5f5'}} formatter={(val) => `R$ ${Number(val).toLocaleString('pt-BR', {minimumFractionDigits:2})}`} />
                    <Bar dataKey="value" fill="#ea580c" radius={[0, 4, 4, 0]} barSize={24} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-neutral-600">
                Melhor resultado da operação, com crescimento expressivo. O delivery foi o principal canal, seguido de perto pelo consumo em mesa.
              </p>
            </div>

            {/* Camaragibe */}
            <div className="p-8 bg-neutral-50/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <MapPin size={20} className="text-orange-500" />
                  Camaragibe
                </h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-bold rounded-full">
                  -5,40%
                </span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-end border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Pedidos</span>
                  <span className="font-bold text-lg">378</span>
                </div>
                <div className="flex justify-between items-end border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Fat. Bruto</span>
                  <span className="font-bold text-lg">R$ 29.011,10</span>
                </div>
                <div className="flex justify-between items-end border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Cancelamentos</span>
                  <span className="font-bold text-lg text-red-600">R$ 972,62</span>
                </div>
                <div className="flex justify-between items-end pb-2">
                  <span className="text-neutral-900 font-medium">Fat. Líquido</span>
                  <span className="font-bold text-xl text-neutral-700">R$ 28.038,48</span>
                </div>
              </div>

              <div className="h-48 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={unitSales[1].canais} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={60} />
                    <RechartsTooltip cursor={{fill: '#f5f5f5'}} formatter={(val) => `R$ ${Number(val).toLocaleString('pt-BR', {minimumFractionDigits:2})}`} />
                    <Bar dataKey="value" fill="#fdba74" radius={[0, 4, 4, 0]} barSize={24} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-neutral-600">
                Permanece como a unidade de menor faturamento, girando em torno de R$ 30 mil mensais, reforçando a necessidade de uma estratégia específica local.
              </p>
            </div>

            {/* Consolidado */}
            <div className="p-8">
              <h3 className="text-xl font-bold mb-6">Consolidado</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {consolidatedMetrics.map((m, i) => (
                  <div key={i} className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                    <p className="text-xs text-neutral-500 font-medium mb-1">{m.label}</p>
                    <p className="text-lg font-bold text-neutral-900">{m.value}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-neutral-500 mb-4 text-center uppercase tracking-wider">Participação no Faturamento</h4>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={participacaoUnidades}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {participacaoUnidades.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <RechartsTooltip formatter={(val) => `${val}%`} />
                      <Legend verticalAlign="bottom" height={36}/>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
                <h4 className="font-bold text-orange-900 mb-2">Diagnóstico Comercial</h4>
                <ul className="space-y-2 text-sm text-orange-800">
                  <li className="flex items-start gap-2">
                    <ArrowRight size={16} className="mt-0.5 shrink-0" />
                    <span><strong>São Lourenço:</strong> manter volume, aumentar ticket médio e estimular recompra.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={16} className="mt-0.5 shrink-0" />
                    <span><strong>Camaragibe:</strong> aumentar frequência, gerar descoberta local e ampliar o número de pedidos.</span>
                  </li>
                </ul>
                <p className="text-xs text-orange-700/80 mt-4 italic">
                  * Os dados de setembro representam um mês em andamento. A queda exibida no sistema não deve ser comparada diretamente com agosto.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 3 & 4. Promoções */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Organização das promoções */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <Section title="3. O Problema das Promoções" icon={AlertCircle}>
              <div className="p-8">
                <p className="text-neutral-600 mb-6">
                  As promoções recentes acabaram repetindo ofertas e formatos semelhantes. Manter a mesma mecânica por muito tempo pode causar:
                </p>
                <ul className="space-y-4">
                  {[
                    'Desgaste dos criativos;',
                    'Redução do senso de novidade;',
                    'Dependência de desconto;',
                    'Dificuldade para entender quais produtos realmente atraem novos clientes;',
                    'Percepção de que a promoção é permanente.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-red-50 text-red-900 rounded-xl border border-red-100">
                      <AlertCircle size={18} className="shrink-0 text-red-500 mt-0.5" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Section>

            <Section title="Nova Organização" icon={CheckCircle2}>
              <div className="p-8 bg-neutral-900 text-white rounded-b-3xl">
                <p className="text-neutral-300 mb-6 text-sm">
                  A proposta é manter o conceito de "festival", mas renovar o tema, os produtos, os nomes e a mecânica. Cada promoção deve ter:
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-neutral-200">
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/> Nome próprio</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/> Objetivo definido</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/> Período estipulado</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/> Produtos selecionados</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/> Unidade definida</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/> Canal de venda</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/> Margem mínima</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/> Peças específicas</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/> Código no sistema</div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"/> Resultado apurado</div>
                </div>
              </div>
            </Section>
          </div>

          {/* Festival Secreto */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <Section title="4. Estratégia e Ofertas — Festival Secreto" icon={Flame}>
              
              {/* Estratégia de Campanhas */}
              <div className="p-6 bg-orange-50 border-b border-orange-100">
                <h4 className="text-lg font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <Megaphone size={20} className="text-orange-600" />
                  Estratégia de Campanhas (Mídia Paga)
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-orange-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-orange-50 rounded-bl-full -z-0"></div>
                    <div className="flex items-center gap-2 mb-3 relative z-10">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                      <h5 className="font-bold text-neutral-900">1. Antecipação e Sustentação</h5>
                    </div>
                    <p className="text-sm text-neutral-600 relative z-10">
                      Campanhas focadas em anunciar o festival <strong>1 semana ou 3 dias antes</strong> do início. Devem gerar expectativa e <strong>se manter ativas</strong> até o final do festival.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-red-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full -z-0"></div>
                    <div className="flex items-center gap-2 mb-3 relative z-10">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                      <h5 className="font-bold text-neutral-900">2. Tiro Curto (Urgência)</h5>
                    </div>
                    <p className="text-sm text-neutral-600 relative z-10">
                      Campanhas agressivas que rodam <strong>apenas no dia</strong> da promoção específica, focadas em conversão imediata para a oferta que acabou de ser revelada.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ofertas */}
              <div className="p-0 border-t border-neutral-100">
                
                {/* Comparativo: Passado vs Futuro */}
                <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-neutral-100">
                  
                  {/* Passado */}
                  <div className="bg-neutral-50 p-6">
                    <h4 className="font-bold text-neutral-900 text-lg mb-4">Retrospectiva: Último Festival</h4>
                    <div className="space-y-3">
                      {previousFestivalResults.map((result, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-neutral-200 flex items-center justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">{result.day}</span>
                            </div>
                            <p className="text-sm font-bold text-neutral-900">{result.offer}</p>
                            <p className="text-xs text-neutral-500 mt-1">
                              Gasto: {result.spend} • {result.purchases} compras
                            </p>
                          </div>
                          <div className="text-right flex flex-col items-end">
                            <span className={`px-2.5 py-1 rounded-md text-xs font-bold mb-1 ${
                              result.status === 'success' ? 'bg-green-100 text-green-700' :
                              result.status === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              CPA: R$ {result.cpa.toFixed(2).replace('.', ',')}
                            </span>
                            <span className="text-xs text-neutral-400 font-medium">ROAS {result.roas}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Futuro (Propostas) */}
                  <div className="bg-white p-6">
                    <h4 className="font-bold text-orange-600 text-lg mb-4 flex items-center gap-2">
                      <Flame size={20} />
                      Novas Sugestões (Baseadas em Dados)
                    </h4>
                    <div className="space-y-4">
                      {secretFestivalOffers.map((offer, i) => (
                        <div key={i} className="p-4 rounded-xl border border-orange-100 bg-orange-50/30">
                          <div className="flex items-start gap-3 mb-2">
                            <span className="w-6 h-6 shrink-0 rounded bg-orange-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">{i+1}</span>
                            <div>
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">{offer.day}</span>
                              </div>
                              <p className="font-bold text-neutral-900">{offer.name}</p>
                            </div>
                          </div>
                          <div className="pl-9 space-y-2">
                            <p className="text-sm text-neutral-700"><strong>Mecânica:</strong> {offer.mechanic}</p>
                            <p className="text-xs text-orange-700 bg-orange-100/50 p-2 rounded-md"><strong>Objetivo:</strong> {offer.goal}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </Section>
          </div>
        </div>

        {/* 5. Planejamento Camaragibe */}
        <Section title="5. Planejamento específico — Unidade Camaragibe" icon={Target}>
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-neutral-100">
            {/* Esquerda: Diagnóstico e Resultados */}
            <div className="p-8">
              <p className="text-neutral-600 mb-8 text-lg">
                Camaragibe precisa de uma <strong>estratégia própria</strong>. A unidade responde melhor a promoções agressivas, com benefício direto, simples e fácil de entender.
              </p>
              
              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-orange-500" />
                Promoção de maior destaque (Compre 1 Leve 2)
              </h4>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {camaragibeBestPromo.map((metric, i) => (
                  <div key={i} className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                    <p className="text-xs text-orange-600/80 font-medium mb-1">{metric.label}</p>
                    <p className="font-bold text-orange-900 text-lg">{metric.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-500 italic mb-8">
                * Com apenas R$ 50, a ação gerou 22 compras. O principal desafio de Camaragibe não é falta de alcance, mas a necessidade de um incentivo comercial mais forte para gerar decisão imediata.
              </p>

              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Store size={20} className="text-orange-500" />
                Metas Iniciais
              </h4>
              <div className="space-y-3">
                {camaragibeGoals.map((goal, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-100">
                    <span className="text-sm text-neutral-600">{goal.label}</span>
                    <span className="font-bold text-neutral-900">{goal.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direita: Estratégia */}
            <div className="p-8 bg-neutral-50">
              <h4 className="font-bold text-neutral-900 mb-6 text-xl">Estratégia Recomendada</h4>
              
              <div className="space-y-8">
                <div>
                  <h5 className="font-bold text-orange-600 mb-3 flex items-center gap-2">1. Proteger a Margem</h5>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li className="flex items-start gap-2"><ArrowRight size={16} className="text-neutral-400 shrink-0 mt-0.5" /> Válida somente para produtos selecionados.</li>
                    <li className="flex items-start gap-2"><ArrowRight size={16} className="text-neutral-400 shrink-0 mt-0.5" /> O item gratuito deve ser o de menor ou igual valor.</li>
                    <li className="flex items-start gap-2"><ArrowRight size={16} className="text-neutral-400 shrink-0 mt-0.5" /> Considerar inclusão obrigatória de bebida/acompanhamento.</li>
                    <li className="flex items-start gap-2"><ArrowRight size={16} className="text-neutral-400 shrink-0 mt-0.5" /> Estabelecer limite por pedido/CPF, em dias de menor movimento.</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-orange-600 mb-3 flex items-center gap-2">2. Ciclo de Promoções Agressivas</h5>
                  <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-neutral-100 text-neutral-500">
                        <tr>
                          <th className="px-4 py-2 font-semibold">Semana</th>
                          <th className="px-4 py-2 font-semibold">Promoção</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {camaragibePromoCalendar.map((item, i) => (
                          <tr key={i}>
                            <td className="px-4 py-2 font-medium text-neutral-900">{item.week}</td>
                            <td className="px-4 py-2 text-neutral-600">{item.promo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-orange-600 mb-3 flex items-center gap-2">3. Funil de Aquisição e Recompra</h5>
                  <div className="space-y-2 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-orange-200">
                    {[
                      'Anúncio geolocalizado (raio restrito) apresenta a promoção (Budget: R$ 50/dia).',
                      'Cliente realiza o 1º pedido.',
                      'Pedido recebe um cupom físico de retorno (menor desconto, válido por 7 dias).',
                      'Cliente é impactado novamente por remarketing.',
                      'Acompanhar quantos clientes retornam sem a oferta agressiva principal.'
                    ].map((step, idx) => (
                      <div key={idx} className="flex gap-4 relative z-10">
                        <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold shrink-0 border-2 border-white">{idx + 1}</div>
                        <p className="text-sm text-neutral-700 mt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Section>

        {/* 6. Dia do Cliente */}
        <Section title="6. Dia do Cliente — 15 de setembro" icon={Gift}>
          <div className="p-8">
            <div className="max-w-3xl mb-10">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">Dia do Cliente Secreto</h3>
              <p className="text-xl font-medium text-neutral-800 italic">"No Dia do Cliente, o presente é por nossa conta."</p>
              <p className="text-neutral-500 mt-4">
                Como a data está próxima, a ação deve ser simples de executar e fácil de comunicar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* São Lourenço */}
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-orange-500" />
                  <h4 className="text-lg font-bold text-neutral-900">Estratégia: São Lourenço</h4>
                </div>
                <ul className="space-y-3 text-sm text-neutral-600 mb-6">
                  <li className="flex gap-2"><ChevronRight size={18} className="text-orange-500 shrink-0" /> Priorizar aumento de ticket médio.</li>
                  <li className="flex gap-2"><ChevronRight size={18} className="text-orange-500 shrink-0" /> Criar uma condição válida acima de um valor mínimo.</li>
                  <li className="flex gap-2"><ChevronRight size={18} className="text-orange-500 shrink-0" /> Estimular combos maiores, adicionais e sobremesas.</li>
                </ul>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-neutral-200">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Exemplo de Oferta</p>
                  <p className="font-bold text-neutral-900">“Nas compras acima de R$ 69,90, ganhe um acompanhamento especial.”</p>
                </div>
              </div>

              {/* Camaragibe */}
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-orange-500" />
                  <h4 className="text-lg font-bold text-neutral-900">Estratégia: Camaragibe</h4>
                </div>
                <ul className="space-y-3 text-sm text-neutral-600 mb-6">
                  <li className="flex gap-2"><ChevronRight size={18} className="text-orange-500 shrink-0" /> Utilizar uma oferta de entrada mais agressiva.</li>
                  <li className="flex gap-2"><ChevronRight size={18} className="text-orange-500 shrink-0" /> Trabalhar anúncios somente no raio da unidade.</li>
                  <li className="flex gap-2"><ChevronRight size={18} className="text-orange-500 shrink-0" /> Condição exclusiva para reativação e descoberta local.</li>
                </ul>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-neutral-200">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Exemplo de Oferta</p>
                  <p className="font-bold text-neutral-900">“Dia 15, peça um combo selecionado e ganhe uma bebida.”</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-orange-50 rounded-xl text-center text-sm font-medium text-orange-800 border border-orange-100">
              A oferta final precisa ser validada com base no custo dos produtos e na margem disponível.
            </div>
          </div>
        </Section>

        {/* 7. Próximas ações e Fechamento */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Section title="7. Próximas ações" icon={CheckCircle2}>
            <div className="p-8">
              <ol className="space-y-4">
                {[
                  'Definir a oferta oficial do Dia do Cliente.',
                  'Validar produtos, preços e margem com a operação.',
                  'Criar uma campanha específica para cada unidade.',
                  'Desenvolver novos criativos, evitando reutilizar a mesma comunicação.',
                  'Organizar o calendário promocional dos próximos 30 dias.',
                  'Dar atenção especial a Camaragibe com campanhas geolocalizadas.',
                  'Separar campanhas de aquisição, remarketing e promoções.',
                  'Avaliar os resultados por unidade, canal, promoção e ticket médio.',
                  'Medir quantos clientes do Dia do Cliente retornam posteriormente.',
                  'Encerrar cada promoção com uma análise antes de repetir a mecânica.'
                ].map((action, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-neutral-700">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-100 text-neutral-500 font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{action}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Section>

          <div className="flex flex-col h-full">
            <div className="bg-neutral-900 text-white rounded-3xl p-10 flex-grow shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-orange-500">Fechamento do check-in</h2>
              <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                <p>
                  O cenário geral é <strong className="text-white">positivo</strong>: as campanhas apresentaram boa eficiência e São Lourenço teve forte crescimento. O principal ponto de atenção é a diferença de faturamento entre as unidades e a repetição das promoções.
                </p>
                <p>
                  O próximo ciclo deve preservar o conceito de “festival”, mas trazer novos nomes, produtos e benefícios. 
                </p>
                <div className="pt-6 border-t border-neutral-700 space-y-4 text-base">
                  <div className="flex gap-3">
                    <MapPin className="text-orange-500 shrink-0 mt-1" size={20} />
                    <p><strong className="text-white">São Lourenço:</strong> trabalhar para elevar ticket e recorrência.</p>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="text-orange-500 shrink-0 mt-1" size={20} />
                    <p><strong className="text-white">Camaragibe:</strong> precisa de ações específicas para aumentar o volume de pedidos e conquistar presença local.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

