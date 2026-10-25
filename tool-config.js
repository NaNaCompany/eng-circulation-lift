export const tool={
  "category": "유체역학",
  "category_en": "Fluid mechanics",
  "id": "E139",
  "slug": "eng-circulation-lift",
  "title": "순환에 따른 단위 폭 양력 계산기",
  "title_en": "Circulation Lift per Unit Span Calculator",
  "fields": [
    {
      "key": "rho",
      "label": "유체 밀도",
      "label_en": "Fluid density",
      "dimension": "density",
      "example": 1.225,
      "constraint": "positive",
      "display_unit": "kgm3",
      "display_value": "1.2250000000000001"
    },
    {
      "key": "v",
      "label": "자유류 속력 U",
      "label_en": "Free-stream speed U",
      "dimension": "speed",
      "example": 20,
      "constraint": "nonnegative",
      "display_unit": "ms",
      "display_value": "20"
    },
    {
      "key": "circulation",
      "label": "순환 Γ: 시계방향 +, 자유류 오른쪽",
      "label_en": "Circulation Γ: clockwise positive, free stream to the right",
      "dimension": "circulation",
      "example": 5,
      "constraint": "signed",
      "display_unit": "m2s",
      "display_value": "5"
    }
  ],
  "result_label": "위쪽이 양수인 단위 폭 양력 L′",
  "result_label_en": "Upward-positive lift per unit span L′",
  "result_dimension": "forcePerLength",
  "formula": "L′ = ρUΓ (clockwise Γ positive, U rightward)",
  "purpose": "정상 2차원 순환 유동에서 쿠타–주콥스키 관계로 단위 폭당 부호 있는 양력을 계산합니다.",
  "purpose_en": "Calculate signed lift per unit span from the Kutta–Joukowski relation for steady two-dimensional circulation flow.",
  "assumptions": "정상 2차원 비압축성 비점성 외부 유동의 순환 정리입니다. 자유류를 오른쪽, 시계방향 순환을 양수, 위쪽 양력을 양수로 정합니다. 양의 순환은 반시계방향으로 정의하는 관례와 부호가 반대입니다. 3차원 날개·박리·실속·점성 항력은 포함하지 않습니다.",
  "assumptions_en": "Required: the circulation theorem for steady two-dimensional incompressible inviscid exterior flow. Free stream is rightward, clockwise circulation is positive and upward lift is positive. This circulation sign is opposite to the common counterclockwise-positive convention. Excluded: finite wings, separation, stall and viscous drag.",
  "sources": [
    {
      "label": "NASA: Kutta–Joukowski lift per unit length",
      "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/ideal-lift-of-a-spinning-ball/"
    },
    {
      "label": "MIT: Kutta–Joukowsky theorem",
      "url": "https://web.mit.edu/13.021/13021_2003/Lifting%20surfaces/lectureB.htm"
    }
  ],
  "condition": "2차원 모델과 시계방향 순환·위쪽 양력의 양수 부호를 확인했습니다.",
  "condition_en": "I confirmed the two-dimensional model and clockwise-positive circulation with upward-positive lift.",
  "site": "https://nanalab.kr/eng-circulation-lift/",
  "repository": "https://github.com/NaNaCompany/eng-circulation-lift",
  "groups": [],
  "output_unit": "Nm"
};
