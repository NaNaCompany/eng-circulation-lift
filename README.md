# 순환에 따른 단위 폭 양력 계산기

정상 2차원 순환 유동에서 쿠타–주콥스키 관계로 단위 폭당 부호 있는 양력을 계산합니다.

- ID: E139
- App: https://nanalab.kr/eng-circulation-lift/
- Repository: https://github.com/NaNaCompany/eng-circulation-lift
- Formula: L′ = ρUΓ (clockwise Γ positive, U rightward)

## Model and data

정상 2차원 비압축성 비점성 외부 유동의 순환 정리입니다. 자유류를 오른쪽, 시계방향 순환을 양수, 위쪽 양력을 양수로 정합니다. 양의 순환은 반시계방향으로 정의하는 관례와 부호가 반대입니다. 3차원 날개·박리·실속·점성 항력은 포함하지 않습니다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
