// loading effect
// js animation lib dan foydalanib xato check bo'ganda vibratsa effecti berishi kk
// 20mata savol bo'ladi 1tasi oxirida 1ta qoganda shundo tanlab qoymasligi un chalg'itish un qo'yiladi
// oxirida j=natijani chiqarish
// * vaqt tugavotganini bildiradigan progresbar qo'shish (eng tepada turadigan)
// * Neon | Gradient effectla qo'shish
// xato btn answer bosilganda bg/border qizil effect berilsin
// userName'ni localStorage'ga saqlab mahalli pc'lar orasida localStorage'dagi data'lani almashib: 1. Palonchi 2. Pistonchi 3. Tugunchi digan natijani ko'rish imkoni qo'shish
// * birnecha savollar ketma-ket tushmasligi. Ya'ni xavfli buril tushgandan keyin PageReload bo'sa yana o'sha savol tushmasligi kk
// Darsliklar qo'shish. belgi haqida. YXQ kitobidan qo'shish
// e-vatanparvar'dagidek test qo'shish
// background img almashib tursin transition bn sekin chiqoyli animation bn.
// Noto'g'ri tanlangan btn'lar savol/vaqt tugaganidan keyin nimaga noto'g'riligi haqida tushuntirish berilsin. info icon chiqsin har bin btn'da u bosilsa o'sha belgi haqida ma'lumot chiqsin
// * Modelda start bosmaguncha vaqt boshlanmasin
// ? High lvl da savolga javob berilganidan keyin, boshqa savob btn larni o'rni almashib qolsin


/*
todo: random savolli chiqarishi kk.
todo: button click'da array'dagi joylashuv o'rni bo'yicha | savolga bog'lanishi kk
*/

/*
! Dastur Xatolari:
-id orqali tekshirilsa, html'dan id o'zgartirilsa dastur ishdan chiqadi.
-umumiy savol bo'lsa birqancha javob to'g'ri kelib qolishi mumkin.
  -Masalan, Xavfli burilish? o'nga chapga javob to'g'ri kelib qoladi.
  -Temir yo'lga yaqinlashuv? 6ta javob to'ri bo'lib qoladi.
  -Yo'l torayishi.
  Buni oldini olish uchun savolga aniqlik kiritish kk: Temit yolga yaqinlashuv? 30metr, 10metr. O'ngga xavfli burilish
*/


// language
/*
? RU - Дорожные знаки ------------------------------------------
* Index/Registratsiya/Ro'yxatdan o'rish
h1            - Добро пожаловать / Начинать тренировку?

a             - Индивидуально
a             - Создать комнату
a             - Присоединться

#Modal - Создать комнату
before        - Имя комнаты
input         - moya_komnata
button        - Поделиться

#Modal - Присоединться
before        - Линк комнаты
input         - Вставте линк на комнату
button        - НАЧАТЬ

* Complexity/Сложность/Murakkablik
h2            - Сложность
select        - Легкий | Средняя | Жесткий

h2            - Время
select        - 1 мин.

a             - СТАРТ

* Test
span          - Осталось: 1:00
h2            - Уступите дорогу



? EN - Road signs ------------------------------------------
* Index/Registratsiya/Ro'yxatdan o'rish
h1            - Welcome /=> Start a workout?

a             - Individually
a             - Create room
a             - Join

#Modal - Create room
before        - Room name
input         - my_room
button        - Share this / Send

#Modal - Join
before        - Room link
input         - Insert a link to the room
button        - TO BEGIN / START

* Complexity/Сложность/Murakkablik
h2            - Complexity
select        - easy | medium | hard

h2            - Time
select        - 1 min.

a             - START

* Test
span          - Left: 1:00
h2            - Give way


? UZ - Yo'l belgilari ------------------------------------------
* Index/Registratsiya/Ro'yxatdan o'rish
h1            - Xush kelibsiz /=> Mashq qilishni boshlaysizmi?

a             - Shaxsiy
a             - Xona yarating
a             - Qo'shiling

#Modal - Xona yarating
before        - Xona nomi
input         - mening_xonam
button        - Buni baham ko'ring / Ulashish

#Modal - Qo'shiling
before        - Xona havolasi
input         - Xona uchun havolani joylashtiring
button        - BOSHLAMOQ / BOSHLASH

* Complexity/Сложность/Murakkablik
h2            - Murakkablik
select        - oson | o'rta | qiyin

h2            - Vaqt
select        - 1 daq.

a             - BOSHLASH

* Test
span          - qoldi: 1:00
h2            - Yo'l bering
*/












