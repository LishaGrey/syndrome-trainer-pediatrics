import React, { useState } from "react";
import "./App.css";

/* ===== ДАННЫЕ ===== */
const syndromes = [

{
name:"Синдром Дауна",

history:[

{
name:"возраст матери старше 35 лет",
type:"history",
priority:2,
frequency:50
},

{
name:"гипотония с рождения",
type:"history",
priority:2,
frequency:80
},

{
name:"трудности грудного вскармливания",
type:"history",
priority:3,
frequency:50
},

{
name:"задержка моторного развития",
type:"history",
priority:3,
frequency:80
},

{
name:"частые инфекции в раннем возрасте",
type:"history",
priority:4,
frequency:40
}

],

features:[

{
name:"плоское лицо",
type:"face",
priority:1,
frequency:90
},

{
name:"эпикант",
type:"face",
priority:1,
frequency:80
},

{
name:"короткая шея",
type:"body",
priority:2,
frequency:70
},

{
name:"широкая переносица",
type:"face",
priority:2,
frequency:70
},

{
name:"гипотония",
type:"body",
priority:3,
frequency:80
},

{
name:"макроглоссия",
type:"face",
priority:3,
frequency:40
},

{
name:"врожденные пороки сердца",
type:"system",
priority:4,
frequency:45
},

{
name:"атрезия двенадцатиперстной кишки",
type:"system",
priority:4,
frequency:5
},

{
name:"трисомия 21",
type:"lab",
priority:5,
frequency:100
}

]

},


{
name:"Синдром Эдвардса",

history:[

{
name:"задержка внутриутробного развития",
type:"history",
priority:1,
frequency:80
},

{
name:"низкая масса тела при рождении",
type:"history",
priority:2,
frequency:70
},

{
name:"тяжелая адаптация после рождения",
type:"history",
priority:2,
frequency:70
},

{
name:"трудности кормления",
type:"history",
priority:3,
frequency:80
},

{
name:"выраженная задержка развития",
type:"history",
priority:3,
frequency:90
}

],

features:[

{
name:"сжатые кулаки",
type:"body",
priority:1,
frequency:90
},

{
name:"перекрытие пальцев",
type:"body",
priority:2,
frequency:80
},

{
name:"низкая масса тела",
type:"system",
priority:1,
frequency:70
},

{
name:"микроцефалия",
type:"face",
priority:3,
frequency:60
},

{
name:"деформация стоп",
type:"body",
priority:3,
frequency:50
},

{
name:"врожденные пороки сердца",
type:"system",
priority:4,
frequency:90
},

{
name:"трисомия 18",
type:"lab",
priority:5,
frequency:100
}

]

},


{
name:"Синдром Патау",

history:[

{
name:"задержка внутриутробного роста",
type:"history",
priority:1,
frequency:70
},

{
name:"многоводие во время беременности",
type:"history",
priority:3,
frequency:30
},

{
name:"низкая оценка по Апгар",
type:"history",
priority:2,
frequency:70
},

{
name:"судороги в раннем возрасте",
type:"history",
priority:3,
frequency:40
},

{
name:"глубокая задержка развития",
type:"history",
priority:3,
frequency:90
}

],

features:[

{
name:"аномалии глаз",
type:"face",
priority:1,
frequency:70
},

{
name:"расщелина губы и неба",
type:"face",
priority:2,
frequency:60
},

{
name:"микроцефалия",
type:"face",
priority:2,
frequency:80
},

{
name:"полидактилия",
type:"body",
priority:3,
frequency:30
},

{
name:"врожденные пороки сердца",
type:"system",
priority:4,
frequency:80
},

{
name:"трисомия 13",
type:"lab",
priority:5,
frequency:100
}

]

},


{
name:"Синдром Шерешевского-Тернера",

history:[

{
name:"лимфатический отек кистей и стоп у новорожденной",
type:"history",
priority:1,
frequency:30
},

{
name:"задержка внутриутробного роста",
type:"history",
priority:2,
frequency:40
},

{
name:"частые отиты в детстве",
type:"history",
priority:3,
frequency:50
},

{
name:"низкий рост по сравнению со сверстниками",
type:"history",
priority:2,
frequency:90
},

{
name:"отсутствие признаков полового созревания",
type:"history",
priority:3,
frequency:90
}

],

features:[

{
name:"низкий рост",
type:"body",
priority:1,
frequency:95
},

{
name:"крыловидная складка шеи",
type:"face",
priority:1,
frequency:50
},

{
name:"широкая грудная клетка",
type:"body",
priority:2,
frequency:70
},

{
name:"низкая линия роста волос",
type:"face",
priority:3,
frequency:40
},

{
name:"дисгенезия гонад",
type:"system",
priority:4,
frequency:90
},

{
name:"кариотип 45,X",
type:"lab",
priority:5,
frequency:100
}

]

},


{
name:"Синдром Клайнфельтера",

history:[

{
name:"нормальное развитие в раннем детстве",
type:"history",
priority:3,
frequency:80
},

{
name:"трудности обучения",
type:"history",
priority:3,
frequency:50
},

{
name:"задержка речевого развития",
type:"history",
priority:3,
frequency:40
},

{
name:"высокий рост в школьном возрасте",
type:"history",
priority:2,
frequency:80
},

{
name:"проблемы фертильности в подростковом возрасте",
type:"history",
priority:2,
frequency:90
}

],

features:[

{
name:"высокий рост",
type:"body",
priority:1,
frequency:80
},

{
name:"длинные конечности",
type:"body",
priority:2,
frequency:70
},

{
name:"гинекомастия",
type:"body",
priority:3,
frequency:50
},

{
name:"гипогонадизм",
type:"system",
priority:4,
frequency:95
},

{
name:"бесплодие",
type:"system",
priority:4,
frequency:90
},

{
name:"кариотип 47,XXY",
type:"lab",
priority:5,
frequency:100
}

]

}
,

{
name:"Синдром Вильямса",

history:[

{
name:"трудности кормления в младенчестве",
type:"history",
priority:3,
frequency:60
},

{
name:"мышечная гипотония",
type:"history",
priority:3,
frequency:80
},

{
name:"задержка моторного развития",
type:"history",
priority:3,
frequency:70
},

{
name:"повышенная общительность",
type:"history",
priority:2,
frequency:90
},

{
name:"задержка речевого развития",
type:"history",
priority:3,
frequency:70
}

],

features:[

{
name:"эльфийское лицо",
type:"face",
priority:1,
frequency:80
},

{
name:"широкий рот",
type:"face",
priority:2,
frequency:70
},

{
name:"полные губы",
type:"face",
priority:2,
frequency:70
},

{
name:"гиперкальциемия",
type:"lab",
priority:5,
frequency:50
},

{
name:"стеноз аорты",
type:"system",
priority:4,
frequency:70
}

]

},


{
name:"Синдром Нунан",

history:[

{
name:"врожденный порок сердца выявлен в младенчестве",
type:"history",
priority:2,
frequency:50
},

{
name:"низкий рост с детства",
type:"history",
priority:2,
frequency:80
},

{
name:"трудности кормления",
type:"history",
priority:3,
frequency:50
},

{
name:"задержка моторного развития",
type:"history",
priority:3,
frequency:40
},

{
name:"кровотечения после операций",
type:"history",
priority:4,
frequency:30
}

],

features:[

{
name:"гипертелоризм",
type:"face",
priority:1,
frequency:80
},

{
name:"птоз",
type:"face",
priority:2,
frequency:60
},

{
name:"низко расположенные уши",
type:"face",
priority:2,
frequency:60
},

{
name:"короткая шея",
type:"body",
priority:2,
frequency:50
},

{
name:"врожденные пороки сердца",
type:"system",
priority:4,
frequency:70
}

]

},


{
name:"Синдром Прадера-Вилли",

history:[

{
name:"выраженная гипотония после рождения",
type:"history",
priority:1,
frequency:90
},

{
name:"слабый сосательный рефлекс",
type:"history",
priority:2,
frequency:80
},

{
name:"необходимость зондового кормления",
type:"history",
priority:3,
frequency:50
},

{
name:"быстрый набор веса после 2 лет",
type:"history",
priority:2,
frequency:90
},

{
name:"нарушение пищевого поведения",
type:"history",
priority:3,
frequency:90
}

],

features:[

{
name:"ожирение",
type:"body",
priority:1,
frequency:90
},

{
name:"гипотония",
type:"body",
priority:2,
frequency:90
},

{
name:"малые кисти и стопы",
type:"body",
priority:3,
frequency:60
},

{
name:"гипогонадизм",
type:"system",
priority:4,
frequency:80
},

{
name:"делеция 15q",
type:"lab",
priority:5,
frequency:70
}

]

},


{
name:"Синдром Ангельмана",

history:[

{
name:"нормальное развитие в первые месяцы жизни",
type:"history",
priority:2,
frequency:80
},

{
name:"остановка развития после 6-12 месяцев",
type:"history",
priority:1,
frequency:80
},

{
name:"отсутствие речи",
type:"history",
priority:2,
frequency:80
},

{
name:"частые приступы смеха",
type:"history",
priority:2,
frequency:80
},

{
name:"нарушение равновесия при ходьбе",
type:"history",
priority:3,
frequency:80
}

],

features:[

{
name:"атаксия",
type:"system",
priority:1,
frequency:80
},

{
name:"частый смех",
type:"system",
priority:2,
frequency:80
},

{
name:"эпилепсия",
type:"system",
priority:3,
frequency:80
},

{
name:"микроцефалия",
type:"face",
priority:3,
frequency:70
},

{
name:"мутация UBE3A",
type:"lab",
priority:5,
frequency:90
}

]

},


{
name:"Синдром де Ланге",

history:[

{
name:"задержка внутриутробного роста",
type:"history",
priority:2,
frequency:70
},

{
name:"низкая масса тела при рождении",
type:"history",
priority:2,
frequency:60
},

{
name:"трудности кормления",
type:"history",
priority:3,
frequency:80
},

{
name:"выраженная задержка развития",
type:"history",
priority:3,
frequency:90
},

{
name:"самоповреждающее поведение",
type:"history",
priority:4,
frequency:30
}

],

features:[

{
name:"сросшиеся брови",
type:"face",
priority:1,
frequency:90
},

{
name:"длинные ресницы",
type:"face",
priority:2,
frequency:80
},

{
name:"тонкие губы",
type:"face",
priority:2,
frequency:70
},

{
name:"аномалии конечностей",
type:"body",
priority:3,
frequency:40
},

{
name:"мутация NIPBL",
type:"lab",
priority:5,
frequency:60
}

]

}

,

{
name:"Синдром Марфана",

history:[

{ name:"высокий рост с детства", type:"history", priority:2, frequency:90 },
{ name:"быстрое удлинение конечностей", type:"history", priority:2, frequency:80 },
{ name:"жалобы на зрение", type:"history", priority:3, frequency:60 },
{ name:"сердечные шумы в подростковом возрасте", type:"history", priority:3, frequency:50 }

],

features:[

{ name:"длинные конечности", type:"body", priority:1, frequency:90 },
{ name:"арахнодактилия", type:"body", priority:1, frequency:90 },
{ name:"деформация грудной клетки", type:"body", priority:2, frequency:70 },
{ name:"подвывих хрусталика", type:"system", priority:2, frequency:60 },
{ name:"аневризма аорты", type:"system", priority:4, frequency:70 },
{ name:"мутация FBN1", type:"lab", priority:5, frequency:90 }

]

},


{
name:"Синдром Ди Джорджи",

history:[

{ name:"частые инфекции с рождения", type:"history", priority:1, frequency:80 },
{ name:"гипокальциемические судороги", type:"history", priority:2, frequency:60 },
{ name:"врожденный порок сердца", type:"history", priority:2, frequency:70 }

],

features:[

{ name:"микрогнатия", type:"face", priority:2, frequency:60 },
{ name:"низко расположенные уши", type:"face", priority:3, frequency:60 },
{ name:"тимусная гипоплазия", type:"system", priority:1, frequency:80 },
{ name:"гипокальциемия", type:"lab", priority:2, frequency:70 },
{ name:"делеция 22q11", type:"lab", priority:5, frequency:100 }

]

},


{
name:"Синдром Ретта",

history:[

{ name:"нормальное развитие до 6 месяцев", type:"history", priority:1, frequency:90 },
{ name:"регресс развития", type:"history", priority:1, frequency:90 },
{ name:"потеря речи", type:"history", priority:2, frequency:80 }

],

features:[

{ name:"стереотипные движения рук", type:"system", priority:1, frequency:90 },
{ name:"микроцефалия", type:"face", priority:2, frequency:80 },
{ name:"эпилепсия", type:"system", priority:3, frequency:80 },
{ name:"мутация MECP2", type:"lab", priority:5, frequency:90 }

]

},


{
name:"Синдром Ахондроплазии",

history:[

{ name:"короткие конечности с рождения", type:"history", priority:1, frequency:90 },
{ name:"нормальный интеллект", type:"history", priority:3, frequency:90 }

],

features:[

{ name:"короткие конечности", type:"body", priority:1, frequency:100 },
{ name:"большая голова", type:"face", priority:2, frequency:80 },
{ name:"выраженный лоб", type:"face", priority:2, frequency:70 },
{ name:"мутация FGFR3", type:"lab", priority:5, frequency:95 }

]

},


{
name:"Синдром Тричера-Коллинза",

history:[

{ name:"аномалии лица с рождения", type:"history", priority:1, frequency:90 },
{ name:"нарушение слуха", type:"history", priority:2, frequency:70 }

],

features:[

{ name:"гипоплазия скул", type:"face", priority:1, frequency:90 },
{ name:"антимонголоидный разрез глаз", type:"face", priority:2, frequency:80 },
{ name:"микрогнатия", type:"face", priority:2, frequency:80 },
{ name:"аномалии ушных раковин", type:"face", priority:3, frequency:80 },
{ name:"мутация TCOF1", type:"lab", priority:5, frequency:80 }

]

},


{
name:"Синдром Фрагильной Х-хромосомы",

history:[

{ name:"задержка психоречевого развития", type:"history", priority:1, frequency:90 },
{ name:"гиперактивность", type:"history", priority:2, frequency:70 }

],

features:[

{ name:"удлиненное лицо", type:"face", priority:2, frequency:70 },
{ name:"большие уши", type:"face", priority:2, frequency:80 },
{ name:"макроорхидизм", type:"body", priority:3, frequency:60 },
{ name:"умственная отсталость", type:"system", priority:3, frequency:90 },
{ name:"мутация FMR1", type:"lab", priority:5, frequency:95 }

]

},


{
name:"Синдром Альпорта",

history:[

{ name:"гематурия с детства", type:"history", priority:1, frequency:90 },
{ name:"снижение слуха", type:"history", priority:2, frequency:60 }

],

features:[

{ name:"гематурия", type:"lab", priority:1, frequency:100 },
{ name:"протеинурия", type:"lab", priority:2, frequency:80 },
{ name:"тугоухость", type:"system", priority:3, frequency:60 },
{ name:"мутация COL4A5", type:"lab", priority:5, frequency:90 }

]

},


{
name:"Синдром Гиршпрунга",

history:[

{ name:"отсутствие стула у новорожденного", type:"history", priority:1, frequency:90 },
{ name:"вздутие живота", type:"history", priority:2, frequency:80 }

],

features:[

{ name:"мегаколон", type:"system", priority:1, frequency:90 },
{ name:"запоры", type:"system", priority:2, frequency:90 },
{ name:"отсутствие ганглиев", type:"lab", priority:5, frequency:100 }

]

},


{
name:"Синдром Стиклера",

history:[

{ name:"проблемы со зрением с детства", type:"history", priority:2, frequency:70 },
{ name:"расщелина неба", type:"history", priority:2, frequency:60 }

],

features:[

{ name:"миопия", type:"system", priority:1, frequency:80 },
{ name:"аномалии суставов", type:"body", priority:2, frequency:70 },
{ name:"расщелина неба", type:"face", priority:2, frequency:60 },
{ name:"мутация COL2A1", type:"lab", priority:5, frequency:80 }

]

},


{
name:"Синдром Беквита-Видемана",

history:[

{ name:"крупный плод", type:"history", priority:1, frequency:80 },
{ name:"гипогликемия новорожденного", type:"history", priority:2, frequency:60 }

],

features:[

{ name:"макроглоссия", type:"face", priority:1, frequency:90 },
{ name:"гемигипертрофия", type:"body", priority:2, frequency:60 },
{ name:"омфалоцеле", type:"system", priority:3, frequency:40 },
{ name:"нарушение 11p15", type:"lab", priority:5, frequency:80 }

]

},

{
name:"Синдром Элерса-Данлоса",

history:[

{
name:"чрезмерная гибкость суставов с детства",
type:"history",
priority:1,
frequency:90
},

{
name:"частые вывихи и растяжения",
type:"history",
priority:2,
frequency:80
},

{
name:"легкое образование синяков",
type:"history",
priority:3,
frequency:70
},

{
name:"плохое заживление ран",
type:"history",
priority:3,
frequency:60
}

],

features:[

{
name:"гипермобильность суставов",
type:"body",
priority:1,
frequency:95
},

{
name:"гиперрастяжимость кожи",
type:"body",
priority:1,
frequency:80
},

{
name:"атрофические рубцы",
type:"body",
priority:2,
frequency:70
},

{
name:"хрупкость соединительной ткани",
type:"system",
priority:3,
frequency:60
},

{
name:"мутация COL5A1",
type:"lab",
priority:5,
frequency:60
}

]

},


{
name:"Нейрофиброматоз I типа",

history:[

{
name:"пятна на коже появились в раннем детстве",
type:"history",
priority:1,
frequency:90
},

{
name:"семейный анамнез заболевания",
type:"history",
priority:2,
frequency:50
},

{
name:"трудности обучения",
type:"history",
priority:3,
frequency:50
}

],

features:[

{
name:"пятна кофе с молоком",
type:"face",
priority:1,
frequency:95
},

{
name:"нейрофибромы",
type:"body",
priority:2,
frequency:70
},

{
name:"веснушки в подмышечных областях",
type:"face",
priority:3,
frequency:80
},

{
name:"узелки Лиша",
type:"instrumental",
priority:3,
frequency:50
},

{
name:"мутация NF1",
type:"lab",
priority:5,
frequency:90
}

]

},


{
name:"Болезнь Альпорта",

history:[

{
name:"кровь в моче с детства",
type:"history",
priority:1,
frequency:90
},

{
name:"семейные случаи поражения почек",
type:"history",
priority:2,
frequency:70
},

{
name:"снижение слуха в детстве",
type:"history",
priority:3,
frequency:60
}

],

features:[

{
name:"гематурия",
type:"lab",
priority:1,
frequency:100
},

{
name:"протеинурия",
type:"lab",
priority:2,
frequency:80
},

{
name:"нейросенсорная тугоухость",
type:"system",
priority:3,
frequency:70
},

{
name:"хроническая болезнь почек",
type:"system",
priority:4,
frequency:80
},

{
name:"мутация COL4A5",
type:"lab",
priority:5,
frequency:90
}

]

},


{
name:"Синдром Барде-Бидля",

history:[

{
name:"быстрый набор массы тела в детстве",
type:"history",
priority:2,
frequency:80
},

{
name:"нарушение зрения в детстве",
type:"history",
priority:2,
frequency:80
},

{
name:"задержка развития",
type:"history",
priority:3,
frequency:70
}

],

features:[

{
name:"ожирение",
type:"body",
priority:1,
frequency:90
},

{
name:"полидактилия",
type:"body",
priority:1,
frequency:70
},

{
name:"пигментная дегенерация сетчатки",
type:"instrumental",
priority:2,
frequency:80
},

{
name:"гипогонадизм",
type:"system",
priority:3,
frequency:60
},

{
name:"мутации генов BBS",
type:"lab",
priority:5,
frequency:80
}

]

},


{
name:"Муковисцидоз",

history:[

{
name:"частые бронхолегочные инфекции с раннего возраста",
type:"history",
priority:1,
frequency:90
},

{
name:"плохая прибавка массы тела",
type:"history",
priority:2,
frequency:80
},

{
name:"соленый вкус кожи",
type:"history",
priority:2,
frequency:70
},

{
name:"затяжной кашель",
type:"history",
priority:3,
frequency:90
}

],

features:[

{
name:"хронический кашель",
type:"system",
priority:1,
frequency:90
},

{
name:"бронхоэктазы",
type:"instrumental",
priority:3,
frequency:60
},

{
name:"панкреатическая недостаточность",
type:"system",
priority:2,
frequency:85
},

{
name:"стеаторея",
type:"system",
priority:3,
frequency:70
},

{
name:"повышенный хлор в потовой пробе",
type:"lab",
priority:5,
frequency:95
},

{
name:"мутация CFTR",
type:"lab",
priority:5,
frequency:95
}

]

},


{
name:"Болезнь Вильсона-Коновалова",

history:[

{
name:"появление симптомов в школьном возрасте или подростковом периоде",
type:"history",
priority:2,
frequency:80
},

{
name:"изменения поведения",
type:"history",
priority:3,
frequency:50
},

{
name:"семейный анамнез заболевания печени",
type:"history",
priority:3,
frequency:40
}

],

features:[

{
name:"поражение печени",
type:"system",
priority:1,
frequency:90
},

{
name:"тремор",
type:"system",
priority:2,
frequency:60
},

{
name:"кольцо Кайзера-Флейшера",
type:"face",
priority:2,
frequency:90
},

{
name:"неврологические нарушения",
type:"system",
priority:3,
frequency:70
},

{
name:"снижение церулоплазмина",
type:"lab",
priority:5,
frequency:95
},

{
name:"накопление меди",
type:"lab",
priority:5,
frequency:100
}

]

},


{
name:"Адреногенитальный синдром",

history:[

{
name:"необычное строение наружных половых органов у новорожденного",
type:"history",
priority:1,
frequency:80
},

{
name:"криз потери соли в младенчестве",
type:"history",
priority:2,
frequency:70
},

{
name:"раннее половое развитие",
type:"history",
priority:3,
frequency:60
}

],

features:[

{
name:"вирилизация наружных половых органов",
type:"system",
priority:1,
frequency:90
},

{
name:"ускорение роста в детстве",
type:"body",
priority:3,
frequency:60
},

{
name:"нарушение электролитов",
type:"lab",
priority:2,
frequency:70
},

{
name:"повышение 17-ОН-прогестерона",
type:"lab",
priority:5,
frequency:95
},

{
name:"мутация CYP21A2",
type:"lab",
priority:5,
frequency:95
}

]

},


{
name:"Врожденный гипотиреоз",

history:[

{
name:"переношенная беременность",
type:"history",
priority:3,
frequency:40
},

{
name:"вялость с первых недель жизни",
type:"history",
priority:1,
frequency:80
},

{
name:"затруднения кормления",
type:"history",
priority:2,
frequency:70
},

{
name:"запоры у младенца",
type:"history",
priority:2,
frequency:70
}

],

features:[

{
name:"сонливость",
type:"system",
priority:1,
frequency:80
},

{
name:"отставание физического развития",
type:"system",
priority:2,
frequency:80
},

{
name:"сухая кожа",
type:"face",
priority:3,
frequency:70
},

{
name:"макроглоссия",
type:"face",
priority:3,
frequency:60
},

{
name:"повышенный ТТГ",
type:"lab",
priority:5,
frequency:100
},

{
name:"сниженный Т4",
type:"lab",
priority:5,
frequency:100
}

]

},

{
name:"Синдром Смита–Лемли–Опитца",

history:[

{
name:"задержка развития с раннего возраста",
type:"history",
priority:2,
frequency:90
},

{
name:"трудности кормления в младенчестве",
type:"history",
priority:3,
frequency:70
},

{
name:"врожденные аномалии развития",
type:"history",
priority:2,
frequency:80
}

],

features:[

{
name:"микрогнатия",
type:"face",
priority:1,
frequency:70
},

{
name:"синдактилия II и III пальцев стоп",
type:"body",
priority:1,
frequency:80
},

{
name:"птоз",
type:"face",
priority:3,
frequency:50
},

{
name:"задержка интеллектуального развития",
type:"system",
priority:3,
frequency:90
},

{
name:"снижение холестерина",
type:"lab",
priority:5,
frequency:90
},

{
name:"мутация DHCR7",
type:"lab",
priority:5,
frequency:90
}

]

},


{
name:"Синдром Апера",

history:[

{
name:"аномалии черепа выявлены при рождении",
type:"history",
priority:1,
frequency:90
},

{
name:"задержка развития",
type:"history",
priority:3,
frequency:70
},

{
name:"проблемы с дыханием в младенчестве",
type:"history",
priority:3,
frequency:50
}

],

features:[

{
name:"краниосиностоз",
type:"face",
priority:1,
frequency:95
},

{
name:"синдактилия кистей и стоп",
type:"body",
priority:1,
frequency:90
},

{
name:"деформация лица",
type:"face",
priority:2,
frequency:80
},

{
name:"гипертелоризм",
type:"face",
priority:3,
frequency:70
},

{
name:"мутация FGFR2",
type:"lab",
priority:5,
frequency:90
}

]

},


{
name:"Синдром Крузона",

history:[

{
name:"аномалии черепа с рождения",
type:"history",
priority:1,
frequency:90
},

{
name:"нарушение носового дыхания",
type:"history",
priority:3,
frequency:60
},

{
name:"проблемы со зрением",
type:"history",
priority:3,
frequency:70
}

],

features:[

{
name:"краниосиностоз",
type:"face",
priority:1,
frequency:95
},

{
name:"экзофтальм",
type:"face",
priority:1,
frequency:80
},

{
name:"гипоплазия средней зоны лица",
type:"face",
priority:2,
frequency:90
},

{
name:"деформация черепа",
type:"face",
priority:3,
frequency:80
},

{
name:"мутация FGFR2",
type:"lab",
priority:5,
frequency:90
}

]

},


{
name:"Синдром Рубинштейна–Тейби",

history:[

{
name:"задержка психомоторного развития",
type:"history",
priority:2,
frequency:90
},

{
name:"трудности обучения",
type:"history",
priority:3,
frequency:90
},

{
name:"частые инфекции в детстве",
type:"history",
priority:4,
frequency:40
}

],

features:[

{
name:"широкие большие пальцы кистей",
type:"body",
priority:1,
frequency:90
},

{
name:"широкие большие пальцы стоп",
type:"body",
priority:1,
frequency:90
},

{
name:"широкий нос",
type:"face",
priority:2,
frequency:70
},

{
name:"дугообразные брови",
type:"face",
priority:3,
frequency:60
},

{
name:"задержка развития",
type:"system",
priority:3,
frequency:90
},

{
name:"мутация CREBBP",
type:"lab",
priority:5,
frequency:60
}

]

},


{
name:"Болезнь Тея–Сакса",

history:[

{
name:"нормальное развитие в первые месяцы жизни",
type:"history",
priority:2,
frequency:80
},

{
name:"регресс навыков после 6 месяцев",
type:"history",
priority:1,
frequency:90
},

{
name:"нарастающая мышечная слабость",
type:"history",
priority:3,
frequency:70
}

],

features:[

{
name:"потеря приобретенных навыков",
type:"system",
priority:1,
frequency:90
},

{
name:"судороги",
type:"system",
priority:3,
frequency:70
},

{
name:"вишневое пятно на глазном дне",
type:"face",
priority:2,
frequency:90
},

{
name:"гипотония",
type:"body",
priority:3,
frequency:70
},

{
name:"снижение активности гексозаминидазы А",
type:"lab",
priority:5,
frequency:100
}

]

},


{
name:"Болезнь Гоше",

history:[

{
name:"увеличение живота в детстве",
type:"history",
priority:1,
frequency:80
},

{
name:"частые боли в костях",
type:"history",
priority:3,
frequency:60
},

{
name:"утомляемость",
type:"history",
priority:3,
frequency:70
}

],

features:[

{
name:"гепатоспленомегалия",
type:"system",
priority:1,
frequency:90
},

{
name:"анемия",
type:"system",
priority:2,
frequency:80
},

{
name:"тромбоцитопения",
type:"lab",
priority:3,
frequency:70
},

{
name:"костные боли",
type:"body",
priority:3,
frequency:70
},

{
name:"снижение глюкоцереброзидазы",
type:"lab",
priority:5,
frequency:100
}

]

},


{
name:"Синдром Леша–Найхана",

history:[

{
name:"задержка психомоторного развития",
type:"history",
priority:2,
frequency:90
},

{
name:"аномальное поведение",
type:"history",
priority:1,
frequency:80
},

{
name:"самоповреждение в детстве",
type:"history",
priority:1,
frequency:80
}

],

features:[

{
name:"самоповреждающее поведение",
type:"system",
priority:1,
frequency:90
},

{
name:"дистония",
type:"system",
priority:2,
frequency:80
},

{
name:"гиперурикемия",
type:"lab",
priority:2,
frequency:90
},

{
name:"неврологические нарушения",
type:"system",
priority:3,
frequency:90
},

{
name:"дефицит HGPRT",
type:"lab",
priority:5,
frequency:100
}

]

}

];

