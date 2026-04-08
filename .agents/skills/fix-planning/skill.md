# Skill: fix-planning

**Version**: 1.0.0
**Used by**: PlannerAgent

## Purpose

Map detected issues and social trend signals to concrete content fix plan items with content type recommendations and priority scores.

## Input

```json
{
  "detected_issues": [
    {
      "id": "uuid",
      "issue_type": "omission | factual_conflict | competitor_displacement",
      "severity": "critical | high | medium | low",
      "description": "string",
      "prompt_text": "string",
      "engine": "string"
    }
  ],
  "social_trends": [
    {
      "id": "uuid",
      "topic": "string",
      "platform": "string",
      "volume_7d": "integer",
      "sentiment_score": "float -1 to 1"
    }
  ],
  "tenant_context": {
    "company_name": "string",
    "industry": "string",
    "available_source_facts_count": "integer"
  }
}
```

## Output

```json
{
  "fix_plan_items": [
    {
      "title": "string — concise action title",
      "description": "string — what to write and why",
      "content_type": "faq_page | comparison_page | feature_page | blog_post | landing_page",
      "priority_score": "float 0-10",
      "signal_source": "ai_issue | social_trend | both",
      "issue_ids": ["uuid"],
      "trend_ids": ["uuid"],
      "target_intent_categories": ["awareness | consideration | decision | comparison | support"]
    }
  ],
  "deduplication_notes": "string — explanation of any merged items"
}
```

## Priority Score Algorithm

| Factor | Weight | Scoring |
|--------|--------|---------|
| Issue severity | 40% | critical=10, high=7, medium=4, low=2 |
| Social volume (7d) | 30% | log10(volume+1) × 3, capped at 10 |
| Cross-signal (both sources) | 20% | +2 bonus if both ai_issue and social_trend |
| Recency | 10% | Higher for issues from most recent monitoring run |

## Content Type Selection

- `faq_page`: For omission issues on awareness/support prompts
- `comparison_page`: For competitor_displacement issues on comparison/decision prompts
- `feature_page`: For factual_conflict on feature claims
- `landing_page`: For omission + high-volume social trend on awareness prompts
- `blog_post`: For social trends with positive sentiment needing amplification

## Instructions

1. Group issues by prompt intent_category and engine
2. For each group, identify the highest-severity issue as the primary signal
3. Check social_trends for topic overlap with issue descriptions (keyword matching)
4. Merge overlapping signals into single fix_plan_items (record both source IDs)
5. Assign content_type based on Content Type Selection table
6. Calculate priority_score using the algorithm above
7. Sort output by priority_score descending
8. Never create fix_plan_items for issues with confidence < 0.5
