import { queryClaudeAPI } from './claudeApi';
import { queryOpenAIAPI } from './openaiApi';
import { buildSystemPrompt } from './promptBuilder';
import { retrieveContext } from './rag';
import {
  KIT_SCORECARDS,
  KOL_DATA,
  INSIGHTS,
  ACTIONS,
  CLIENT,
  PRODUCT_OPTIONS,
  CONGRESS_OPTIONS,
} from '../config';

function keywordFallback(query, selectedProduct) {
  const q = query.toLowerCase();
  const product = PRODUCT_OPTIONS.find(p => p.id === selectedProduct) || PRODUCT_OPTIONS[0];
  const productKols = KOL_DATA.filter(k =>
    !selectedProduct || k.productAlignment.includes(selectedProduct)
  );

  // KITs / signal velocity
  if (
    q.includes('kit') || q.includes('signal') || q.includes('velocity') ||
    q.includes('theme') || q.includes('trend') || q.includes('what is happening') ||
    q.includes('what\'s happening')
  ) {
    return `## Key Insight Themes (KITs)\n\n${KIT_SCORECARDS.map(k =>
      `### ${k.name}\n- **Status:** ${k.status} | Mentions: ${k.currentMentions} (${k.percentChange > 0 ? '+' : ''}${k.percentChange.toFixed(1)}% vs prior)\n- **Sentiment:** ${k.currentSentiment.toFixed(2)} (was ${k.priorSentiment.toFixed(2)})\n\n${k.aiSummaryCurrent}`
    ).join('\n\n')}`;
  }

  // SC transition / IVIg / modality
  if (
    q.includes('sc') || q.includes('subcutaneous') || q.includes('hytrulo') ||
    q.includes('ivig') || q.includes('iv to sc') || q.includes('transition') ||
    q.includes('self-inject') || q.includes('home admin') || q.includes('infusion')
  ) {
    const scKit = KIT_SCORECARDS.find(k => k.name.toLowerCase().includes('transition') || k.name.toLowerCase().includes('sc'));
    const trainingKit = KIT_SCORECARDS.find(k => k.name.toLowerCase().includes('training') || k.name.toLowerCase().includes('confidence'));
    return `## SC Modality Transition Intelligence\n\n${scKit ? `### ${scKit.name}\n${scKit.aiSummaryCurrent}` : ''}\n\n${trainingKit ? `### ${trainingKit.name}\n${trainingKit.aiSummaryCurrent}` : ''}\n\nOpen LUCA for per-KOL SC adoption stance and MSL engagement recommendations. See NOVA Actions tab for the community-facing switch-stability narrative initiative (A1, A6).`;
  }

  // CIDP
  if (
    q.includes('cidp') || q.includes('chronic inflammatory') || q.includes('earlier-line') ||
    q.includes('earlier line') || q.includes('adhere') || q.includes('ivig') ||
    q.includes('rituximab')
  ) {
    const cidpKit = KIT_SCORECARDS.find(k => k.name.toLowerCase().includes('cidp'));
    return `## CIDP Earlier-Line Treatment Intelligence\n\n${cidpKit ? `### ${cidpKit.name}\n${cidpKit.aiSummaryCurrent}` : 'CIDP earlier-line positioning is the primary growth opportunity for Vyvgart Hytrulo, driven by ADHERE study data at EAN 2025.'}\n\nStrategic insight AI2 (gMG guideline positioning) and AI3 are linked. Actions A3 and A4 address neurologist education and MSL briefing needs.\n\nAsk about specific CIDP KOLs or the ADHERE data readout for more detail.`;
  }

  // Competitors / FcRn differentiation
  if (
    q.includes('compet') || q.includes('rystiggo') || q.includes('rozanolixizumab') ||
    q.includes('imaavy') || q.includes('nipocalimab') || q.includes('ucb') ||
    q.includes('differentiat') || q.includes('rival') || q.includes('threat')
  ) {
    const compKit = KIT_SCORECARDS.find(k => k.name.toLowerCase().includes('competitor') || k.name.toLowerCase().includes('fcrn'));
    return `## FcRn Competitor Differentiation\n\n${compKit ? `### ${compKit.name}\n${compKit.aiSummaryCurrent}` : ''}\n\n**Key Competitors:**\n- **Rystiggo (rozanolixizumab)** — UCB: SC-approved FcRn inhibitor in gMG. Dosing convenience narrative is a growing challenge to Vyvgart's positioning.\n- **IMAAVY (nipocalimab)** — J&J: Phase 3 readout in gMG; if positive, further erodes first-mover advantage.\n\nOpen LUCA for per-KOL competitive stance analysis. Lacomis is the key divergence KOL — public statements lean Rystiggo but MSL interactions show openness to FcRn class data.`;
  }

  // KOL alignment / divergence
  if (
    q.includes('alignment') || q.includes('diverge') || q.includes('public') ||
    q.includes('private') || q.includes('lacomis') || q.includes('social media') ||
    q.includes('twitter') || q.includes('linkedin') || q.includes('x.com')
  ) {
    const alignmentInsight = INSIGHTS.find(i => i.id === 'AI1');
    return `## KOL Public–Private Alignment\n\n${alignmentInsight ? alignmentInsight.summary : 'KOL alignment monitoring tracks public social posts versus private MSL interactions to surface divergence.'}\n\n**Key divergence case — Lacomis:** Public social posts favor Rystiggo convenience narrative; private MSL interactions show receptivity to FcRn class differentiation data. Prioritize scientific exchange exchange on IgG depth of reduction.\n\n**Top Tier 1 KOLs tracked for ${product.name}:**\n${productKols.filter(k => k.engagementTier === 'Tier 1').slice(0, 5).map(k =>
      `- **${k.name}** (${k.institution}): ${k.focusAreas[0]}`
    ).join('\n')}\n\nOpen LUCA for full per-KOL alignment scores and messaging gap breakdown.`;
  }

  // Insights
  if (
    q.includes('insight') || q.includes('finding') || q.includes('gap') ||
    q.includes('risk') || q.includes('issue') || q.includes('concern')
  ) {
    return `## Strategic Insights\n\n${INSIGHTS.map(i =>
      `### ${i.title}\n**Priority:** ${i.priority} | **Confidence:** ${Math.round(i.confidenceScore * 100)}% | **Status:** ${i.status}\n\n${i.summary}`
    ).join('\n\n')}`;
  }

  // Actions / recommendations
  if (
    q.includes('action') || q.includes('recommend') || q.includes('next step') ||
    q.includes('should we') || q.includes('what should') || q.includes('priority') ||
    q.includes('deploy') || q.includes('engage')
  ) {
    return `## Recommended Actions\n\n${ACTIONS.map(a =>
      `### ${a.id}: ${a.title}\n- **Owner:** ${a.owner || 'TBD'} | **Due:** ${a.dueBy || 'TBD'} | **Status:** ${a.status}${a.strategyImpact ? ` | **Impact:** ${a.strategyImpact}` : ''}`
    ).join('\n\n')}`;
  }

  // KOLs
  if (
    q.includes('kol') || q.includes('opinion leader') || q.includes('expert') ||
    q.includes('physician') || q.includes('engagement') || q.includes('who are')
  ) {
    const tier1 = productKols.filter(k => k.engagementTier === 'Tier 1').slice(0, 5);
    const toShow = tier1.length > 0 ? tier1 : KOL_DATA.slice(0, 5);
    return `## Key Opinion Leaders — ${product.name}\n\n${toShow.map(k =>
      `### ${k.name}\n- **Institution:** ${k.institution}, ${k.country}\n- **Specialty:** ${k.specialty} | **Influence:** ${k.influenceScore}/100\n- **Focus:** ${k.focusAreas.join(', ')}\n- **Strategy:** ${k.recommendedStrategy}`
    ).join('\n\n')}\n\n*${productKols.length} total KOLs tracked for this product.*`;
  }

  // Vyvgart / efgartigimod
  if (
    q.includes('vyvgart') || q.includes('efgartigimod') || q.includes('gmg') ||
    q.includes('myasthenia') || q.includes('itp') || q.includes('immune thrombocytopenia')
  ) {
    const vyvgart = PRODUCT_OPTIONS.find(p => p.id === 'vyvgart');
    const hytrulo = PRODUCT_OPTIONS.find(p => p.id === 'vyvgart-hytrulo');
    return `## Vyvgart / Efgartigimod Portfolio Intelligence\n\n**Vyvgart (efgartigimod alfa):** ${vyvgart?.indications.join(', ')} — ${vyvgart?.stage}\n**Vyvgart Hytrulo (efgartigimod alfa + hyaluronidase):** ${hytrulo?.indications.join(', ')} — ${hytrulo?.stage}\n\nThe SC modality transition from IV to Hytrulo is the primary Medical Affairs priority this cycle — driven by infusion center capacity, home administration preference, and payer site-of-care economics.\n\nAsk about KOL engagement strategy, CIDP earlier-line positioning, SC self-injection confidence, or FcRn competitor differentiation for more detail.`;
  }

  // Empasiprubart / pipeline
  if (
    q.includes('empasiprubart') || q.includes('argx-117') || q.includes('pipeline') ||
    q.includes('mmn') || q.includes('dgf') || q.includes('lupus nephritis') ||
    q.includes('anti-c2') || q.includes('phase 3')
  ) {
    const pipeline = PRODUCT_OPTIONS.find(p => p.id === 'empasiprubart');
    return `## Empasiprubart (ARGX-117) Pipeline Intelligence\n\n**Mechanism:** Anti-C2 (complement pathway) — distinct from efgartigimod FcRn mechanism\n**Stage:** ${pipeline?.stage}\n**Target Indications:** ${pipeline?.indications.join(', ')}\n\nPipeline KOL engagement is Medical Objective MO3. Action A5 targets gMG guideline steering KOLs; rheumatology and neuromuscular KOL identification for Phase 3 design input is the next priority.\n\nAsk about pipeline KOL landscape or FcRn platform expansion strategy for more detail.`;
  }

  // Congress
  if (
    q.includes('congress') || q.includes('conference') || q.includes('aan') ||
    q.includes('ean') || q.includes('abstract') || q.includes('eular') || q.includes('ash')
  ) {
    const available = CONGRESS_OPTIONS.filter(c => c.available);
    return `## Congress Intelligence\n\n${available.map(c =>
      `### ${c.name}\n- Status: Active / Recent | Location: ${c.location}`
    ).join('\n\n')}\n\nAAN 2025 and EAN 2025 have been the primary drivers of CIDP earlier-line positioning discussion this cycle. ADHERE study data presentations at EAN 2025 accelerated KIT-2 momentum (+69% mentions).`;
  }

  // Default
  return `## Auri Intelligence Summary — ${CLIENT.name}\n\nI can help you with intelligence across ${CLIENT.franchiseDescription}. Key themes this cycle:\n\n- **SC Transition** — IVIg-to-SC signals surged +78%; infusion center conversations accelerating\n- **CIDP Earlier-Line** — +69% mentions following ADHERE data at EAN 2025; neurologists repositioning efgartigimod ahead of IVIG\n- **FcRn Competition** — Rystiggo (UCB) and IMAAVY (J&J) driving differentiation pressure; Lacomis is the key divergence KOL\n- **Strategic Insights** — ${INSIGHTS.length} active insights mapped to Medical Objectives\n- **Actions** — ${ACTIONS.length} recommended actions across Field Medical, HEOR, and Medical Comms\n- **Products** — Vyvgart (IV, gMG/ITP) · Vyvgart Hytrulo (SC, gMG/CIDP) · Empasiprubart (Phase 3 pipeline)\n\nTry asking about the SC modality transition, CIDP place-in-therapy, Lacomis divergence, FcRn competitor differentiation, or recommended actions for this cycle.`;
}

export async function queryAuri(messages, selectedProduct) {
  const lastMessage = messages[messages.length - 1]?.content || '';
  const ragContext = retrieveContext(lastMessage, selectedProduct);
  const systemPrompt = buildSystemPrompt(selectedProduct, ragContext);

  try {
    return await queryClaudeAPI(messages, systemPrompt);
  } catch (e) {
    console.log('Claude API unavailable, trying OpenAI:', e.message);
  }

  try {
    return await queryOpenAIAPI(messages, systemPrompt);
  } catch (e) {
    console.log('OpenAI API unavailable, using keyword fallback:', e.message);
  }

  return keywordFallback(lastMessage, selectedProduct);
}