/* ===== ЦВЕТА ===== */
const typeColors = {
  face: "#cccccc",
  body: "#a8d0ff",
  system: "#d0b3ff",
  lab: "#b7f7c1",
  instrumental: "#ffcc99",
  history:"#ffd6e7"
};

/* ===== ВЫБОР ПРИЗНАКОВ С УЧЁТОМ FREQUENCY ===== */

function weightedRandomSelect(array, count) {

  let result = [];

  let pool = [...array];


  while(
    result.length < count &&
    pool.length > 0
  ){

    let total =
      pool.reduce(
        (sum,item)=>sum+item.frequency,
        0
      );


    let random =
      Math.random()*total;


    let selected;


    for(let item of pool){

      random -= item.frequency;

      if(random <= 0){

        selected=item;
        break;

      }

    }


    if(selected){

      result.push(selected);

      pool =
        pool.filter(
          x=>x.name!==selected.name
        );

    }

  }


  return result;

}




/* ===== ГЕНЕРАЦИЯ КЕЙСА ===== */

function selectRandomFeatures(
features,
history,
difficulty
){


let counts = {

easy:{
feature:4,
history:2
},

medium:{
feature:6,
history:3
},

hard:{
feature:7,
history:4
}

};


let config =
counts[difficulty];



let selected=[];



/*
1. Сначала анамнез
*/

let selectedHistory =
weightedRandomSelect(
history || [],
config.history
);



/*
2. Осмотр
без лаборатории
*/

let clinicalFeatures =
features.filter(
f=>
f.type!=="lab"
);



selected.push(
...weightedRandomSelect(
clinicalFeatures,
config.feature
)
);



/*
3. Лаборатория только hard
*/

if(
difficulty==="hard"
){

let labs =
features.filter(
f=>f.type==="lab"
);


if(labs.length){

selected.push(
weightedRandomSelect(
labs,
1
)[0]
);

}

}



return [
...selected,
...selectedHistory
]
.sort(
()=>Math.random()-0.5
);


}

