const header = document.querySelector('.header');
const mainText = document.querySelector('.main');
const english = document.querySelector('.language__button_en');
const russian = document.querySelector('.language__button_ru');
const contacts = document.querySelector('.subtitle_keys');
const languages = document.querySelector('.languages__title');


english.addEventListener('click', function () {
    header.innerHTML = '';
    mainText.innerHTML = '';
    contacts.textContent = '';
    languages.textContent = '';

    languages.textContent = 'PAGE LANGUAGE';
    contacts.textContent = 'CONTACTS';

    header.innerHTML = `
    <h1 class="header__name">ALEKSEI TCOI</h1>
    <div class="header__line"></div>
    <p class="header__title">Finance manager</p>
    <p class="header__title">Project manager</p>
    `;

    mainText.innerHTML = `
    <div class="main__item">
                <h2 class="subtitle">PROFILE</h2>
                <p class="subtitle-text">Expert in economics and finance with 5+ years' experience; aims to significantly improve 
                    decision-making processes, create value-added initiatives and projects. In previous roles:
                </p>
                <ul class="subtitle-text">
                    <li>Acted as financial analyst (CAPEX analyst) in investment project in India with $600+ mln CAPEX and $40+ mln NPV</li>
                    <li>Participated in M&A deal (sell-side) with $145 mln as a final price</li>
                    <li>Justified and supported 3+ investment projects in Russia with overall $10+ mln CAPEX and $10+ mln NPV</li>
                    <li>Rolled out new performance management system in overseas offices of the company from technical (development of KPI 
                        dashboard from scratch) and organizational perspective</li>
                    <li>Leading as a project manager the integration of digital platform (paperless solution for workflow with 3rd parties) with $1+ mln as a 
                        potential effect</li>
                    </li>
                    <li>Led and improved annual budgeting and reporting processes of the business unit</li>
                    <li>Mentored 2+ interns who had in the end received promotion/double-promotion </li>
                </ul>
                <p class="subtitle-text">Through the years I understood that it's more important to find your purpose rather than 
                    a job or a career. I discovered for myself that the purpose which really drives me is making people's lives 
                    better and easier. I strongly believe that technology is giving us this opportunity to become a better 
                    version of ourselves and to create a better world around us. And I sincerely want to take a great part in 
                    this journey.
                </p>
            </div>
            <div class="main__item">
                <h2 class="subtitle">WORK EXPERIENCE</h2>
                <div class="main__item-container">
                    <h3 class="subtitle-text">Sibur International GmbH, Vienna, Austria</h3>
                    <p class="text text_dates">Senior expert in Finance and business applicaitons</p>
                    <p class="text text_dates">Oct 2019 - present</p>
                </div>
                <div class="main__item-container">
                    <h3 class="subtitle-text">SIBUR LLC, Moscow, Russia</h3>
                    <p class="text text_dates">Expert in Economics and finance</p>
                    <p class="text text_dates">Mar 2015 - Oct 2019</p>
                </div>
            </div>
            <div class="main__item">
                <h2 class="subtitle">EDUCATION</h2>
                <div class="main__item-container">
                    <h3 class="subtitle-text">MA in Financial management with honors, 2015 - 2017</h3>
                    <p class="text text_dates">Plekhanov Russian University of Economics</p>
                </div>    
                <div class="main__item-container">
                    <h3 class="subtitle-text">BA in Corporate finance with honors, 2011 - 2015</h3>
                    <p class="text text_dates">Plekhanov Russian University of Economics</p>
                </div>
            </div>
            <div class="main__item">
                <h2 class="subtitle">EXTRA</h2>
                <div class="main__item-container">
                    <h3 class="subtitle-text">CIMA P1, P2</h3>
                </div>    
                <div class="main__item-container">
                    <h3 class="subtitle-text">Yandex.Praktikum (in progress - Oct 2021): full stack web-developer</h3>
                </div>
                <div class="main__item-container">
                    <h3 class="subtitle-text">Languages: Russian (native), English (fluent), Korean (beginner)</h3>
                </div>
            </div>
    `;
});

