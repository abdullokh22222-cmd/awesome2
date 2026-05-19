# HYPE PRODUCTION — финальный билд

## Что в этой папке

- `index.html` — финальный сайт после всех 10 шагов обновления (104 КБ)
- `README.md` — этот файл

## Что было сделано (быстрая сводка)

| Шаг | Что |
|---|---|
| 1 | Удалены 12 мёртвых видео-ссылок из pool, осталось 18 рабочих |
| 2 | Подключён Lenis — плавный скролл с инерцией |
| 3 | Сцены сокращены с 17 до 12 (слиты MOTION+PRODUCT, AI Sites в одну, PROCESS+STUDIO) |
| 4 | Конкретные цены убраны, везде «Обсудим на встрече» |
| 5 | Realистичный laptop-портал: space-gray корпус, реальные клавиши, бэзел экрана, логотип HYPE на крышке, тень, fog скрывает lobby позади |
| 6 | Text-safe zones — заголовки больше не перекрывают 3D-объекты |
| 7 | Per-scene атмосферы: каждой сцене свой цвет тумана и пол (Commercial=warm asphalt, AI=cool blue, Reels=magenta, Brand=cinema brown, Sites=matrix green, и т.д.) |
| 8 | Build-анимации: капсулы вырастают из пола, сфера-нейросеть собирается из частиц, телефоны прилетают со сторон, экраны портфолио включаются в шахматке, биллборд опускается с неба, небоскрёбы вырастают из-под земли |
| 9 | Мобильная версия — вертикальный reels-формат со scroll-snap, Three.js не запускается на <900px, lazy-load видео-фонов |
| 10 | Bloom postprocessing — киношное свечение ярких объектов |

---

## Что тебе нужно сделать в своей папке `assets/`

**Удалить 12 файлов** (они больше не используются в HTML):

```
hero-video.mp4
promo-video.mp4
cyber-punk-video.mp4
ugc-blogger-content.mp4
cinematic-reels.mp4
action-video.mp4
hyper-motion-product-video.mp4
extra-1.mp4
extra-2.mp4
extra-3.mp4
extra-4.mp4
user-video-11.mp4
```

Это освободит ~155 МБ.

**Оставить 18 файлов** + лого:

```
user-video-01.mp4 user-video-02.mp4 user-video-03.mp4 user-video-04.mp4
user-video-05.mp4 user-video-06.mp4 user-video-07.mp4 user-video-08.mp4
user-video-09.mp4 user-video-10.mp4 user-video-12.mp4 user-video-13.mp4
user-video-14.mp4 user-video-15.mp4 user-video-16.mp4 user-video-17.mp4
user-video-18.mp4 user-video-19.mp4
hype-logo-transparent.png
```

---

## Как залить на GitHub и Vercel

### Вариант A — Через GitHub Desktop (рекомендую)

1. Установи [GitHub Desktop](https://desktop.github.com) (если ещё нет)
2. В своём локальном клоне репозитория:
   - Удали 12 mp4 из `assets/` (список выше)
   - Замени `index.html` на новый из этой папки
3. В GitHub Desktop:
   - Видишь все изменения как diff
   - Жмёшь **Commit to main** с сообщением типа "Cinematic v3 — 12 scenes, mobile, bloom"
   - Жмёшь **Push origin**
4. Vercel сам пересоберёт деплой через ~30 секунд

### Вариант B — Через GitHub веб-интерфейс

1. На GitHub в репозитории `assets/` удали 12 файлов (по одному, через UI)
2. Drag-and-drop новый `index.html` поверх старого в корне репо
3. Commit changes
4. Vercel пересоберёт автоматически

---

## Опционально — Видео на CDN (после деплоя)

Сейчас видео лежат в репозитории = занимают место + грузятся с того же домена. Это медленнее CDN.

**Рекомендую переезд на Vercel Blob** (встроено, 1 ГБ бесплатно):

1. Vercel дашборд → **Storage** → **Create Database** → **Blob**
2. Загрузи 18 mp4 файлов через дашборд
3. Скопируй URL каждого файла (они в формате `https://xxx.public.blob.vercel-storage.com/user-video-01-xxx.mp4`)
4. Скажи мне или Codex'у — заменим в HTML `src="assets/user-video-01.mp4"` на CDN-URL
5. Удалишь `assets/*.mp4` из репозитория

После этого:
- Сайт грузится быстрее (CDN ближе к пользователю)
- Репозиторий легче (не 555 МБ, а ~100 КБ)
- Vercel build быстрее

Альтернативы: **Cloudflare R2** (10 ГБ бесплатно), **Bunny.net Stream** ($0.01/ГБ + адаптивный битрейт для разных устройств).

---

## Если что-то сломалось

1. Открой **DevTools → Console** (F12)
2. Сделай скрин консоли с красными ошибками
3. Скажи в каком месте сайт ломается (после Enter? при скролле? на какой сцене?)
4. По этим данным починим прицельно

---

## План дальше (если захочешь обновлять)

В файле `hype-site-обновления.md` лежит роадмап с идеями которые НЕ вошли в эти 10 шагов:
- HDRI environment maps для реалистичных отражений
- Звуковое сопровождение (ambient pad + стингеры)
- Дополнительные scene-specific эффекты

Когда захочешь — открываешь роадмап, идём по списку, я спрашиваю что брать.
