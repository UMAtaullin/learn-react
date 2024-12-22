1. Создание компонента для загрузки фото
Создайте компонент, который будет содержать элемент input для выбора файла и кнопку для отправки.
javascript
import React, { useState } from 'react';
import axios from 'axios';

const ProfilePhotoUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('photo', selectedFile);

        try {
            const response = await axios.put('https://social-network.samuraijs.com/api/profile/photo/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Photo uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading photo:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Photo</button>
        </div>
    );
};

export default ProfilePhotoUpload;
2. Объяснение кода
Импорт необходимых библиотек: Используем React для создания компонента и Axios для выполнения HTTP-запросов.
Состояние компонента: Используем хук useState для хранения выбранного файла.
Обработчик изменения файла: Функция handleFileChange обновляет состояние при выборе файла.
Загрузка файла: В функции handleUpload создается объект FormData, в который добавляется выбранный файл. Затем выполняется PUT-запрос к API с заголовком Content-Type: multipart/form-data, что позволяет отправлять файлы.
3. Интеграция компонента
Добавьте компонент ProfilePhotoUpload в нужное место вашего приложения.
javascript
import React from 'react';
import ProfilePhotoUpload from './ProfilePhotoUpload';

const App = () => {
    return (
        <div>
            <h1>Profile Photo Upload</h1>
            <ProfilePhotoUpload />
        </div>
    );
};

export default App;
4. Дополнительные рекомендации
Убедитесь, что ваш API поддерживает CORS, если ваше приложение и сервер находятся на разных доменах.
Обработайте возможные ошибки загрузки файла и предоставьте пользователю соответствующую обратную связь.
Рассмотрите возможность добавления предварительного просмотра загружаемого изображения.
Следуя этим шагам, вы сможете успешно реализовать функционал загрузки фото профиля в вашем приложении на React.