russian.addEventListener('click', function () {
    header.innerHTML = '';
    mainText.innerHTML = '';
    contacts.textContent = '';
    russian.textContent = '';
    languages.textContent = '';

    languages.textContent = 'Язык страницы';
    russian.textContent = 'Рус';
    contacts.textContent = 'КОНТАКТЫ';

    header.innerHTML = `
    <h1 class="header__name">Алексей Цой</h1>
    <div class="header__line"></div>
    <p class="header__title">Финансовый менеджер</p>
    <p class="header__title">Менеджер по проектам</p>
    `;

    mainText.innerHTML = `
    <div class="main__item">
                <h2 class="subtitle">РЕЗЮМЕ</h2>
                <p class="subtitle-text">Эксперт по экономике и финансам с опытом работы 5+ лет; нацелен на совершенствование 
                процесса принятия управленческих решений, создание и продвижение значимых проектов и инициатив. На предыдущих позициях:
                </p>
                <ul class="subtitle-text">
                    <li>Выступал финансовым аналитиком по капитальным затратам по инвестиционному проекту в Индии с CAPEX бюджетом $600+ млн и NPV $40+ млн</li>
                    <li>Принимал участие в M&A сделке по продаже производственного актива с финальной стоимостью $145 млн</li>
                    <li>Обосновывал и поддерживал более 3 инвестиционных проектов в России с общим бюджетом $10+ млн и NPV $10+ млн</li>
                    <li>Масштабировал корпоративную систему управления эффективностью в зарубежных офисах компании (Австрия, Китай, Турция) с дополнительной
                    разработкой КПЭ дэшборда для онлайн-мониторинга показателей</li>
                    <li>Выступал в роли менеджера по проекту внедрения платформы электронного документооборота на экспортных продажах с потенциальным эффектом $1+ млн</li>
                    </li>
                    <li>Лидировал и улучшал процесс по годовому бизнес-планированию и управленческой отчетности по бизнес-дивизиону</li>
                    <li>Курировал и коучил 2+ интернов, которые по итогу были приняты в штат компании с повышением</li>
                </ul>
                <p class="subtitle-text">Я осознал, что в жизни гораздо важнее найти свою настоящую цель, а не просто работу ради дохода. 
                    И для себя я понял, что цель, которая на самом деле вызывает во мне искренний интерес и мотивацию - это делать жизнь людей 
                    лучше и проще. Я верю в то, что именно технологии могут дать человечеству эту возможность - стать лучше самим и сделать лучше мир вокруг себя. 
                    И я буду очень рад стать частью команды, которая создает базу для этой возможности.
                </p>
            </div>
            <div class="main__item">
                <h2 class="subtitle">ОПЫТ РАБОТЫ</h2>
                <div class="main__item-container">
                    <h3 class="subtitle-text">Sibur International GmbH, Вена, Австрия</h3>
                    <p class="text text_dates">Старший эксперт по финансам и бизнес-приложениям</p>
                    <p class="text text_dates">Октябрь 2019 - настоящее время</p>
                </div>
                <div class="main__item-container">
                    <h3 class="subtitle-text">SIBUR LLC, Москва, Россия</h3>
                    <p class="text text_dates">Эксперт по экономике и финансам</p>
                    <p class="text text_dates">Март 2015 - Октябрь 2019</p>
                </div>
            </div>
            <div class="main__item">
                <h2 class="subtitle">ОБРАЗОВАНИЕ</h2>
                <div class="main__item-container">
                    <h3 class="subtitle-text">Магистр с отличием, Финансовый менеджмент, 2015 - 2017</h3>
                    <p class="text text_dates">РЭУ имени Г.В. Плеханова</p>
                </div>    
                <div class="main__item-container">
                    <h3 class="subtitle-text">Бакалавр с отличием, Корпоративные финансы, 2011 - 2015</h3>
                    <p class="text text_dates">РЭУ имени Г.В. Плеханова</p>
                </div>
            </div>
            <div class="main__item">
                <h2 class="subtitle">ДОПОЛНИТЕЛЬНО</h2>
                <div class="main__item-container">
                    <h3 class="subtitle-text">CIMA P1, P2</h3>
                </div>    
                <div class="main__item-container">
                    <h3 class="subtitle-text">Яндекс.Практикум (окончание в октябре 2021): фуллстэк веб-разработчик</h3>
                </div>
                <div class="main__item-container">
                    <h3 class="subtitle-text">Языки: русский (родной), английский (свободно), корейский (базовый)</h3>
                </div>
            </div>
    `;
});