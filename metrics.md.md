# Performance Optimization Metrics — Travel-Log-Project

## Overview
Optimized the travel logs API by adding MongoDB indexes and implementing `.lean()` queries to eliminate collection scans and improve response times at scale.

---

## Environment
- **Database:** MongoDB (local, localhost:27017)
- **Framework:** Next.js 16 (App Router)
- **ODM:** Mongoose
- **Collection:** `logs`
- **Test Date:** 2026-08-23

---

## Before Optimization

### MongoDB Query Performance
| Metric | Value |
|--------|-------|
| `executionTimeMillis` | 15 ms |
| `totalDocsExamined` | 2 |
| `totalKeysExamined` | 0 |
| `stage` | `COLLSCAN` |
| `works` | 6 |

> **Problem:** `totalKeysExamined: 0` confirms no index was used. MongoDB performed a full collection scan (`COLLSCAN`) even for a simple sorted query.

### API Response
| Metric | Value |
|--------|-------|
| Response Time | 21 ms |
| Payload Size | 1.4 KB |

> With only 2 real documents, the API appeared fast. The real bottleneck was hidden.

---

## After Adding 8,000 Seeded Records (Still No Index)

### MongoDB Query Performance
| Metric | Value |
|--------|-------|
| `executionTimeMillis` | 16 ms |
| `totalDocsExamined` | 8,002 |
| `totalKeysExamined` | 0 |
| `stage` | `COLLSCAN` |
| `works` | 16,006 |

### API Response
| Metric | Value |
|--------|-------|
| Response Time | **887 ms** |
| Payload Size | **8.1 MB** |

> **Critical:** With scale, the collection scan became expensive. The API returned all 8,002 logs in a single request, producing an 8.1 MB payload.

---

## After Optimization (Index + `.lean()`)

### Code Changes
1. `models/Log.js` — Added `LogSchema.index({ createdAt: -1 })`
2. `app/api/logs/route.js` — Added `.lean()` to `Log.find().sort({ createdAt: -1 })`

### MongoDB Query Performance
| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| `executionTimeMillis` | 16 ms | 32 ms | Index traversal overhead |
| `totalDocsExamined` | 8,002 | 8,002 | Same (returns all docs) |
| `totalKeysExamined` | **0** | **8,002** | **Index now used** |
| `stage` | `COLLSCAN` | `IXSCAN` + `FETCH` | **No more scans** |
| `works` | **16,006** | **8,003** | **50% reduction** |

### API Response
| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Response Time | **887 ms** | **527 ms** | **41% faster** |
| Payload Size | 8.1 MB | 8.1 MB | Same (no `.select()`) |

---

## Lighthouse Score (Frontend Performance)

### Before Optimization
| Category | Score |
|----------|-------|
| Performance | [MEASURE AND FILL] |
| Accessibility | [MEASURE AND FILL] |
| Best Practices | [MEASURE AND FILL] |
| SEO | [MEASURE AND FILL] |

### After Optimization
| Category | Score |
|----------|-------|
| Performance | [MEASURE AND FILL] |
| Accessibility | [MEASURE AND FILL] |
| Best Practices | [MEASURE AND FILL] |
| SEO | [MEASURE AND FILL] |

### Frontend Optimizations Applied
- Added `loading="lazy"` to grid card images (below-the-fold)
- Added `priority` prop to featured/hero image for eager loading
- Added meta description and title tags in `app/layout.js`

---

## Key Takeaways
- **Index alone** eliminated `COLLSCAN`, replacing it with `IXSCAN`.
- **`.lean()`** reduced Mongoose document hydration overhead.
- **Combined effect:** 41% faster API response and 50% fewer work units.
- **Scale validated:** Schema handles 8,000+ records with indexed lookups.

---

## Files Modified
- `models/Log.js` — Added `createdAt` descending index
- `app/api/logs/route.js` — Added `.lean()` to query
- `scripts/applyIndexes.js` — Index application script
- `app/layout.js` — Added metadata for SEO/Lighthouse
- `app/explorelogs/page.js` — Added image loading optimizations

## Seeded Data
- 8,000 dummy travel logs inserted via `seed.js`
- Cleaned up after testing with `db.logs.deleteMany({ title: /^Trip / })`