// Mnemonik
/*
-Ertalab vohli turish?
Ujnni kamaytrib, zafrtikki baqvatlash tirish kk. Ertalab ochli o'zi uyg'tadi.
-Til o'rganishga kitob: biologia miyani ishlashini o'rganing. mnemonikaga tegishli kitb oqi
-ing slovar tez yodlash: birnecha oyli mehnat mnemonika bn shugillan
?-Komfort zonadan chiqish: sport intizomi, o'qishdani intizomi.
?-Darsda o'tiraman lekin tushunmayman: kitob o'qing. har kuni 10min.dan. Miyyadagi muskullar rivojlanmagan bo'ladi davo kitob.
-Vaqtni rej: Maykl laninberner. Bloknotega yozib qo'ying.
! M => Mnemonika
-M natija bomagande tuyiladi bobturadi
-Tushkunlikdan chiq: Maqsad bo'lishi kk
?-Vaqt yo qachon shugillani: 15 Uxlashdan oldin 20min shugillaning. Harkuni ozgina bo'sayam o'rganing.
?-AGAR Vaqt tig'iz paytda o'zizda vaqt topayotgan bo'lsangiz vaqtingiz ko'payganida vapsheee kuchayib ketasiz.
nolish yomon
?-Dangasa bo'masa Hamma narsani iloji bor. Universitetga kirish un harakat.
?-Eng yomonidan ham Dangasalidan qutilish har kuni 5min bo'lsa ham kitob o'qish 1-2oyda qutiladi. Shunaqa maqsad qo'ying ini qimaslikni iloji bo'masin.
?-Zo'r ishlab zo'r dam olish. Faqat foydali kino uzfakt... foydali narsala korish kk. TikTok...la tupuylashtiradi!!!
todo-Brus Lee: 10,000ta udar bilgan odamdan qo'rqmayman 1ta udarni 10,000marta mashq qilgan insondan qo'rqaman. 1ta yo'nalishni tanlang va shu yo'nalishni mukammal egallang
-Yoshlarga addushi maslahat: Miyani rivojlantiring hayvondan farqimiz ham ongimiz. Aniq Maqsad
-Tushunaman lekin 2-3kundan keyin esdan chiqadi: Praktikada ishlatadigan ilmni o'rganing. Man kitob o'qib hayotimga tadbiq qilaman.
!Maqsad qo'ying albatta qochondur erishasiz
*/
/*
* Mnemonika D.T. SupperTafakkur - fikirlashni oshirish, Mantiqiy fikrlahs
1-avtoritet o'rnatmang. Ustoz etsayam gapini olurmeng tekshirib ko'ring (istisno bor).

* 2-

* 3-
Liboy ishshi qilolmasam nima bo'ladi deb o'ylash. Ehtiyot chora variontlani o'lab qo'yish. Samalyotdan yerdagi batutga sakravotganda parashut ovolishga o'xshab.


* 4- Bilim baza.
Bilim baza bo'sa taffakkur qilish oson bo'ladi ya'ni bilimlarnidan kebchiqib oldindan ko'ra biladi(farosatli) bo'ladi.
Jinnini pulini olish uchun pichoq tirash shart emas, ilmsizligi tufayli pulini o'zi beradi. (anqov)



Ilmiy izlanish, o'zimdan keyin nimadi kotta narsa qoldirgin keladi
*/