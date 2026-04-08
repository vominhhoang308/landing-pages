# Skill: claim-extraction

**Version**: 1.0.0
**Used by**: MeasurerAgent, SocialScannerAgent (indirectly)

## Purpose

Extract discrete, verifiable factual claims from AI-generated answer text. Each claim must be atomic (single assertion), attributable to a specific span of the source text, and classifiable by type.

## Input

```json
{
  "answer_text": "string — full AI answer text",
  "tenant_company_name": "string — company name for relevance filtering"
}
```

## Output

```json
{
  "claims": [
    {
      "claim_text": "string — atomic factual assertion",
      "source_span": "string — verbatim excerpt from answer_text",
      "claim_type": "feature | pricing | positioning | competitive | social_proof",
      "mentions_company": "boolean"
    }
  ],
  "total_claims": "integer",
  "company_mention_count": "integer"
}
```

## Instructions

You are a precise claim extractor. Given an AI-generated answer, decompose it into atomic, verifiable factual claims.

Rules:
1. Each claim must assert exactly one fact (no compound claims with "and")
2. Preserve exact numeric values, product names, and model numbers
3. Mark `mentions_company: true` only if the company name appears in that specific claim
4. Classify by `claim_type`:
   - `feature`: product capabilities or technical specifications
   - `pricing`: costs, tiers, or pricing models
   - `positioning`: market positioning, target audience, or differentiators
   - `competitive`: comparisons to other products or companies
   - `social_proof`: customer numbers, ratings, or testimonials
5. If a sentence cannot be decomposed into a verifiable claim (e.g., opinions without backing), skip it
6. Return claims in order of appearance in the source text

## Quality Criteria

- Atomicity: no claim contains more than one verifiable assertion
- Completeness: all factual statements in the answer are captured
- Precision: source_span is verbatim (not paraphrased)
