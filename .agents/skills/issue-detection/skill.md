# Skill: issue-detection

**Version**: 1.0.0
**Used by**: AuditorAgent

## Purpose

Classify detected discrepancies between AI-generated answer content and the tenant's source-of-truth SourceFacts into structured issue types with severity ratings.

## Input

```json
{
  "answer_snapshot": {
    "answer_text": "string",
    "engine": "chatgpt | perplexity | google_aio",
    "prompt_text": "string"
  },
  "relevant_source_facts": [
    {
      "id": "uuid",
      "claim_text": "string",
      "category": "pricing | feature | positioning | competitive | social_proof",
      "similarity_score": "float 0-1"
    }
  ],
  "competitor_names": ["string"],
  "tenant_company_name": "string"
}
```

## Output

```json
{
  "issues": [
    {
      "issue_type": "omission | factual_conflict | competitor_displacement",
      "severity": "critical | high | medium | low",
      "description": "string — human-readable explanation",
      "answer_segment": "string — verbatim excerpt from answer where issue occurs",
      "conflicting_fact_id": "uuid | null — SourceFact ID (null for omissions)",
      "confidence": "float 0-1"
    }
  ],
  "omission_detected": "boolean — company not mentioned at all in answer",
  "total_issues": "integer"
}
```

## Issue Type Definitions

### omission
The tenant's company is entirely absent from an answer where it should appear given the prompt context.
- `severity: critical` if company is entirely absent from direct question about the category
- `severity: high` if company is absent but competitors are mentioned

### factual_conflict
A claim in the AI answer contradicts a SourceFact (e.g., wrong price, wrong feature description).
- `severity: critical` for pricing conflicts
- `severity: high` for feature/capability conflicts
- `severity: medium` for positioning conflicts
- `severity: low` for social_proof conflicts

### competitor_displacement
A competitor is mentioned positively in a context where the tenant's company should be, or competitor is recommended over the tenant without factual basis.
- `severity: high` if competitor is recommended as sole solution
- `severity: medium` if competitor is mentioned alongside others but tenant is absent

## Instructions

1. First check if company name appears anywhere in the answer → if not, record `omission` with `severity: critical`
2. For each SourceFact with `similarity_score >= 0.7`, compare the corresponding answer segment for contradictions
3. Scan for competitor names (case-insensitive); classify as `competitor_displacement` if competitor is positively framed without tenant mentioned
4. Assign confidence based on directness of evidence (1.0 = exact contradiction, 0.7 = strong implication)
5. Do not flag issues for claims not related to the tenant's product category
