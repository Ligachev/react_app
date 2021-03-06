import {Book, User} from "../redux/reducer";

export const fakeUser: User = {
    isLogin: false,
    name: 'Admin',
    password: '12345',
}

export const fakeBooks = (b: Omit<Book, 'id'>[] = books): Book[] => {
    const fakeBooks = [];
    for (let i = 0, j = 0; i < 100; i++, j++) {
        if (j === 100) {
            j = 0;
        }
        fakeBooks.push({...b[j], id: i});
    }
    return fakeBooks;
}

export const books: Omit<Book, 'id'>[] = [
    {
        name: "Мастер и Маргарита\n",
        author: "Михаил Булгаков\n",
        description: "Роман, который не вписывается в привычные литературные рамки. В этой истории смешана философия и быт, теология и фантастика, мистика и реализм, мистика и лирика. И все эти составляющие переплетены умелыми руками в цельную и яркую историю, которая способна перевернуть ваш мир. И да, это любимая книга Букли!\n",
    },
    {
        name: "Преступление и наказание\n",
        author: "Федор Михайлович Достоевский\n",
        description: "Книга из школьной программы, которую трудно понять в нежном подростковом возрасте. Писатель показал двойственность человеческой души, когда черное переплетается с белым. История о Раскольникове, который переживает внутреннюю борьбу.\n",
    },
    {
        name: "Маленький принц\n",
        author: "Антуан де Сент-Экзюпери\n",
        description: "Небольшая история, в которой заключен огромный жизненный смысл. История, которая заставляет по-другому посмотреть на привычные вещи.\n",
    },
    {
        name: "Собачье сердце\n",
        author: "Михаил Булгаков\n",
        description: "Удивительно тонкая и саркастическая история о людях и их пороках. История об эксперименте, который доказал, что из животного можно сделать человека, а вот вывести «животное» из человека нельзя.\n",
    },
    {
        name: "Три товарища\n",
        author: "Эрих Мария Ремарк\n",
        description: "Рассказать о чем повествует этот роман невозможно. Роман нужно читать, и тогда придет понимание, что это не просто история, а исповедь. Исповедь о любви, дружбе, боли. История отчаяния и борьбы.\n",
    },
    {
        name: "Над пропастью во ржи\n",
        author: "Джером Сэлинджер\n",
        description: "История подростка, который своими глазами показывает свое восприятие мира, точку мировоззрения, отречение от привычных принципов и устоев морали общества, которые не вписываются в его индивидуальные рамки.\n",
    },
    {
        name: "Герой нашего времени\n",
        author: "Михаил Лермонтов\n",
        description: "Лирико-психологический роман, который повествует о человеке со сложным характером. Автор показывает его с разных сторон. А нарушенная хронология событий, заставляет полностью погрузиться в повествование.\n",
    },
    {
        name: "Приключения Шерлока Холмса\n",
        author: "Артур Конан Дойл\n",
        description: "Легендарные расследования великого сыщика Шерлока, которые раскрывают подлость человеческой души. Истории, которые рассказывает друг и помощник детектива доктор Ватсон.\n",
    },
    {
        name: "Портрет Дориана Грея\n",
        author: "Оскар Уайльд\n",
        description: "История о самолюбии, эгоизме и прочной душе. История, которая наглядно показывает, что может случиться с душой человека, мучаемой пороками.\n",
    },
    {
        name: "Властелин колец\n",
        author: "Джон Рональд Руэл Толкин\n",
        description: "Фантастическая трилогия о людях и нелюдях, которые попали под власть Кольца Всевластия и его владыки Саурона. История о тех, кто готов ради дружбы и спасения мира, пожертвовать самым дорогим и даже своей жизнью.\n",
    },
    {
        name: "Крестный отец\n",
        author: "Марио Пьюзо\n",
        description: "Роман об одной из самых могущественных мафиозных семей Америки прошлого века – семье Корлеоне. Многим известен фильм, так что пора приниматься за чтение.\n",
    },
    {
        name: "Триумфальная арка\n",
        author: "Эрих Мария Ремарк\n",
        description: "После Первой Мировой войны множество эмигрантов оказались во Франции. В их числе и талантливый немецкий хирург Равик. Это история его жизни и любви на фоне пережитой войны.\n",
    },
    {
        name: "Мертвые души\n",
        author: "Николай Васильевич Гоголь\n",
        description: "История русской души и глупости. А удивительный стиль и язык автор заставляет предложения заиграть красками и оттенками, которые полностью раскрывают история нашего народа.\n",
    },
    {
        name: "Поющие в терновнике\n",
        author: "Колин Маккалоу\n",
        description: "Потрясающий роман, который повествует не только о любви мужчины и женщины и сложных отношениях, но и о чувствах к семье, к родным местам и природе.\n",
    },
    {
        name: "Грозовой перевал\n",
        author: "Эмили Бронте\n",
        description: "В уединенном поместье живет семья, у которой в доме царит напряженная атмосфера. Сложные отношения имеют глубокие корни, которые скрываются в прошлом. История Хитклифа и Кэтрин не оставит равнодушным ни одного читателя.\n",
    },
    {
        name: "На западном фронте без перемен\n",
        author: "Эрих Мария Ремарк\n",
        description: "Книга о войне от лица простого солдата. Книга о том, как война ломает и калечит души невинных людей.\n",
    },
    {
        name: "Демиан\n",
        author: "Герман Гессе\n",
        description: "Книга просто переворачивает все представления о жизни. После прочтения уже невозможно избавиться о чувства, что ты стал на шаг ближе к чему-то невероятному. В этой книге есть ответы на многие вопросы.\n",
    },
    {
        name: "Зеленая миля\n",
        author: "Стивен Кинг\n",
        description: "Пол Эджкомб бывший сотрудник тюрьмы, который служил в блоке для осужденных на смертную казнь. Он рассказывает историю жизни смертников, которым суждено было пройти Зеленую милю.\n",
    },
    {
        name: "Сто лет одиночества\n",
        author: "Габриэль Гарсиа Маркес\n",
        description: "Здесь излишни слова. В этом романе жизнь каждого героя пронизана одиночеством, впрочем, как и городка, где живут эти люди.\n",
    },
    {
        name: "Собор Парижской Богоматери\n",
        author: "Виктор Гюго\n",
        description: "Париж 15 века. С одной стороны он полон величия, а другой похож на сточную яму. На фоне исторический событий разворачивается история любви – Квазимодо, Эсмеральды и Клода Фролло.\n",
    },
    {
        name: "Робинзон Крузо\n",
        author: "Даниель Дефо\n",
        description: "Дневник моряка потерпевшего крушение корабля и прожившего в одиночестве на острове 28 лет. Ему пришлось пережить слишком много испытаний.\n",
    },
    {
        name: "Приключения Алисы в стране чудес\n",
        author: "Льюис Кэрролл\n",
        description: "Странная и загадочная история о девочке, которая в погоне за белым кроликом оказывается в другом и чудесатом мире.\n",
    },
    {
        name: "По ком звонит колокол\n",
        author: "Эрнест Хемингуэй\n",
        description: "На страницах книги война, но даже в мире полным боли и страха, есть место прекрасному. Прекрасному чувству под названием любовь, которая делает нас сильнее.\n",
    },
    {
        name: "Мартин Иден\n",
        author: "Джек Лондон\n",
        description: "Что может сделать любовь? Любовь Мартина к прекрасной Руфь заставила его бороться. Он преодолел множества препятствий, чтобы стал кем-то большим. История о духовном развитии и становлении личности.\n",
    },
    {
        name: "Понедельник начинается в субботу\n",
        author: "Аркадий и Борис Стругацкие\n",
        description: "Фантастическая и увлекательная сказка, в которой магия переплетается с реальностью.\n",
    },
    {
        name: "Мы\n",
        author: "Евгений Замятин\n",
        description: "Роман антиутопия, в которой описывается идеальное общество, где нет личного мнения, а все происходит по расписанию. Но даже в таком обществе найдется место вольнодумцам.\n",
    },
    {
        name: "Прощай, оружие!\n",
        author: "Эрнест Хемингуэй\n",
        description: "Фредерик добровольно отправился на войну, где стал врачом. В санитарной части, где даже воздух пропитан смертью, рождается любовь.\n",
    },
    {
        name: "Доктор Живаго\n",
        author: "Борис Пастернак\n",
        description: "Начало ХХ века. Российская Империя уже встала на путь революций. История о жизни интеллигенции того времени, а также книга поднимает вопросы религии и затрагивает тайну жизни и смерти.\n",
    },
    {
        name: "Камера обскура\n",
        author: "Владимир Набоков\n",
        description: "Поучительная история о людях, которые предали свои идеалы. Книга о том, как светлые и прекрасные чувства эволюционируют в нечто темное и отвратительное.\n",
    },
    {
        name: "Фауст\n",
        author: "Иоганн Вольфганг Гёте\n",
        description: "Величайшее произведение, которое затягивает в историю о Фаусте, который продал душу Дьяволу. Читая эту книгу можно пройти по пути познания жизни.\n",
    },
    {
        name: "Божественная комедия\n",
        author: "Данте Алигьери\n",
        description: "Произведение стоит из трех частей. Сначала мы попадаем в Ад, чтобы протий все 9 кругов. Затем нас ждет Чистилище, пройдя которое можно искупить свои грехи. И только дойдя до вершины можно попасть в Рай.\n",
    },
    {
        name: "Заводной апельсин\n",
        author: "Энтони Берджесс\n",
        description: "Не самая приятная история, но она показывает человеческую сущность. Рассказ, как из любого человека можно сделать послушную и безмолвную куклу.\n",
    },
    {
        name: "Чапаев и Пустота\n",
        author: "Виктор Пелевин\n",
        description: "Сложная история, которую сложно понять с первого раза. Рассказ о жизни поэта-декадента, который ищет свой путь, а к просветлению Петра приводит Чапаев.\n",
    },
    {
        name: "Повелитель мух\n",
        author: "Уильям Голдинг\n",
        description: "Что будет с детьми, если они окажутся совсем одни? У детей тонкая натура, которая подвержена порокам довольно сильно. И милые добрые дети превращаются в настоящих чудовищ.\n",
    },
    {
        name: "Чума\n",
        author: "Альбер Камю\n",
        description: "Что случится если прочитать эту книгу? Все представления о жизни и смерти поменяется диаметральным образом. Книга захватывает и не отпускает до последней строки.\n",
    },
    {
        name: "Сегун\n",
        author: "Джеймс Клавелл\n",
        description: "История английского моряка, который волей судьбы оказался в Японии. Роман-эпопея, где есть исторические реалии, интриги, приключения и тайны.\n",
    },
    {
        name: "Марсианские хроники\n",
        author: "Рэй Брэдбери\n",
        description: "Сборник фантастических рассказов, повествующий о жизни людей на Марсе. Землю они почти уничтожили, а что ждет другую планету?\n",
    },
    {
        name: "Солярис\n",
        author: "Станислав Лем\n",
        description: "На это планете есть Океан. Он живой и у него есть разум. Исследователям предстоит нелегкая задача – передать знание океану. А он поможет воплотить их мечты…\n",
    },
    {
        name: "Степной волк\n",
        author: "Герман Гессе\n",
        description: "Книга о внутреннем кризисе, который может случиться с каждым. Внутреннее опустошение может погубить человека, если однажды на пути не встретиться человек, который даст в руки всего одну книгу…\n",
    },
    {
        name: "Невыносимая легкость бытия\n",
        author: "Милан Кундера\n",
        description: "Окунитесь в мир ощущений и чувств распутника Томаша, который привык менять женщин, лишь бы никто не смел забрать его свободу.\n",
    },
    {
        name: "Пена дней\n",
        author: "Борис Виан\n",
        description: "У каждого из компании друзей своя судьба. Все идет легко и просто. Дружба. Любовь. Разговоры. Но одно событие может изменить все и разрушить привычную жизнь.\n",
    },
    {
        name: "Осиная Фабрика\n",
        author: "Иэн Бэнкс\n",
        description: "Фрэнк рассказывает история своего детства и описывает настоящее. У него свой мир, который может рухнуть в любой момент. Неожиданные поворотные моменты в сюжете, придают особый вкус всей истории.\n",
    },
    {
        name: "Мир глазами Гарпа\n",
        author: "Джон Ирвинг\n",
        description: "В этой книге поднимаются темы семьи, детства, дружбы, любви, измены и предательства. Это мир, в котором мы живем со всеми проблемами и недостатками.\n",
    },
    {
        name: "Английский пациент\n",
        author: "Майкл Ондатже\n",
        description: "В этой книге собрано много тем – война, смерть, любовь, предательство. Но главным лейтмотивов является одиночество, которое может приобрести самые разные формы.\n",
    },
    {
        name: "Унесенные ветром\n",
        author: "Маргарет Митчелл\n",
        description: "Здесь не нужны слова. Эту историю любви, борьбы и воли знает каждый.\n",
    },
    {
        name: "451 градус по Фаренгейту\n",
        author: "Рэй Брэдбери\n",
        description: "Книги наше будущее, а что будет, если их заменит ТВ и одно мнение? Ответ на этот вопрос дает писатель, который опередил свое время.\n",
    },
    {
        name: "Парфюмер. История одного убийцы\n",
        author: "Патрик Зюскинд\n",
        description: "История сумасшедшего гения. Вся его жизнь заключена в запахах. Он пойдет на все, чтобы создать идеальный аромат.\n",
    },
    {
        name: "1984\n",
        author: "Джордж Оруэлл\n",
        description: "Три тоталитарных государства, где контролируются даже мысли. Мир ненависти, но есть люди, которые еще могут противостоять системе.\n",
    },
    {
        name: "Белый Клык\n",
        author: "Джек Лондон\n",
        description: "Аляска конца 19 века. Эпоха золотой лихорадки. И среди людской алчности живет волк по кличке Белый Клык.\n",
    },
    {
        name: "Гордость и предубеждение\n",
        author: "Джейн Остен\n",
        description: "В семье Беннет есть только дочки, и наследником является дальний родственник. И стоит умереть главе семейства, как юные девушки останутся ни с чем.\n",
    },
    {
        name: "12 стульев\n",
        author: "Евгений Петров и Илья Ильф\n",
        description: "Кто не знает Остапа Бендера и Кису Воробьянинова и их вечные неудачи, которые связаны с поиском злополучных брильянтов.\n",
    },
    {
        name: "Идиот\n",
        author: "Федор Достоевский\n",
        description: "Князь Мышкин еще один герой автора, который доведен до абсурдного совершенства.\n",
    },
    {
        name: "Джейн Эйр\n",
        author: "Шарлота Бронте\n",
        description: "Джейн рано стала сиротой, а жизнь в доме тетки была далеко не счастливой. И любовь к строгому и угрюмому мужчине далеко от романтической истории.\n",
    },
    {
        name: "Старик и море\n",
        author: "Эрнест Хемингуэй\n",
        description: "Небольшая история из жизни самого обычного человека. Но читая это произведение, проникаешь в удивительный мир, который полон эмоций.\n",
    },
    {
        name: "Великий Гэтсби\n",
        author: "Фрэнсис Скотт Фицджеральд\n",
        description: "Великолепный роман, который наполнен чувствами. На страницах книги ждет начало 20 века, когда люди были полны иллюзий и надежд. Эта история о жизненных ценностях и настоящей любви.\n",
    },
    {
        name: "Три мушкетера\n",
        author: "Александр Дюма\n",
        description: "Все мы знакомы с приключениями д’Артаньяна и его самых близких друзей. Книга о дружбе, чести, преданности, верности и любви. И конечно, как и другие произведения автора не обошлось и без интриг.\n",
    },
    {
        name: "Над кукушкиным гнездом\n",
        author: "Кен Кизи\n",
        description: "Эту историю читателем поведает пациент психиатрической больницы. Патрик МакМёрфи попадает в тюрьму, в психиатрическое отделение. Вот только некоторые думают, что он просто симулирует свою болезнь.\n",
    },
    {
        name: "Убить пересмешника\n",
        author: "Харпер Ли\n",
        description: "Произведение рассказывает о жизни маленькой Джин-Луизы и её близких людях. Здесь нет неожиданных поворотов сюжета, но автор описывает простые истины, которые для многих остаются непонятны.\n",
    },
    {
        name: "Отверженные\n",
        author: "Виктор Гюго\n",
        description: "Роман описывает жизнь беглого каторжника, который скрывается от властей. После бегства ему пришлось пережить немало тягот, но он смог изменить свою жизнь. Вот только инспектор полиции Жавер готов пойти на все, чтобы поймать преступника.\n",
    },
    {
        name: "Человек который смеется\n",
        author: "Виктор Гюго\n",
        description: "Актёр-философ повстречал на своем пути изуродованного мальчика и слепую девочку. Он берет их под свою опеку. На фоне физических недостатков отчетливо видно совершенство и чистоту душ. А также это отличное противопоставление жизни аристократии.\n",
    },
    {
        name: "Лолита\n",
        author: "Владимир Набоков\n",
        description: "Роман затягивает свою нездоровую паутину страстей и нездоровой любви. Главные герои постепенно сходят с ума, подвластные своим низменным желанием, как и весь их окружающий мир. В этой книге точно не будет счастливого конца.\n",
    },
    {
        name: "Пикник на обочине\n",
        author: "Аркадий и Борис Стругацкие\n",
        description: "Фантастическая повесть, которая описывает жизнь сталкера Рэдрика Шухарта, который из аномальных Зон на Земле добывает внеземные артефакты.\n",
    },
    {
        name: "Чайка по имени Джонатан Ливингстон\n",
        author: "Ричард Бах\n",
        description: "Даже простой чайке может надоесть серая жизнь, а обыденность приелась. И вот тогда Чайка посвящает свою жизнь мечте. Чайка отдает всю свою душу на пути к заветной цели.\n",
    },
    {
        name: "Империя ангелов\n",
        author: "Бернард Вербер\n",
        description: "Мишель попал на суд архангелов, где ему предстоит пройти процедуру взвешивания души. После суда он стоит перед выбором – отправиться на землю в новом воплощении или сталь ангелом. Путь ангела не прост, как и жизнь простых смертных.\n",
    },
    {
        name: "Овод\n",
        author: "Этель Лилиан Войнич\n",
        description: "История о свободе, долге и чести. А ещё о разных типах любви. В первом случае это любовь отца к сыну, которая пережила множество испытаний и пройдет через поколения. Во втором случае это любовь между мужчиной и женщиной, которая похожа на костер, то тухнет, то вспыхивает вновь.\n",
    },
    {
        name: "Коллекционер\n",
        author: "Джон Фаулз\n",
        description: "Он простой служитель ратуши, одинокий и потерянный. У него есть страсть – коллекционирование бабочек. Но однажды он захотел к себе в коллекцию девушку, которая покорила его душу.\n",
    },
    {
        name: "Айвенго\n",
        author: "Вальтер Скотт\n",
        description: "Повествование романа уведет читателей в далекое прошлое. Во времена Ричарда Львиное Сердце и первых крестовых походов. Это один из первых исторических романов, который обязан прочитать каждый.\n",
    },
    {
        name: "Чтец\n",
        author: "Бернхард Шлинк\n",
        description: "В книге очень много вопросов, которые остались без ответа. Книга заставляет думать и анализировать не только происходящее на страницах, но и свою жизнь. Это история о любви и предательстве, которая никого не оставит равнодушным.\n",
    },
    {
        name: "Атлант расправил плечи. Трилогия\n",
        author: "Айн Рэнд\n",
        description: "Социалисты приходят к власти и берут курс на равные возможности. Власти считают, что талантливые и богатые должны улучить благосостояние других. Вот только вместо счастливого будущего привычный мир погружается в хаос.\n",
    },
    {
        name: "Замок\n",
        author: "Франц Кафка\n",
        description: "Это самые настоящий сон, который пугает своей реалистичностью и не выпускает из своих объятий, даже тогда, когда ты открываешь глаза.\n",
    },
    {
        name: "Театр\n",
        author: "Сомерсет Моэм\n",
        description: "История актрисы, которая всю жизнь работает в театре. И что же для нее реальность игра на сцене или игра в жизни? Сколько ролей приходится тебе играть каждый день?\n",
    },
    {
        name: "О дивный новый мир\n",
        author: "Олдос Хаксли\n",
        description: "Роман антиутопия. Роман сатира. Мир где богом стал Генри Форд, а началом времен считается создание первого автомобиля «Форд Т». Людей просто выращивают, а о чувствах не знают ничего.\n",
    },
    {
        name: "Имя розы\n",
        author: "Умберто Эко\n",
        description: "Это многогранный роман, где на фоне средневековья и религии, переплетено множество сюжетных линий, которые тесно переплетены между собой.\n",
    },
    {
        name: "Лабиринты Ехо\n",
        author: "Макс Фрай\n",
        description: "Это множество удивительных и очень интересных фантастических историй о сыщике Максе Фрае, который живет и работает в городе Ехо. Эта серия будет интересна и детям и взрослым.\n",
    },
    {
        name: "Посторонний\n",
        author: "Альбер Камю\n",
        description: "Мерсо живет отстраненной жизнь. Создается впечатление, что его жизни и вовсе ему не принадлежит. Ему всё безразлично и даже его действия пропитаны одиночеством и отречением от жизни.\n",
    },
    {
        name: "Бремя страстей человеческих\n",
        author: "Сомерсет Моэм\n",
        description: "История жизни Филипа. Он сирота и на протяжении всей своей жизни он не только ищет смысл жизни, но и самого себя. А главное понять окружающий мир и людей.\n",
    },
    {
        name: "На игле\n",
        author: "Ирвин Уэлш\n",
        description: "История друзей, которые однажды открыли для себя наркотики и эйфорию. Каждый персонаж необычен и довольно умен. Они ценили жизнь и дружбу, но ровно до того момента, когда героин встал на первое место.\n",
    },
    {
        name: "Моби Дик\n",
        author: "Герман Мелвилл\n",
        description: "Ахав капитан китобойного судна поставил целью своей жизни — месть киту по имени Моби Дик. Вит погуби слишком много жизней, чтобы оставить его в живых. Но стоит капитану начать охоту, как на его корабле начинают происходить загадочные, а порой и страшные события.\n",
    },
    {
        name: "Поправка-22\n",
        author: "Джозеф Хеллер\n",
        description: "Одна из самых лучших книг о Второй мировой войне. В ней автор смог показать бессмысленность войны и чудовищную нелепость государственной машины.\n",
    },
    {
        name: "Шум и ярость\n",
        author: "Уильям Фолкнер\n",
        description: "Четыре персонажа, каждый из которых рассказывает свою версию событий. И чтобы понять, о чем идет речь, нужно дочитать до конца, где паззлы сложатся в единую картину жизни и тайных желаний.\n",
    },
    {
        name: "Улисс\n",
        author: "Джеймс Джойс\n",
        description: "Это история одного дня главного героя Лео Блума, без прикрас, а так как она есть. Его работа в издательстве, посиделки в кафе за чашечкой кофе, улицы Дублина и многое другое. «Улисс» — лучший образец «потока сознания».\n",
    },
    {
        name: "Гарри Поттер\n",
        author: "Джоан Роулинг\n",
        description: "Все 7 книг нужно читать и перечитывать. Лучшая история для всех поколений, которая учить храбрости, любви и дружбе.\n",
    },
    {
        name: "Хроники Амбера\n",
        author: "Роджер Желязны\n",
        description: "Классика фэнтезийного жанра. Хроники разделены на два тома по 5 книг. В этом цикле можно найти путешествия в пространстве и времени, войны, интриги, предательство, а также верность и мужество.\n",
    },
    {
        name: "Сага о ведьмаке\n",
        author: "Анджей Сапковский\n",
        description: "Одна из лучший фантастических серий. В серию входит 8 книг, при этом последнюю стоит «Сезон гроз» лучше читать после первой или второй книги. Это история о Ведьмаке и его приключениях, его жизни и любви, а ещё о девочке Цири, которая может изменить мир.\n",
    },
    {
        name: "Отец Горио\n",
        author: "Оноре де Бальзак\n",
        description: "Удивительная история о безграничной и жертвенной любви отца к детям. О любви, которая никогда не была взаимной. О любви, которая погубила отца Горио.\n",
    },
    {
        name: "Жестяной барабан\n",
        author: "Гюнтер Грасс\n",
        description: "История о мальчике по имени Оскар Мацерат, который с приходом к власти национал-социалисты в Германии отказывается расти в знак протеста. Таким образом, он выражает свой протест переменам в немецком обществе.\n",
    },
    {
        name: "Завтра была война\n",
        author: "Борис Васильев\n",
        description: "Пронзительная повесть войне. О настоящей любви к родителям, друзьям, и Родине. Эту повесть надо прочитать, чтобы ощутить всю эмоциональную составляющую этой истории.\n",
    },
    {
        name: "Красное и черное\n",
        author: "Стендаль\n",
        description: "История о Жюльене Сореле и душе, в которой идет противоборство двух чувств: страсти и честолюбия. Эти два чувства настолько переплетены, что часто их невозможно различить.\n",
    },
    {
        name: "Война и мир\n",
        author: "Лев Толстой\n",
        description: "Роман-эпопея, который описывает целую эпоху, углубляясь в исторические реалии и художественный мир того времени. Война сменятся миром, а мирная жизнь персонажей зависит от войны. Множество героев с уникальными характерами.\n",
    },
    {
        name: "Госпожа Бовари\n",
        author: "Гюстав Флобер\n",
        description: "Эта история признана величайшим произведением мировой литературы. Эмма Бовари мечтает о красивой светской жизни, но ее супруг, провинциальный врач, не может удовлетворить её запросов. Она находит любовников, но смогут ли они исполнить мечту мадам Бовари?\n",
    },
    {
        name: "Бойцовский клуб\n",
        author: "Чак Паланик\n",
        description: "Как бы не ругали творчество этого автора, нельзя отрицать, что его книга «Бойцовский клуб» является одним из символов нашего поколения. Это история о людях, которые решили изменить этот грязный мир. История о человеке, который смог противостоять системе.\n",
    },
    {
        name: "Книжный вор\n",
        author: "Маркус Зусак\n",
        description: "Зимняя Германия 1939 года, когда у Смерти пояляется слишком работы, а через полгода работы прибавится в разы. История о Лизель, о фанатичных немцах, о еврейском драчуне, о кражах и о силе слов.\n",
    },
    {
        name: "Евгений Онегин\n",
        author: "Александр Пушкин\n",
        description: "Роман в стихах рассказывает историю о судьбе дворянской интеллигенции с их пороками и эгоизмом. А в центе истории любовная история без счастливого конца.\n",
    },
    {
        name: "Песнь Льда и Пламени\n",
        author: "Джордж Мартин\n",
        description: "Фантастическая история о другом мире правят короли и живут драконы. Любовь, предательство, интриги, войны и смерть, а все ради власти.\n",
    },
    {
        name: "Облачный атлас\n",
        author: "Дэвид Митчелл\n",
        description: "История прошлого, настоящего и будущего. Истории людей из разных времен. Но эти истории составляют единую картину всего нашего мира.\n",
    },
    {
        name: "Тёмная Башня (серия книг)\n",
        author: "Стивен Кинг\n",
        description: "Фантастический цикл романов повелителя ужасов. В этой серии происходит переплетение жанров. В книгах тесно соседствуют ужасы, вестерн, научная фантастика и другие жанры. Это история о стрелке Роланде, который ищет Темную Башню.\n",
    },
    {
        name: "Норвежский лес\n",
        author: "Харуки Мураками\n",
        description: "История о человеческих судьбах в Японии в 60-годах ХХ века. История о человеческих потерях. Воспоминания Тоору, которые познакомят читателя с разными людьми и их историями.\n",
    },
    {
        name: "Марсианин\n",
        author: "Энди Вейр\n",
        description: "По воле случая астронавта остается один на космической базе на Марсе. У него ограниченное количество ресурсов, а вот связи с людьми нет. Но он не сдается, он верит, что за ним вернутся.\n",
    },
    {
        name: "Отцы и дети\n",
        author: "Иван Тургенев\n",
        description: "Это роман о противоборстве двух поколений, о их различиях и непринятии идей. Идеи романа легко ложатся на современные реалии.\n",
    },
    {
        name: "В ожидании Годо\n",
        author: "Сэмюэль Беккет\n",
        description: "Удивительная пьеса, где каждый сам для себя определяет загадочную личность Годо. Автор дает возможность найти самому ответ на вопрос «кто он?». Конкретное лицо? Сильная личность? Собирательный образ? Или Бог?\n",
    },
]