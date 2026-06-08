import {
  KIT_SCORECARDS,
  KOL_DATA,
  INSIGHTS,
  ACTIONS,
  ISP_PILLARS,
  MEDICAL_OBJECTIVES,
  LISTENING_PRIORITIES,
  PRODUCT_OPTIONS,
  CONGRESS_OPTIONS,
} from '../config';

export function retrieveContext(query, selectedProduct) {
  const q = query.toLowerCase();
  const product = PRODUCT_OPTIONS.find(p => p.id === selectedProduct) || PRODUCT_OPTIONS[0];
  let context = [];

  context.push(
    `Current product context: ${product.name} (${product.generic}). Indications: ${product.indications.join(', ')}. Route: ${product.administrationRoute}.`
  );

  // KITs / signal velocity
  if (
    q.includes('kit') || q.includes('signal') || q.includes('velocity') ||
    q.includes('theme') || q.includes('trend') || q.includes('insight theme') ||
    q.includes('ivig') || q.includes('iv to sc') || q.includes('transition') ||
    q.includes('cidp') || q.includes('gmg') || q.includes('mg') ||
    q.includes('fcrn') || q.includes('rystiggo') || q.includes('imaavy') ||
    q.includes('competitor') || q.includes('sc') || q.includes('subcutaneous') ||
    q.includes('payer') || q.includes('budget') || q.includes('self-inject')
  ) {
    context.push(
      '## Key Insight Themes (KITs)\n' +
      KIT_SCORECARDS.map(k =>
        `- **${k.name}**: ${k.currentMentions} mentions (${k.percentChange > 0 ? '+' : ''}${k.percentChange.toFixed(1)}%), ` +
        `sentiment: ${k.currentSentiment.toFixed(2)}, relevance: ${k.relevanceScore}/100, status: ${k.status}. ${k.aiSummaryCurrent}`
      ).join('\n')
    );
  }

  // Insights
  if (
    q.includes('insight') || q.includes('finding') || q.includes('gap') ||
    q.includes('alignment') || q.includes('lacomis') || q.includes('diverge') ||
    q.includes('community') || q.includes('access') || q.includes('payer') ||
    q.includes('nmosd') || q.includes('switch') || q.includes('pediatric') ||
    q.includes('ahus') || q.includes('guideline') || q.includes('rwe')
  ) {
    const words = q.split(/\s+/).filter(w => w.length > 3);
    const scored = INSIGHTS.map(i => {
      const text = (i.title + ' ' + i.summary).toLowerCase();
      const hits = words.filter(w => text.includes(w)).length;
      return { i, hits };
    }).filter(x => x.hits > 0).sort((a, b) => b.hits - a.hits);
    const toShow = scored.length > 0 ? scored.slice(0, 4).map(x => x.i) : INSIGHTS.slice(0, 3);
    context.push(
      '## Strategic Insights\n' +
      toShow.map(i =>
        `- **${i.title}** (${i.priority} priority, confidence ${Math.round(i.confidenceScore * 100)}%, status ${i.status}): ${i.summary}`
      ).join('\n')
    );
  }

  // Actions
  if (
    q.includes('action') || q.includes('recommend') || q.includes('next step') ||
    q.includes('should we') || q.includes('engage') || q.includes('program') ||
    q.includes('deploy') || q.includes('brief')
  ) {
    context.push(
      '## Recommended Actions\n' +
      ACTIONS.map(a =>
        `- **${a.id}**: ${a.title} — Owner: ${a.owner || 'TBD'}, Due: ${a.dueBy || 'TBD'}, Status: ${a.status}` +
        (a.strategyImpact ? `, Impact: ${a.strategyImpact}` : '')
      ).join('\n')
    );
  }

  // KOLs
  if (
    q.includes('kol') || q.includes('opinion leader') || q.includes('expert') ||
    q.includes('investigator') || q.includes('engagement') || q.includes('physician') ||
    q.includes('lacomis') || q.includes('wolfe') || q.includes('vincent') ||
    q.includes('kaminski') || q.includes('sanders') || q.includes('rajabally') ||
    q.includes('querol') || q.includes('dalakas') || q.includes('howard')
  ) {
    const productKols = KOL_DATA.filter(k =>
      !selectedProduct || k.productAlignment.includes(selectedProduct)
    ).slice(0, 10);
    const toShow = productKols.length > 0 ? productKols : KOL_DATA.slice(0, 8);
    context.push(
      '## Key Opinion Leaders\n' +
      toShow.map(k =>
        `- **${k.name}** (${k.institution}, ${k.country}): ${k.specialty}, ${k.engagementTier}, ` +
        `influence: ${k.influenceScore}/100, focus: ${k.focusAreas.join(', ')}`
      ).join('\n')
    );
  }

  // Strategic framework
  if (
    q.includes('strateg') || q.includes('imperative') || q.includes('isp') ||
    q.includes('objective') || q.includes('pillar') || q.includes('coverage') ||
    q.includes('medical objective')
  ) {
    context.push(
      '## ISP Pillars\n' +
      ISP_PILLARS.map(p => `- **${p.title}**: ${p.description}`).join('\n')
    );
    context.push(
      '## Medical Objectives\n' +
      MEDICAL_OBJECTIVES.map(m => `- **${m.id} — ${m.name}**: ${m.description}`).join('\n')
    );
  }

  // Listening priorities / KIQs
  if (
    q.includes('listening') || q.includes('kiq') || q.includes('research question') ||
    q.includes('listening priority')
  ) {
    context.push(
      '## Listening Priorities & Key Intelligence Questions\n' +
      LISTENING_PRIORITIES.map(lp => `- **${lp.name}**: ${lp.kiq}`).join('\n')
    );
  }

  // Congress
  if (
    q.includes('congress') || q.includes('conference') || q.includes('aan') ||
    q.includes('ean') || q.includes('abstract') || q.includes('poster') ||
    q.includes('efns') || q.includes('eular') || q.includes('ash')
  ) {
    const available = CONGRESS_OPTIONS.filter(c => c.available).map(c => c.name).join(', ');
    const upcoming = CONGRESS_OPTIONS.filter(c => !c.available).map(c => c.name).join(', ');
    context.push(
      `## Congress Intelligence\nCurrent / recent congresses: ${available}\nUpcoming: ${upcoming || 'None listed'}`
    );
  }

  // Products / FcRn platform
  if (
    q.includes('vyvgart') || q.includes('efgartigimod') || q.includes('hytrulo') ||
    q.includes('empasiprubart') || q.includes('argx') || q.includes('fcrn') ||
    q.includes('platform') || q.includes('product portfolio') || q.includes('igg') ||
    q.includes('neonatal fc') || q.includes('pipeline')
  ) {
    context.push(
      '## Product Portfolio\n' +
      PRODUCT_OPTIONS.map(p =>
        `- **${p.name} (${p.generic})**: ${p.stage}. Indications: ${p.indications.join(', ')}. Route: ${p.administrationRoute}.`
      ).join('\n')
    );
  }

  return context.join('\n\n');
}
