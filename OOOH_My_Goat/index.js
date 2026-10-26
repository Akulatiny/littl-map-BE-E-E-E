  document.addEventListener('DOMContentLoaded', function() {
            // Инициализация карты. Координаты установлены так, чтобы было видно Европу и Азию.
            // Центр карты: Широта 45.0, Долгота 80.0. Зум: 3
            var map = L.map('map').setView([45.0, 80.0], 3);

            // Подключение слоя с тайлами (картинками карты) от OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Добавление маркера для Одессы, Украина
            var odesaMarker = L.marker([46.4825, 30.7233]).addTo(map);
            odesaMarker.bindPopup("<b>Одесса, Украина</b><br>Мой родной город.").openPopup();

            // Добавление маркера для Токио, Япония
            var tokyoMarker = L.marker([35.6762, 139.6503]).addTo(map);
            tokyoMarker.bindPopup("<b>Токио, Япония</b><br>Цель для путешествия.");
        });