function addNoiseFeatures(
  allSyndromes,
  currentSyndrome,
  count = 2
){

  let sameType = [];


  currentSyndrome.features.forEach(
    feature => {


      let candidates =
        allSyndromes
        .filter(
          s => s.name !== currentSyndrome.name
        )
        .flatMap(
          s => s.features
        )
        .filter(
          f => f.type === feature.type
        );


      sameType.push(
        ...candidates
      );

    }
  );


  let noise = [];


  while(
    noise.length < count &&
    sameType.length > 0
  ){

    let index =
      Math.floor(
        Math.random() * sameType.length
      );


    let random =
      sameType[index];


    if(
      !noise.some(
        x => x.name === random.name
      )
    ){

      noise.push(
        {
          ...random,
          isNoise:true
        }
      );

    }


    sameType.splice(index,1);

  }


  return noise;

}

function getBestMatch(selectedFeatures, allSyndromes) {
  const selectedNames = new Set(
    selectedFeatures
      .filter((feature) => !feature.isNoise)
      .map((feature) => feature.name)
  );

  return allSyndromes
    .map((syndrome) => ({
      name: syndrome.name,
      score: [...syndrome.features, ...syndrome.history].reduce(
        (score, feature) => (
          selectedNames.has(feature.name) ? score + feature.priority : score
        ), 0),
    }))
    .sort((a, b) => b.score - a.score);
}

function explainMismatch(selectedFeatures, syndrome) {
  const syndromeFeatures = [...syndrome.features, ...syndrome.history];
  const syndromeNames = new Set(syndromeFeatures.map((feature) => feature.name));
  const selectedNames = new Set(selectedFeatures.map((feature) => feature.name));

  return {
    missing: syndromeFeatures
      .filter((feature) => feature.priority <= 2 && !selectedNames.has(feature.name))
      .map((feature) => feature.name),
    wrong: selectedFeatures
      .filter((feature) => !feature.isNoise && !syndromeNames.has(feature.name))
      .map((feature) => feature.name),
  };
}

// eslint-disable-next-line no-unused-vars
function LegacyApp() {
  const [mode, setMode] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");
  const [current, setCurrent] = useState(null);
  const [features, setFeatures] = useState([]);
  const [shown, setShown] = useState([]);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

/* ===== ЗАПУСК КЕЙСА ===== */


  const start = (selectedMode) => {
    const random = syndromes[Math.floor(Math.random() * syndromes.length)];

    let base = selectRandomFeatures(
  random.features,
  random.history,
  difficulty
);
    let noise = addNoiseFeatures(syndromes, random, 2);

    let finalFeatures = [...base, ...noise].sort(() => Math.random() - 0.5);

    setMode(selectedMode);
    setCurrent(random);
    setFeatures(finalFeatures);
    setShown(selectedMode === "mixed" ? finalFeatures : [finalFeatures[0]]);
    setInput("");
    setResult(null);
  };

  const nextFeature = () => {
    if (shown.length < features.length) {
      setShown([...shown, features[shown.length]]);
    }
  };

  const check = () => {
    const ranking = getBestMatch(shown, syndromes);

    const explanations = ranking.slice(0, 3).map(r => {
      const syndrome = syndromes.find(s => s.name === r.name);
      return {
        name: r.name,
        ...explainMismatch(shown, syndrome)
      };
    });

    const correct =
      input.toLowerCase().trim() === current.name.toLowerCase();

    setResult({
      correct,
      ranking,
      explanations
    });
  };

  const reset = () => {
    setMode(null);
    setResult(null);
  };

  return (
    <div style={styles.container}>
      <h1>Синдромальный тренажёр</h1>

      {!mode && (
        <>
          <div style={styles.card}>
            <h3>Режим</h3>
            <button onClick={() => start("mixed")}>Смешанный кейс</button>
            <button onClick={() => start("guess")}>Угадай синдром</button>
          </div>

          <div style={styles.card}>
            <h3>Сложность</h3>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option value="easy">Лёгкий</option>
              <option value="medium">Средний</option>
              <option value="hard">Сложный</option>
            </select>
          </div>
        </>
      )}

      {mode && (
        <>
          <div style={styles.card}>
            <h3>Признаки</h3>
            {shown.map((f, i) => (
              <div
                key={i}
                style={{
                  ...styles.feature,
                  backgroundColor: typeColors[f.type],
                }}
              >
                {f.name}
                {result && f.isNoise && " ❗"}
              </div>
            ))}
          </div>

          {mode === "guess" && !result && (
            <button onClick={nextFeature}>Следующий признак</button>
          )}

          {!result && (
            <div style={styles.card}>
              <input
                placeholder="Введите диагноз"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={check}>Проверить</button>
            </div>
          )}

          {result && (
            <div style={styles.card}>
              <h3>{result.correct ? "✅ Верно" : "❌ Неверно"}</h3>
              <p>Правильный диагноз: {current.name}</p>

              <h4>Дифференциальный ряд:</h4>

              {result.ranking.slice(0, 3).map((r, i) => {
                const exp = result.explanations[i];

                return (
                  <div key={i} style={{ marginBottom: "10px" }}>
                    <b>{i + 1}. {r.name} — {r.score} баллов</b>

                    {i !== 0 && (
                      <div style={{ fontSize: "14px", color: "#555" }}>
                        {exp.missing.length > 0 && (
                          <div>❌ Нет ключевых: {exp.missing.join(", ")}</div>
                        )}
                        {exp.wrong.length > 0 && (
                          <div>⚠️ Лишние: {exp.wrong.join(", ")}</div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <button onClick={reset}>Начать заново</button>
        </>
      )}
    </div>
  );
}


/* ===== СТИЛИ ===== */
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "sans-serif",
  },
  card: {
    background: "#f9f9f9",
    padding: "20px",
    margin: "15px auto",
    borderRadius: "12px",
    maxWidth: "420px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  feature: {
    padding: "8px",
    margin: "5px",
    borderRadius: "8px",
  },
};

// LegacyApp is retained only as a reference while the clinical trainer below
// provides the active interface.

const categoryOrder = [
  "Акушерский анамнез", "Период новорождённости", "Период грудного возраста",
  "Физическое развитие", "Внешний осмотр", "Неврологический статус",
  "Опорно-двигательная система", "Сердечно-сосудистая система", "Дыхательная система",
  "Пищеварительная система", "Эндокринная система", "Мочеполовая система",
  "Лабораторная диагностика", "Инструментальная диагностика", "Генетическая диагностика",
];

const difficultyLimit = { basic: 2, advanced: 3, expert: 5 };

function getCategory(feature) {
  const name = feature.name.toLowerCase();
  if (feature.type === "lab") {
    return /(мутац|кариотип|трисом|делеци|нарушение \d|генов)/.test(name)
      ? "Генетическая диагностика" : "Лабораторная диагностика";
  }
  if (feature.type === "instrumental") return "Инструментальная диагностика";
  if (feature.type === "face") return "Внешний осмотр";
  if (feature.type === "body") {
    return /(конечност|сустав|стоп|кист|пальц|грудн)/.test(name)
      ? "Опорно-двигательная система" : "Физическое развитие";
  }
  if (feature.type === "history") {
    if (/(беремен|внутриутроб|плод|матери)/.test(name)) return "Акушерский анамнез";
    if (/(новорожден|рождении|апгар|первых недель|с рождения)/.test(name)) return "Период новорождённости";
    return "Период грудного возраста";
  }
  if (/(сердц|аорт|сосуд)/.test(name)) return "Сердечно-сосудистая система";
  if (/(каш|бронх|дых)/.test(name)) return "Дыхательная система";
  if (/(киш|живот|стул|запор|стеатор|пищев|печен|панкреат|гепато)/.test(name)) return "Пищеварительная система";
  if (/(гонад|гипогонад|ожир|рост|электролит|кальци|щитовид|вирилизац)/.test(name)) return "Эндокринная система";
  if (/(гематури|протеинури|почек)/.test(name)) return "Мочеполовая система";
  return "Неврологический статус";
}

function normalizeFrequency(value) {
  if (value >= 90) return 1;
  if (value >= 80) return 2;
  if (value >= 60) return 3;
  if (value >= 40) return 4;
  return 5;
}

const clinicalSyndromes = syndromes.map((syndrome) => ({
  ...syndrome,
  features: [...syndrome.history, ...syndrome.features].map((feature) => ({
    name: feature.name,
    category: getCategory(feature),
    frequency: normalizeFrequency(feature.frequency),
    priority: feature.priority,
  })),
}));

function sortFeatures(features) {
  return [...features].sort((a, b) => (
    categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
    || a.frequency - b.frequency
    || a.priority - b.priority
    || a.name.localeCompare(b.name, "ru")
  ));
}

function getCaseFeatures(syndrome, difficulty) {
  return syndrome.features.filter((feature) => feature.frequency <= difficultyLimit[difficulty]);
}

function getNoise(allSyndromes, syndrome, caseFeatures) {
  const names = new Set(caseFeatures.map((feature) => feature.name));
  const candidates = allSyndromes
    .filter((item) => item.name !== syndrome.name)
    .flatMap((item) => item.features)
    .filter((feature) => caseFeatures.some((current) => current.category === feature.category))
    .filter((feature) => !names.has(feature.name));
  const noise = [];
  const amount = 1 + Math.floor(Math.random() * 2);
  while (noise.length < amount && candidates.length) {
    const index = Math.floor(Math.random() * candidates.length);
    const feature = candidates.splice(index, 1)[0];
    if (!noise.some((item) => item.name === feature.name)) noise.push({ ...feature, isNoise: true });
  }
  return noise;
}

function groupFeatures(features) {
  return categoryOrder.reduce((groups, category) => {
    const items = features.filter((feature) => feature.category === category);
    if (items.length) groups.push({ category, items });
    return groups;
  }, []);
}

function FeatureGroups({ features, revealNoise = false }) {
  return groupFeatures(features).map(({ category, items }) => (
    <section key={category} style={ui.section}>
      <h3 style={ui.sectionTitle}>{category}</h3>
      <ul style={ui.list}>
        {items.map((feature, index) => (
          <li key={`${feature.name}-${index}`} style={ui.item}>
            {feature.name}{revealNoise && feature.isNoise ? " — ⚠️ Дифференциальный признак" : ""}
          </li>
        ))}
      </ul>
    </section>
  ));
}

function App() {
  const [mode, setMode] = useState(null);
  const [difficulty, setDifficulty] = useState("basic");
  const [current, setCurrent] = useState(null);
  const [caseFeatures, setCaseFeatures] = useState([]);
  const [shown, setShown] = useState([]);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const start = (selectedMode = mode) => {
    const syndrome = clinicalSyndromes[Math.floor(Math.random() * clinicalSyndromes.length)];
    const baseFeatures = getCaseFeatures(syndrome, difficulty);
    const features = sortFeatures([
      ...baseFeatures,
      ...(difficulty === "expert" ? getNoise(clinicalSyndromes, syndrome, baseFeatures) : []),
    ]);
    setMode(selectedMode);
    setCurrent(syndrome);
    setCaseFeatures(features);
    setShown(selectedMode === "guess" ? features.slice(0, 1) : features);
    setInput("");
    setResult(null);
  };

  const submit = () => {
    const correct = input.trim().toLocaleLowerCase("ru") === current.name.toLocaleLowerCase("ru");
    const points = mode === "guess" && correct ? Math.max(1, 11 - shown.length) : 0;
    setResult({ correct, points });
  };

  const keyFeatures = current
    ? sortFeatures(current.features.filter((feature) => feature.priority <= 2 || feature.priority === 5))
    : [];

  return (
    <main style={ui.page}>
      <div style={ui.content}>
        <header style={ui.header}>
          <p style={ui.eyebrow}>КЛИНИЧЕСКОЕ ОБУЧЕНИЕ</p>
          <h1 style={ui.title}>Синдромальный тренажёр</h1>
          <p style={ui.subtitle}>Распознавайте клинические паттерны последовательно: от анамнеза к диагностике.</p>
        </header>

        {!mode && <>
          <div style={ui.card}>
            <h2 style={ui.cardTitle}>Выберите режим</h2>
            <div style={ui.actions}>
              <button style={ui.primaryButton} onClick={() => start("mixed")}>Смешанный кейс</button>
              <button style={ui.secondaryButton} onClick={() => start("guess")}>Угадай синдром</button>
            </div>
          </div>
          <div style={ui.card}>
            <label style={ui.label} htmlFor="difficulty">Уровень сложности</label>
            <select id="difficulty" style={ui.select} value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
              <option value="basic">Базовый — наиболее частые признаки</option>
              <option value="advanced">Продвинутый — клинически значимые признаки</option>
              <option value="expert">Экспертный — полный кейс с дифференциальными признаками</option>
            </select>
          </div>
        </>}

        {mode && <>
          <div style={ui.card}>
            <div style={ui.caseHeader}><h2 style={ui.cardTitle}>Клинические данные</h2><span style={ui.badge}>{mode === "guess" ? `Использовано: ${shown.length}` : "Полный кейс"}</span></div>
            <FeatureGroups features={shown} revealNoise={Boolean(result)} />
            {mode === "guess" && !result && shown.length < caseFeatures.length && (
              <button style={ui.secondaryButton} onClick={() => setShown(caseFeatures.slice(0, shown.length + 1))}>Следующий признак</button>
            )}
          </div>

          {!result && <div style={ui.card}>
            <label style={ui.label} htmlFor="diagnosis">Предполагаемый диагноз</label>
            <input id="diagnosis" style={ui.input} placeholder="Например, Синдром Дауна" value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === "Enter" && submit()} />
            <button style={ui.primaryButton} onClick={submit}>{mode === "guess" ? "Поставить диагноз" : "Проверить"}</button>
          </div>}

          {result && <div style={ui.card}>
            <h2 style={ui.cardTitle}>Результат</h2>
            <p style={result.correct ? ui.success : ui.error}>{result.correct ? "✅ Правильно!" : "❌ Неверно"}</p>
            <p style={ui.diagnosis}>{result.correct ? "Диагноз:" : "Правильный диагноз:"} <strong>{current.name}</strong></p>
            {mode === "guess" && <p style={ui.points}>{result.correct ? `Ваш результат: ${result.points} ${result.points === 1 ? "балл" : "баллов"}.` : "Баллы не начислены."}</p>}
            <h3 style={ui.resultTitle}>{result.correct ? "Ключевые признаки" : "Запомните ключевые признаки"}</h3>
            <FeatureGroups features={keyFeatures} />
            <button style={ui.primaryButton} onClick={() => start(mode)}>Начать новый кейс</button>
            <button style={ui.linkButton} onClick={() => { setMode(null); setResult(null); setCurrent(null); }}>К выбору режима</button>
          </div>}
        </>}
      </div>
    </main>
  );
}

const ui = {
  page: { minHeight: "100vh", background: "#f3f6f8", color: "#20313e", fontFamily: "Arial, sans-serif", padding: "32px 16px" },
  content: { maxWidth: "760px", margin: "0 auto" }, header: { textAlign: "center", marginBottom: "28px" },
  eyebrow: { color: "#5d788b", fontSize: "12px", fontWeight: 700, letterSpacing: "1.4px", margin: 0 },
  title: { fontSize: "32px", margin: "8px 0", color: "#173247" }, subtitle: { margin: 0, lineHeight: 1.55, color: "#597080" },
  card: { background: "#fff", border: "1px solid #dce5ea", borderRadius: "12px", padding: "24px", marginBottom: "18px", boxShadow: "0 2px 8px rgba(24, 53, 72, .06)" },
  cardTitle: { margin: "0 0 18px", fontSize: "21px" }, caseHeader: { display: "flex", gap: "12px", justifyContent: "space-between", alignItems: "center" },
  badge: { color: "#476579", background: "#eaf1f5", borderRadius: "999px", padding: "6px 10px", fontSize: "13px" },
  section: { borderTop: "1px solid #e6edf1", paddingTop: "14px", marginTop: "14px" }, sectionTitle: { color: "#557082", fontSize: "13px", letterSpacing: ".7px", margin: "0 0 8px", textTransform: "uppercase" },
  list: { margin: 0, paddingLeft: "20px" }, item: { padding: "4px 0", lineHeight: 1.4 }, actions: { display: "flex", flexWrap: "wrap", gap: "10px" },
  primaryButton: { background: "#246a85", color: "#fff", border: 0, borderRadius: "7px", padding: "11px 16px", cursor: "pointer", fontSize: "15px", marginRight: "10px" },
  secondaryButton: { background: "#eaf1f5", color: "#244e63", border: "1px solid #ccdce4", borderRadius: "7px", padding: "11px 16px", cursor: "pointer", fontSize: "15px", marginTop: "10px" },
  linkButton: { display: "block", background: "transparent", color: "#35667d", border: 0, padding: "12px 0 0", cursor: "pointer", fontSize: "14px" },
  label: { display: "block", fontWeight: 700, marginBottom: "8px" }, input: { boxSizing: "border-box", display: "block", width: "100%", border: "1px solid #bccdd7", borderRadius: "7px", padding: "11px", fontSize: "16px", marginBottom: "12px" }, select: { boxSizing: "border-box", width: "100%", border: "1px solid #bccdd7", borderRadius: "7px", background: "#fff", padding: "11px", fontSize: "15px" },
  success: { color: "#20704d", fontSize: "19px", fontWeight: 700 }, error: { color: "#ad3e3e", fontSize: "19px", fontWeight: 700 }, diagnosis: { fontSize: "17px" }, points: { color: "#315f75", fontWeight: 700 }, resultTitle: { marginTop: "24px", fontSize: "18px" },
};

export default App;
